const blury = document.getElementsByClassName('blury'); // blury is a collection
const createNote = document.getElementById('more-note')
const addMore = document.getElementById("add-more");
addMore.addEventListener("click", () => {
    // Loop through each element with class 'blury' and toggle the 'active' class
    Array.from(blury).forEach(element => {
        element.classList.toggle("active-add-more");
    });
    addMore.classList.add('hidden');

    createNote.classList.toggle('active-note')
});

let textInput = document.getElementById("textInput");
let submitButton = document.getElementById("submit");
let errorMsg = document.getElementById("msg")

function validation(){
    if(textInput.value === ""){
        errorMsg.innerHTML = "Title must not be empty"
    }else{
        console.log("success")
        errorMsg.innerHTML = ""
    }
}
submitButton.addEventListener("click", () => {
    validation();
})


let closeModal = document.getElementById("close")
closeModal.addEventListener("click" , () => {
    createNote.classList.toggle('active-note')
    Array.from(blury).forEach(element => {
        element.classList.toggle("active-add-more");
    });

    addMore.classList.toggle('hidden');

})
