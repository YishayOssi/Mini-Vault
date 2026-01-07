import{ nanoid} from "nanoid"
export class Users {
        constructor(username, password) {
            this.id =nanoid(4)
            this.username = username; 
            this.password = password; 
            this.createdAt = new Date().toISOString(); }
        }
