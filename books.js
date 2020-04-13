const submitButton = document.querySelector("input[id=submit]");
let book = [];

function Book(name, author, pages, haveRead) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.haveRead = haveRead;
}

function addToLibrary(newBook) {
    book.push(newBook);
    render(newBook);
}

function render(newBook) {
    const table = document.querySelector("table");
    const newRow = table.insertRow();
    const titleCell = newRow.insertCell();
    const authorCell = newRow.insertCell();
    const pagesCell = newRow.insertCell();
    const haveReadCell = newRow.insertCell();

    titleCell.innerText = newBook.name;
    authorCell.innerText = newBook.author;
    pagesCell.innerText = newBook.pages;
    haveReadCell.innerText = newBook.haveRead;
}

function newEntry() {
    const newTitle = document.getElementById("title").value;
    const newAuthor = document.getElementById("author").value;
    const newPages = document.getElementById("pages").value;
    const newReadStatus = document.getElementById("have-read").checked? "Read" : "Not read";

    addToLibrary(new Book(newTitle, newAuthor, newPages, newReadStatus));
}

addToLibrary(new Book("The Great Gatsby", "F. Scott Fitzgerald", "218", false));
addToLibrary(new Book("War and Peace", "Leo Tolstoy", "1,225", false));

submitButton.addEventListener("click", newEntry);