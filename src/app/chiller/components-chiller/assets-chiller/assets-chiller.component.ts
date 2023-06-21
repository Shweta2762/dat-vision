import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/authentication/authentication.service'

@Component({
  selector: 'app-assets-chiller',
  templateUrl: './assets-chiller.component.html',
  styleUrls: ['./assets-chiller.component.scss']
})
export class AssetsChillerComponent {

  constructor(private auth: AuthenticationService,) { }

  ngOnInit(): void {
  }

  backPage = "../../";

  logout() {
    this.auth.logout();
  }

}
