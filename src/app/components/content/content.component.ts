import { Component, OnInit } from '@angular/core';
import { WpAPIService } from '../../services/wp-api.service';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  public posts_list: any;
  private data: any;
  private have_posts: boolean = false;

  constructor( private api: WpAPIService ) { }

  ngOnInit() {
    // get all post
    this.api.getPosts().subscribe(data => {
      this.posts_list = data;
      console.log(data);
    });
  }

}
