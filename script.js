const blogForm = document.getElementById('blogForm');
const blogPosts = document.getElementById('blogPosts');

blogForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const title = document.getElementById('title').value;
  const content = document.getElementById('content').value;

  createPost(title, content);

  blogForm.reset();
});

function createPost(title, content) {
  const postDiv = document.createElement('div');
  postDiv.classList.add('blog-post');
  postDiv.style.opacity = '0';

  const titleElement = document.createElement('h2');
  titleElement.textContent = title;

  const contentElement = document.createElement('p');
  contentElement.textContent = content;

  postDiv.appendChild(titleElement);
  postDiv.appendChild(contentElement);

  blogPosts.appendChild(postDiv);

  // Adding animation to the new blog post
  setTimeout(function() {
    postDiv.style.opacity = '1';
    postDiv.style.transform = 'translateY(0)';
  }, 100);
}
