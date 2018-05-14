import { Component, OnInit } from '@angular/core';
import { User, UserList} from '../users.class';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
    public userList: UserList;

    constructor() { }

    ngOnInit() {
        const defaultUserList: User[] = [
            new User('Johana', 'hanna@hotmail.com'),
            new User('Margareta', 'manga@gmail.com'),
            new User('Peter', 'peter@peter.com')
        ];

        this.userList = new UserList(defaultUserList);
    }

}
