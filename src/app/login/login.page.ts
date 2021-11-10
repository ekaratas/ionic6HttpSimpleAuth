import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  uyelikBilgisi: FormGroup;
  userValues: any;

  constructor(public router:Router, private fb:FormBuilder, public authenticationservice:AuthenticationService) { }

  ngOnInit() {
    this.uyelikBilgisi = this.fb.group({
      email:['eve.holt@reqres.in', [Validators.required, Validators.email]],
      password:['cityslicka', [Validators.required, Validators.minLength(6)]],
    });
  }

get email()
{
  return this.uyelikBilgisi.get('email');
}

get password()
{
  return this.uyelikBilgisi.get('password');
}

login()
{
  this.authenticationservice.login(this.uyelikBilgisi.value).subscribe(sonuc=> {
    this.userValues = sonuc;
    console.log(this.userValues);
    this.authenticationservice.setObject(this.userValues.token);
    this.router.navigateByUrl('/home');
  }, hata=> {
    this.authenticationservice.presentAlert(hata.error.error);

  });
}


}
