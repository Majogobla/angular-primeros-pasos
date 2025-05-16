import { Component } from '@angular/core';

@Component({
  selector: 'app-heros-hero',
  standalone: false,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = 'ironMan';
  public age: number = 45;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  changeHero(): void {
    this.name = "Spider-Man"
  }

  changeAge(): void {
    this.age = 25;
  }

  resetForm(): void {
    this.name = 'iroman';
    this.age = 45;
  }
}
