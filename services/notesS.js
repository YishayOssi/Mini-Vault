import { Notes } from "../models/notesM.js";
import { notes } from "../db/notesDB.js";
import { add, listByOwner, deleteById } from "../repository/notesR.js";


export function addNote(ownerUsername, text) {
    if (!ownerUsername || !text) {
        console.log("your input is Bad!");
        return false
    }
    const newNot = new Notes(ownerUsername, text)
    add(newNot)
}

export function listNotes(ownerUsername) {
    if (!ownerUsername) {
        console.log("your input ownerUsername is Bad!")
        return false
    }
    return listByOwner(ownerUsername)
}

export function deleteNote(ownerUsername, noteId) {
    if (!ownerUsername || !noteId) {
        console.log(("your input is Bad!"));
        return false
    }
    return deleteById(ownerUsername, noteId)
}