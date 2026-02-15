import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import axios from 'axios';

const Users = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [showUserMenu, setShowUserMenu] = useState(false);
  
  // Users data
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Search and sort
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('asc'); // 'asc' or 'desc'
  
  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(6);
  
  // View mode
  const [viewMode, setViewMode] = useState('cards'); // 'cards' or 'table'
  
  // User detail modal
  const [selectedUser, setSelectedUser] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // Fetch users from API
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setUsers(response.data);
        setFilteredUsers(response.data);
        setError(null);
      } catch (err) {
        console.error('Error fetching users:', err);
        setError('Failed to load users. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  // Search functionality
  useEffect(() => {
    let result = [...users];

    // Filter by search term
    if (searchTerm) {
      result = result.filter(user =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Sort by name
    result.sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    });

    setFilteredUsers(result);
    setCurrentPage(1); // Reset to first page when filtering
  }, [searchTerm, sortOrder, users]);

  // Pagination
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);
  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const openUserDetail = (user) => {
    setSelectedUser(user);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedUser(null);
  };

  return (
    <>
      <Helmet>
        <title>Users - Squid Dashboard</title>
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
                  className="text-white hover:text-gray-300 transition-colors"
                  style={{ fontFamily: 'Poppins', fontSize: '16px' }}
                >
                  Users
                </button>
                <button
                  onClick={() => navigate('/settings')}
                  className="text-gray-400 hover:text-white transition-colors"
                  style={{ fontFamily: 'Poppins', fontSize: '16px' }}
                >
                  Settings
                </button>
              </nav>

              {/* User Menu */}
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
          <div className="mb-8">
            <h2 className="text-white mb-2" style={{ fontSize: '42px', fontFamily: 'Poppins', fontWeight: '600' }}>
              Users Management
            </h2>
            <p className="text-gray-400" style={{ fontSize: '16px', fontFamily: 'Poppins' }}>
              Browse, search, and manage all users
            </p>
          </div>

          {/* Loading State */}
          {loading && (
            <div className="flex items-center justify-center py-20">
              <div className="text-center">
                <div className="w-16 h-16 border-4 border-gray-600 border-t-purple-500 rounded-full animate-spin mx-auto mb-4"></div>
                <p className="text-gray-400" style={{ fontFamily: 'Poppins' }}>Loading users...</p>
              </div>
            </div>
          )}

          {/* Error State */}
          {error && (
            <div className="mb-8 p-6 rounded-2xl" style={{ backgroundColor: '#2d1515', border: '1px solid #ff4444' }}>
              <p className="text-red-400 text-center" style={{ fontFamily: 'Poppins', fontSize: '16px' }}>
                ⚠️ {error}
              </p>
            </div>
          )}

          {/* Controls */}
          {!loading && !error && (
            <>
              <div className="mb-8 flex flex-col sm:flex-row gap-4 items-center justify-between">
                {/* Search */}
                <div className="relative flex-1 max-w-md">
                  <input
                    type="text"
                    placeholder="Search by name or email..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-4 py-3 pl-12 rounded-lg text-white outline-none transition-all duration-200"
                    style={{
                      backgroundColor: '#222228',
                      border: '1px solid #404047',
                      fontFamily: 'Poppins',
                      fontSize: '14px'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#8053ff'}
                    onBlur={(e) => e.target.style.borderColor = '#404047'}
                  />
                  <svg className="w-5 h-5 text-gray-400 absolute left-4 top-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>

                {/* Sort and View Controls */}
                <div className="flex gap-3">
                  {/* Sort */}
                  <button
                    onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
                    className="px-4 py-3 rounded-lg text-white transition-all duration-200 hover:opacity-80 flex items-center gap-2"
                    style={{ backgroundColor: '#222228', fontFamily: 'Poppins', fontSize: '14px' }}
                  >
                    {sortOrder === 'asc' ? '↑' : '↓'} Sort {sortOrder === 'asc' ? 'A-Z' : 'Z-A'}
                  </button>

                  {/* View Mode Toggle */}
                  <div className="flex gap-2" style={{ backgroundColor: '#222228', padding: '4px', borderRadius: '8px' }}>
                    <button
                      onClick={() => setViewMode('cards')}
                      className={`px-4 py-2 rounded-lg transition-all duration-200 ${viewMode === 'cards' ? 'text-white' : 'text-gray-400'}`}
                      style={{ 
                        backgroundColor: viewMode === 'cards' ? '#8053ff' : 'transparent',
                        fontFamily: 'Poppins',
                        fontSize: '14px'
                      }}
                    >
                      Cards
                    </button>
                    <button
                      onClick={() => setViewMode('table')}
                      className={`px-4 py-2 rounded-lg transition-all duration-200 ${viewMode === 'table' ? 'text-white' : 'text-gray-400'}`}
                      style={{ 
                        backgroundColor: viewMode === 'table' ? '#8053ff' : 'transparent',
                        fontFamily: 'Poppins',
                        fontSize: '14px'
                      }}
                    >
                      Table
                    </button>
                  </div>
                </div>
              </div>

              {/* Results Info */}
              <div className="mb-6 text-gray-400" style={{ fontFamily: 'Poppins', fontSize: '14px' }}>
                Showing {indexOfFirstUser + 1}-{Math.min(indexOfLastUser, filteredUsers.length)} of {filteredUsers.length} users
              </div>

              {/* Cards View */}
              {viewMode === 'cards' && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                  {currentUsers.map((u) => (
                    <div
                      key={u.id}
                      onClick={() => openUserDetail(u)}
                      className="rounded-2xl p-6 transition-all duration-200 hover:scale-105 cursor-pointer"
                      style={{ backgroundColor: '#131415', border: '1px solid #404047' }}
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <div 
                          className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0"
                          style={{ background: 'linear-gradient(131deg, #ff9797 0%, #8053ff 100%)' }}
                        >
                          <span className="text-white text-2xl font-semibold" style={{ fontFamily: 'Poppins' }}>
                            {u.name.charAt(0)}
                          </span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-white font-semibold mb-1 truncate" style={{ fontFamily: 'Poppins', fontSize: '18px' }}>
                            {u.name}
                          </h3>
                          <p className="text-gray-400 text-sm truncate" style={{ fontFamily: 'Poppins' }}>
                            @{u.username}
                          </p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-gray-400" style={{ fontSize: '14px', fontFamily: 'Poppins' }}>
                          <span>📧</span>
                          <span className="truncate">{u.email}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-400" style={{ fontSize: '14px', fontFamily: 'Poppins' }}>
                          <span>📞</span>
                          <span>{u.phone}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-400" style={{ fontSize: '14px', fontFamily: 'Poppins' }}>
                          <span>🏢</span>
                          <span className="truncate">{u.company.name}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Table View */}
              {viewMode === 'table' && (
                <div className="rounded-2xl overflow-hidden mb-8" style={{ backgroundColor: '#131415', border: '1px solid #404047' }}>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr style={{ borderBottom: '1px solid #404047' }}>
                          <th className="px-6 py-4 text-left text-gray-400" style={{ fontFamily: 'Poppins', fontSize: '14px', fontWeight: '500' }}>User</th>
                          <th className="px-6 py-4 text-left text-gray-400" style={{ fontFamily: 'Poppins', fontSize: '14px', fontWeight: '500' }}>Email</th>
                          <th className="px-6 py-4 text-left text-gray-400" style={{ fontFamily: 'Poppins', fontSize: '14px', fontWeight: '500' }}>Phone</th>
                          <th className="px-6 py-4 text-left text-gray-400" style={{ fontFamily: 'Poppins', fontSize: '14px', fontWeight: '500' }}>Company</th>
                          <th className="px-6 py-4 text-left text-gray-400" style={{ fontFamily: 'Poppins', fontSize: '14px', fontWeight: '500' }}>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {currentUsers.map((u, index) => (
                          <tr 
                            key={u.id} 
                            className="transition-colors duration-200 cursor-pointer"
                            style={{ borderBottom: index < currentUsers.length - 1 ? '1px solid #404047' : 'none' }}
                            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#222228'}
                            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                            onClick={() => openUserDetail(u)}
                          >
                            <td className="px-6 py-4">
                              <div className="flex items-center gap-3">
                                <div 
                                  className="w-10 h-10 rounded-full flex items-center justify-center"
                                  style={{ background: 'linear-gradient(131deg, #ff9797 0%, #8053ff 100%)' }}
                                >
                                  <span className="text-white font-semibold" style={{ fontFamily: 'Poppins' }}>
                                    {u.name.charAt(0)}
                                  </span>
                                </div>
                                <div>
                                  <p className="text-white font-medium" style={{ fontFamily: 'Poppins', fontSize: '14px' }}>{u.name}</p>
                                  <p className="text-gray-400 text-xs" style={{ fontFamily: 'Poppins' }}>@{u.username}</p>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 text-gray-400" style={{ fontFamily: 'Poppins', fontSize: '14px' }}>{u.email}</td>
                            <td className="px-6 py-4 text-gray-400" style={{ fontFamily: 'Poppins', fontSize: '14px' }}>{u.phone}</td>
                            <td className="px-6 py-4 text-gray-400" style={{ fontFamily: 'Poppins', fontSize: '14px' }}>{u.company.name}</td>
                            <td className="px-6 py-4">
                              <button className="text-purple-400 hover:text-purple-300 transition-colors" style={{ fontFamily: 'Poppins', fontSize: '14px' }}>
                                View →
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-2">
                  <button
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    className="px-4 py-2 rounded-lg text-white transition-all duration-200 disabled:opacity-50"
                    style={{ backgroundColor: '#222228', fontFamily: 'Poppins', fontSize: '14px' }}
                  >
                    ← Previous
                  </button>
                  
                  {[...Array(totalPages)].map((_, i) => (
                    <button
                      key={i + 1}
                      onClick={() => setCurrentPage(i + 1)}
                      className={`px-4 py-2 rounded-lg transition-all duration-200 ${currentPage === i + 1 ? 'text-white' : 'text-gray-400'}`}
                      style={{ 
                        backgroundColor: currentPage === i + 1 ? '#8053ff' : '#222228',
                        fontFamily: 'Poppins',
                        fontSize: '14px'
                      }}
                    >
                      {i + 1}
                    </button>
                  ))}
                  
                  <button
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 rounded-lg text-white transition-all duration-200 disabled:opacity-50"
                    style={{ backgroundColor: '#222228', fontFamily: 'Poppins', fontSize: '14px' }}
                  >
                    Next →
                  </button>
                </div>
              )}
            </>
          )}
        </main>

        {/* User Detail Modal */}
        {showModal && selectedUser && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
            onClick={closeModal}
          >
            <div 
              className="rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              style={{ backgroundColor: '#131415', border: '1px solid #404047' }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-white text-2xl font-semibold" style={{ fontFamily: 'Poppins' }}>
                  User Details
                </h3>
                <button
                  onClick={closeModal}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* User Avatar */}
              <div className="flex items-center gap-4 mb-8">
                <div 
                  className="w-20 h-20 rounded-full flex items-center justify-center"
                  style={{ background: 'linear-gradient(131deg, #ff9797 0%, #8053ff 100%)' }}
                >
                  <span className="text-white text-3xl font-semibold" style={{ fontFamily: 'Poppins' }}>
                    {selectedUser.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="text-white text-xl font-semibold mb-1" style={{ fontFamily: 'Poppins' }}>
                    {selectedUser.name}
                  </h4>
                  <p className="text-gray-400" style={{ fontFamily: 'Poppins' }}>
                    @{selectedUser.username}
                  </p>
                </div>
              </div>

              {/* User Info */}
              <div className="space-y-6">
                {/* Contact Info */}
                <div>
                  <h5 className="text-gray-400 text-sm mb-3" style={{ fontFamily: 'Poppins', fontWeight: '500' }}>Contact Information</h5>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <span className="text-xl">📧</span>
                      <div>
                        <p className="text-gray-400 text-xs mb-1" style={{ fontFamily: 'Poppins' }}>Email</p>
                        <p className="text-white" style={{ fontFamily: 'Poppins' }}>{selectedUser.email}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-xl">📞</span>
                      <div>
                        <p className="text-gray-400 text-xs mb-1" style={{ fontFamily: 'Poppins' }}>Phone</p>
                        <p className="text-white" style={{ fontFamily: 'Poppins' }}>{selectedUser.phone}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-xl">🌐</span>
                      <div>
                        <p className="text-gray-400 text-xs mb-1" style={{ fontFamily: 'Poppins' }}>Website</p>
                        <p className="text-white" style={{ fontFamily: 'Poppins' }}>{selectedUser.website}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Address */}
                <div>
                  <h5 className="text-gray-400 text-sm mb-3" style={{ fontFamily: 'Poppins', fontWeight: '500' }}>Address</h5>
                  <div className="flex items-start gap-3">
                    <span className="text-xl">📍</span>
                    <div>
                      <p className="text-white" style={{ fontFamily: 'Poppins' }}>
                        {selectedUser.address.street}, {selectedUser.address.suite}
                      </p>
                      <p className="text-white" style={{ fontFamily: 'Poppins' }}>
                        {selectedUser.address.city}, {selectedUser.address.zipcode}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Company */}
                <div>
                  <h5 className="text-gray-400 text-sm mb-3" style={{ fontFamily: 'Poppins', fontWeight: '500' }}>Company</h5>
                  <div className="flex items-start gap-3">
                    <span className="text-xl">🏢</span>
                    <div>
                      <p className="text-white font-medium mb-1" style={{ fontFamily: 'Poppins' }}>{selectedUser.company.name}</p>
                      <p className="text-gray-400 text-sm" style={{ fontFamily: 'Poppins' }}>
                        {selectedUser.company.catchPhrase}
                      </p>
                      <p className="text-gray-400 text-xs mt-1" style={{ fontFamily: 'Poppins' }}>
                        {selectedUser.company.bs}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Close Button */}
              <button
                onClick={closeModal}
                className="w-full mt-8 py-3 rounded-lg text-white font-medium transition-all duration-200 hover:opacity-90"
                style={{ background: 'linear-gradient(131deg, #ff9797 0%, #8053ff 100%)', fontFamily: 'Poppins' }}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Users;