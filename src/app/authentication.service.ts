import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@capacitor/storage';
import { AlertController } from '@ionic/angular';



@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  URL = "https://reqres.in/api/";

  constructor(public alertcontroller:AlertController, public http:HttpClient) { }

  login(veri)
  {
    return this.http.post(this.URL + 'login', veri);
  }

  signup(veri)
  {
    return this.http.post(this.URL+'register', veri);
  }

  async setObject(token) {
    await Storage.set({
      key: 'user_ionichttpAuth',
      value: JSON.stringify({
        token: token
      })
    });
  }

  async removeItem(item) {
    await Storage.remove({ key: item });
  }

  async presentAlert(mesaj) {
    const alert = await this.alertcontroller.create({
      cssClass: 'my-custom-class',
      header: 'Hata !',
      message: mesaj,
      buttons: ['Tamam']
    });

    await alert.present();
  }

}
