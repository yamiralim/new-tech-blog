const logout = async () => {
    try {
      const response = await fetch('/api/users/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (!response.ok) {
        throw new Error(response.statusText);
      }
  
      document.location.replace('/');
    } catch (err) {
      console.error(err);
      alert('Failed to log out');
    }
  };
  
  document.querySelector('#logout').addEventListener('click', logout);
  