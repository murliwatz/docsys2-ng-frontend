import { Component, AfterViewInit } from '@angular/core';

declare var $:any;

@Component({
  selector: 'dashboard-component',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements AfterViewInit {
  
  ngAfterViewInit() {
    $('#messageModal').modal('show');
  }

}
