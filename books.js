const submitButton = document.querySelector("#submit");
const addEntryButton = document.querySelector("#add-entry");
const bookInfo = document.querySelector(".add-book");
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

    if(newTitle === "" || newAuthor === "" || newPages === "") {
        alert("Check missing fields!");
        return;
    }

    if(isNaN(parseInt(newPages))){
        alert("Invalid page number");
        return;
    }
    addToLibrary(new Book(newTitle, newAuthor, newPages, newReadStatus));
    clearInputs();
}

function clearInputs() {
    const inputValues = document.querySelectorAll("input");
    const radioButtons = document.querySelectorAll("input[type=radio]");
    inputValues.forEach(input => {
        if(input.value){
            input.value = "";
        }
    });

    radioButtons.forEach(box => box.checked = false);
    toggleVisibility();
}

function toggleVisibility() {
    if (addEntryButton.textContent === "\u002B"){
        addEntryButton.textContent = "\u2212"; //minus symbol
    }else {
        addEntryButton.textContent = "\u002B"; //minus symbol
    }
    bookInfo.classList.toggle("visible");
}

addToLibrary(new Book("The Great Gatsby", "F. Scott Fitzgerald", "218", "Not read"));
addToLibrary(new Book("War and Peace", "Leo Tolstoy", "1,225", "Not read"));

submitButton.addEventListener("click", newEntry);
addEntryButton.addEventListener("click", toggleVisibility);