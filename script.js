const allNotes = [];
var itemToEdit = "";
const addNote = () => {
  if (note.value === "") {
    alert("Fill in something, please");
  } else {
    allNotes.push(note.value);
    note.value = "";
    displayNotes();
  }
};

const displayNotes = () => {
  show.innerHTML = "";
  allNotes.map((note, index) => {
    show.innerHTML += `
      <center>
        <div style="display: flex; justify-content:center; align-items:center;  gap: 4px;">
        <p>${index + 1}. ${note}</p>
        <button onclick='editNote(${JSON.stringify(
          note
        )}, ${index})'>Edit</button>
        <button onclick="deleteNote(${index})">Delete</button>
        </div></center>
        `;
  });
};
const editNote = (item, index) => {
  update.style.display = "block";
  add.style.display = "none";
  note.value = item;
  itemToEdit = index;
};
const updateNote = () => {
  if (note.value === "") {
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
