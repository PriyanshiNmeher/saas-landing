
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { twMerge } from 'tailwind-merge';

const Header = ({ className, ...props }) => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleDownloadClick = () => {
    if (user) {
     
      navigate('/dashboard');
    } else {
    
      navigate('/login');
    }
  };

  const handleHomeClick = () => {
    navigate('/');
  };

  return (
    <header
      className={twMerge(
        'w-full' ,
        className
      )}
      {...props}
    >
        <div className="flex flex-col sm:flex-row justify-between items-center py-4 md:py-2 lg:py-1.5 gap-4 sm:gap-0 md:px-12">
          {/* Logo Section */}
          <div 
            className="flex items-center gap-2.5 w-auto md:mx-0 cursor-pointer"
            onClick={handleHomeClick}
          >
            <img 
              src="/images/img_search_white_a700.svg" 
              alt="Search icon" 
              className="w-[20px] h-[16px] sm:w-[30px] sm:h-[24px] md:w-[44px] md:h-[36px]"
            />
            <img 
              src="/images/img_squid.svg" 
              alt="Squid logo" 
              className="w-[40px] h-[15px] sm:w-[60px] sm:h-[22px] md:w-[90px] md:h-[55px]"
            />
          </div>

          {/* Navigation Menu */}
          <nav className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 w-full sm:w-auto">
            {/* Home Menu Item */}
            <button
              role="menuitem"
              onClick={handleHomeClick}
              className="text-xs sm:text-sm font-normal leading-tight text-text-secondary hover:text-text-primary transition-colors duration-200 px-2 py-1 cursor-pointer"
              style={{
                fontSize: '16px',
                fontFamily: 'Poppins',
                fontWeight: '400',
                lineHeight: '21px',
                textAlign: 'center'
              }}
            >
              Home
            </button>

            {/* Download Template Button */}
            <button
              role="menuitem"
              onClick={handleDownloadClick}
              className="px-4 sm:px-6 md:px-7 py-2 sm:py-2.5 rounded-xs text-xs sm:text-sm font-normal leading-tight text-text-primary transition-all duration-200 hover:opacity-90 cursor-pointer"
              style={{
                fontSize: '16px',
                fontFamily: 'Poppins',
                fontWeight: '400',
                lineHeight: '21px',
                textAlign: 'left',
                color: '#ffffff',
                background: 'linear-gradient(131deg, #ff9797 0%, #8053ff 100%)'
              }}
            >
              Download Template
            </button>
          </nav>
        </div>
      
    </header>
  );
};

export default Header;