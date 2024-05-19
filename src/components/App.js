// // App.js
// import React, { useEffect } from 'react';
// import { useLocation } from 'react-router-dom'; // Assuming you're using React Router
// import { GA_TRACKING_ID } from 'src/lib/gtag';


// const App = () => {
//   const location = useLocation(); // React Router's useLocation hook

//   useEffect(() => {
//     const handleRouteChange = (url) => {
//       window.gtag('config', GA_TRACKING_ID, {
//         page_path: url,
//       });
//     };

//     handleRouteChange(location.pathname); // Initial call when component mounts

//     // Subscribe to route changes
//     const unlisten = history.listen((location) => {
//       handleRouteChange(location.pathname);
//     });

//     // Clean up
//     return () => {
//       unlisten(); // Unsubscribe from route changes
//     };
//   }, [location.pathname]);

//   useEffect(() => {
//     // Load Google Analytics script
//     const script = document.createElement('script');
//     script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
//     script.async = true;
//     document.head.appendChild(script);

//     // Initialize Google Analytics
//     window.dataLayer = window.dataLayer || [];
//     function gtag() {
//       window.dataLayer.push(arguments);
//     }
//     gtag('js', new Date());
//     gtag('config', GA_TRACKING_ID, {
//       page_path: location.pathname,
//     });

//     return () => {
//       document.head.removeChild(script); // Clean up script tag when component unmounts
//     };
//   }, []);

//   return null; // This component doesn't render anything
// };

// export default App;
