import React from 'react';
import { twMerge } from 'tailwind-merge';

const Footer = ({ className, ...props }) => {
  return (
    <footer
      className={twMerge(
        'w-full bg-footer-background mt-5',
        className
      )}
      {...props}
    >
      {/* Main Footer Content */}
      <section className="w-full bg-primary-card">
        <div className="w-full max-w-[1110px] mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 md:py-10 lg:py-[30px]">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-0">
            {/* Logo and Description Section */}
            <div className="flex flex-col gap-4 sm:gap-6 w-full lg:w-[32%] relative lg:ml-[-120px] lg:mt-[60px]">
              <img 
                src="/images/img_footer_logo.svg" 
                alt="Footer logo" 
                className="w-[42px] h-[33px] sm:w-[49px] sm:h-[38px] md:w-[56px] md:h-[44px] lg:h-[50px] lg:w-[65px]"
              />
              <p 
                className="w-full text-text-secondary"
                style={{
                  fontSize: '16px',
                  fontFamily: 'Poppins',
                  fontWeight: '400',
                  lineHeight: '28px',
                  textAlign: 'left'
                }}
              >
                A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem
              </p>
            </div>

            {/* Navigation Links Section */}
            <div className="flex flex-col sm:flex-row justify-between items-start gap-8 sm:gap-4 w-full lg:w-[42%]">
              {/* Sections Column */}
              <div className="flex flex-col gap-1 w-full sm:w-[40%]">
                <h3 
                  className="text-text-primary mb-4 sm:mb-6"
                  style={{
                    fontSize: '16px',
                    fontFamily: 'Poppins',
                    fontWeight: '600',
                    lineHeight: '24px',
                    textAlign: 'center'
                  }}
                >
                  Sections
                </h3>
                <ul className="flex flex-col gap-4 sm:gap-6 items-center lg:gap-y-[2px]">
                  <li>
                    <a
                      href="#home"
                      className="text-text-secondary hover:text-text-primary transition-colors duration-200"
                      style={{
                        fontSize: '14px',
                        fontFamily: 'Poppins',
                        fontWeight: '400',
                        lineHeight: '38px',
                        textAlign: 'left'
                      }}
                    >
                      Home Section
                    </a>
                  </li>
                  <li>
                    <a
                      href="#one"
                      className="text-text-secondary hover:text-text-primary transition-colors duration-200"
                      style={{
                        fontSize: '14px',
                        fontFamily: 'Poppins',
                        fontWeight: '400',
                        lineHeight: '38px',
                        textAlign: 'left'
                      }}
                    >
                      One Section
                    </a>
                  </li>
                  <li>
                    <a
                      href="#two"
                      className="text-text-secondary hover:text-text-primary transition-colors duration-200"
                      style={{
                        fontSize: '14px',
                        fontFamily: 'Poppins',
                        fontWeight: '400',
                        lineHeight: '38px',
                        textAlign: 'left'
                      }}
                    >
                      Two Section
                    </a>
                  </li>
                  <li>
                    <a
                      href="#tree"
                      className="text-text-secondary hover:text-text-primary transition-colors duration-200"
                      style={{
                        fontSize: '14px',
                        fontFamily: 'Poppins',
                        fontWeight: '400',
                        lineHeight: '38px',
                        textAlign: 'left'
                      }}
                    >
                      Tree Section
                    </a>
                  </li>
                </ul>
              </div>

              {/* Second Navigation Column */}
              <div className="flex flex-col gap-1 relative lg:mt-[50px] w-full sm:w-[40%]">
                <ul className="flex flex-col gap-1 items-start">
                  <li>
                    <a
                      href="#home"
                      className="text-text-secondary hover:text-text-primary transition-colors duration-200"
                      style={{
                        fontSize: '14px',
                        fontFamily: 'Poppins',
                        fontWeight: '400',
                        lineHeight: '38px',
                        textAlign: 'left'
                      }}
                    >
                      Home Section
                    </a>
                  </li>
                  <li>
                    <a
                      href="#one"
                      className="text-text-secondary hover:text-text-primary transition-colors duration-200"
                      style={{
                        fontSize: '14px',
                        fontFamily: 'Poppins',
                        fontWeight: '400',
                        lineHeight: '38px',
                        textAlign: 'left'
                      }}
                    >
                      One Section
                    </a>
                  </li>
                  <li>
                    <a
                      href="#two"
                      className="text-text-secondary hover:text-text-primary transition-colors duration-200"
                      style={{
                        fontSize: '14px',
                        fontFamily: 'Poppins',
                        fontWeight: '400',
                        lineHeight: '38px',
                        textAlign: 'left'
                      }}
                    >
                      Two Section
                    </a>
                  </li>
                  <li>
                    <a
                      href="#tree"
                      className="text-text-secondary hover:text-text-primary transition-colors duration-200"
                      style={{
                        fontSize: '14px',
                        fontFamily: 'Poppins',
                        fontWeight: '400',
                        lineHeight: '38px',
                        textAlign: 'left'
                      }}
                    >
                      Tree Sectiom
                    </a>
                  </li>
                </ul>
              </div>

              {/* Third Navigation Column */}
              <div className="flex flex-col gap-1 w-full sm:w-auto relative lg:mt-[50px] lg:w-[200px]">
                <ul className="flex flex-col gap-1 items-start">
                  <li>
                    <a
                      href="#home"
                      className="text-text-secondary hover:text-text-primary transition-colors duration-200"
                      style={{
                        fontSize: '14px',
                        fontFamily: 'Poppins',
                        fontWeight: '400',
                        lineHeight: '38px',
                        textAlign: 'left'
                      }}
                    >
                      Home Section
                    </a>
                  </li>
                  <li>
                    <a
                      href="#one"
                      className="text-text-secondary hover:text-text-primary transition-colors duration-200"
                      style={{
                        fontSize: '14px',
                        fontFamily: 'Poppins',
                        fontWeight: '400',
                        lineHeight: '38px',
                        textAlign: 'left'
                      }}
                    >
                      One Section
                    </a>
                  </li>
                  <li>
                    <a
                      href="#two"
                      className="text-text-secondary hover:text-text-primary transition-colors duration-200"
                      style={{
                        fontSize: '14px',
                        fontFamily: 'Poppins',
                        fontWeight: '400',
                        lineHeight: '38px',
                        textAlign: 'left'
                      }}
                    >
                      Two Section
                    </a>
                  </li>
                  <li>
                    <a
                      href="#tree"
                      className="text-text-secondary hover:text-text-primary transition-colors duration-200"
                      style={{
                        fontSize: '14px',
                        fontFamily: 'Poppins',
                        fontWeight: '400',
                        lineHeight: '38px',
                        textAlign: 'left'
                      }}
                    >
                      Tree Section
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Footer */}
      <section className="w-full bg-black">
        <div className="w-full max-w-[1152px] mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 md:py-[26px]">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
            {/* Copyright */}
            <p 
              className="text-text-secondary mb-0 sm:mb-1.5 text-center sm:text-left"
              style={{
                fontSize: '14px',
                fontFamily: 'Poppins',
                fontWeight: '400',
                lineHeight: '21px'
              }}
            >
              All Rights Reservd Inkyy.com 2022
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 sm:gap-4">
              <button
                className="w-[30px] h-[30px] sm:w-[35px] sm:h-[35px] md:w-[40px] md:h-[40px] bg-icon-button rounded-md p-2 sm:p-2.5 hover:opacity-80 transition-opacity duration-200"
                aria-label="Social media link"
              >
                <img 
                  src="/images/img_group_26.svg" 
                  alt="Social icon" 
                  className="w-full h-full"
                />
              </button>
              <button
                className="w-[30px] h-[30px] sm:w-[35px] sm:h-[35px] md:w-[40px] md:h-[40px] bg-icon-button rounded-md p-2 sm:p-3 hover:opacity-80 transition-opacity duration-200"
                aria-label="Social media link"
              >
                <img 
                  src="/images/img_group_27.svg" 
                  alt="Social icon" 
                  className="w-full h-full"
                />
              </button>
              <button
                className="w-[30px] h-[30px] sm:w-[35px] sm:h-[35px] md:w-[40px] md:h-[40px] bg-icon-button rounded-md p-2 sm:p-2.5 hover:opacity-80 transition-opacity duration-200"
                aria-label="Social media link"
              >
                <img 
                  src="/images/img_group_28.svg" 
                  alt="Social icon" 
                  className="w-full h-full"
                />
              </button>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;