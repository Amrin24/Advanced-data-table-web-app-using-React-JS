// Function to measure and report web vitals
const reportWebVitals = (onPerfEntry) => {
  // Check if the provided argument is a function
  if (onPerfEntry && typeof onPerfEntry === 'function') {
    // Dynamically import the web-vitals library
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      // Call each of the web-vitals functions with the provided callback
      getCLS(onPerfEntry);  // Cumulative Layout Shift
      getFID(onPerfEntry);  // First Input Delay
      getFCP(onPerfEntry);  // First Contentful Paint
      getLCP(onPerfEntry);  // Largest Contentful Paint
      getTTFB(onPerfEntry); // Time to First Byte
    });
  }
};

// Export the function as the default export
export default reportWebVitals;
