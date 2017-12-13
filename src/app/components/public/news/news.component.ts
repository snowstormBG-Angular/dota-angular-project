import { Component, OnInit } from '@angular/core';
import {Article} from './news.model';
// const mock = require('./news-mock.json');
import mock from './news-mock.json'

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  public articles: Article[];
  test=mock[0];

  constructor() { }

  ngOnInit() {
    this.articles = mock;
  }

  //TODO: get remote articles
  getArticles(){

  }
}
