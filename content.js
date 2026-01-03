// Wait for the page to be fully loaded
window.addEventListener('load', function() {
  // Find the prompt input field
  // The input field typically has a textarea or input element
  const focusInput = () => {
    // Try to find the textarea element
    const textarea = document.querySelector('textarea');
    if (textarea) {
      textarea.focus();
      console.log('Comet Auto-Focus: Input field focused');
      return true;
    }
    
    // Try to find any input field
    const input = document.querySelector('input[type="text"]');
    if (input) {
      input.focus();
      console.log('Comet Auto-Focus: Input field focused');
      return true;
    }
    
    return false;
  };
  
  // Try to focus immediately
  if (!focusInput()) {
    // If not found, wait a bit and try again
    setTimeout(focusInput, 100);
    setTimeout(focusInput, 500);
    setTimeout(focusInput, 1000);
  }
});

// Also try when the document is ready
if (document.readyState === 'complete') {
  const textarea = document.querySelector('textarea');
  if (textarea) {
    textarea.focus();
  }
}
