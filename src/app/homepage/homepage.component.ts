import { Component, OnInit,HostListener } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';



@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})

export class HomepageComponent implements OnInit {
 
deviceInfo;
isdesktop=false;
  constructor(private deviceService: DeviceDetectorService) { 
    
    this.deviceInfo = this.deviceService.getDeviceInfo();
    const isMobile = this.deviceService.isMobile();
    const isTablet = this.deviceService.isTablet();
    this.isdesktop = this.deviceService.isDesktop();
    console.log(this.deviceInfo);
    console.log(isMobile);  // returns if the device is a mobile device (android / iPhone / windows-phone etc)
    console.log(isTablet);  // returns if the device us a tablet (iPad etc)
    console.log(this.isdesktop);
  }


  ngOnInit(): void {
  }
  openurlinnewtab(link)
  {
    window.open(link, "_blank");
  }

 


}
