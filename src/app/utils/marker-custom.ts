
export class MarkerCustom extends google.maps.OverlayView {
  private latlng: google.maps.LatLng;
  private map: any;
  private html: string;
  private div?: HTMLElement;
  private onClick: any;

  constructor(latlng: google.maps.LatLng, map: any, html: string, onClick: any) {
    super();

    this.latlng = latlng;
    this.html = html;
    this.map = map;
    this.onClick = onClick;
    this.setMap(this.map);
  }

  /**
   * onAdd is called when the map's panes are ready and the overlay has been
   * added to the map.
   */
  override onAdd() {
    this.div = document.createElement("div");
    this.div.className = 'marker-custom';
    this.div.style.position = "absolute";
    this.div.innerHTML = this.html;

    this.div.addEventListener('click', (evt => {
      this.map.setZoom(14)
      this.map.panTo(this.latlng);
      var divs = Array.from(document.getElementsByClassName('marker-custom') as HTMLCollectionOf<HTMLElement>);
      for (var i = 0; i < divs.length; i++) {
        let item = divs[i];
        item!.style.zIndex = '0';
      }
      this.div!.style.zIndex = "1";
      if (this.onClick != null) {
        this.onClick(evt);
        evt.preventDefault();  evt.stopPropagation();
      }
    }));
    const panes = this.getPanes()!;
    this.getPanes()!.floatPane.appendChild(this.div);
    //panes.overlayLayer.appendChild(this.div);

  }

  override draw() {
    var point = this.getProjection().fromLatLngToDivPixel(this.latlng);
    if (this.div) {

      if (point) {
        this.div.style.left = (point.x - this.div.offsetWidth / 2) + 'px';
        this.div.style.top = (point.y - this.div.offsetHeight - 20) + 'px';
      }
    }
  }

  /**
   * The onRemove() method will be called automatically from the API if
   * we ever set the overlay's map property to 'null'.
   */
  override onRemove() {
    
    if (this.div) {
      (this.div.parentNode as HTMLElement).removeChild(this.div);
      delete this.div;
    }
  }



  toggleDOM(map: google.maps.Map) {
    if (this.getMap()) {
      this.setMap(null);
    } else {
      this.setMap(map);
    }
  }
}
