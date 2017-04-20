import { Injectable, Output, EventEmitter } from '@angular/core';

//@Injectable()
export class MenuService {
  currentMenuItem = ""
  itemDescription = {
    "dashboard" : "Home",
    "nodes" : "Node list",
    "stacks" : "Stack list",
    "password" : "Settings",
    "users" : "Users management",
    "endpoints" : "Endpoints management"
  }
  @Output() onMenuItemSelected = new EventEmitter<string>();

  constructor() { }

  getCurrentItemDescription() {
    return this.itemDescription[this.currentMenuItem]
  }

  setItemMenu(item : string) {
      this.currentMenuItem = item
      this.onMenuItemSelected.emit(item)
  }

}
