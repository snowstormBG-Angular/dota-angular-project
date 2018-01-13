import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'hero-portrait',
  templateUrl: './portrait.component.html',
  styleUrls: ['./portrait.component.css']
})
export class PortraitComponent implements OnInit {
  @Input() public id;
  @Input() public name;
  @Input() public imageUrl;

  constructor(public router: Router) { }

  ngOnInit() {
  }
  showDetails(hero){
    let targetString = `/heroes/${hero}`;
    targetString=targetString.trim().replace(/\s+/g, "_");
    this.router.navigate([targetString]);
  }

}
