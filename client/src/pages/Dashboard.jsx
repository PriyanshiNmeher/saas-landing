// import React, { useState } from 'react';
// import { useAuth } from '../context/AuthContext';
// import { useNavigate } from 'react-router-dom';
// import { Helmet } from 'react-helmet';

// const Dashboard = () => {
//   const { user, logout } = useAuth();
//   const navigate = useNavigate();
//   const [showUserMenu, setShowUserMenu] = useState(false);

//   const handleLogout = () => {
//     logout();
//     navigate('/');
//   };

//   const stats = [
//     { label: 'Total Templates', value: '24', icon: '📄' },
//     { label: 'Downloads', value: '156', icon: '⬇️' },
//     { label: 'Active Projects', value: '8', icon: '🚀' },
//     { label: 'Team Members', value: '12', icon: '👥' }
//   ];

//   const recentTemplates = [
//     { name: 'Landing Page Pro', date: 'Feb 10, 2026', status: 'Active' },
//     { name: 'Dashboard UI Kit', date: 'Feb 8, 2026', status: 'Active' },
//     { name: 'E-commerce Theme', date: 'Feb 5, 2026', status: 'Draft' },
//     { name: 'Portfolio Website', date: 'Feb 1, 2026', status: 'Active' }
//   ];

//   return (
//     <>
//       <Helmet>
//         <title>Dashboard - Squid</title>
//       </Helmet>
//       <div className="min-h-screen w-full" style={{ backgroundColor: '#000000' }}>
//         {/* Header */}
//         <header className="w-full border-b" style={{ borderColor: '#404047', backgroundColor: '#131415' }}>
//           <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-14 py-6">
//             <div className="flex items-center justify-between">
//               {/* Logo */}
//               <div className="flex items-center gap-4">
//                 <h1 
//                   className="text-white"
//                   style={{
//                     fontSize: '28px',
//                     fontFamily: 'Poppins',
//                     fontWeight: '600'
//                   }}
//                 >
//                   Squid Dashboard
//                 </h1>
//               </div>

//               {/* User Menu */}
//               <div className="relative">
//                 <button
//                   onClick={() => setShowUserMenu(!showUserMenu)}
//                   className="flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-200 hover:opacity-80"
//                   style={{ backgroundColor: '#222228' }}
//                 >
//                   <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(131deg, #ff9797 0%, #8053ff 100%)' }}>
//                     <span className="text-white font-semibold" style={{ fontFamily: 'Poppins' }}>
//                       {user?.username?.charAt(0).toUpperCase() || 'U'}
//                     </span>
//                   </div>
//                   <div className="text-left hidden sm:block">
//                     <p className="text-white text-sm font-medium" style={{ fontFamily: 'Poppins' }}>
//                       {user?.username || 'User'}
//                     </p>
//                     <p className="text-gray-400 text-xs" style={{ fontFamily: 'Poppins' }}>
//                       {user?.email || 'user@example.com'}
//                     </p>
//                   </div>
//                   <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                   </svg>
//                 </button>

//                 {/* Dropdown Menu */}
//                 {showUserMenu && (
//                   <div 
//                     className="absolute right-0 mt-2 w-56 rounded-lg shadow-lg overflow-hidden z-50"
//                     style={{ backgroundColor: '#222228', border: '1px solid #404047' }}
//                   >
//                     <div className="py-2">
//                       <button
//                         onClick={() => navigate('/')}
//                         className="w-full text-left px-4 py-3 text-white hover:bg-opacity-80 transition-colors"
//                         style={{ fontFamily: 'Poppins', fontSize: '14px', backgroundColor: 'transparent' }}
//                         onMouseEnter={(e) => e.target.style.backgroundColor = '#131415'}
//                         onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
//                       >
//                         🏠 Home
//                       </button>
//                       <button
//                         onClick={handleLogout}
//                         className="w-full text-left px-4 py-3 text-red-400 hover:bg-opacity-80 transition-colors"
//                         style={{ fontFamily: 'Poppins', fontSize: '14px', backgroundColor: 'transparent' }}
//                         onMouseEnter={(e) => e.target.style.backgroundColor = '#131415'}
//                         onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
//                       >
//                         🚪 Logout
//                       </button>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         </header>

