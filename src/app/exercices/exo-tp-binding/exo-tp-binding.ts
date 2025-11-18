import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tp-binding',
  imports: [FormsModule],
  templateUrl: './exo-tp-binding.html',
  styleUrl: './exo-tp-binding.css',
})
export class ExoTpBinding {

  userName: string = 'Eric "Badlands" Booker';

  resetUsername():void {
    this.userName = '';
  }
}
