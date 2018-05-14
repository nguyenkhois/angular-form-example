export class User {
    private name: string;
    private email: string;

    constructor(inputName, inputEmail) {
        this.name = inputName;
        this.email = inputEmail;
    }
}

export class UserList {
    private users: User[];

    constructor(inputUsers) {
        this.users = inputUsers;
    }
}
