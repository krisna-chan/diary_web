//-------- |Get elements by class name and ID| --------//
const blury = document.getElementsByClassName('blury');
const moreNote = document.getElementById('more-note');
const addMore = document.getElementById("add-more");

addMore.addEventListener("click", () => {
    Array.from(blury).forEach(element => {
        element.classList.toggle("active-add-more");
    });
    textInput.value = "";

    createNote.classList.toggle('active-note')
    addMore.classList.add('hidden');
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

//-------- |Create note elements dynamically| --------//
function createNote() {
    noteContainer.innerHTML = "";
    data.forEach((note, index) => {
        noteContainer.innerHTML += `
            <div class="note-content">
                <div class="note-logo">
                    <img src="./assets/download.png" width="80" height="80" alt="logo" draggable="false">
                    <h3 class="note-title">${note.title}</h3>
                    <form action="" class="note-title">
                    </form>
                    </div>
                    </div>
                    <div class="crud-function">
                        <button type="button" onclick="deleteNoteData(${index})">
                            <img src="../assets/icons/trash.svg" alt="delete note">
                        </button>
                        <button type="button" onclick="prepareEditNoteData(${index})">
                            <img src="../assets/icons/pen.svg" alt="edit note">
                        </button>
                    </div>
        `;
    });
}

//-------- |Push new data to the array and update localStorage| --------//
function pushData() {
    data.push({
        title: textInput.value,
        content: noteContent.value,
    });
    localStorage.setItem('data', JSON.stringify(data));
    createNote();
}

//-------- |Prepare to edit note data| --------//
function prepareEditNoteData(index) {
    const note = data[index];
    textInput.value = note.title;
    noteContent.value = note.content;
    editingIndex = index;
    moreNote.classList.add('active-note');
    Array.from(blury).forEach(element => {
        element.classList.toggle("active-add-more");
    });
    addMore.classList.toggle('hidden');

}