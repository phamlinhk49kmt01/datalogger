import { Component, OnInit } from '@angular/core';
import { MatDrawerMode } from '@angular/material/sidenav';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  
  usingLayout = false;

  sideBarOpen = true;
  isDesktop = true;
  drawerMode: MatDrawerMode = "over";


  constructor(private router: Router, private activatedRoute: ActivatedRoute, private deviceService: DeviceDetectorService) {}

  ngOnInit() {

    this.isDesktop = this.deviceService.isDesktop();
    this.drawerMode = this.deviceService.isDesktop() != true ? 'over':'side';
    this.sideBarOpen = this.deviceService.isDesktop();

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.usingLayout = this.activatedRoute.firstChild!.snapshot.data['usingLayout'] !== false;        
      }
    });
  }

  sideBarToggler(){
    this.sideBarOpen = !this.sideBarOpen; 
   }


}
