import {Users} from "../models/usersM.js"
import { findByUsername , add} from "../repository/usersRe.js"

export function register(username, password){
    if(username !== "" && findByUsername(username) === false){
      const user =new Users(username,password)
      add(user)
    }
}
