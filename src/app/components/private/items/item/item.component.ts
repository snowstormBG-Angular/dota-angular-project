import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() public id;
  @Input() public cost;
  @Input() public name;
  @Input() public imageUrl;

  constructor() { }

  ngOnInit() {
  }

}