//         {/* Main Content */}
//         <main className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-14 py-8">
//           {/* Welcome Section */}
//           <div className="mb-12">
//             <h2 
//               className="text-white mb-2"
//               style={{
//                 fontSize: '42px',
//                 fontFamily: 'Poppins',
//                 fontWeight: '600',
//                 lineHeight: '56px'
//               }}
//             >
//               Welcome back, {user?.username || 'User'}! 👋
//             </h2>
//             <p 
//               className="text-gray-400"
//               style={{
//                 fontSize: '16px',
//                 fontFamily: 'Poppins',
//                 fontWeight: '400',
//                 lineHeight: '24px'
//               }}
//             >
//               Here's what's happening with your templates today
//             </p>
//           </div>

//           {/* Stats Grid */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
//             {stats.map((stat, index) => (
//               <div 
//                 key={index}
//                 className="rounded-2xl p-6 transition-all duration-200 hover:scale-105"
//                 style={{ backgroundColor: '#131415', border: '1px solid #404047' }}
//               >
//                 <div className="flex items-center justify-between mb-4">
//                   <span className="text-4xl">{stat.icon}</span>
//                   <div className="w-2 h-2 rounded-full" style={{ background: 'linear-gradient(131deg, #ff9797 0%, #8053ff 100%)' }}></div>
//                 </div>
//                 <h3 
//                   className="text-white mb-1"
//                   style={{
//                     fontSize: '32px',
//                     fontFamily: 'Poppins',
//                     fontWeight: '600',
//                     lineHeight: '40px'
//                   }}
//                 >
//                   {stat.value}
//                 </h3>
//                 <p 
//                   className="text-gray-400"
//                   style={{
//                     fontSize: '14px',
//                     fontFamily: 'Poppins',
//                     fontWeight: '400'
//                   }}
//                 >
//                   {stat.label}
//                 </p>
//               </div>
//             ))}
//           </div>

//           {/* Quick Actions */}
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
//             {/* Create New */}
//             <div 
//               className="rounded-2xl p-8 cursor-pointer transition-all duration-200 hover:scale-105"
//               style={{ background: 'linear-gradient(131deg, #ff9797 0%, #8053ff 100%)' }}
//             >
//               <div className="text-white mb-4">
//                 <span className="text-5xl">✨</span>
//               </div>
//               <h3 
//                 className="text-white mb-2"
//                 style={{
//                   fontSize: '24px',
//                   fontFamily: 'Poppins',
//                   fontWeight: '600'
//                 }}
//               >
//                 Create New Template
//               </h3>
//               <p 
//                 className="text-white opacity-90"
//                 style={{
//                   fontSize: '14px',
//                   fontFamily: 'Poppins',
//                   fontWeight: '400'
//                 }}
//               >
//                 Start designing your next amazing template
//               </p>
//             </div>

//             {/* Browse Templates */}
//             <div 
//               className="rounded-2xl p-8 cursor-pointer transition-all duration-200 hover:scale-105"
//               style={{ backgroundColor: '#131415', border: '1px solid #404047' }}
//             >
//               <div className="text-white mb-4">
//                 <span className="text-5xl">📚</span>
//               </div>
//               <h3 
//                 className="text-white mb-2"
//                 style={{
//                   fontSize: '24px',
//                   fontFamily: 'Poppins',
//                   fontWeight: '600'
//                 }}
//               >
//                 Browse Library
//               </h3>
//               <p 
//                 className="text-gray-400"
//                 style={{
//                   fontSize: '14px',
//                   fontFamily: 'Poppins',
//                   fontWeight: '400'
//                 }}
//               >
//                 Explore our collection of premium templates
//               </p>
//             </div>
//           </div>

