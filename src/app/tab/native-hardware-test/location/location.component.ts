import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  location: Coordinates;

  constructor() {
  }

  ngOnInit() {
  }

  getGeolocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((loc) => {
        alert(loc.coords.longitude);
        this.location = loc.coords;
        console.log(this.location);
      });
    } else {
      alert('Geolocation not supported');
    }
  }

}
