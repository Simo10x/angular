import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lessons',
  standalone: true,
  imports: [RouterModule, CommonModule],
  template: `
    <h1 class="text-3xl font-bold mb-6 text-center">Lessons</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <div *ngFor="let lesson of lessons"
           class="card card-bordered shadow cursor-pointer hover:shadow-lg transition"
           (click)="goToLesson(lesson.path)">
        <div class="card-body">
          <h2 class="card-title text-xl text-center">{{ lesson.name }}</h2>
        </div>
      </div>
    </div>
  `
})
export class Lessons {
  lessons = [
    { name: 'Text Interpolation', path: 'text-interpolation' },
    { name: 'Property Binding', path: 'property-binding' },
    { name: 'Event Binding', path: 'event-binding' }
  ];

  constructor(private router: Router) {}

  // <-- ajout annotation : string parameter, void return
  goToLesson(path: string): void {
    this.router.navigate([`/lessons/${path}`]);
  }
}
