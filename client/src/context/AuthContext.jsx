import { createContext, useState, useEffect, useContext } from 'react';
import api from '../api';

const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkUser = async () => {
            try {
                const token = localStorage.getItem('token');
                const storedUser = localStorage.getItem('user');
                
                if (token && storedUser) {
                    setUser(JSON.parse(storedUser));
                    // Set token in api headers for future requests
                    api.defaults.headers.common['x-auth-token'] = token;
                }
            } catch (error) {
                console.error('Error checking user:', error);
                // Clear invalid data
                localStorage.removeItem('token');
                localStorage.removeItem('user');
            } finally {
                setLoading(false);
            }
        };
        checkUser();
    }, []);

    const login = async (email, password) => {
        try {
            const res = await api.post('/auth/login', { email, password });
            const { token, user } = res.data;
            
            // Store in localStorage
            localStorage.setItem('token', token);
            localStorage.setItem('user', JSON.stringify(user));
            
            // Set token in api headers
            api.defaults.headers.common['x-auth-token'] = token;
            
            setUser(user);
            return res.data;
        } catch (error) {
            console.error('Login error:', error);
            throw error;
        }
    };

    const signup = async (username, email, password) => {
        try {
            const res = await api.post('/auth/signup', { username, email, password });
            const { token, user } = res.data;
            
            // Store in localStorage
            localStorage.setItem('token', token);
            localStorage.setItem('user', JSON.stringify(user));
            
            // Set token in api headers
            api.defaults.headers.common['x-auth-token'] = token;
            
            setUser(user);
            return res.data;
        } catch (error) {
            console.error('Signup error:', error);
            throw error;
        }
    };

    const logout = () => {
        // Clear localStorage
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        
        // Remove token from api headers
        delete api.defaults.headers.common['x-auth-token'];
        
        setUser(null);
    };

    const value = {
        user,
        login,
        signup,
        logout,
        loading,
        isAuthenticated: !!user
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};