//           {/* Recent Templates */}
//           <div>
//             <h3 
//               className="text-white mb-6"
//               style={{
//                 fontSize: '28px',
//                 fontFamily: 'Poppins',
//                 fontWeight: '600'
//               }}
//             >
//               Recent Templates
//             </h3>
//             <div 
//               className="rounded-2xl overflow-hidden"
//               style={{ backgroundColor: '#131415', border: '1px solid #404047' }}
//             >
//               {recentTemplates.map((template, index) => (
//                 <div 
//                   key={index}
//                   className="flex items-center justify-between p-6 transition-colors duration-200"
//                   style={{ 
//                     borderBottom: index < recentTemplates.length - 1 ? '1px solid #404047' : 'none'
//                   }}
//                   onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#222228'}
//                   onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
//                 >
//                   <div className="flex items-center gap-4">
//                     <div 
//                       className="w-12 h-12 rounded-lg flex items-center justify-center"
//                       style={{ backgroundColor: '#222228' }}
//                     >
//                       <span className="text-2xl">📄</span>
//                     </div>
//                     <div>
//                       <p 
//                         className="text-white mb-1"
//                         style={{
//                           fontSize: '16px',
//                           fontFamily: 'Poppins',
//                           fontWeight: '500'
//                         }}
//                       >
//                         {template.name}
//                       </p>
//                       <p 
//                         className="text-gray-400"
//                         style={{
//                           fontSize: '13px',
//                           fontFamily: 'Poppins'
//                         }}
//                       >
//                         {template.date}
//                       </p>
//                     </div>
//                   </div>
//                   <div className="flex items-center gap-4">
//                     <span 
//                       className={`px-3 py-1 rounded-full text-xs font-medium ${
//                         template.status === 'Active' ? 'text-green-400' : 'text-yellow-400'
//                       }`}
//                       style={{ 
//                         backgroundColor: template.status === 'Active' ? '#1a3a1a' : '#3a3a1a',
//                         fontFamily: 'Poppins'
//                       }}
//                     >
//                       {template.status}
//                     </span>
//                     <button 
//                       className="text-gray-400 hover:text-white transition-colors"
//                     >
//                       <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                       </svg>
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </main>

//         {/* Floating Action Button */}
//         <button
//           className="fixed bottom-8 right-8 w-16 h-16 rounded-full shadow-2xl flex items-center justify-center transition-all duration-200 hover:scale-110"
//           style={{ 
//             background: 'linear-gradient(131deg, #ff9797 0%, #8053ff 100%)',
//             boxShadow: '0px 8px 30px rgba(128, 83, 255, 0.4)'
//           }}
//         >
//           <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
//           </svg>
//         </button>
//       </div>
//     </>
//   );
// };

// export default Dashboard;

import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import axios from 'axios';

const Dashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch users from API
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setUsers(response.data);
        setError(null);
      } catch (err) {
        console.error('Error fetching users:', err);
        setError('Failed to load users data');
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  // Calculate stats from API data
  const stats = [
    { 
      label: 'Total Users', 
      value: loading ? '...' : users.length.toString(), 
      icon: '👥',
      color: 'from-blue-500 to-purple-500'
    },
    { 
      label: 'Total Companies', 
      value: loading ? '...' : new Set(users.map(u => u.company.name)).size.toString(), 
      icon: '🏢',
      color: 'from-pink-500 to-orange-500'
    },
    { 
      label: 'Active Users', 
      value: loading ? '...' : users.length.toString(), 
      icon: '✅',
      color: 'from-green-500 to-teal-500'
    },
    { 
      label: 'Cities Covered', 
      value: loading ? '...' : new Set(users.map(u => u.address.city)).size.toString(), 
      icon: '🌍',
      color: 'from-yellow-500 to-red-500'
    }
  ];

  const recentUsers = users.slice(0, 5);

  return (
    <>
      <Helmet>
        <title>Dashboard - Squid</title>
      </Helmet>
      <div className="min-h-screen w-full" style={{ backgroundColor: '#000000' }}>
        {/* Header */}
        <header className="w-full border-b" style={{ borderColor: '#404047', backgroundColor: '#131415' }}>
          <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-14 py-6">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <div className="flex items-center gap-4">
                <h1 
                  className="text-white cursor-pointer"
                  style={{
                    fontSize: '28px',
                    fontFamily: 'Poppins',
                    fontWeight: '600'
                  }}
                  onClick={() => navigate('/dashboard')}
                >
                  Squid Dashboard
                </h1>
              </div>

              {/* Navigation Links */}
              <nav className="hidden md:flex items-center gap-6">
                <button
                  onClick={() => navigate('/dashboard')}
                  className="text-white hover:text-gray-300 transition-colors"
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
                  <div className="text-left hidden sm:block">
                    <p className="text-white text-sm font-medium" style={{ fontFamily: 'Poppins' }}>
                      {user?.username || 'User'}
                    </p>
                    <p className="text-gray-400 text-xs" style={{ fontFamily: 'Poppins' }}>
                      {user?.email || 'user@example.com'}
                    </p>
                  </div>
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Dropdown Menu */}
                {showUserMenu && (
                  <div 
                    className="absolute right-0 mt-2 w-56 rounded-lg shadow-lg overflow-hidden z-50"
                    style={{ backgroundColor: '#222228', border: '1px solid #404047' }}
                  >
                    <div className="py-2">
                      <button
                        onClick={() => navigate('/')}
                        className="w-full text-left px-4 py-3 text-white hover:bg-opacity-80 transition-colors"
                        style={{ fontFamily: 'Poppins', fontSize: '14px', backgroundColor: 'transparent' }}
                        onMouseEnter={(e) => e.target.style.backgroundColor = '#131415'}
                        onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                      >
                        🏠 Home
                      </button>
                      <button
                        onClick={() => {
                          setShowUserMenu(false);
                          navigate('/settings');
                        }}
                        className="w-full text-left px-4 py-3 text-white hover:bg-opacity-80 transition-colors"
                        style={{ fontFamily: 'Poppins', fontSize: '14px', backgroundColor: 'transparent' }}
                        onMouseEnter={(e) => e.target.style.backgroundColor = '#131415'}
                        onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                      >
                        ⚙️ Settings
                      </button>
                      <button
                        onClick={handleLogout}
                        className="w-full text-left px-4 py-3 text-red-400 hover:bg-opacity-80 transition-colors"
                        style={{ fontFamily: 'Poppins', fontSize: '14px', backgroundColor: 'transparent' }}
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
          {/* Welcome Section */}
          <div className="mb-12">
            <h2 
              className="text-white mb-2"
              style={{
                fontSize: '42px',
                fontFamily: 'Poppins',
                fontWeight: '600',
                lineHeight: '56px'
              }}
            >
              Welcome back, {user?.username || 'User'}! 
            </h2>
            <p 
              className="text-gray-400"
              style={{
                fontSize: '16px',
                fontFamily: 'Poppins',
                fontWeight: '400',
                lineHeight: '24px'
              }}
            >
              Here's what's happening with your users today
            </p>
          </div>

          {/* Loading State */}
          {loading && (
            <div className="flex items-center justify-center py-20">
              <div className="text-center">
                <div className="w-16 h-16 border-4 border-gray-600 border-t-purple-500 rounded-full animate-spin mx-auto mb-4"></div>
                <p className="text-gray-400" style={{ fontFamily: 'Poppins' }}>Loading dashboard data...</p>
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

          {/* Stats Grid */}
          {!loading && !error && (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {stats.map((stat, index) => (
                  <div 
                    key={index}
                    className="rounded-2xl p-6 transition-all duration-200 hover:scale-105 cursor-pointer"
                    style={{ backgroundColor: '#131415', border: '1px solid #404047' }}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-4xl">{stat.icon}</span>
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${stat.color}`}></div>
                    </div>
                    <h3 
                      className="text-white mb-1"
                      style={{
                        fontSize: '32px',
                        fontFamily: 'Poppins',
                        fontWeight: '600',
                        lineHeight: '40px'
                      }}
                    >
                      {stat.value}
                    </h3>
                    <p 
                      className="text-gray-400"
                      style={{
                        fontSize: '14px',
                        fontFamily: 'Poppins',
                        fontWeight: '400'
                      }}
                    >
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* Quick Actions */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                {/* View All Users */}
                <div 
                  onClick={() => navigate('/users')}
                  className="rounded-2xl p-8 cursor-pointer transition-all duration-200 hover:scale-105"
                  style={{ background: 'linear-gradient(131deg, #ff9797 0%, #8053ff 100%)' }}
                >
                  <div className="text-white mb-4">
                    <span className="text-5xl">👥</span>
                  </div>
                  <h3 
                    className="text-white mb-2"
                    style={{
                      fontSize: '24px',
                      fontFamily: 'Poppins',
                      fontWeight: '600'
                    }}
                  >
                    View All Users
                  </h3>
                  <p 
                    className="text-white opacity-90"
                    style={{
                      fontSize: '14px',
                      fontFamily: 'Poppins',
                      fontWeight: '400'
                    }}
                  >
                    Browse, search, and manage all users
                  </p>
                </div>

                {/* Settings */}
                <div 
                  onClick={() => navigate('/settings')}
                  className="rounded-2xl p-8 cursor-pointer transition-all duration-200 hover:scale-105"
                  style={{ backgroundColor: '#131415', border: '1px solid #404047' }}
                >
                  <div className="text-white mb-4">
                    <span className="text-5xl">⚙️</span>
                  </div>
                  <h3 
                    className="text-white mb-2"
                    style={{
                      fontSize: '24px',
                      fontFamily: 'Poppins',
                      fontWeight: '600'
                    }}
                  >
                    Settings
                  </h3>
                  <p 
                    className="text-gray-400"
                    style={{
                      fontSize: '14px',
                      fontFamily: 'Poppins',
                      fontWeight: '400'
                    }}
                  >
                    Manage your profile and preferences
                  </p>
                </div>
              </div>

              {/* Recent Users */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h3 
                    className="text-white"
                    style={{
                      fontSize: '28px',
                      fontFamily: 'Poppins',
                      fontWeight: '600'
                    }}
                  >
                    Recent Users
                  </h3>
                  <button
                    onClick={() => navigate('/users')}
                    className="text-purple-400 hover:text-purple-300 transition-colors"
                    style={{ fontFamily: 'Poppins', fontSize: '14px' }}
                  >
                    View All →
                  </button>
                </div>
                <div 
                  className="rounded-2xl overflow-hidden"
                  style={{ backgroundColor: '#131415', border: '1px solid #404047' }}
                >
                  {recentUsers.map((user, index) => (
                    <div 
                      key={user.id}
                      className="flex items-center justify-between p-6 transition-colors duration-200 cursor-pointer"
                      style={{ 
                        borderBottom: index < recentUsers.length - 1 ? '1px solid #404047' : 'none'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#222228'}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                      onClick={() => navigate('/users')}
                    >
                      <div className="flex items-center gap-4">
                        <div 
                          className="w-12 h-12 rounded-full flex items-center justify-center"
                          style={{ background: 'linear-gradient(131deg, #ff9797 0%, #8053ff 100%)' }}
                        >
                          <span className="text-white font-semibold" style={{ fontFamily: 'Poppins' }}>
                            {user.name.charAt(0)}
                          </span>
                        </div>
                        <div>
                          <p 
                            className="text-white mb-1"
                            style={{
                              fontSize: '16px',
                              fontFamily: 'Poppins',
                              fontWeight: '500'
                            }}
                          >
                            {user.name}
                          </p>
                          <p 
                            className="text-gray-400"
                            style={{
                              fontSize: '13px',
                              fontFamily: 'Poppins'
                            }}
                          >
                            {user.email}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <span 
                          className="px-3 py-1 rounded-full text-xs font-medium text-green-400"
                          style={{ 
                            backgroundColor: '#1a3a1a',
                            fontFamily: 'Poppins'
                          }}
                        >
                          Active
                        </span>
                        <button 
                          className="text-gray-400 hover:text-white transition-colors"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </main>
      </div>
    </>
  );
};

export default Dashboard;