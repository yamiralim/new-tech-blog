const commentFormHandler = async function(event) {
    event.preventDefault();
  
    const blogId = document.querySelector('.new-comment-form').dataset.blogid;
    const commentDescription = document.querySelector('#comment_description').value.trim();
  
    if (commentDescription) {
      await fetch('/api/comments', {
        method: 'POST',
        body: JSON.stringify({
          blog_id: blogId,
          comment_description: commentDescription
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      document.location.reload();
    }
  };
  
  const newCommentForm = document.querySelector('.new-comment-form');
  newCommentForm.addEventListener('submit', commentFormHandler);
  