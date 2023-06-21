import { Component, OnInit } from '@angular/core';
// import { GatewayTvhService } from './tvh-agnitio-building/services-tvh/gateway/gateway-tvh.service';
// import { GatewayPtpService } from 'src/app/pacifica tech park/services-ptp/gateway/gateway-ptp.service';
// import { GatewayObService } from 'src/app/oragadam-building/services-ob/gateway/gateway-ob.service';
import { AuthenticationService } from "src/app/authentication/authentication.service";
// import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { SocketActivitiesService } from "./recent-activities/services/socket-activities.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  marginValue = '20px';
  constructor(
    // private gatewayStatus: GatewayTvhService,
    // private gatewayPtpStatus : GatewayPtpService,
    private auth: AuthenticationService,
    private router : Router,
    private usersSocket : SocketActivitiesService,
    // private gatewayObStatus : GatewayObService
  ) { }

  isLoggedIn = false;

  ngOnInit(){
    
    //Gateway Status Only visible, if they logged in
    if (this.auth.isLoggedIn()) {
    // if (environment.GATEWAY_NOTIFICATION && this.auth.isLoggedIn()) {
      if(this.auth.getRoleFromStorage() === 3){
        // setTimeout(()=>{this.gatewayStatus.getGatewayStatusToastr()}, (1000 * 5));
        // setInterval (()=> {this.gatewayStatus.getGatewayStatusToastr()}, (1000 * 60 * 15));
        // setTimeout(()=>{this.gatewayPtpStatus.getGatewayStatusToastr()}, (1000 * 5));
        // setInterval (()=> {this.gatewayPtpStatus.getGatewayStatusToastr()}, (1000 * 60 * 15));
        // setTimeout(()=>{this.gatewayObStatus.getGatewayStatusToastr()}, (1000 * 5));
        // setInterval (()=> {this.gatewayObStatus.getGatewayStatusToastr()}, (1000 * 60 * 15));
      }
      else if(this.auth.getBuildingFromStorage() === 1){
        // setTimeout(()=>{this.gatewayStatus.getGatewayStatusToastr()}, (1000 * 5));
        // setInterval (()=> {this.gatewayStatus.getGatewayStatusToastr()}, (1000 * 60 * 15));
      }
      else if(this.auth.getBuildingFromStorage() === 2){
        // setTimeout(()=>{this.gatewayObStatus.getGatewayStatusToastr()}, (1000 * 5));
        // setInterval (()=> {this.gatewayObStatus.getGatewayStatusToastr()}, (1000 * 60 * 15));
      }
      else if(this.auth.getBuildingFromStorage() === 3){
        // setTimeout(()=>{this.gatewayPtpStatus.getGatewayStatusToastr()}, (1000 * 5));
        // setInterval (()=> {this.gatewayPtpStatus.getGatewayStatusToastr()}, (1000 * 60 * 15));
      }
    }

    this.isLoggedIn = this.auth.isLoggedIn();

    //User should be logged out, if they removed from DB or their role changed
    if(this.isLoggedIn){
      this.auth.userDetails().subscribe({
        next : (userDetail) => {
          let socketUserDetails = {
            _id      : userDetail._id,
            name     : userDetail.name,
            building : userDetail.building,
            role     : userDetail.role
          };
          console.log("User Exist in DB");
          this.usersSocket.sendMessage("online", socketUserDetails);
          if((userDetail.role !== this.auth.getRoleFromStorage()) || (userDetail.building !== this.auth.getBuildingFromStorage()) ){
            console.log("User's Role changed")
            this.auth.logout();
          }
        },
        error : (err) => {
          console.log(err)
          this.auth.logout();
        }
      });
    }
    else this.router.navigate(["/login"])
  }
}
