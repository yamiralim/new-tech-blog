// Function to create a new blog post
const handleNewBlogFormSubmit = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#blog-title').value.trim();
    const description = document.querySelector('#blog-desc').value.trim();
  
    if (title && description) {
      const response = await fetch('/api/blogs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, description }),
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to create blog post');
      }
    }
  };
  
  // Function to handle delete button click on a blog post
  const handleBlogDeleteClick = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
      const response = await fetch(`/api/blogs/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to delete blog post');
      }
    }
  };
  
  // Attach event listeners
  const newBlogForm = document.querySelector('.new-blog-form');
  if (newBlogForm) {
    newBlogForm.addEventListener('submit', handleNewBlogFormSubmit);
  }
  
  const blogList = document.querySelector('.blog-list');
  if (blogList) {
    blogList.addEventListener('click', handleBlogDeleteClick);
  }
  