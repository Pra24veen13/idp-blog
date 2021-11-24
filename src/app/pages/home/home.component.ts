import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PageservService } from 'src/app/services/pageserv.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  blogsDataArr: any;
  i=0;
  navigateByurl: any;
  constructor(private blogDataService: PageservService,private router:Router) { }

  ngOnInit(): void {
    this.blogDataService.getAllBlogs().subscribe(data => {
      this.blogsDataArr = data;
    });

  }

  route(){
    this.router.navigateByUrl('blog');
  }
}

