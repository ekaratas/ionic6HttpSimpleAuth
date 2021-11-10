import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@capacitor/storage';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(public router:Router) {

    this.getItem();
  }

   async getItem()
  {
    const { value } = await Storage.get({ key: 'user_ionichttpAuth' });
  if (value !=null)
    this.router.navigateByUrl('/home');
    else
    this.router.navigateByUrl('/');
  }
  



}
