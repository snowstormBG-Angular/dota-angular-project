import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

//service
import {DatabaseService} from '../../../services/db.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  public items;
  public observableItems: Observable<Object>;

  constructor(private db: DatabaseService) { }

  ngOnInit() {
    this.observableItems = this.db.getItems();
    this.observableItems.subscribe(res=>{
      this.items = res;
    })
  }

}
