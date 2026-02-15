import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Settings = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [showUserMenu, setShowUserMenu] = useState(false);
  
  // Load settings from localStorage
  const loadSettings = () => {
    const savedSettings = localStorage.getItem('userSettings');
    if (savedSettings) {
      return JSON.parse(savedSettings);
    }
    return {
      displayName: user?.username || '',
      email: user?.email || '',
      bio: '',
      theme: 'dark',
      notifications: true,
      emailNotifications: true
    };
  };

  const [settings, setSettings] = useState(loadSettings());
  const [saveSuccess, setSaveSuccess] = useState(false);

  // Save settings to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('userSettings', JSON.stringify(settings));
    
    // Apply theme
    document.documentElement.setAttribute('data-theme', settings.theme);
  }, [settings]);

  const handleInputChange = (field, value) => {
    setSettings(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    localStorage.setItem('userSettings', JSON.stringify(settings));
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 3000);
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const handleResetSettings = () => {
    const defaultSettings = {
      displayName: user?.username || '',
      email: user?.email || '',
      bio: '',
      theme: 'dark',
      notifications: true,
      emailNotifications: true
    };
    setSettings(defaultSettings);
    localStorage.setItem('userSettings', JSON.stringify(defaultSettings));
  };

  const bgColor = settings.theme === 'dark' ? '#000000' : '#ffffff';
  const cardBgColor = settings.theme === 'dark' ? '#131415' : '#f5f5f5';
  const textColor = settings.theme === 'dark' ? '#ffffff' : '#000000';
  const textSecondary = settings.theme === 'dark' ? '#9ca3af' : '#6b7280';
  const borderColor = settings.theme === 'dark' ? '#404047' : '#e5e7eb';

  return (
    <>
      <Helmet>
        <title>Settings - Squid Dashboard</title>
      </Helmet>
      <div className="min-h-screen w-full" style={{ backgroundColor: bgColor }}>
        {/* Header */}
        <header className="w-full border-b" style={{ borderColor: borderColor, backgroundColor: cardBgColor }}>
          <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-14 py-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <h1 
                  className="cursor-pointer"
                  style={{
                    fontSize: '28px',
                    fontFamily: 'Poppins',
                    fontWeight: '600',
                    color: textColor
                  }}
                  onClick={() => navigate('/dashboard')}
                >
                  Squid Dashboard
                </h1>
              </div>

              <nav className="hidden md:flex items-center gap-6">
                <button
                  onClick={() => navigate('/dashboard')}
                  className="transition-colors"
                  style={{ fontFamily: 'Poppins', fontSize: '16px', color: textSecondary }}
                >
                  Dashboard
                </button>
                <button
                  onClick={() => navigate('/users')}
                  className="transition-colors"
                  style={{ fontFamily: 'Poppins', fontSize: '16px', color: textSecondary }}
                >
                  Users
                </button>
                <button
                  onClick={() => navigate('/settings')}
                  className="transition-colors"
                  style={{ fontFamily: 'Poppins', fontSize: '16px', color: textColor }}
                >
                  Settings
                </button>
              </nav>

              <div className="relative">
                <button
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className="flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-200 hover:opacity-80"
                  style={{ backgroundColor: settings.theme === 'dark' ? '#222228' : '#e5e7eb' }}
                >
                  <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(131deg, #ff9797 0%, #8053ff 100%)' }}>
                    <span className="text-white font-semibold" style={{ fontFamily: 'Poppins' }}>
                      {user?.username?.charAt(0).toUpperCase() || 'U'}
                    </span>
                  </div>
                  <svg className="w-4 h-4" style={{ color: textSecondary }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {showUserMenu && (
                  <div 
                    className="absolute right-0 mt-2 w-56 rounded-lg shadow-lg overflow-hidden z-50"
                    style={{ backgroundColor: cardBgColor, border: `1px solid ${borderColor}` }}
                  >
                    <div className="py-2">
                      <button
                        onClick={() => navigate('/dashboard')}
                        className="w-full text-left px-4 py-3 transition-colors"
                        style={{ fontFamily: 'Poppins', fontSize: '14px', color: textColor }}
                        onMouseEnter={(e) => e.target.style.backgroundColor = settings.theme === 'dark' ? '#131415' : '#f3f4f6'}
                        onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                      >
                        📊 Dashboard
                      </button>
                      <button
                        onClick={() => navigate('/users')}
                        className="w-full text-left px-4 py-3 transition-colors"
                        style={{ fontFamily: 'Poppins', fontSize: '14px', color: textColor }}
                        onMouseEnter={(e) => e.target.style.backgroundColor = settings.theme === 'dark' ? '#131415' : '#f3f4f6'}
                        onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                      >
                        👥 Users
                      </button>
                      <button
                        onClick={handleLogout}
                        className="w-full text-left px-4 py-3 text-red-400 transition-colors"
                        style={{ fontFamily: 'Poppins', fontSize: '14px' }}
                        onMouseEnter={(e) => e.target.style.backgroundColor = settings.theme === 'dark' ? '#131415' : '#f3f4f6'}
                        onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                      >
                        🚪 Logout
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-14 py-8">
          <div className="mb-8">
            <h2 style={{ fontSize: '42px', fontFamily: 'Poppins', fontWeight: '600', color: textColor }}>
              Settings
            </h2>
            <p style={{ fontSize: '16px', fontFamily: 'Poppins', color: textSecondary }}>
              Manage your profile and preferences
            </p>
          </div>

          {/* Success Message */}
          {saveSuccess && (
            <div className="mb-6 p-4 rounded-lg" style={{ backgroundColor: settings.theme === 'dark' ? '#1a3a1a' : '#d1fae5', border: settings.theme === 'dark' ? '1px solid #4ade80' : '1px solid #10b981' }}>
              <p style={{ fontFamily: 'Poppins', color: settings.theme === 'dark' ? '#4ade80' : '#059669' }}>
                ✓ Settings saved successfully!
              </p>
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Profile Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSave} className="space-y-6">
                {/* Profile Section */}
                <div className="rounded-2xl p-6" style={{ backgroundColor: cardBgColor, border: `1px solid ${borderColor}` }}>
                  <h3 className="mb-6" style={{ fontSize: '20px', fontFamily: 'Poppins', fontWeight: '600', color: textColor }}>
                    Profile Information
                  </h3>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block mb-2" style={{ fontSize: '14px', fontFamily: 'Poppins', fontWeight: '500', color: textColor }}>
                        Display Name
                      </label>
                      <input
                        type="text"
                        value={settings.displayName}
                        onChange={(e) => handleInputChange('displayName', e.target.value)}
                        className="w-full px-4 py-3 rounded-lg outline-none transition-all duration-200"
                        style={{
                          backgroundColor: settings.theme === 'dark' ? '#222228' : '#ffffff',
                          border: `1px solid ${borderColor}`,
                          color: textColor,
                          fontFamily: 'Poppins',
                          fontSize: '14px'
                        }}
                        placeholder="Enter your name"
                      />
                    </div>

                    <div>
                      <label className="block mb-2" style={{ fontSize: '14px', fontFamily: 'Poppins', fontWeight: '500', color: textColor }}>
                        Email
                      </label>
                      <input
                        type="email"
                        value={settings.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="w-full px-4 py-3 rounded-lg outline-none transition-all duration-200"
                        style={{
                          backgroundColor: settings.theme === 'dark' ? '#222228' : '#ffffff',
                          border: `1px solid ${borderColor}`,
                          color: textColor,
                          fontFamily: 'Poppins',
                          fontSize: '14px'
                        }}
                        placeholder="Enter your email"
                      />
                    </div>

                    <div>
                      <label className="block mb-2" style={{ fontSize: '14px', fontFamily: 'Poppins', fontWeight: '500', color: textColor }}>
                        Bio
                      </label>
                      <textarea
                        value={settings.bio}
                        onChange={(e) => handleInputChange('bio', e.target.value)}
                        rows={4}
                        className="w-full px-4 py-3 rounded-lg outline-none transition-all duration-200 resize-none"
                        style={{
                          backgroundColor: settings.theme === 'dark' ? '#222228' : '#ffffff',
                          border: `1px solid ${borderColor}`,
                          color: textColor,
                          fontFamily: 'Poppins',
                          fontSize: '14px'
                        }}
                        placeholder="Tell us about yourself..."
                      />
                    </div>
                  </div>
                </div>

                {/* Preferences Section */}
                <div className="rounded-2xl p-6" style={{ backgroundColor: cardBgColor, border: `1px solid ${borderColor}` }}>
                  <h3 className="mb-6" style={{ fontSize: '20px', fontFamily: 'Poppins', fontWeight: '600', color: textColor }}>
                    Preferences
                  </h3>
                  
                  <div className="space-y-4">
                    {/* Theme Toggle */}
                    <div className="flex items-center justify-between">
                      <div>
                        <p style={{ fontSize: '14px', fontFamily: 'Poppins', fontWeight: '500', color: textColor }}>
                          Theme
                        </p>
                        <p style={{ fontSize: '12px', fontFamily: 'Poppins', color: textSecondary }}>
                          Choose your preferred theme
                        </p>
                      </div>
                      <div className="flex gap-2 p-1 rounded-lg" style={{ backgroundColor: settings.theme === 'dark' ? '#222228' : '#e5e7eb' }}>
                        <button
                          type="button"
                          onClick={() => handleInputChange('theme', 'light')}
                          className="px-4 py-2 rounded-lg transition-all duration-200"
                          style={{
                            backgroundColor: settings.theme === 'light' ? '#8053ff' : 'transparent',
                            color: settings.theme === 'light' ? '#ffffff' : textSecondary,
                            fontFamily: 'Poppins',
                            fontSize: '14px'
                          }}
                        >
                          ☀️ Light
                        </button>
                        <button
                          type="button"
                          onClick={() => handleInputChange('theme', 'dark')}
                          className="px-4 py-2 rounded-lg transition-all duration-200"
                          style={{
                            backgroundColor: settings.theme === 'dark' ? '#8053ff' : 'transparent',
                            color: settings.theme === 'dark' ? '#ffffff' : textSecondary,
                            fontFamily: 'Poppins',
                            fontSize: '14px'
                          }}
                        >
                          🌙 Dark
                        </button>
                      </div>
                    </div>

                    {/* Notifications */}
                    <div className="flex items-center justify-between py-3" style={{ borderTop: `1px solid ${borderColor}` }}>
                      <div>
                        <p style={{ fontSize: '14px', fontFamily: 'Poppins', fontWeight: '500', color: textColor }}>
                          Push Notifications
                        </p>
                        <p style={{ fontSize: '12px', fontFamily: 'Poppins', color: textSecondary }}>
                          Receive notifications about updates
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => handleInputChange('notifications', !settings.notifications)}
                        className="relative w-14 h-8 rounded-full transition-colors duration-200"
                        style={{ backgroundColor: settings.notifications ? '#8053ff' : (settings.theme === 'dark' ? '#404047' : '#d1d5db') }}
                      >
                        <div 
                          className="absolute top-1 w-6 h-6 bg-white rounded-full transition-transform duration-200"
                          style={{ transform: settings.notifications ? 'translateX(28px)' : 'translateX(4px)' }}
                        ></div>
                      </button>
                    </div>

                    <div className="flex items-center justify-between py-3" style={{ borderTop: `1px solid ${borderColor}` }}>
                      <div>
                        <p style={{ fontSize: '14px', fontFamily: 'Poppins', fontWeight: '500', color: textColor }}>
                          Email Notifications
                        </p>
                        <p style={{ fontSize: '12px', fontFamily: 'Poppins', color: textSecondary }}>
                          Receive email updates
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => handleInputChange('emailNotifications', !settings.emailNotifications)}
                        className="relative w-14 h-8 rounded-full transition-colors duration-200"
                        style={{ backgroundColor: settings.emailNotifications ? '#8053ff' : (settings.theme === 'dark' ? '#404047' : '#d1d5db') }}
                      >
                        <div 
                          className="absolute top-1 w-6 h-6 bg-white rounded-full transition-transform duration-200"
                          style={{ transform: settings.emailNotifications ? 'translateX(28px)' : 'translateX(4px)' }}
                        ></div>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <button
                    type="submit"
                    className="flex-1 py-3 rounded-lg text-white font-medium transition-all duration-200 hover:opacity-90"
                    style={{ background: 'linear-gradient(131deg, #ff9797 0%, #8053ff 100%)', fontFamily: 'Poppins' }}
                  >
                    Save Changes
                  </button>
                  <button
                    type="button"
                    onClick={handleResetSettings}
                    className="px-6 py-3 rounded-lg font-medium transition-all duration-200"
                    style={{ 
                      backgroundColor: settings.theme === 'dark' ? '#222228' : '#e5e7eb',
                      color: textColor,
                      fontFamily: 'Poppins'
                    }}
                  >
                    Reset
                  </button>
                </div>
              </form>
            </div>

            {/* Right Column - Preview */}
            <div>
              <div className="rounded-2xl p-6 sticky top-8" style={{ backgroundColor: cardBgColor, border: `1px solid ${borderColor}` }}>
                <h3 className="mb-6" style={{ fontSize: '20px', fontFamily: 'Poppins', fontWeight: '600', color: textColor }}>
                  Profile Preview
                </h3>
                
                <div className="text-center">
                  <div 
                    className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4"
                    style={{ background: 'linear-gradient(131deg, #ff9797 0%, #8053ff 100%)' }}
                  >
                    <span className="text-white text-4xl font-semibold" style={{ fontFamily: 'Poppins' }}>
                      {settings.displayName.charAt(0).toUpperCase() || 'U'}
                    </span>
                  </div>
                  
                  <h4 className="mb-2" style={{ fontSize: '20px', fontFamily: 'Poppins', fontWeight: '600', color: textColor }}>
                    {settings.displayName || 'Your Name'}
                  </h4>
                  
                  <p className="mb-4" style={{ fontSize: '14px', fontFamily: 'Poppins', color: textSecondary }}>
                    {settings.email || 'your@email.com'}
                  </p>
                  
                  {settings.bio && (
                    <p className="text-sm p-4 rounded-lg" style={{ 
                      fontFamily: 'Poppins', 
                      color: textSecondary,
                      backgroundColor: settings.theme === 'dark' ? '#222228' : '#f3f4f6'
                    }}>
                      {settings.bio}
                    </p>
                  )}

                  <div className="mt-6 pt-6" style={{ borderTop: `1px solid ${borderColor}` }}>
                    <div className="flex items-center justify-between text-sm mb-3">
                      <span style={{ fontFamily: 'Poppins', color: textSecondary }}>Theme:</span>
                      <span style={{ fontFamily: 'Poppins', color: textColor, fontWeight: '500' }}>
                        {settings.theme === 'dark' ? '🌙 Dark' : '☀️ Light'}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm mb-3">
                      <span style={{ fontFamily: 'Poppins', color: textSecondary }}>Notifications:</span>
                      <span style={{ fontFamily: 'Poppins', color: textColor, fontWeight: '500' }}>
                        {settings.notifications ? '✓ On' : '✗ Off'}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span style={{ fontFamily: 'Poppins', color: textSecondary }}>Email Alerts:</span>
                      <span style={{ fontFamily: 'Poppins', color: textColor, fontWeight: '500' }}>
                        {settings.emailNotifications ? '✓ On' : '✗ Off'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Settings;