import { Component, OnInit, Inject, Input, TemplateRef } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { AuthenticationService } from 'src/app/authentication/authentication.service';
import { ActivatedRoute, Router } from "@angular/router";
import { sidebar_icons } from 'src/app/shared/constants';

@Component({
  selector: 'app-layout-template',
  templateUrl: './layout-template.component.html',
  styleUrls: ['./layout-template.component.scss']
})
export class LayoutTemplateComponent {

  constructor(
    // this line is from energyviss layout
   @Inject(DOCUMENT) private _document: Document,
   private router : Router,
   private authService : AuthenticationService,
   private activatedRoute : ActivatedRoute,
 ) { }

 @Input('customButtonTemplate') customButtonTemplate ?: TemplateRef<any>;
 @Input('customContainerTemplate') customContainerTemplate ?: TemplateRef<any>;
 @Input() menu !: any[];
 @Input() assetname   !: string;
 @Input() routePath  !: string;

 subHeader     : string  = "";
 isAdmin       : boolean = false;
 isSuperAdmin  : boolean = false;

 landingRoute !: string;
 currentRoute !: string;

 ngOnInit(): void {
   // if(this.planName) this.checkParam();
   this.landingRoute = this.menu[2] ? this.menu[2].displayName : this.menu[1].displayName;
   this.changeHeading();
   this.isAdmin = this.authService.isAdmin();
   this.isSuperAdmin = this.authService.isSuperAdmin();
 }

 reload(){
   // this._document.defaultView.location.reload();
   window.location.reload();
 }

 /*
   *this function will be triggered when user navigate to different pages
   * this fucntion is used to show which page is currently active to the user
 */
 changeHeading() : boolean{
   let splittedUrl = this.router.url.toString().split(this.routePath);
   if(splittedUrl.length > 1){
     console.log('Current URL : ' + splittedUrl[1])
     this.currentRoute = splittedUrl[1];
     this.menu.forEach((eachMenu : any) => {
       if(eachMenu.children){
         eachMenu.children.forEach((eachChild : any) => {
           if(eachChild.route === splittedUrl[1]){
             this.currentRoute = eachChild.displayName;
             return true;
           }
           return;
         })
       }
       else if(eachMenu.route === splittedUrl[1]){
         this.currentRoute = eachMenu.displayName;
         return true;
       }
       return;
     })
   }
   return false;
 }

 constainsAlarm() : boolean{
   let alarm = false;
   this.menu.forEach((eachMenu : any) => {
     if(eachMenu.route === "alarms"){
       alarm = true;
       return true; //Breaks from FOR LOOP
     }
     return;
   })
   return alarm;
 }

 logout(){
   this.authService.logout();
 }

}

