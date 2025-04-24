const allNotes = [];
var itemToEdit = "";
const addNote = () => {
  if (noteTaken.value === "") {
    alert("Fill in something, please");
  } else {
    allNotes.push(noteTaken.value);
    noteTaken.value = "";
    displayNotes();
  }
};

const displayNotes = () => {
  show.innerHTML = "";
  show.innerHTML = "<h3>All notes</h3>";

  allNotes.map((note, index) => {
    show.innerHTML += `
      
        <div>
        <p>${index + 1}. ${note}</p>
        <button onclick='editNote(${JSON.stringify(
          note
        )}, ${index})' data-bs-toggle="modal"
      data-bs-target="#exampleModal">Edit</button>
        <button onclick="deleteNote(${index})">Delete</button>
        </div>
        `;
  });
};
const editNote = (item, index) => {
 
  note.value = item;
  itemToEdit = index;
};
const updateNote = () => {
  if (noteTaken.value === "") {
    alert("Fill in something, please");
  } else {
    update.style.display = "none";
    add.style.display = "block";
    allNotes.splice(itemToEdit, 1, note.value);
    displayNotes();
    note.value = "";
  }
};

const deleteNote = (index) => {
  const confirmMsg = confirm("Are you sure you want to delete");
  console.log(confirmMsg);

  if (confirmMsg == true) {
    allNotes.splice(index, 1);
    displayNotes();
  } else {
    displayNotes();
  }
};
