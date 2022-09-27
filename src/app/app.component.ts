import { Component, OnInit } from '@angular/core';
import { MatDrawerMode } from '@angular/material/sidenav';
import { ActivatedRoute, NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { DeviceDetectorService } from 'ngx-device-detector';
import { LoadingBarService } from '@ngx-loading-bar/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  
  loading: boolean = true;

  sideBarOpen = true;
  isDesktop = true;
  drawerMode: MatDrawerMode = "over";


  constructor(private router: Router, private activatedRoute: ActivatedRoute, private deviceService: DeviceDetectorService,public translate: TranslateService,private loadingBar: LoadingBarService) {}

  ngOnInit() {


    // this.translate.addLangs(['vi', 'en']);
    // this.translate.setDefaultLang('vi');
    // const browserLang = this.translate.getBrowserLang();
    // //this.translate.use(browserLang?.match(/en|vi/) ? browserLang : 'vi');
    // this.translate.use('vi');
 
    this.isDesktop = this.deviceService.isDesktop();
    this.drawerMode = this.deviceService.isDesktop() != true ? 'over':'side';
    this.sideBarOpen = this.deviceService.isDesktop();


    
    this.router.events.subscribe((event) => {
      switch (true) {
        case event instanceof NavigationStart: {
          //this.loadingBar.start();
          break;
        }

        case event instanceof NavigationEnd:
        case event instanceof NavigationCancel:
        case event instanceof NavigationError: {
          //this.loadingBar.stop();
          break;
        }
        default: {
          break;
        }
      }
    });
  }

  sideBarToggler(){
    this.sideBarOpen = !this.sideBarOpen; 
   }

   ngAfterViewInit() {
console.log('ssss')
//this.loadingBar.stop();
   }


}
