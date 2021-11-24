import { Component, OnInit } from '@angular/core';
import { HomeComponent } from 'src/app/pages/home/home.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  navigateByUrl: any;

  constructor() { }

  ngOnInit(): void {
  }
route(){
  this.navigateByUrl('blog')
}
}
