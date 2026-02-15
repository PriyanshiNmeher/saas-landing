import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);
        
        try {
            await login(email, password);
            navigate('/dashboard');
        } catch (err) {
            setError(err.response?.data?.msg || 'Failed to login');
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Helmet>
                <title>Login - Squid</title>
            </Helmet>
            <div className="min-h-screen w-full flex items-center justify-center relative" style={{ backgroundColor: '#000000' }}>
                {/* Floating decorative elements */}
                <div className="absolute right-20 top-32 w-24 h-24 rounded-full shadow-lg" style={{ background: 'linear-gradient(177deg, #494955 0%, #141414 100%)', boxShadow: '0px 4px 20px #888888ff' }}></div>
                <div className="absolute left-32 bottom-32 w-32 h-32 rounded-full shadow-lg" style={{ background: 'linear-gradient(177deg, #494955 0%, #141414 100%)', boxShadow: '0px 4px 30px #888888ff' }}></div>
                
                {/* Main Container */}
                <div className="w-full max-w-md mx-4 relative z-10">
                    <div className="rounded-3xl p-8 md:p-12" style={{ backgroundColor: '#131415' }}>
                        {/* Logo/Title */}
                        <div className="text-center mb-8">
                            <h1 
                                className="text-white mb-3"
                                style={{
                                    fontSize: '48px',
                                    fontFamily: 'Poppins',
                                    fontWeight: '600',
                                    lineHeight: '60px'
                                }}
                            >
                                Welcome Back
                            </h1>
                            <p 
                                className="text-gray-400"
                                style={{
                                    fontSize: '16px',
                                    fontFamily: 'Poppins',
                                    fontWeight: '400',
                                    lineHeight: '24px'
                                }}
                            >
                                Sign in to continue to your dashboard
                            </p>
                        </div>

                        {/* Error Message */}
                        {error && (
                            <div className="mb-6 p-4 rounded-lg" style={{ backgroundColor: '#2d1515', border: '1px solid #ff4444' }}>
                                <p className="text-red-400 text-sm" style={{ fontFamily: 'Poppins' }}>
                                    {error}
                                </p>
                            </div>
                        )}

                        {/* Form */}
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label 
                                    htmlFor="email" 
                                    className="block text-white mb-2"
                                    style={{
                                        fontSize: '14px',
                                        fontFamily: 'Poppins',
                                        fontWeight: '500'
                                    }}
                                >
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full px-4 py-3 rounded-lg text-white outline-none transition-all duration-200"
                                    style={{
                                        backgroundColor: '#222228',
                                        border: '1px solid #404047',
                                        fontFamily: 'Poppins',
                                        fontSize: '14px'
                                    }}
                                    placeholder="Enter your email"
                                    onFocus={(e) => e.target.style.borderColor = '#8053ff'}
                                    onBlur={(e) => e.target.style.borderColor = '#404047'}
                                />
                            </div>

                            <div>
                                <label 
                                    htmlFor="password" 
                                    className="block text-white mb-2"
                                    style={{
                                        fontSize: '14px',
                                        fontFamily: 'Poppins',
                                        fontWeight: '500'
                                    }}
                                >
                                    Password
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full px-4 py-3 rounded-lg text-white outline-none transition-all duration-200"
                                    style={{
                                        backgroundColor: '#222228',
                                        border: '1px solid #404047',
                                        fontFamily: 'Poppins',
                                        fontSize: '14px'
                                    }}
                                    placeholder="Enter your password"
                                    onFocus={(e) => e.target.style.borderColor = '#8053ff'}
                                    onBlur={(e) => e.target.style.borderColor = '#404047'}
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full py-3 rounded-lg text-white font-medium transition-all duration-200 hover:opacity-90 disabled:opacity-50"
                                style={{
                                    background: 'linear-gradient(131deg, #ff9797 0%, #8053ff 100%)',
                                    fontFamily: 'Poppins',
                                    fontSize: '16px',
                                    fontWeight: '500'
                                }}
                            >
                                {loading ? 'Signing in...' : 'Sign In'}
                            </button>
                        </form>

                        {/* Divider */}
                        <div className="my-8 flex items-center">
                            <div className="flex-1 h-px" style={{ backgroundColor: '#404047' }}></div>
                            <span className="px-4 text-gray-500" style={{ fontFamily: 'Poppins', fontSize: '14px' }}>
                                or
                            </span>
                            <div className="flex-1 h-px" style={{ backgroundColor: '#404047' }}></div>
                        </div>

                        {/* Sign Up Link */}
                        <div className="text-center">
                            <p className="text-gray-400" style={{ fontFamily: 'Poppins', fontSize: '14px' }}>
                                Don't have an account?{' '}
                                <Link 
                                    to="/signup" 
                                    className="text-white font-medium hover:opacity-80 transition-opacity"
                                    style={{ 
                                        background: 'linear-gradient(131deg, #ff9797 0%, #8053ff 100%)',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                        backgroundClip: 'text'
                                    }}
                                >
                                    Sign Up
                                </Link>
                            </p>
                        </div>

                        {/* Back to Home */}
                        <div className="text-center mt-6">
                            <Link 
                                to="/" 
                                className="text-gray-500 hover:text-gray-300 transition-colors text-sm"
                                style={{ fontFamily: 'Poppins' }}
                            >
                                ← Back to Home
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;