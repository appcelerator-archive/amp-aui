import { Component, ViewChild } from '@angular/core';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PageheaderComponent } from './pageheader/pageheader.component';
import { UsersService } from './services/users.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  @ViewChild(PageheaderComponent)
  private pageHeader: PageheaderComponent;

  constructor(private usersService : UsersService) { }

}
