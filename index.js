function fetchBooks() {
  return fetch("https://anapioficeandfire.com/api/books")
    .then((resp) => resp.json());
}

function renderBooks(books) {
  var main = document.querySelector('main');
  books.forEach(function (book) {
    var h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
    .then((data) => {
      renderBooks(data);
    });
});
