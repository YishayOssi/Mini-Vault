import { notes } from "../db/notesDB.js";

export function add(note) {
    notes.push(note)
}

export function listByOwner(username) {
    const foundNotes = notes.filter((note) => note.ownerUsername === username)
    return foundNotes
}

export function deleteById(ownerUsername, noteId) {
    const foundIndex = notes.findIndex((note) => note.ownerUsername === ownerUsername && note.id === noteId)
    if (foundIndex !== -1) {
        notes.splice(foundIndex, 1)
        console.log("Deleted");
        return
    }
    console.log("somthing wrong !");
    return
}