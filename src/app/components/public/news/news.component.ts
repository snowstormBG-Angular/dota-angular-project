import { Component, OnInit } from '@angular/core';
import {Article} from './news.model';
import { Observable } from 'rxjs';

//service
import {DatabaseService} from '../../../services/db.service';

//mock json
// import mock from './news-mock.json';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css','./../landing-page/landing-page.component.css']
})
export class NewsComponent implements OnInit {
  // public articles: Article[];
  public articles;
  public observableNews: Observable<Object>;

  constructor(private db: DatabaseService) { }

  ngOnInit() {
    // this.articles = mock;
    this.observableNews = this.db.getNews();
    this.observableNews.subscribe(
      res =>{
        this.articles = res;
      }
    );
  }
}
