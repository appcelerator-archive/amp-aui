import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

import { UsersService } from './users.service'

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private usersService : UsersService) {}

  canActivate(route : ActivatedRouteSnapshot, state : RouterStateSnapshot) {
    return this.usersService.isAuthenticated();
  }
}
