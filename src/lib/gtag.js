export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS;

// Declare the gtag function on the global window object
window.gtag = function () {

};

// Define the global interface for TypeScript
if (typeof window !== 'undefined') {
  window.gtag = window.gtag || function () {};
}

// Function to send pageview to Google Analytics
export const pageview = (url) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  });
};

// Function to send custom events to Google Analytics
export const event = ({ action, category, label, value }) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value,
  });
};
