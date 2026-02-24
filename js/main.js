import NotesAPI from "./NotesAPI.js";
import NotesView from "./NotesView.js";

/*
NotesAPI.saveNote({
    //id:493979,
    title: "The title has changed!",
    body: "I am a new note."
});


console.log(NotesAPI.getAllNotes());
*/

const app = document.getElementById("app");
const view = new NotesView(app, {
    onNoteAdd(){
        console.log("Let's add a new note!");
    },
    onNoteEdit(newTitle, newBody){
        console.log(newTitle);
        console.log(newBody);
    }
});

view.updateNoteList(NotesAPI.getAllNotes());