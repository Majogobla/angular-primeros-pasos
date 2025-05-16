import { Component } from '@angular/core';

@Component({
  selector: 'app-heros-list',
  standalone: false,
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroNames: string[] = ['Spider-Man', 'IroMan', 'Hulk', 'She Hulk', 'Thor'];
  public deletedHero?: string;

  removeLastHero(): void {
    this.deletedHero = this.heroNames.pop();
  }
}
