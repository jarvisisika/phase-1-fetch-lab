

function fetchBooks() {
  return fetch('https://anapioficeandfire.com/api/books')
    .then(response => response.json())
    .then(data => renderBooks(data))
    .catch(error => console.error('Error fetching books:', error));
}


function renderBooks(data) {
  const bookList = document.querySelector('#book-list');

  data.forEach(book => {
    const listItem = document.createElement('li');
    listItem.textContent = book.name;
    bookList.appendChild(listItem);
  });
}
