import { Component, IterableDiffers, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { GoogleMap } from '@angular/google-maps';
import { CollectionPointService } from 'src/app/services/collection-point.service';
import { MarkerCustom } from 'src/app/utils/marker-custom';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  toggleSidebar = false;
  center: google.maps.LatLngLiteral = { lat: 20.978057, lng: 105.7938073 };
  zoom = 14;
  markerPosition: google.maps.LatLngLiteral = { lat: 20.978057, lng: 105.7938073 };
  lsMarkers: MarkerCustom[] = [];
  mapOption = {
    disableDefaultUI: true,
    disableDoubleClickZoom: true,
    styles: [
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
  collectionPoints: any[] = [];
  options: FormGroup;
  iterableDiffer: any;

  constructor(fb: FormBuilder, private collectionPointService: CollectionPointService, private iterableDiffers: IterableDiffers) {
    this.options = fb.group({
      bottom: 0,
      fixed: false,
      top: 0
    });
    this.iterableDiffer = iterableDiffers.find([]).create();
  }

  ngOnInit(): void {
  }

  isDrawerOpen = true;
  openDrawer() {
    this.isDrawerOpen = !this.isDrawerOpen;
  }

  @ViewChild(GoogleMap) map!: GoogleMap;
  ngAfterViewInit() {

    this.getListCollectionPoint();
    // overlay.setMap(this.map.googleMap? this.map.googleMap : null);

  }

  onMarkerClick(e: any) {
    console.log('click', e.target);
  }

  getListCollectionPoint() {
    this.collectionPointService.getListsCollectionPoint({ limit: 10, offset: 0 }).subscribe(res => {
      console.log(res);
      this.collectionPoints = res.data;
    })
  }

  ngDoCheck() {
    let changes = this.iterableDiffer.diff(this.collectionPoints);
    if (changes) {
      console.log('Changes detected!');
      for (let index = 0; index < this.lsMarkers.length; index++) {
        const marker = this.lsMarkers[index];
        marker.setMap(null);
      }

      for (let index = 0; index < this.collectionPoints.length; index++) {
        const point = this.collectionPoints[index];
        debugger
        if (point.location != null && point.location.lat != 0 && point.collected_attributes != null && point.collected_attributes.length > 0) {
          let myLatLng = new google.maps.LatLng(point.location.lat, point.location.lng);

          let time_update = point.time_update > 0 ? ' - ' + point.time_update : '';


          let html = `<div style=""><table class="table table-bordered mb-0" id="${point.id}">`;
          html += `<tr><th class="text-center collection-point-name" colspan="3"><span id="point-name-${point.id}">${point.name}</span><span id="point-time-update-${point.id}">${time_update}</span></th></tr>`;
          point.collected_attributes.forEach(function (item:any, index:any) {
            html += `<tr class="collection-point-attr">`;
            html += `<td> <a href="javascript:;" class="attr-item attr_${item.key}" data-key="${item.key}" data-name="${item.name}" data-unit="${item.unit}">${item.name} (${item.key})</a></td><td class="${item.key}_value">${item.value} (${item.unit})</td>`;
            html += `</tr>`;
          });
          html += `</table></div>`;
          

          let row_menu = `<li class="nav-item">
                <a href="javascript:;" class="nav-link" id="menu-${point.id}">
                    <i class="far fa-circle nav-icon"></i>
                    <p>${point.name}</p>
                </a>
            </li>`;
          // if ($('#dma-content').find(`#menu-${point.id}`).length == 0) {
          //   $('#dma-content').append(row_menu);
          // }

          const overlay: MarkerCustom = new MarkerCustom(myLatLng, this.map.googleMap, html, this.onMarkerClick);
        }
      }
    }
  }


  initMarker() {

    var arr = [];
    for (let index = 0; index < 10; index++) {


    }

  }

}
