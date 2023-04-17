const loginFormHandler = async (event) => {
    event.preventDefault();
  
    const username = document.querySelector('#username-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    if (!username || !password) return;
  
    try {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        throw new Error(response.statusText);
      }
    } catch (err) {
      alert(err.message);
    }
  };
  
  document.querySelector('.login-form').addEventListener('submit', loginFormHandler);
  