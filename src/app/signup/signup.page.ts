import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  uyelikBilgisi: FormGroup;
  userValues:any;

  constructor(public router:Router, private fb:FormBuilder,public authenticationservice:AuthenticationService) { }

  ngOnInit() {
    this.uyelikBilgisi = this.fb.group({
      ad:['Charles Morris', [Validators.required, Validators.minLength(3)]],
      email:['charles.morris@reqres.in', [Validators.required, Validators.email]],
      password:['123456', [Validators.required, Validators.minLength(6)]],
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

get ad()
{
  return this.uyelikBilgisi.get('ad');
}

signup()
{
  this.authenticationservice.signup(this.uyelikBilgisi.value).subscribe(sonuc=> {
    this.userValues = sonuc;
    console.log(this.userValues);
    this.authenticationservice.setObject(this.userValues.token);
    this.router.navigateByUrl('/home');
  }, hata=> {
    this.authenticationservice.presentAlert(hata.error.error);
  });
}

}
