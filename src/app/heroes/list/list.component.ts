import { Component } from '@angular/core';
import { first } from 'rxjs';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public heroNames : string[] = ['Spider-Man','IronMan','Hulk','Batman'];
  public deletedHero?: string;


  removeLastHero():void{
    this.deletedHero = this.heroNames.pop();
  }


  resetListHeroes():void{
    this.heroNames=['Spider-Man','IronMan','Hulk','Batman'];
  }

}
