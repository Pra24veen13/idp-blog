import { Component, OnInit } from '@angular/core';
import { PageservService } from 'src/app/services/pageserv.service';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  blogsDataArr: any;
  i=0;
  constructor(private blogDataService: PageservService) { }

  ngOnInit(): void {
    this.blogDataService.getAllBlogs().subscribe(data => {
      this.blogsDataArr = data;
    });

  }

}

