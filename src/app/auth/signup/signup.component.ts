import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { User } from '../../models/user.model';
import { UsersService } from '../../services/users.service'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private usersService : UsersService) { }

  ngOnInit() {
  }

  onSignup(form : NgForm) {
    console.log(form)
    let user = new User(form.value.username, form.value.email, form.value.password, '')
    this.usersService.signup(user)
  }

}
