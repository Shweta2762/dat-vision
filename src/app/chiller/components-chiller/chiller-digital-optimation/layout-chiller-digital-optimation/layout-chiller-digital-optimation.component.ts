import { Component, OnInit, Inject } from '@angular/core';
import { Router } from "@angular/router";
import { DOCUMENT } from '@angular/common';
import { AuthenticationService } from 'src/app/authentication/authentication.service';
import { sidebar_icons, NavItem } from 'src/app/shared/constants';


@Component({
  selector: 'app-layout-chiller-digital-optimation',
  templateUrl: './layout-chiller-digital-optimation.component.html',
  styleUrls: ['./layout-chiller-digital-optimation.component.scss']
})
export class LayoutChillerDigitalOptimationComponent {

  subHeader: string = "";
  isAdmin: boolean = false;
  isSuperAdmin: boolean = false;

  constructor(
    @Inject(DOCUMENT) private _document: Document,
    private authService: AuthenticationService, private router: Router
  ) { }

  menu: NavItem[] = [
    { route: "../", displayName: "Back", iconName: sidebar_icons.back_page },
    { route: "", displayName: "Home", iconName: sidebar_icons.home_page },
    { route: "overview", displayName: "Overview", iconName: sidebar_icons.analysis },
    // { route: "reports", displayName: "Reports", iconName: sidebar_icons.reports }
    // {
    //   displayName: "Alarms", iconName: sidebar_icons.alarms, children: [
    //     { route: "alarms", displayName: "Checklist Alarms", iconName: sidebar_icons.alarms_sub },
    //     { route: "alarmsAnalog", displayName: "Temperature Alarms", iconName: sidebar_icons.alarms_sub },
    //   ]
    // },
    // { route: "fault-detection", displayName: "Fault Detection Diagnosis", iconName: sidebar_icons. alarms},
    // { route: "trends", displayName: "Trends", iconName: sidebar_icons.trends },
    // { route: "reports", displayName: "Reports", iconName: sidebar_icons.reports },
    // { route: "settings", displayName: "Settings", iconName: sidebar_icons.settings },


  ]

  landingRoute: string = this.menu[2].displayName;
  currentRoute !: string;

  public readonly assetname: string = "Front Axle";
  public readonly routePath: string = "/front-axle/"

  ngOnInit(): void {
    // let temp = { route: "approvalStatus", displayName: "Approval", iconName: sidebar_icons.settings };
    // this.authService.userDetails().subscribe(data => {
    //   if (data['role'] == '2' || data['role'] == '3') { this.menu.push(temp); }
    //   else { this.menu.push({ route: "dashboard", displayName: "Create", iconName: sidebar_icons.summary_dashboard }) };
    //   // if (data['role'] != '2' && data['role'] != '3')
    // })
  }
}
