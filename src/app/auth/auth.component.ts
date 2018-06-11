import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { User } from '../signup-r/user.model';
import {SignupService} from '../signup/signup.service';
import {Router} from '@angular/router';
import { DataSharingService } from '../data-sharing.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  myForm: FormGroup;
  user: object;
  constructor(private signupService: SignupService, private router: Router, private dataSharing: DataSharingService) {}


  onSubmit() {
    const user = new User(null, this.myForm.value.userName, this.myForm.value.password, null, 'this is the test');
    console.log('onSubmit log user: ' + user);
    this.signupService.signin(user).subscribe(
        data => {
          this.user = JSON.parse(data.user);
          // user.email = data.email;
          // user.favorites = data.favorites;
          // user.userName = data.userName;
          this.dataSharing.changeUser(this.user);
          this.dataSharing.currentUser.subscribe(user => this.user = user);
          // to navigate away, must inject angular router above
          this.router.navigateByUrl('/');
        },
        error => {
          console.error(error);
          // this.user = new User(null,null,null,null,null);
          console.log('bad username' + this.user);
        }
      );
    console.log('LOG this.user: ' + this.user);
    console.log('LOG user: ' + user);
    this.myForm.reset();
  }
  ngOnInit() {
    this.myForm = new FormGroup({
      userName: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
    });
  }
}
