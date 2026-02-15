import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Helmet } from 'react-helmet';

const Contacts = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [contacts, setContacts] = useState([]);
  const [showUserMenu, setShowUserMenu] = useState(false);

  // Load contacts from localStorage
  useEffect(() => {
    const savedContacts = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
    // Sort by newest first
    setContacts(savedContacts.reverse());
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const handleDeleteContact = (id) => {
    const updatedContacts = contacts.filter(contact => contact.id !== id);
    localStorage.setItem('contactSubmissions', JSON.stringify(updatedContacts.reverse()));
    setContacts(updatedContacts);
  };

  const handleClearAll = () => {
    if (window.confirm('Are you sure you want to delete all contacts?')) {
      localStorage.removeItem('contactSubmissions');
      setContacts([]);
    }
  };

  const handleExportData = () => {
    const dataStr = JSON.stringify(contacts, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `contacts_${new Date().toISOString()}.json`;
    link.click();
  };

  return (
    <>
      <Helmet>
        <title>Contact Submissions - Squid Dashboard</title>
      </Helmet>
      <div className="min-h-screen w-full" style={{ backgroundColor: '#000000' }}>
        {/* Header */}
        <header className="w-full border-b" style={{ borderColor: '#404047', backgroundColor: '#131415' }}>
          <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-14 py-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <h1 
                  className="text-white cursor-pointer"
                  style={{ fontSize: '28px', fontFamily: 'Poppins', fontWeight: '600' }}
                  onClick={() => navigate('/dashboard')}
                >
                  Squid Dashboard
                </h1>
              </div>

              <nav className="hidden md:flex items-center gap-6">
                <button
                  onClick={() => navigate('/dashboard')}
                  className="text-gray-400 hover:text-white transition-colors"
                  style={{ fontFamily: 'Poppins', fontSize: '16px' }}
                >
                  Dashboard
                </button>
                <button
                  onClick={() => navigate('/users')}
                  className="text-gray-400 hover:text-white transition-colors"
                  style={{ fontFamily: 'Poppins', fontSize: '16px' }}
                >
                  Users
                </button>
                <button
                  onClick={() => navigate('/contacts')}
                  className="text-white hover:text-gray-300 transition-colors"
                  style={{ fontFamily: 'Poppins', fontSize: '16px' }}
                >
                  Contacts
                </button>
                <button
                  onClick={() => navigate('/settings')}
                  className="text-gray-400 hover:text-white transition-colors"
                  style={{ fontFamily: 'Poppins', fontSize: '16px' }}
                >
                  Settings
                </button>
              </nav>

              <div className="relative">
                <button
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className="flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-200 hover:opacity-80"
                  style={{ backgroundColor: '#222228' }}
                >
                  <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(131deg, #ff9797 0%, #8053ff 100%)' }}>
                    <span className="text-white font-semibold" style={{ fontFamily: 'Poppins' }}>
                      {user?.username?.charAt(0).toUpperCase() || 'U'}
                    </span>
                  </div>
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {showUserMenu && (
                  <div 
                    className="absolute right-0 mt-2 w-56 rounded-lg shadow-lg overflow-hidden z-50"
                    style={{ backgroundColor: '#222228', border: '1px solid #404047' }}
                  >
                    <div className="py-2">
                      <button
                        onClick={() => navigate('/dashboard')}
                        className="w-full text-left px-4 py-3 text-white transition-colors"
                        style={{ fontFamily: 'Poppins', fontSize: '14px' }}
                        onMouseEnter={(e) => e.target.style.backgroundColor = '#131415'}
                        onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                      >
                        📊 Dashboard
                      </button>
                      <button
                        onClick={() => navigate('/settings')}
                        className="w-full text-left px-4 py-3 text-white transition-colors"
                        style={{ fontFamily: 'Poppins', fontSize: '14px' }}
                        onMouseEnter={(e) => e.target.style.backgroundColor = '#131415'}
                        onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                      >
                        ⚙️ Settings
                      </button>
                      <button
                        onClick={handleLogout}
                        className="w-full text-left px-4 py-3 text-red-400 transition-colors"
                        style={{ fontFamily: 'Poppins', fontSize: '14px' }}
                        onMouseEnter={(e) => e.target.style.backgroundColor = '#131415'}
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
          {/* Page Header */}
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h2 className="text-white mb-2" style={{ fontSize: '42px', fontFamily: 'Poppins', fontWeight: '600' }}>
                Contact Submissions
              </h2>
              <p className="text-gray-400" style={{ fontSize: '16px', fontFamily: 'Poppins' }}>
                {contacts.length} {contacts.length === 1 ? 'submission' : 'submissions'} received
              </p>
            </div>
            
            {contacts.length > 0 && (
              <div className="flex gap-3">
                <button
                  onClick={handleExportData}
                  className="px-6 py-3 rounded-lg text-white transition-all duration-200 hover:opacity-90"
                  style={{ 
                    background: 'linear-gradient(131deg, #ff9797 0%, #8053ff 100%)',
                    fontFamily: 'Poppins',
                    fontSize: '14px'
                  }}
                >
                  📥 Export Data
                </button>
                <button
                  onClick={handleClearAll}
                  className="px-6 py-3 rounded-lg text-white transition-all duration-200 hover:opacity-90"
                  style={{ 
                    backgroundColor: '#dc2626',
                    fontFamily: 'Poppins',
                    fontSize: '14px'
                  }}
                >
                  🗑️ Clear All
                </button>
              </div>
            )}
          </div>

          {/* Empty State */}
          {contacts.length === 0 && (
            <div className="text-center py-20">
              <div className="mb-6">
                <span className="text-8xl">📭</span>
              </div>
              <h3 className="text-white text-2xl mb-3" style={{ fontFamily: 'Poppins', fontWeight: '600' }}>
                No contacts yet
              </h3>
              <p className="text-gray-400 mb-6" style={{ fontFamily: 'Poppins' }}>
                When users submit the contact form, their information will appear here
              </p>
              <button
                onClick={() => navigate('/')}
                className="px-6 py-3 rounded-lg text-white transition-all duration-200 hover:opacity-90"
                style={{ 
                  background: 'linear-gradient(131deg, #ff9797 0%, #8053ff 100%)',
                  fontFamily: 'Poppins'
                }}
              >
                Go to Home Page
              </button>
            </div>
          )}

          {/* Contacts List */}
          {contacts.length > 0 && (
            <div className="grid grid-cols-1 gap-6">
              {contacts.map((contact) => (
                <div
                  key={contact.id}
                  className="rounded-2xl p-6 transition-all duration-200 hover:scale-[1.02]"
                  style={{ backgroundColor: '#131415', border: '1px solid #404047' }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start gap-4">
                      <div 
                        className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ background: 'linear-gradient(131deg, #ff9797 0%, #8053ff 100%)' }}
                      >
                        <span className="text-white text-2xl font-semibold" style={{ fontFamily: 'Poppins' }}>
                          {contact.name.charAt(0).toUpperCase()}
                        </span>
                      </div>
                      <div>
                        <h3 className="text-white text-xl font-semibold mb-1" style={{ fontFamily: 'Poppins' }}>
                          {contact.name}
                        </h3>
                        <p className="text-gray-400 text-sm mb-2" style={{ fontFamily: 'Poppins' }}>
                          {contact.email}
                        </p>
                        <p className="text-gray-500 text-xs" style={{ fontFamily: 'Poppins' }}>
                          📅 {contact.date}
                        </p>
                      </div>
                    </div>
                    
                    <button
                      onClick={() => handleDeleteContact(contact.id)}
                      className="text-red-400 hover:text-red-300 transition-colors p-2 rounded-lg"
                      style={{ backgroundColor: '#2d1515' }}
                      title="Delete contact"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>

                  {/* Message */}
                  <div className="rounded-lg p-4" style={{ backgroundColor: '#222228' }}>
                    <p className="text-sm font-medium text-gray-400 mb-2" style={{ fontFamily: 'Poppins' }}>
                      Message:
                    </p>
                    <p className="text-white" style={{ fontFamily: 'Poppins', lineHeight: '1.6' }}>
                      {contact.message}
                    </p>
                  </div>

                  {/* Contact Actions */}
                  <div className="flex gap-3 mt-4">
                    <a
                      href={`mailto:${contact.email}`}
                      className="flex-1 px-4 py-2 rounded-lg text-center text-white transition-all duration-200 hover:opacity-90"
                      style={{ 
                        background: 'linear-gradient(131deg, #ff9797 0%, #8053ff 100%)',
                        fontFamily: 'Poppins',
                        fontSize: '14px'
                      }}
                    >
                      📧 Reply via Email
                    </a>
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(contact.email);
                        alert('Email copied to clipboard!');
                      }}
                      className="px-4 py-2 rounded-lg text-white transition-all duration-200 hover:opacity-90"
                      style={{ 
                        backgroundColor: '#222228',
                        fontFamily: 'Poppins',
                        fontSize: '14px'
                      }}
                    >
                      📋 Copy Email
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </main>
      </div>
    </>
  );
};

export default Contacts;