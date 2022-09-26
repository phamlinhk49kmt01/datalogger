import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  center: google.maps.LatLngLiteral = {lat: 20.978057, lng: 105.7938073};
  zoom = 14;
  markerPosition: google.maps.LatLngLiteral = {lat: 20.978057, lng: 105.7938073};
  
  constructor(private httpClient: HttpClient) {
    
   }

  ngOnInit(): void {
  }

}
