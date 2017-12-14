import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'dash-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent implements OnInit {
  @Input() heading: string;
  @Input() imageUrl: string;
  @Input() bottomTitle: string;


  constructor() { }

  ngOnInit() {
  }

}
