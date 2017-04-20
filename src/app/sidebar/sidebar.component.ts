import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { MenuService } from '../services/menu.service'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  @Output() onMenu = new EventEmitter<string>();

  constructor(private menuService : MenuService) { }

  ngOnInit() {
  }
}
