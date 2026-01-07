import { users } from "../db/usersDB.js";


export function findByUsername(username) {
    const found = users.find((user)=> user.username === username)
    if (!found) {
        return false
    }
    return found
}  
export function isExists(username) {
    const found = users.find((user)=> user.username === username)
    if (!found) {
        return false
    }
    return true
}
export function add(user) {
    users.push(user)
}