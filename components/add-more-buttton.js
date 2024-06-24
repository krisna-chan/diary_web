const blury = document.getElementsByClassName('blury'); // blury is a collection
const createNote = document.getElementById('more-note')
const addMore = document.getElementById("add-more");
addMore.addEventListener("click", () => {
    // Loop through each element with class 'blury' and toggle the 'active' class
    Array.from(blury).forEach(element => {
        element.classList.toggle("active-add-more");
    });

    createNote.classList.toggle('active-note')
});

