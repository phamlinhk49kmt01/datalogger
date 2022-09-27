import { Component, OnInit, ViewChild } from '@angular/core';
import { GoogleMap } from '@angular/google-maps';
import { MarkerCustom } from 'src/app/utils/marker-custom';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  center: google.maps.LatLngLiteral = { lat: 20.978057, lng: 105.7938073 };
  zoom = 14;
  markerPosition: google.maps.LatLngLiteral = { lat: 20.978057, lng: 105.7938073 };
  lsMarkers = []
  mapOption ={
    disableDefaultUI : true,
    disableDoubleClickZoom : true,
    styles:[
      {
          "featureType": "administrative",
          "elementType": "geometry",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "poi",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "road",
          "elementType": "labels.icon",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "transit",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
        "featureType": "water",
        "elementType": "labels.text",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      }
  ]
  }

  constructor() { }

  ngOnInit(): void {
  }

  @ViewChild(GoogleMap) map!: GoogleMap;
  ngAfterViewInit() {
    let p = new google.maps.LatLng(20.978057, 105.7938073);
    let html = '<p style="color: red; margin: 0px">Linhkmt</p>';
    const overlay: MarkerCustom = new MarkerCustom(p, this.map.googleMap, html, this.onMarkerClick);

    // overlay.setMap(this.map.googleMap? this.map.googleMap : null);
  }

  onMarkerClick(e: any) {
    console.log('click', e.target);
  }

}
