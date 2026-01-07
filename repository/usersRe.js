import { users } from "../db/usersDB.js";


export function findByUsername(username) {
    const found = users.find((user)=> user.username === username)
    if (!found) {
        return false
    }
    return found
}  
export function exists(username) {
    const found = users.find((user)=> user.username === username)
    if (!found) {
        return true
    }
    return false
}
export function add(user) {
    users.push(user)
}