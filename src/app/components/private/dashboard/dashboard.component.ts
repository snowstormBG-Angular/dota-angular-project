import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  //markup info sent to the dash-boxes
  public mock: [{}] = [{
    id: 'profile',
    imageUrl: 'assets/230x160.png',
    heading: 'My profile',
    bottomTitle: ''
  }, {
    id: 'friends',
    imageUrl: 'assets/230x160.png',
    heading: 'Friends',
    bottomTitle: ''
  },{
    id: 'news-general',
    imageUrl: 'assets/230x160.png',
    heading: 'New in Dota 2',
    bottomTitle: 'Seasonal ranked update'
  },{
    id: 'new-items',
    imageUrl: 'assets/230x160.png',
    heading: 'New hero items',
    bottomTitle: 'Emblems of dueling fates bundle'
  },{
    id: 'new-treasures',
    imageUrl: 'assets/230x160.png',
    heading: 'New treasure',
    bottomTitle: 'Treasure of the venerable one'
  },{
    id: 'watch-live',
    imageUrl: 'assets/230x160.png',
    heading: 'Pro playing live',
    bottomTitle: ''
  },{
    id: 'party-box',
    imageUrl: 'assets/230x160.png',
    heading: '',
    bottomTitle: ''
  },{
    id: 'last-match',
    imageUrl: 'assets/230x160.png',
    heading: 'Your recent match',
    bottomTitle: ''
  },{
    id: 'offers',
    imageUrl: 'assets/230x160.png',
    heading: 'Play Dota turbo',
    bottomTitle: ''
  },{
    id: 'feed',
    imageUrl: 'assets/230x160.png',
    heading: '',
    bottomTitle: ''
  }
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
