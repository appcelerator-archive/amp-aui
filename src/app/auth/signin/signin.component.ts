import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { UsersService } from '../../services/users.service'
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private usersService : UsersService) { }

  ngOnInit() {
  }

  onSignin(form : NgForm) {
    let user = new User(form.value.username, '', form.value.password, '')
    this.usersService.login(user)
  }
}
