import{ nanoid} from "nanoid"
class Notes {
        constructor(ownerUsername, text) {
            this.id = nanoid(4)
            this.ownerUsername = ownerUsername; 
            this.text= text; 
            this.createdAt = new Date().toISOString(); }
        }
        const note = new Notes("feh","hgfdzsoisha")
        console.log(note);
        