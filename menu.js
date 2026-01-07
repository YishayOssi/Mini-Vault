import { question } from "readline-sync";

let choice;
export function menu() {
  while (true) {
    choice = question(`
1. Register
2. Login
3. Exit

Choose an option:`);

    switch (choice) {
      case "1":
        const newUserName = question("Give me a new username: ");
        const newPassWord = question("Give me a new password: ");
        break;

      case "2":
        const username = question("Give me a username: ");
        const password = question("Give me a password: ");
        break;

      case "3":
        console.log("Logging out...");
        process.exit();

      default:
        console.log("Please enter a valid number!");
        break;
    }
  }
}