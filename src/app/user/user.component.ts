import { Component } from '@angular/core';
import { User } from './../shared/models/user';
import { FormsModule } from '@angular/forms'

@Component({
  selector:'app-user',
  templateUrl:'user.component.html',
  styleUrls: ['user.component.css']
})

export class UserComponent {
user : User= {'name':'sarra', 'age': 29};
users : User[]= [
  {'name':'sarra', 'age': 29},
  {'name':'sinen', 'age': 29}
 ];
activeUser : User;
selectUser(user) {
this.activeUser = user;
console.log(this.activeUser);
}
}
