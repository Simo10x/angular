import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-exo-tp-directives',
  imports: [CommonModule],
  templateUrl: './exo-tp-directives.html',
  styleUrl: './exo-tp-directives.css',
})
export class ExoTpDirectives {
  detailsVisible = false;
  logs: number[] = [];

  toggleDetails() {
    this.detailsVisible = !this.detailsVisible;
    this.logs.push(this.logs.length + 1);
  }
}
