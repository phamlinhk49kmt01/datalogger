import { Component, HostListener, OnInit } from '@angular/core';
import { MatDrawerMode } from '@angular/material/sidenav';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  usingLayout = false;

  sideBarOpen = true;
  isDesktop = true;
  drawerMode: MatDrawerMode = "over";


  constructor(private router: Router, private activatedRoute: ActivatedRoute, private deviceService: DeviceDetectorService) { }

  ngOnInit() {

    this.isDesktop = this.deviceService.isDesktop();
    this.drawerMode = this.deviceService.isDesktop() != true ? 'over' : 'side';
    this.sideBarOpen = this.deviceService.isDesktop();
  }

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    let width = event.target.innerWidth;
    if (width <= 600) {
      this.isDesktop = false;
      this.drawerMode = 'over';
      if (this.sideBarOpen) {
        this.sideBarOpen = false;
      }
    }
    else {
      this.isDesktop = true;
      this.drawerMode = 'side';
      if (!this.sideBarOpen) {
        this.sideBarOpen = true;
      }
    }
  }


}
