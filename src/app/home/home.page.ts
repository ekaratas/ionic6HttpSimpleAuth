import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public router:Router, public authenticationservice:AuthenticationService) {}

  exit()
  {
this.authenticationservice.removeItem('user_ionichttpAuth');
this.router.navigateByUrl('/');
  }

}
