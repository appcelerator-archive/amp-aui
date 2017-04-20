import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

//components
import { AppComponent } from './app.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AuthComponent } from './auth/auth/auth.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NodesComponent } from './nodes/nodes.component';
import { StacksComponent } from './stacks/stacks.component';
import { PasswordComponent } from './password/password.component';
import { UsersComponent } from './users/users.component';
import { EndpointsComponent } from './endpoints/endpoints.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PageheaderComponent } from './pageheader/pageheader.component';
import { UserListComponent } from './users/user-list/user-list.component';
//Services
import { UsersService } from './services/users.service';
import { MenuService } from './services/menu.service'
import { AuthGuard } from './services/auth-guard.service'

const appRoutes : Routes = [
  //{ path: '', component: AppComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'nodes', component: NodesComponent, canActivate: [AuthGuard] },
  { path: 'stacks', component: StacksComponent, canActivate: [AuthGuard] },
  { path: 'password', component: PasswordComponent, canActivate: [AuthGuard] },
  { path: 'users', component: UsersComponent, canActivate: [AuthGuard] },
  { path: 'endpoints', component: EndpointsComponent, canActivate: [AuthGuard] },
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    AuthComponent,
    DashboardComponent,
    NodesComponent,
    StacksComponent,
    PasswordComponent,
    UsersComponent,
    EndpointsComponent,
    SidebarComponent,
    PageheaderComponent,
    UserListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [UsersService, MenuService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
