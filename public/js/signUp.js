const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const username = document.querySelector('#username-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
  
    if (username && password) {
      try {
        const response = await fetch('/api/users', {
          method: 'POST',
          body: JSON.stringify({ username, password }),
          headers: { 'Content-Type': 'application/json' },
        });
  
        if (response.ok) {
          document.location.replace('/dashboard');
        } else {
          throw new Error('Something went wrong with signing up.');
        }
      } catch (err) {
        alert(err.message);
      }
    }
  };
  
  const signupForm = document.querySelector('.signup-form');
  if (signupForm) {
    signupForm.addEventListener('submit', signupFormHandler);
  }
  