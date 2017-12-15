import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

//service
import {DatabaseService} from '../../../services/db.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  public heroes;
  public strHeroes;
  public agiHeroes;
  public intHeroes;
  public observableHeroes: Observable<Object>;

  constructor(private db: DatabaseService) { }

  ngOnInit() {
    this.observableHeroes = this.db.getHeroes();
    this.observableHeroes.subscribe(
      res =>{
        this.heroes = res;
        this.strHeroes = this.heroes.filter(h=>{
          return h['primary_attr'] === 'str';
        });
        this.agiHeroes = this.heroes.filter(h=>{
          return h['primary_attr'] === 'agi';
        });
        this.intHeroes = this.heroes.filter(h=>{
          return h['primary_attr'] === 'int';
        });
      }
    );
  }

}
