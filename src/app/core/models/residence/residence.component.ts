import { Component, OnInit } from '@angular/core';
import { Residence } from '../core/models/residence';

@Component({
  selector: 'app-residence',
  templateUrl: './residence.component.html',
  styleUrls: ['./residence.component.css']
})
export class ResidenceComponent implements OnInit {

  listResidences: Residence[] = [
    { id: 1, name: "El fel", address: "Borj Cedria", image: "../../assets/images/R1.jpg", status: "Disponible", showLocation: false, isFavorite: false },
    { id: 2, name: "El yasmine", address: "Ezzahra", image: "../../assets/images/R2.jpg", status: "Disponible", showLocation: false, isFavorite: false },
    { id: 3, name: "El Arij", address: "Rades", image: "../../assets/images/R3.jpg", status: "Vendu", showLocation: false, isFavorite: false },
    { id: 4, name: "El Anber", address: "inconnu", image: "../../assets/images/R3.jpg", status: "En Construction", showLocation: false, isFavorite: false }
  ];

  favorites: Residence[] = [];

  searchText: string = '';

  filteredResidences: Residence[] = [];

  ngOnInit() {
    this.loadFavorites(); 
    this.filteredResidences = this.listResidences; 
  }

  addToFavorites(residence: Residence) {
    if (!residence.isFavorite) {
      residence.isFavorite = true;
      this.favorites.push(residence);
      this.saveFavorites(); 
      alert(`${residence.name} has been added to favorites!`);
    } else {
      alert(`${residence.name} is already in favorites.`);
    }
  }

  show(R: Residence) {
    if (R.address === "inconnu") {
      alert("Adresse inconnue");
    } else {
      R.showLocation = !R.showLocation;
    }
  }

  saveFavorites() {
    localStorage.setItem('favorites', JSON.stringify(this.favorites));
  }

  loadFavorites() {
    const savedFavorites = localStorage.getItem('favorites');
    if (savedFavorites) {
      this.favorites = JSON.parse(savedFavorites);

      this.favorites.forEach(favorite => {
        const residence = this.listResidences.find(r => r.id === favorite.id);
        if (residence) {
          residence.isFavorite = true;
        }
      });
    }
  }

  filterResidences() {

  }
  
  
}
