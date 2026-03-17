let notes = JSON.parse(localStorage.getItem("notes")) || [];

function displayNotes(){

let list = document.getElementById("notesList");
list.innerHTML = "";

notes.forEach(function(note, index){

let li = document.createElement("li");
li.textContent = note;

let deleteBtn = document.createElement("button");
deleteBtn.textContent = "Delete";

deleteBtn.onclick = function(){
notes.splice(index,1);
localStorage.setItem("notes", JSON.stringify(notes));
displayNotes();
};

li.appendChild(deleteBtn);
list.appendChild(li);

});

}

function addNote(){

let input = document.getElementById("noteInput");
let noteText = input.value;

if(noteText === "") return;

notes.push(noteText);

localStorage.setItem("notes", JSON.stringify(notes));

input.value = "";

displayNotes();

}

displayNotes();