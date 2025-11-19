import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-exercices',
  standalone: true,
  imports: [RouterModule, CommonModule],
  template: `
    <h1 class="text-3xl font-bold mb-6 text-center">Exercices</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <div *ngFor="let exo of exercices"
           class="card card-bordered shadow cursor-pointer hover:shadow-lg transition"
           (click)="goToExo(exo.path)">
        <div class="card-body">
          <h2 class="card-title text-xl text-center">{{ exo.name }}</h2>
        </div>
      </div>
    </div>
  `
})
export class Exercices {
  exercices = [
    { name: 'Exo Property Binding', path: 'exo-property-binding' },
    // Je peux ajouter d'autres exercices ici
    { name: 'Exo Event Binding', path: 'exo-event-binding' },
    { name: 'Exo Tp Binding', path: 'exo-tp-binding' },
    { name: 'Exo Dynamic Styling (ngClass & ngStyle)', path: 'exo-dynamic-styling-ng-class-ng-style' },
    { name: 'Exo Tp Directives', path: 'exo-tp-directives' }

  ];

  constructor(private router: Router) {}

  // TypeScript strict : string param, void return
  goToExo(path: string): void {
    this.router.navigate([`/exercices/${path}`]);
  }
}

