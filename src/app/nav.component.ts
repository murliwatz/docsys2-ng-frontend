import { Component } from '@angular/core';

@Component({
  selector: 'navigation-component',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  
  onLogoutClicked() {
    localStorage.clear();
  }

}
