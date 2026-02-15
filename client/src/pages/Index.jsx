// import React, { useState } from 'react';
// import { Helmet } from 'react-helmet';
// import { useNavigate } from 'react-router-dom';
// import { useAuth } from '../context/AuthContext';
// import Header from '../components/common/Header';
// import Footer from '../components/common/Footer';
// import Button from '../components/ui/Button';
// import EditText from '../components/ui/EditText';
// import TextArea from '../components/ui/TextArea';

// const Home = () => {
//   const [email, setEmail] = useState('');
//   const [name, setName] = useState('');
//   const [message, setMessage] = useState('');
//   const [submitSuccess, setSubmitSuccess] = useState(false);
//   const [submitError, setSubmitError] = useState('');
//   const navigate = useNavigate();
//   const { user } = useAuth();

//   const handleSubmit = async (e) => {
//     e?.preventDefault();
    
//     // Reset states
//     setSubmitSuccess(false);
//     setSubmitError('');

//     // Basic validation
//     if (!email || !name || !message) {
//       setSubmitError('Please fill in all fields');
//       return;
//     }

//     // Email validation
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(email)) {
//       setSubmitError('Please enter a valid email address');
//       return;
//     }

//     try {
//       // Get existing contacts from localStorage
//       const existingContacts = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
      
//       // Create new contact entry
//       const newContact = {
//         id: Date.now(), // Unique ID
//         name: name,
//         email: email,
//         message: message,
//         timestamp: new Date().toISOString(),
//         date: new Date().toLocaleString()
//       };
      
//       // Add new contact to array
//       existingContacts.push(newContact);
      
//       // Save to localStorage
//       localStorage.setItem('contactSubmissions', JSON.stringify(existingContacts));
      
//       console.log('Contact form submitted and saved:', newContact);
//       console.log('Total contacts saved:', existingContacts.length);
      
//       // Show success message
//       setSubmitSuccess(true);
      
//       // Clear form fields for new entry
//       setEmail('');
//       setName('');
//       setMessage('');
      
//       // Hide success message after 5 seconds
//       setTimeout(() => {
//         setSubmitSuccess(false);
//       }, 5000);
      
//     } catch (error) {
//       console.error('Error submitting form:', error);
//       setSubmitError('Failed to submit. Please try again.');
//     }
//   };

//   const handleDownloadClick = () => {
//     if (user) {
//       navigate('/dashboard');
//     } else {
//       navigate('/login');
//     }
//   };

//   return (
//     <>
//       <Helmet>
//         <title>Squid - Beautiful SaaS Landing Page Design | Modern Dark Theme Dashboard</title>
//         <meta name="description" content="Discover Squid's stunning dark-themed SaaS landing page with interactive dashboard mockups, fully customizable features, client testimonials, and 15-day free trial. Transform your design experience today." />
//         <meta property="og:title" content="Squid - Beautiful SaaS Landing Page Design | Modern Dark Theme Dashboard" />
//         <meta property="og:description" content="Discover Squid's stunning dark-themed SaaS landing page with interactive dashboard mockups, fully customizable features, client testimonials, and 15-day free trial. Transform your design experience today." />
//       </Helmet>
//       <main className="w-full" style={{ backgroundColor: '#000000' }}>
//         {/* Hero Section with Background */}
//         <section className="w-full relative min-h-screen">
//           <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-14">
            
//             {/* Header */}
//             <div className="pt-4 sm:pt-6 md:pt-[26px]">
//               <Header className="" />
//             </div>

//             {/* Hero Content */}
//             <div className="flex flex-col items-center justify-start pt-16 sm:pt-24 md:pt-32 lg:pt-19 pb-8 sm:pb-12 md:pb-16 ">
//               {/* Main Heading */}
//               <h1 
//                 className="text-center text-text-primary mb-6 sm:mb-8 md:mb-5.5 max-w-4xl mx-50 z-1 px-4 "
//                 style={{
//                   fontSize: '70px',
//                   fontFamily: 'Poppins',
//                   fontWeight: '600',
//                   lineHeight: '90px',
//                   '@media (min-width: 640px)': {
//                     fontSize: '42px',
//                     lineHeight: '63px'
//                   },
//                   '@media (min-width: 768px)': {
//                     fontSize: '51px',
//                     lineHeight: '77px'
//                   },
//                   '@media (min-width: 1024px)': {
//                     fontSize: '64px',
//                     lineHeight: '97px'
//                   }
//                 }}
//               >
//                 Beautiful Landing Page Design for You
//               </h1>

//               {/* Subheading */}
//               <p 
//                 className="text-center text-text-secondary mb-8 sm:mb-12 md:mb-16 max-w-2xl mx-auto px-4"
//                 style={{
//                   fontSize: '20px',
//                   fontFamily: 'Poppins',
//                   fontWeight: '400',
//                   lineHeight: '30px'
//                 }}
//               >
//                 A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem
//               </p>
//             </div>

//             {/* Floating Elements */}
//             <div className="absolute right-4 sm:right-8 md:right-14 top-[280px] sm:top-[320px] md:top-[375px] w-[48px] h-[48px] sm:w-[72px] sm:h-[72px] md:w-[96px] md:h-[96px] rounded-full shadow-lg" style={{ background: 'linear-gradient(177deg, #494955 0%, #141414 100%)', boxShadow: '0px 4px 20px #888888ff' }}></div>
            
//             <div className="absolute left-4 sm:left-8 md:left-[122px] top-[360px] sm:top-[420px] md:top-[480px] w-[65px] h-[65px] sm:w-[98px] sm:h-[98px] md:w-[130px] md:h-[130px] rounded-full shadow-lg" style={{ background: 'linear-gradient(177deg, #494955 0%, #141414 100%)', boxShadow: '0px 4px 30px #888888ff' }}></div>

//             {/* Dashboard Section */}
//             <div className="flex flex-col lg:flex-row items-start justify-center gap-8 lg:gap-0 mt-8 sm:mt-12 md:mt-12 ">
//               {/* Left Floating Button */}
//               <div className="hidden lg:flex flex-col items-center gap-[240px] sm:gap-[280px] md:gap-[302px] w-auto lg:w-[14%]  md:top-[350px]">

//                 <div className="w-[32px] h-[32px] sm:w-[48px] sm:h-[48px] md:w-[64px] md:h-[64px] rounded-full shadow-lg ml-[17px] sm:ml-[25px] md:ml-[34px] relative md:left-[-60px] md:mt-[30px] md:top-[-450px]" style={{ background: 'linear-gradient(177deg, #494955 0%, #141414 100%)', boxShadow: '0px 4px 20px #888888ff ' }}></div>
                
//                 <button
//                   role="menuitem"
//                   onClick={handleDownloadClick}
//                   className="px-4 sm:px-6 md:px-3 py-2 sm:py-2.5 rounded-xs text-xs sm:text-sm font-normal leading-tight text-text-primary transition-all duration-200 hover:opacity-90 cursor-pointer absolute md:top-0 md:w-[200px] md:h-[50px]"
//                   style={{
//                     fontSize: '16px',
//                     fontFamily: 'Poppins',
//                     fontWeight: '400',
//                     lineHeight: '21px',
//                     textAlign: 'left',
//                     color: '#ffffff',
//                     background: 'linear-gradient(131deg, #ff9797 0%, #8053ff 100%)'
//                   }}
//                 >
//                   Download Template
//                 </button>
//               </div>

//               {/* Main Dashboard Container - keeping original code */}
//               <div className="w-full lg:w-[64%] px-4 sm:px-8 md:px-0">
//                 <div className="mb- sm:mb-6 md:mb-8 flex justify-center">
//                   <img 
//                     src="/images/img_ellipse_5.png" 
//                     alt="Dashboard mockup showing analytics and user interface"
//                     className="w-full max-w-[270px] sm:max-w-[400px] md:max-w-[570px] h-auto"
//                   />
//                 </div>

//                 <div className="rounded-3xl p-6 sm:p-8 md:p-[42px] lg:h-[650px] -mt-4 sm:-mt-6 md:mt-[-2px] md:w-[950px] justify-center items-center" style={{ backgroundColor: '#131415' }}>
//                   <div className="flex flex-col lg:flex-row gap-6 sm:gap-7 md:gap-[36px] lg:mt-[30px] justify-center">
                    
//                     {/* Left Card */}
//                     <div className="w-full lg:w-[265px] flex-shrink-0">
//                       <div className="bg-primary-border rounded-lg sm:rounded-xl md:rounded-[20px] p-4 sm:p-5 md:p-6 lg:h-[500px]">
//                         <div className="flex justify-center mb-4 sm:mb-5">
//                           <img 
//                             src="/images/img_search.svg" 
//                             alt="Search functionality" 
//                             className="w-[20px] h-[16px] sm:w-[30px] sm:h-[24px] md:w-[40px] md:h-[32px]"
//                           />
//                         </div>
                        
//                         <div className="w-full h-[1px] bg-primary-accent mb-4 sm:mb-6 md:mb-8"></div>
                        
//                         <div className="space-y-4 sm:space-y-5 md:space-y-6">
//                           {[...Array(5)]?.map((_, index) => (
//                             <div key={index} className="flex items-center gap-4 sm:gap-5">
//                               <div className="w-[10px] h-[10px] sm:w-[15px] sm:h-[15px] md:w-[20px] md:h-[20px] bg-primary-accent rounded-xs"></div>
//                               <img 
//                                 src="/images/img_group_107.svg" 
//                                 alt="List item" 
//                                 className="w-[53px] h-[10px] sm:w-[79px] sm:h-[15px] md:w-[106px] md:h-[20px]"
//                               />
//                             </div>
//                           ))}
//                         </div>
                        
//                         <div className="flex flex-col items-center gap-3 sm:gap-4 md:gap-[18px] mt-6 sm:mt-8 md:mt-11">
//                           <img 
//                             src="/images/img_ellipse_4.png" 
//                             alt="User profile" 
//                             className="w-[21px] h-[21px] sm:w-[31px] sm:h-[31px] md:w-[42px] md:h-[42px] rounded-full"
//                           />
//                           <img 
//                             src="/images/img_group_107_blue_gray_900.svg" 
//                             alt="Profile details" 
//                             className="w-[53px] h-[10px] sm:w-[79px] sm:h-[15px] md:w-[106px] md:h-[20px]"
//                           />
//                         </div>
//                       </div>
//                     </div>

//                     {/* Middle Card */}
//                     <div className="w-full lg:w-[265px] flex-shrink-0">
//                       <div className="flex flex-col gap-4 sm:gap-5 md:gap-[26px]">
//                         <div className="bg-primary-border rounded-lg sm:rounded-xl md:rounded-[20px] p-3 sm:p-4 md:p-[18px] pt-4 sm:pt-5 md:pt-6 lg:h-[230px]">
//                           <img 
//                             src="/images/img_group_115.png" 
//                             alt="Dashboard chart" 
//                             className="w-full max-w-[96px] sm:max-w-[144px] md:max-w-[192px] h-auto mx-auto mb-2 sm:mb-3"
//                           />
//                         </div>
                        
//                         <div className="bg-primary-border rounded-lg sm:rounded-xl md:rounded-[20px] p-2 sm:p-3 md:p-[14px] pt-4 sm:pt-5 md:pt-6">
//                           <div className="flex items-center justify-between mb-3 sm:mb-4 md:mb-6 px-1 sm:px-2 lg:h-[60px]">
//                             <img 
//                               src="/images/img_group_107.svg" 
//                               alt="Chart label" 
//                               className="w-[53px] h-[10px] sm:w-[79px] sm:h-[15px] md:w-[106px] md:h-[20px]"
//                             />
//                             <div className="w-[10px] h-[10px] sm:w-[15px] sm:h-[15px] md:w-[20px] md:h-[20px] bg-primary-accent rounded-xs"></div>
//                           </div>
//                           <div className="w-full h-[1px] bg-primary-accent mb-3 sm:mb-4 md:mb-6 mx-1 sm:mx-2"></div>
//                           <img 
//                             src="/images/img_group_132.png" 
//                             alt="Dashboard analytics" 
//                             className="w-full max-w-[85px] sm:max-w-[127px] md:max-w-[170px] h-auto mx-auto"
//                           />
//                         </div>
//                       </div>
//                     </div>

//                     {/* Right Card */}
//                     <div className="w-full lg:w-[265px] flex-shrink-0">
//                       <div className="flex flex-col gap-4 sm:gap-5 md:gap-[26px]">
//                         <div className="bg-primary-border rounded-lg sm:rounded-xl md:rounded-[20px] p-1 sm:p-1.5 md:p-[6px] pt-2 sm:pt-3 md:pt-4 lg:h-[368px]">
//                           <div className="px-2 sm:px-3 md:px-[14px] py-1 sm:py-1.5 md:py-2">
//                             <div className="flex items-center justify-between mb-3 sm:mb-4 md:mb-6">
//                               <img 
//                                 src="/images/img_group_107.svg" 
//                                 alt="Header info" 
//                                 className="w-[53px] h-[10px] sm:w-[79px] sm:h-[15px] md:w-[106px] md:h-[20px]"
//                               />
//                               <div className="w-[10px] h-[10px] sm:w-[15px] sm:h-[15px] md:w-[20px] md:h-[20px] bg-primary-accent rounded-xs"></div>
//                             </div>
//                             <img 
//                               src="/images/img_group_108.png" 
//                               alt="Data visualization" 
//                               className="w-full max-w-[96px] sm:max-w-[144px] md:max-w-[192px] h-auto mb-1 sm:mb-1"
//                             />
                            
//                             <div className="relative">
//                               <div className="space-y-1">
//                                 <img 
//                                   src="/images/img_group_108.png" 
//                                   alt="Chart data" 
//                                   className="w-full max-w-[96px] sm:max-w-[144px] md:max-w-[192px] h-auto"
//                                 />
//                                 <img 
//                                   src="/images/img_group_108.png" 
//                                   alt="Chart data" 
//                                   className="w-full max-w-[96px] sm:max-w-[144px] md:max-w-[192px] h-auto"
//                                 />
//                                 <img 
//                                   src="/images/img_group_108.png" 
//                                   alt="Chart data" 
//                                   className="w-full max-w-[96px] sm:max-w-[144px] md:max-w-[192px] h-auto"
//                                 />
//                               </div>
//                               <div 
//                                 className="absolute inset-0 w-full h-full"
//                                 style={{ background: 'linear-gradient(180deg, #222228 0%, #22222800 100%)' }}
//                               ></div>
//                             </div>
//                           </div>
//                         </div>
                        
//                         <div className="bg-primary-border rounded-lg sm:rounded-xl md:rounded-[20px] w-full h-[51px] sm:h-[76px] md:h-[102px]"></div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="absolute right-0 top-0 w-[1px] h-[384px] sm:h-[576px] md:h-[768px]" style={{ background: 'linear-gradient(180deg, #404047 0%, #40404700 100%)' }}></div>
//           </div>

//           {/* Bottom Section with Subtitle */}
//           <div className="w-full bg-cover bg-center relative" style={{ backgroundImage: 'url(/images/img_subtract.png)' }}>
//             <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-14 pt-32 sm:pt-48 md:pt-64 pb-8 sm:pb-12 md:pb-16">
//               <div className="text-center">
//                 <h2 
//                   className="text-text-primary -mt-2 sm:-mt-3 md:-mt-[14px] ml-8 sm:ml-12 md:ml-[164px]"
//                   style={{
//                     fontSize: '24px',
//                     fontFamily: 'Poppins',
//                     fontWeight: '600',
//                     lineHeight: '36px',
//                     '@media (min-width: 640px)': {
//                       fontSize: '36px',
//                       lineHeight: '54px'
//                     },
//                     '@media (min-width: 1024px)': {
//                       fontSize: '48px',
//                       lineHeight: '72px'
//                     }
//                   }}
//                 >
//                   Feature Boxes
//                 </h2>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Continuing with rest of sections - Feature Description, Feature Boxes, Testimonial, Companies, CTA sections remain same... */}
//         {/* Skipping to Contact Section for brevity - keeping all other sections as-is */}

//         {/* Contact Section - Updated with working form */}
//         <section className="w-full py-8 sm:py-12 md:py-16">
//           <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-14">
//             <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-11 max-w-[1224px] mx-auto">
              
//               {/* Left Visual */}
//               <div className="relative w-full max-w-[300px] sm:max-w-[440px] md:max-w-[582px] aspect-square">
//                 <img 
//                   src="/images/img_group_133.svg" 
//                   alt="Contact visualization" 
//                   className="w-full max-w-[270px] sm:max-w-[405px] md:max-w-[540px] h-auto mx-auto mt-4 sm:mt-6 md:mt-7"
//                 />
                
//                 <div className="absolute bottom-8 sm:bottom-12 md:bottom-16 right-0 w-[48px] h-[48px] sm:w-[72px] sm:h-[72px] md:w-[96px] md:h-[96px] rounded-full shadow-lg" style={{ background: 'linear-gradient(177deg, #494955 0%, #141414 100%)', boxShadow: '0px 4px 20px #888888ff' }}></div>
//                 <div className="absolute top-0 left-0 w-[32px] h-[32px] sm:w-[48px] sm:h-[48px] md:w-[64px] md:h-[64px] rounded-full shadow-lg" style={{ background: 'linear-gradient(177deg, #494955 0%, #141414 100%)', boxShadow: '0px 4px 20px #888888ff' }}></div>
//               </div>

//               {/* Right Content */}
//               <div className="w-full lg:w-auto lg:flex-1 max-w-2xl text-center lg:text-left mt-4 sm:mt-6 md:mt-7">
//                 <h2 
//                   className="text-text-primary mb-4 sm:mb-5 md:mb-5"
//                   style={{
//                     fontSize: '24px',
//                     fontFamily: 'Poppins',
//                     fontWeight: '600',
//                     lineHeight: '36px',
//                     '@media (min-width: 640px)': {
//                       fontSize: '36px',
//                       lineHeight: '54px'
//                     },
//                     '@media (min-width: 1024px)': {
//                       fontSize: '48px',
//                       lineHeight: '72px'
//                     }
//                   }}
//                 >
//                   Get In Touch
//                 </h2>
//                 <p 
//                   className="text-text-secondary mb-6 sm:mb-7 md:mb-7 max-w-lg mx-auto lg:mx-0"
//                   style={{
//                     fontSize: '18px',
//                     fontFamily: 'Poppins',
//                     fontWeight: '400',
//                     lineHeight: '28px'
//                   }}
//                 >
//                   A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem
//                 </p>
                
//                 {/* Success/Error Messages */}
//                 {submitSuccess && (
//                   <div className="mb-4 p-4 rounded-lg animate-fade-in" style={{ backgroundColor: '#1a3a1a', border: '1px solid #4ade80' }}>
//                     <p className="text-green-400 text-sm" style={{ fontFamily: 'Poppins' }}>
//                       ✓ Message sent successfully! Your details have been saved.
//                     </p>
//                   </div>
//                 )}
                
//                 {submitError && (
//                   <div className="mb-4 p-4 rounded-lg animate-fade-in" style={{ backgroundColor: '#2d1515', border: '1px solid #ff4444' }}>
//                     <p className="text-red-400 text-sm" style={{ fontFamily: 'Poppins' }}>
//                       {submitError}
//                     </p>
//                   </div>
//                 )}
                
//                 {/* Contact Form */}
//                 <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4 md:space-y-[18px] max-w-md mx-auto lg:mx-0">
//                   <EditText
//                     placeholder="Your Email"
//                     type="email"
//                     value={email}
//                     onChange={(e) => setEmail(e?.target?.value)}
//                     className="w-full"
//                     layout_width=""
//                     padding=""
//                     position=""
//                     variant=""
//                     size=""
//                     required
//                   />
                  
//                   <EditText
//                     placeholder="Your Name"
//                     type="text"
//                     value={name}
//                     onChange={(e) => setName(e?.target?.value)}
//                     className="w-full"
//                     layout_width=""
//                     padding=""
//                     position=""
//                     variant=""
//                     size=""
//                     required
//                   />
                  
//                   <TextArea
//                     placeholder="Your Message"
//                     value={message}
//                     onChange={(e) => setMessage(e?.target?.value)}
//                     rows={6}
//                     className="w-full"
//                     layout_width=""
//                     padding=""
//                     position=""
//                     variant=""
//                     size=""
//                     required
//                   />
                  
//                   <Button
//                     text="Get in Touch"
//                     text_font_size="14"
//                     text_color="#ffffff"
//                     fill_background="linear-gradient(131deg, #ff9797 0%, #8053ff 100%)"
//                     fill_background_color=""
//                     border_border_radius="5px"
//                     padding="10px 28px"
//                     type="submit"
//                     layout_width=""
//                     margin=""
//                     position=""
//                     variant=""
//                     size=""
//                     className=""
//                   />
//                 </form>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Footer */}
//         <Footer className="" />
//       </main>
//     </>
//   );
// };

// export default Home;


import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import Button from '../components/ui/Button';
import EditText from '../components/ui/EditText';
import TextArea from '../components/ui/TextArea';

const Home = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleSubmit = async (e) => {
    e?.preventDefault();
    
    // Reset states
    setSubmitSuccess(false);
    setSubmitError('');

    // Basic validation
    if (!email || !name || !message) {
      setSubmitError('Please fill in all fields');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setSubmitError('Please enter a valid email address');
      return;
    }

    try {
      // Get existing contacts from localStorage
      const existingContacts = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
      
      // Create new contact entry
      const newContact = {
        id: Date.now(), // Unique ID
        name: name,
        email: email,
        message: message,
        timestamp: new Date().toISOString(),
        date: new Date().toLocaleString()
      };
      
      // Add new contact to array
      existingContacts.push(newContact);
      
      // Save to localStorage
      localStorage.setItem('contactSubmissions', JSON.stringify(existingContacts));
      
      console.log('Contact form submitted and saved:', newContact);
      console.log('Total contacts saved:', existingContacts.length);
      
      // Show success message
      setSubmitSuccess(true);
      
      // Clear form fields for new entry
      setEmail('');
      setName('');
      setMessage('');
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
      
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitError('Failed to submit. Please try again.');
    }
  };

  const handleDownloadClick = () => {
    if (user) {
      navigate('/dashboard');
    } else {
      navigate('/login');
    }
  };

  return (
    <>
      <Helmet>
        <title>Squid - Beautiful SaaS Landing Page Design | Modern Dark Theme Dashboard</title>
        <meta name="description" content="Discover Squid's stunning dark-themed SaaS landing page with interactive dashboard mockups, fully customizable features, client testimonials, and 15-day free trial. Transform your design experience today." />
        <meta property="og:title" content="Squid - Beautiful SaaS Landing Page Design | Modern Dark Theme Dashboard" />
        <meta property="og:description" content="Discover Squid's stunning dark-themed SaaS landing page with interactive dashboard mockups, fully customizable features, client testimonials, and 15-day free trial. Transform your design experience today." />
      </Helmet>
      <main className="w-full" style={{ backgroundColor: '#000000' }}>
        {/* Hero Section with Background */}
        <section className="w-full relative min-h-screen">
          <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-14 relative">
            
            {/* Header */}
            <div className="pt-4 sm:pt-6 md:pt-[26px]">
              <Header className="" />
            </div>

            {/* Hero Content */}
            <div className="flex flex-col items-center justify-start lg:pt-[90px] sm:pt-24 md:pt-32 lg:pt-40 pb-8 sm:pb-12 md:pb-12">
              {/* Main Heading */}
              <h1 
                className="text-center text-text-primary mb-6 sm:mb-8 md:mb-12 max-w-4xl mx-auto px-4 z-1"
                style={{
                  fontSize: '70px',
                  fontFamily: 'Poppins',
                  fontWeight: '600',
                  lineHeight: '88px',
                  '@media (min-width: 640px)': {
                    fontSize: '42px',
                    lineHeight: '63px'
                  },
                  '@media (min-width: 768px)': {
                    fontSize: '51px',
                    lineHeight: '77px'
                  },
                  '@media (min-width: 1024px)': {
                    fontSize: '64px',
                    lineHeight: '97px'
                  }
                }}
              >
                Beautiful Landing Page Design for You
              </h1>

              {/* Subheading */}
              <p 
                className="text-center text-text-secondary mb-8 sm:mb-12 md:mb-16 max-w-2xl mx-auto px-4 lg:mt-[-26px] z-1"
                style={{
                  fontSize: '20px',
                  fontFamily: 'Poppins',
                  fontWeight: '400',
                  lineHeight: '32px'
                }}
              >
                A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem
              </p>
            </div>

            {/* Floating Elements */}
            <div className="absolute right-4 sm:right-8 md:right-14 top-[280px] sm:top-[320px] md:top-[375px] w-[48px] h-[48px] sm:w-[72px] sm:h-[72px] md:w-[96px] md:h-[96px] rounded-full shadow-lg" style={{ background: 'linear-gradient(177deg, #494955 0%, #141414 100%)', boxShadow: '0px 4px 20px #888888ff' }}></div>
            
            <div className="absolute left-4 sm:left-8 md:left-[122px] top-[360px] sm:top-[420px] md:top-[480px] w-[65px] h-[65px] sm:w-[98px] sm:h-[98px] md:w-[130px] md:h-[130px] rounded-full shadow-lg" style={{ background: 'linear-gradient(177deg, #494955 0%, #141414 100%)', boxShadow: '0px 4px 30px #888888ff' }}></div>

            {/* Dashboard Section */}
            <div className="flex flex-col lg:flex-row items-start justify-center gap-8 lg:gap-0 mt-8 sm:mt-12 md:mt-16 relative">
              {/* Left Floating Button */}
              <div className="hidden lg:flex flex-col items-center gap-[240px] sm:gap-[280px] md:gap-[302px] w-auto lg:w-[200px] lg:mt-[-100px] absolute">
                <div className="w-[32px] h-[32px] sm:w-[48px] sm:h-[48px] md:w-[64px] md:h-[64px] rounded-full shadow-lg ml-[17px] sm:ml-[25px] md:ml-[34px] absolute lg:mt-[-450px] lg:ml-[-130px]" style={{ background: 'linear-gradient(177deg, #494955 0%, #141414 100%)', boxShadow: '0px 4px 20px #888888ff' }}></div>
                
                <Button
                  text="Download Template"
                  text_font_size="16"
                  text_color="#ffffff"
                  fill_background="linear-gradient(131deg, #ff9797 0%, #8053ff 100%)"
                  fill_background_color=""
                  border_border_radius="5px"
                  padding="8px"
                  layout_width=""
                  margin=""
                  position=""
                  variant=""
                  size=""
                  className="lg:w-[250px] lg:h-[50px] lg:mt-[-38px]"
                  onClick={handleDownloadClick}
                />
              </div>

              {/* Main Dashboard Container */}
              <div className="w-full lg:w-[64%] px-4 sm:px-8 md:px-0 relative lg:top-[-440px]">
                {/* Dashboard Image */}
                <div className="mb-4 sm:mb-6 md:mb-8 flex justify-center">
                  <img 
                    src="/images/img_ellipse_5.png" 
                    alt="Dashboard mockup showing analytics and user interface"
                    className="w-full max-w-[270px] sm:max-w-[400px] md:max-w-[538px] h-auto"
                  />
                </div>

                {/* Dashboard Cards Container */}
                <div className="rounded-3xl p-6 sm:p-8 md:p-[42px] -mt-4 sm:-mt-6 md:mt-[-28px] lg:h-[600px] lg:w-[940px] relative z-1" style={{ backgroundColor: '#131415' }}>
                  <div className="flex flex-col lg:flex-row gap-6 sm:gap-7 md:gap-[28px] justify-center">
                    
                    {/* Left Card */}
                    <div className="w-full h-[650px] lg:w-[200px] lg:h-[70px] flex-shrink-0">
                      <div className="bg-primary-border rounded-lg sm:rounded-xl md:rounded-[20px] p-4 sm:p-5 md:p-6 lg:w-[250px] lg:h-[500px]">
                        {/* Search Icon */}
                        <div className="flex justify-center mb-4 sm:mb-5 lg:ml-[30px]">
                          <img 
                            src="/images/img_search.svg" 
                            alt="Search functionality" 
                            className="w-[20px] h-[16px] sm:w-[30px] sm:h-[24px] md:w-[40px] md:h-[32px]"
                          />
                        </div>
                        
                        {/* Divider Line */}
                        <div className="w-full h-[1px] bg-primary-accent mb-4 sm:mb-6 md:mb-8"></div>
                        
                        {/* List Items */}
                        <div className="space-y-4 sm:space-y-5 md:space-y-6">
                          {[...Array(5)]?.map((_, index) => (
                            <div key={index} className="flex items-center gap-4 sm:gap-5">
                              <div className="w-[10px] h-[10px] sm:w-[15px] sm:h-[15px] md:w-[20px] md:h-[20px] bg-primary-accent rounded-xs"></div>
                              <img 
                                src="/images/img_group_107.svg" 
                                alt="List item" 
                                className="w-[53px] h-[10px] sm:w-[79px] sm:h-[15px] md:w-[106px] md:h-[20px]"
                              />
                            </div>
                          ))}
                        </div>
                        
                        {/* Profile Section */}
                        <div className="flex flex-col items-center gap-3 sm:gap-4 md:gap-[18px] mt-6 sm:mt-8 md:mt-11">
                          <img 
                            src="/images/img_ellipse_4.png" 
                            alt="User profile" 
                            className="w-[21px] h-[21px] sm:w-[31px] sm:h-[31px] md:w-[42px] md:h-[42px] rounded-full"
                          />
                          <img 
                            src="/images/img_group_107_blue_gray_900.svg" 
                            alt="Profile details" 
                            className="w-[53px] h-[10px] sm:w-[79px] sm:h-[15px] md:w-[106px] md:h-[20px]"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Middle Card */}
                    <div className="w-full lg:w-auto flex-shrink-0">
                      <div className="flex flex-col gap-4 sm:gap-5 md:gap-[26px]">
                        {/* Top Card */}
                        <div className="bg-primary-border rounded-lg sm:rounded-xl md:rounded-[20px] p-3 sm:p-4 md:p-[18px] pt-4 sm:pt-5 md:pt-6 lg:ml-[58px] lg:h-[230px] lg:w-[250px]">
                          <img 
                            src="/images/img_group_115.png" 
                            alt="Dashboard chart" 
                            className="w-full max-w-[96px] sm:max-w-[144px] md:max-w-[192px] h-auto mx-auto mb-2 sm:mb-3"
                          />
                        </div>
                        
                        {/* Bottom Card */}
                        <div className="bg-primary-border rounded-lg sm:rounded-xl md:rounded-[20px] p-2 sm:p-3 md:p-[14px] pt-4 sm:pt-5 md:pt-6 lg:h-[240px] lg:w-[255px] lg:ml-[58px]">
                          <div className="flex items-center justify-between mb-3 sm:mb-4 md:mb-6 px-1 sm:px-2 ">
                            <img 
                              src="/images/img_group_107.svg" 
                              alt="Chart label" 
                              className="w-[53px] h-[10px] sm:w-[79px] sm:h-[15px] md:w-[106px] md:h-[20px]"
                            />
                            <div className="w-[10px] h-[10px] sm:w-[15px] sm:h-[15px] md:w-[20px] md:h-[20px] bg-primary-accent rounded-xs"></div>
                          </div>
                          <div className="w-full h-[1px] bg-primary-accent mb-3 sm:mb-4 md:mb-6 mx-1 sm:mx-2"></div>
                          <img 
                            src="/images/img_group_132.png" 
                            alt="Dashboard analytics" 
                            className="w-full max-w-[85px] sm:max-w-[127px] md:max-w-[170px] h-auto mx-auto"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Right Card */}
                    <div className="w-full lg:w-auto flex-shrink-0 ">
                      <div className="flex flex-col gap-4 sm:gap-5 md:gap-[26px] lg:pr-[38px]">
                        {/* Top Card with Content */}
                        <div className="bg-primary-border rounded-lg sm:rounded-xl md:rounded-[20px] p-1 sm:p-1.5 md:p-[6px] pt-2 sm:pt-3 md:pt-4 lg:h-[370px] lg:w-[250px] ">
                          <div className="px-2 sm:px-3 md:px-[14px] py-1 sm:py-1.5 md:py-2">
                            <div className="flex items-center justify-between mb-3 sm:mb-4 md:mb-6">
                              <img 
                                src="/images/img_group_107.svg" 
                                alt="Header info" 
                                className="w-[53px] h-[10px] sm:w-[79px] sm:h-[15px] md:w-[106px] md:h-[20px]"
                              />
                              <div className="w-[10px] h-[10px] sm:w-[15px] sm:h-[15px] md:w-[20px] md:h-[20px] bg-primary-accent rounded-xs"></div>
                            </div>
                            <img 
                              src="/images/img_group_108.png" 
                              alt="Data visualization" 
                              className="w-full max-w-[96px] sm:max-w-[144px] md:max-w-[192px] h-auto mb-1 sm:mb-1"
                            />
                            
                            {/* Scrollable Content with Overlay */}
                            <div className="relative">
                              <div className="space-y-1">
                                <img 
                                  src="/images/img_group_108.png" 
                                  alt="Chart data" 
                                  className="w-full max-w-[96px] sm:max-w-[144px] md:max-w-[192px] h-auto"
                                />
                                <img 
                                  src="/images/img_group_108.png" 
                                  alt="Chart data" 
                                  className="w-full max-w-[96px] sm:max-w-[144px] md:max-w-[192px] h-auto"
                                />
                                <img 
                                  src="/images/img_group_108.png" 
                                  alt="Chart data" 
                                  className="w-full max-w-[96px] sm:max-w-[144px] md:max-w-[192px] h-auto"
                                />
                              </div>
                              {/* Gradient Overlay */}
                              <div 
                                className="absolute  inset-0 w-full h-full"
                                style={{ background: 'linear-gradient(180deg, #222228 0%, #22222800 100%)' }}
                              ></div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Bottom Empty Card */}
                        <div className="bg-primary-border rounded-lg sm:rounded-xl md:rounded-[20px] w-full h-[51px] sm:h-[76px] md:h-[102px]"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Gradient Line */}
            <div className="relative right-0 top-0 w-[1px] h-[384px] sm:h-[576px] md:h-[7px] lg:mb-[-830px]" style={{ background: 'linear-gradient(180deg, #404047 0%, #40404700 100%)' }}></div>
          </div>

          {/* Bottom Section with Subtitle */}
          <div className="w-full bg-cover bg-center relative" style={{ backgroundImage: 'url(/images/img_subtract.png)' }}>
            <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-14 pt-32 sm:pt-48 md:pt-64 pb-8 sm:pb-12 md:pb-76">
             
            </div>
          </div>
        </section>

         <div className="text-start lg:ml-[18px]">
                <h2 
                  className="text-text-primary -mt-2 sm:-mt-3 md:-mt-[14px] ml-8 sm:ml-12 md:ml-[204px]"
                  style={{
                    fontSize: '50px',
                    fontFamily: 'Poppins',
                    fontWeight: '600',
                    lineHeight: '66px',
                    '@media (min-width: 640px)': {
                      fontSize: '36px',
                      lineHeight: '54px'
                    },
                    '@media (min-width: 1024px)': {
                      fontSize: '48px',
                      lineHeight: '72px'
                    }
                  }}
                >
                  Feature Boxes
                </h2>
              </div>

        {/* Feature Description */}
        <section className="w-full py-1 sm:py-1.5 md:py-2">
          <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-14 md:ml-[165px]">
            <p 
              className="text-text-secondary max-w-2xl"
              style={{
                fontSize: '20px',
                fontFamily: 'Poppins',
                fontWeight: '400',
                lineHeight: '28px',
                textAlign: 'left',
                className: ""
              }}
            >
              A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem
            </p>
          </div>
        </section>

        {/* Feature Boxes Grid */}
        <section className="w-full py-6 sm:py-8 md:py-8 lg:mx-[-80px]">
          <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-14">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-y-14 lg:gap-x-45 max-w-[1110px] mx-auto">
              {/* Feature Box 1 */}
              <div className="bg-primary-darkest rounded-lg sm:rounded-xl md:rounded-[20px] p-6 sm:p-8 md:p-11 text-center lg:w-[380px] lg:h-[400px]">
                <div className="bg-primary-border rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-7 w-fit mx-auto mb-6 sm:mb-8 md:mb-10 ">
                  <img 
                    src="/images/img_vector.svg" 
                    alt="Customization icon" 
                    className="w-[22px] h-[22px] sm:w-[33px] sm:h-[33px] md:w-[44px] md:h-[44px]"
                  />
                </div>
                <h3 
                  className="text-text-primary mb-2 sm:mb-3 md:mb-4"
                  style={{
                    fontSize: '20px',
                    fontFamily: 'Poppins',
                    fontWeight: '600',
                    lineHeight: '30px'
                  }}
                >
                  Fully Customizable
                </h3>
                <p 
                  className="text-text-secondary"
                  style={{
                    fontSize: '15px',
                    fontFamily: 'Poppins',
                    fontWeight: '400',
                    lineHeight: '28px'
                  }}
                >
                  A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem
                </p>
              </div>

              {/* Feature Box 2 */}
              <div className="bg-primary-darkest rounded-lg sm:rounded-xl md:rounded-[20px] p-6 sm:p-8 md:p-11 text-center lg:w-[380px] lg:h-[400px]">
                <div className="bg-primary-border rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-7 w-fit mx-auto mb-6 sm:mb-8 md:mb-10">
                  <img 
                    src="/images/img_vector_white_a700.svg" 
                    alt="Feature icon" 
                    className="w-[22px] h-[22px] sm:w-[33px] sm:h-[33px] md:w-[44px] md:h-[44px]"
                  />
                </div>
                <h3 
                  className="text-text-primary mb-2 sm:mb-3 md:mb-4"
                  style={{
                    fontSize: '20px',
                    fontFamily: 'Poppins',
                    fontWeight: '600',
                    lineHeight: '30px'
                  }}
                >
                  Fully Customizable
                </h3>
                <p 
                  className="text-text-secondary"
                  style={{
                    fontSize: '14px',
                    fontFamily: 'Poppins',
                    fontWeight: '400',
                    lineHeight: '28px'
                  }}
                >
                  A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem
                </p>
              </div>

              {/* Feature Box 3 */}
              <div className="bg-primary-darkest rounded-lg sm:rounded-xl md:rounded-[20px] p-6 sm:p-8 md:p-11 text-center lg:w-[380px] lg:h-[400px]">
                <div className="bg-primary-border rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-7 w-fit mx-auto mb-6 sm:mb-8 md:mb-10">
                  <img 
                    src="/images/img_vector_white_a700_46_44.svg" 
                    alt="Feature icon" 
                    className="w-[22px] h-[23px] sm:w-[33px] sm:h-[34px] md:w-[44px] md:h-[46px]"
                  />
                </div>
                <h3 
                  className="text-text-primary mb-2 sm:mb-3 md:mb-4"
                  style={{
                    fontSize: '20px',
                    fontFamily: 'Poppins',
                    fontWeight: '600',
                    lineHeight: '30px'
                  }}
                >
                  Fully Customizable
                </h3>
                <p 
                  className="text-text-secondary"
                  style={{
                    fontSize: '14px',
                    fontFamily: 'Poppins',
                    fontWeight: '400',
                    lineHeight: '28px'
                  }}
                >
                  A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem
                </p>
              </div>

              {/* Feature Box 4 */}
              <div className="bg-primary-darkest rounded-lg sm:rounded-xl md:rounded-[20px] p-6 sm:p-8 md:p-11 text-center lg:w-[380px] lg:h-[400px]">
                <div className="bg-primary-border rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-7 w-fit mx-auto mb-6 sm:mb-8 md:mb-10">
                  <img 
                    src="/images/img_vector_white_a700_44_44.svg" 
                    alt="Feature icon" 
                    className="w-[22px] h-[22px] sm:w-[33px] sm:h-[33px] md:w-[44px] md:h-[44px]"
                  />
                </div>
                <h3 
                  className="text-text-primary mb-2 sm:mb-3 md:mb-4"
                  style={{
                    fontSize: '20px',
                    fontFamily: 'Poppins',
                    fontWeight: '600',
                    lineHeight: '30px'
                  }}
                >
                  Fully Customizable
                </h3>
                <p 
                  className="text-text-secondary"
                  style={{
                    fontSize: '14px',
                    fontFamily: 'Poppins',
                    fontWeight: '400',
                    lineHeight: '28px'
                  }}
                >
                  A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem
                </p>
              </div>

              {/* Feature Box 5 */}
              <div className="bg-primary-darkest rounded-lg sm:rounded-xl md:rounded-[20px] p-6 sm:p-8 md:p-11 text-center lg:w-[380px] lg:h-[400px]">
                <div className="bg-primary-border rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-7 w-fit mx-auto mb-6 sm:mb-8 md:mb-10">
                  <img 
                    src="/images/img_vector_46_44.svg" 
                    alt="Feature icon" 
                    className="w-[22px] h-[23px] sm:w-[33px] sm:h-[34px] md:w-[44px] md:h-[46px]"
                  />
                </div>
                <h3 
                  className="text-text-primary mb-2 sm:mb-3 md:mb-4"
                  style={{
                    fontSize: '20px',
                    fontFamily: 'Poppins',
                    fontWeight: '600',
                    lineHeight: '30px'
                  }}
                >
                  Fully Customizable
                </h3>
                <p 
                  className="text-text-secondary"
                  style={{
                    fontSize: '14px',
                    fontFamily: 'Poppins',
                    fontWeight: '400',
                    lineHeight: '28px'
                  }}
                >
                  A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem
                </p>
              </div>

              {/* Feature Box 6 */}
              <div className="bg-primary-darkest rounded-lg sm:rounded-xl md:rounded-[20px] p-6 sm:p-8 md:p-11 text-center lg:w-[380px] lg:h-[400px]">
                <div className="bg-primary-border rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-7 w-fit mx-auto mb-6 sm:mb-8 md:mb-10">
                  <img 
                    src="/images/img_vector_white_a700_42_44.svg" 
                    alt="Feature icon" 
                    className="w-[22px] h-[21px] sm:w-[33px] sm:h-[31px] md:w-[44px] md:h-[42px]"
                  />
                </div>
                <h3 
                  className="text-text-primary mb-2 sm:mb-3 md:mb-4"
                  style={{
                    fontSize: '20px',
                    fontFamily: 'Poppins',
                    fontWeight: '600',
                    lineHeight: '30px'
                  }}
                >
                  Fully Customizable
                </h3>
                <p 
                  className="text-text-secondary"
                  style={{
                    fontSize: '14px',
                    fontFamily: 'Poppins',
                    fontWeight: '400',
                    lineHeight: '28px'
                  }}
                >
                  A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="w-full py-6 sm:py-8 md:py-[30px]">
          <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-14">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-6 sm:gap-8 md:gap-[22px] max-w-[1144px] mx-auto">
              
              {/* Testimonial Circular Design */}
              <div className="relative w-full max-w-[340px] sm:max-w-[509px] md:max-w-[750px] aspect-square">
                {/* Outer border */}
                <div className="absolute inset-0 w-full h-full rounded-full border border-border-secondary"></div>
                
                {/* Inner circles and content */}
                <div className="relative w-full h-full p-8 sm:p-12 md:p-16">
                  <div className="relative w-full h-full">
                    {/* Multiple circular borders */}
                    <div className="absolute inset-[15%] border border-primary-border rounded-full"></div>
                    <div className="absolute inset-[25%] border border-primary-border rounded-full"></div>
                    <div className="absolute inset-[35%] border border-primary-border rounded-full"></div>
                    <div className="absolute inset-[45%] border border-primary-border rounded-full"></div>
                    
                    {/* Center circle */}
                    <div className="absolute inset-[45%] bg-primary-card rounded-full"></div>
                    
                    {/* Floating profile images */}
                    <img 
                      src="/images/img_group_124.png" 
                      alt="User testimonial" 
                      className="absolute top-[14%] left-[58%] w-[16px] h-[16px] sm:w-[24px] sm:h-[24px] md:w-[32px] md:h-[32px]"
                    />
                    <img 
                      src="/images/img_ellipse_11.png" 
                      alt="User profile" 
                      className="absolute top-[25%] left-[16%] w-[33px] h-[33px] sm:w-[49px] sm:h-[49px] md:w-[66px] md:h-[66px] rounded-full"
                    />
                    <img 
                      src="/images/img_ellipse_9.png" 
                      alt="User profile" 
                      className="absolute top-[30%] right-[12%] w-[33px] h-[33px] sm:w-[49px] sm:h-[49px] md:w-[66px] md:h-[66px] rounded-full"
                    />
                    
                    {/* Central vector icon */}
                    <img 
                      src="/images/img_vector_white_a700_52_64.svg" 
                      alt="Central icon" 
                      className="absolute top-[45%] left-[45%] w-[32px] h-[26px] sm:w-[48px] sm:h-[39px] md:w-[64px] md:h-[52px]"
                    />
                    
                    <img 
                      src="/images/img_group_124.png" 
                      alt="User testimonial" 
                      className="absolute bottom-[35%] left-[15%] w-[16px] h-[16px] sm:w-[24px] sm:h-[24px] md:w-[32px] md:h-[32px]"
                    />
                    <img 
                      src="/images/img_ellipse_10.png" 
                      alt="User profile" 
                      className="absolute bottom-[22%] left-[20%] w-[33px] h-[33px] sm:w-[49px] sm:h-[49px] md:w-[66px] md:h-[66px] rounded-full"
                    />
                    <img 
                      src="/images/img_group_124.png" 
                      alt="User testimonial" 
                      className="absolute bottom-[20%] right-[25%] w-[16px] h-[16px] sm:w-[24px] sm:h-[24px] md:w-[32px] md:h-[32px]"
                    />
                  </div>
                </div>
              </div>

              {/* Testimonial Content */}
              <div className="flex flex-col items-start w-full lg:w-[60%] text-center lg:text-left">
                <h2 
                  className="text-text-primary mb-3 sm:mb-4 md:mb-3"
                  style={{
                    fontSize: '50px',
                    fontFamily: 'Poppins',
                    fontWeight: '600',
                    lineHeight: '68px',
                    '@media (min-width: 640px)': {
                      fontSize: '36px',
                      lineHeight: '48px'
                    },
                    '@media (min-width: 1024px)': {
                      fontSize: '48px',
                      lineHeight: '64px'
                    }
                  }}
                >
                  We are here to guide and help you at all times
                </h2>
                <p 
                  className="text-text-secondary mb-8 sm:mb-10 md:mt-6 md:mb-10 max-w-md mx-auto lg:mx-0"
                  style={{
                    fontSize: '18px',
                    fontFamily: 'Poppins',
                    fontWeight: '400',
                    lineHeight: '28px'
                  }}
                >
                  A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem
                </p>
                <Button
                  text="Download"
                  text_font_size="18"
                  text_color="#ffffff"
                  fill_background="linear-gradient(131deg, #ff9797 0%, #8053ff 100%)"
                  fill_background_color=""
                  border_border_radius="5px"
                  padding="10px 28px"
                  layout_width=""
                  margin=""
                  position=""
                  variant=""
                  size=""
                  className="lg:w-[160px] lg:h-[50px] "
                  onClick={handleDownloadClick}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Companies Section */}
        <section className="w-full py-16 sm:py-20 md:py-2 lg:h-[800px]" style={{ backgroundColor: '#17171b' }}>
          <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-14 ">
            <div className="flex flex-col items-center gap-12 sm:gap-16 md:gap-[70px] max-w-[1110px] mx-auto lg:w-[700px] relative lg:mt-[120px]">
              <h2 
                className="text-center text-text-primary"
                style={{
                  fontSize: '55px',
                  fontFamily: 'Poppins',
                  fontWeight: '600',
                  lineHeight: '73px',
                  '@media (min-width: 640px)': {
                    fontSize: '36px',
                    lineHeight: '54px'
                  },
                  '@media (min-width: 1024px)': {
                    fontSize: '48px',
                    lineHeight: '72px'
                  }
                }}
              >
                Companies we Worked With in Since 2015
              </h2>
              
              {/* Company Logos Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 md:gap-[30px] lg:w-[1250px] w-full lg:gap-x-[-34px]">
                <div className="bg-black rounded-sm sm:rounded-md p-4 sm:p-5 md:p-[26px] md:w-[180px] md:h-[105px] flex items-center justify-center ">
                  <img 
                    src="/images/img_frame.svg" 
                    alt="Partner company logo" 
                    className="w-[50px] h-[18px] sm:w-[75px] sm:h-[27px] md:w-[400px] md:h-[44px]"
                  />
                </div>
                <div className="bg-black md:w-[180px] md:h-[105px] bg-primary-dark rounded-sm sm:rounded-md p-4 sm:p-6 md:p-8 flex items-center justify-center">
                  <img 
                    src="/images/img_group_96.svg" 
                    alt="Partner company logo" 
                    className="w-[47px] h-[12px] sm:w-[70px] sm:h-[18px] md:w-[94px] md:h-[24px]"
                  />
                </div>
                <div className="bg-black md:w-[180px] md:h-[105px] bg-primary-dark rounded-sm sm:rounded-md p-4 sm:p-6 md:p-[26px] flex items-center justify-center">
                  <img 
                    src="/images/img_group_97.svg" 
                    alt="Partner company logo" 
                    className="w-[52px] h-[10px] sm:w-[78px] sm:h-[15px] md:w-[104px] md:h-[20px]"
                  />
                </div>
                <div className="bg-black md:w-[180px] md:h-[105px] bg-primary-dark rounded-sm sm:rounded-md p-4 sm:p-6 md:p-8 flex items-center justify-center">
                  <img 
                    src="/images/img_group_98.svg" 
                    alt="Partner company logo" 
                    className="w-[42px] h-[9px] sm:w-[63px] sm:h-[13px] md:w-[84px] md:h-[18px]"
                  />
                </div>
                <div className="bg-black md:w-[180px] md:h-[105px] bg-primary-dark rounded-sm sm:rounded-md p-4 sm:p-6 md:p-8 flex items-center justify-center">
                  <img 
                    src="/images/img_group_99.svg" 
                    alt="Partner company logo" 
                    className="w-[34px] h-[12px] sm:w-[51px] sm:h-[18px] md:w-[68px] md:h-[24px]"
                  />
                </div>
                <div className="bg-black md:w-[180px] md:h-[105px] bg-primary-dark rounded-sm sm:rounded-md p-4 sm:p-6 md:p-8 flex items-center justify-center">
                  <img 
                    src="/images/img_group_100.svg" 
                    alt="Partner company logo" 
                    className="w-[35px] h-[11px] sm:w-[52px] sm:h-[16px] md:w-[70px] md:h-[22px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-8 sm:py-12 md:py-16 relative lg:top-[-300px]">
          <div className="w-full max-w-[1540px] lg:w-[1220px] mx-auto px-4 sm:px-6 lg:px-14">
            <div className="relative max-h-[480px] mx-auto rounded-3xl sm:rounded-4xl p-3 sm:p-4 md:p-[18px]" style={{ background: 'linear-gradient(174deg, #ff9797 0%, #8053ff 100%)' }}>
              <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-0">
                
                {/* Left Content */}
                <div className="w-full lg:w-[42%] text-start lg:text-left  px-4 sm:px-6 md:px-8 py-16 sm:py-20 md:py-[106px] lg:w-[600px]">
                  <p 
                    className="text-text-primary relative lg:left-[-220px] mb-4 sm:mb-6 ml-0 "
                    style={{
                      fontSize: '24px',
                      fontFamily: 'Poppins',
                      fontWeight: '400',
                      lineHeight: '30px'
                    }}
                  >
                    Love our Our Tool?
                  </p>
                  <h2 
                    className="text-text-primary relative lg:left-[-220px] mb-8 sm:mb-12 md:mb-16"
                    style={{
                      fontSize: '50px',
                      fontFamily: 'Poppins',
                      fontWeight: '600',
                      lineHeight: '62px',
                      '@media (min-width: 640px)': {
                        fontSize: '36px',
                        lineHeight: '49px'
                      },
                      '@media (min-width: 1024px)': {
                        fontSize: '48px',
                        lineHeight: '65px'
                      }
                    }}
                  >
                    Fell Free to Join our 15 Days Free Trial
                  </h2>
                  <div className="ml-0 lg:ml-0 relative lg:left-[-220px] ">
                    <Button
                      text="Download Template"
                      text_font_size="14"
                      text_color="#ffffff"
                      fill_background=""
                      fill_background_color="#000000"
                      border_border_radius="5px"
                      padding="10px 28px"
                      layout_width=""
                      margin=""
                      position=""
                      variant=""
                      size=""
                      className="lg:pt-[12px]"
                      onClick={handleDownloadClick}
                    />
                  </div>
                </div>

                {/* Right Image */}
                <div className="w-full absolute lg:ml-[510px] lg:w-[600px] lg:h-[600px] flex justify-center lg:justify-end -ml-0 lg:-ml-10">
                  <img 
                    src="/images/img_frame_gray_900_05.svg" 
                    alt="Free trial illustration" 
                    className="lg:w-[600px] lg:h-[600px]  sm:w-[415px] md:w-[554px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="w-full py-8 sm:py-12 md:py-16 lg:py-1 relative lg:mt-[-300px]">
          <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-14">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-11 max-w-[1224px] mx-auto">
              
              {/* Left Visual */}
              <div className="relative w-full max-w-[300px] sm:max-w-[440px] md:max-w-[582px] aspect-square">
                {/* Main circle */}
                <img 
                  src="/images/img_group_133.svg" 
                  alt="Contact visualization" 
                  className="w-full max-w-[270px] sm:max-w-[405px] md:max-w-[540px] h-auto mx-auto mt-4 sm:mt-6 md:mt-7"
                />
                
                {/* Floating elements */}
                <div className="absolute bottom-8 sm:bottom-12 md:bottom-16 right-0 w-[48px] h-[48px] sm:w-[72px] sm:h-[72px] md:w-[96px] md:h-[96px] rounded-full shadow-lg" style={{ background: 'linear-gradient(177deg, #494955 0%, #141414 100%)', boxShadow: '0px 4px 20px #888888ff' }}></div>
                <div className="absolute top-0 left-0 w-[32px] h-[32px] sm:w-[48px] sm:h-[48px] md:w-[64px] md:h-[64px] rounded-full shadow-lg" style={{ background: 'linear-gradient(177deg, #494955 0%, #141414 100%)', boxShadow: '0px 4px 20px #888888ff' }}></div>
              </div>

              {/* Right Content */}
              <div className="w-full lg:w-auto lg:flex-1 max-w-2xl text-center lg:text-left mt-4 sm:mt-6 md:mt-7">
                <h2 
                  className="text-text-primary mb-4 sm:mb-5 md:mb-5"
                  style={{
                    fontSize: '60px',
                    fontFamily: 'Poppins',
                    fontWeight: '600',
                    lineHeight: '36px',
                    '@media (min-width: 640px)': {
                      fontSize: '36px',
                      lineHeight: '54px'
                    },
                    '@media (min-width: 1024px)': {
                      fontSize: '48px',
                      lineHeight: '72px'
                    }
                  }}
                >
                  Get In Touch
                </h2>
                <p 
                  className="text-text-secondary mb-6 sm:mb-7 md:mb-7 max-w-lg mx-auto lg:mx-0"
                  style={{
                    fontSize: '19px',
                    fontFamily: 'Poppins',
                    fontWeight: '400',
                    lineHeight: '28px'
                  }}
                >
                  A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem
                </p>
                
                {/* Success/Error Messages */}
                {submitSuccess && (
                  <div className="mb-4 p-4 rounded-lg animate-fade-in" style={{ backgroundColor: '#1a3a1a', border: '1px solid #4ade80' }}>
                    <p className="text-green-400 text-sm" style={{ fontFamily: 'Poppins' }}>
                      ✓ Message sent successfully! Your details have been saved.
                    </p>
                  </div>
                )}
                
                {submitError && (
                  <div className="mb-4 p-4 rounded-lg animate-fade-in" style={{ backgroundColor: '#2d1515', border: '1px solid #ff4444' }}>
                    <p className="text-red-400 text-sm" style={{ fontFamily: 'Poppins' }}>
                      {submitError}
                    </p>
                  </div>
                )}
                
                {/* Contact Form */}
                <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4 md:space-y-[18px] max-w-md mx-auto lg:mx-0  z-1">
                  <EditText
                    placeholder="Your Email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e?.target?.value)}
                    className="w-full lg:h-[55px]"
                    layout_width=""
                    padding=""
                    position=""
                    variant=""
                    size=""
                    required
                  />
                  
                  <EditText
                    placeholder="Name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e?.target?.value)}
                    className="w-full lg:h-[55px] z-1"
                    layout_width=""
                    padding=""
                    position=""
                    variant=""
                    size=""
                    required
                  />
                  
                  <TextArea
                    placeholder="Name"
                    value={message}
                    onChange={(e) => setMessage(e?.target?.value)}
                    rows={6}
                    className="w-full lg:h-[180px]"
                    layout_width=""
                    padding=""
                    position=""
                    variant=""
                    size=""
                    required
                  />
                  
                  <Button
                    text="Get in Touch"
                    text_font_size="14"
                    text_color="#ffffff"
                    fill_background="linear-gradient(131deg, #ff9797 0%, #8053ff 100%)"
                    fill_background_color=""
                    border_border_radius="5px"
                    padding="10px 28px"
                    type="submit"
                    layout_width=""
                    margin=""
                    position=""
                    variant=""
                    size=""
                    className="lg:h-[50px] lg:w-[150px]"
                  />
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <Footer className="" />
      </main>
    </>
  );
};

export default Home;