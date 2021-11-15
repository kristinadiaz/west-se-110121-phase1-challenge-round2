// console.log("you got this!");

const gormApi = 'https://distinct-vaulted-freesia.glitch.me/image';
const commentList = document.getElementById('fg-comments');

// do a GET request to the url
fetch(gormApi)
.then((res) => res.json())
.then((json) => {
    imageData = json;
    renderImage(imageData);
});

// add event listener for increasing likes on page
document.getElementById('like-button').addEventListener('click', increaseLikes);

// add event listener to submit a new comment
document.getElementById('comment-form').addEventListener('submit', newComment);

// render image, comments, title, & likes on page
function renderImage(image) {
    const title = document.getElementById('fg-title');
    title.textContent = image.title;

    document.getElementById('fg-image').src = image.image;

    renderComments(image.comments);
    renderLikes(imageData.likes);
};

// create function to increase likes on the page when clicking the thumb icon
function increaseLikes() {
    imageData.likes += 1;
    renderLikes(imageData.likes);
};

// render likes on the page that will go through the render image function
function renderLikes(likes) {
    document.getElementById('fg-likes').textContent = `${likes} likes`;
};

// create function to add a new comment 
function newComment(e) {
    e.preventDefault();
    const newText = e.target.comment.value;

    renderComment( {content: newText} );
    e.target.reset();
}

// need to remove the existing comments on page
function renderComments(comments) {
    commentList.innerHTML = '';
    comments.forEach(renderComment);
};

// need to be able to list comments & new comments
function renderComment(comment) {
    const li = document.createElement('li');
    li.textContent = comment.content;

    commentList.append(li);
};