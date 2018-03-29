import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.css']
})
export class DetailsPageComponent implements OnInit {
  @Input() public id;

  constructor() { }

  ngOnInit() {
  }

}
