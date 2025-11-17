import { Component } from '@angular/core';

@Component({
  selector: 'app-exo-property-binding',
  imports: [],
  templateUrl: './exo-property-binding.html',
  styleUrl: './exo-property-binding.css',
})
export class ExoPropertyBinding {

  user = {
    firstName: "Steven",
    lastName: "Cigale",
    age: 25,
    bio: "Steven Cigale is a French film producer, screenwriter, and director. He is best known for his work in the 2000s and 2010s.",
    status: "Offline", // ou "Online"
    reputation: "ringard", // ou "cool"
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470"
  };

  githubLink = "https://github.com/steven-cigale";
}
