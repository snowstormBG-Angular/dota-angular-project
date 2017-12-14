import {Component, OnInit} from '@angular/core';
import {DatabaseService} from '../../../services/db.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public boxes;
  observableBoxes: Observable<Object>;

  constructor(private db: DatabaseService) {
  }

  ngOnInit(): void {
    this.observableBoxes = this.db.getDashboard();
    this.observableBoxes.subscribe(
      res =>{
        this.boxes = res;
      }
    );
  }
}
