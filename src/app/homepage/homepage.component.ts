import { Component, OnInit,HostListener } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
;



@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})

export class HomepageComponent implements OnInit {
 
deviceInfo;
isdesktop=false;
screenHeight;
screenWidth;
bgcolor="green"
margintop
  constructor(private deviceService: DeviceDetectorService) { 
    // this.displayWindowSize();
     this.getScreenSize();
    
window.addEventListener("resize", ()=>{
  this.getScreenSize();

})
    
    // this.deviceInfo = this.deviceService.getDeviceInfo();
    // const isMobile = this.deviceService.isMobile();
    // const isTablet = this.deviceService.isTablet();
    // this.isdesktop = this.deviceService.isDesktop();
    // console.log(this.deviceInfo);
    // console.log(isMobile);  // returns if the device is a mobile device (android / iPhone / windows-phone etc)
    // console.log(isTablet);  // returns if the device us a tablet (iPad etc)
    // console.log(this.isdesktop);
  }


  ngOnInit(): void {
  }
  openurlinnewtab(link)
  {
    window.open(link, "_blank");
  }

  displayWindowSize()
  {
      
    this.deviceInfo = this.deviceService.getDeviceInfo();
    const isMobile = this.deviceService.isMobile();
    const isTablet = this.deviceService.isTablet();
    this.isdesktop = this.deviceService.isDesktop();
    //console.log(this.deviceInfo);
    console.log(isMobile);  // returns if the device is a mobile device (android / iPhone / windows-phone etc)
    console.log(isTablet);  // returns if the device us a tablet (iPad etc)
    console.log(this.isdesktop);

  }
  @HostListener('window:resize', ['$event'])
    getScreenSize(event?) {
          this.screenHeight = window.innerHeight;
          this.screenWidth = window.innerWidth;
          this.margintop=(this.screenHeight*14)/100
          console.log(this.margintop)
          if(this.screenWidth>900)
          {
            this.isdesktop=true
          }
          else{
            this.isdesktop=false
          }
          console.log(this.screenHeight, this.screenWidth);
    }


 


}
