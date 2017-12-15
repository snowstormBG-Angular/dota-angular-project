import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'hero-portrait',
  templateUrl: './portrait.component.html',
  styleUrls: ['./portrait.component.css']
})
export class PortraitComponent implements OnInit {
  @Input() public id;
  @Input() public name;
  @Input() public imageUrl;

  constructor() { }

  ngOnInit() {
  }

}
