import { Users } from "../models/usersM.js"
import { isExists, add, findByUsername } from "../repository/usersRe.js"


export function register(username, password) {
  if (!username || !password || isExists(username) === true) {
    console.log("username alrady exists");
    return false
  }
  const user = new Users(username, password)
  add(user)
}

export function login(username, password) {
  if (!username || !password) {
    console.log("username not exists")
    return false
  }
  return findByUsername(username)
}
