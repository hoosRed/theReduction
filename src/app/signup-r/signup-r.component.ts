import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {SignupService} from '../signup/signup.service';
import { User } from './user.model';
import { DataSharingService } from '../data-sharing.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-r',
  templateUrl: './signup-r.component.html',
  styleUrls: ['./signup-r.component.css']
})
export class SignupRComponent implements OnInit {
  myForm: FormGroup;
  user: any;
  constructor(private signupService: SignupService, private dataSharing: DataSharingService, private router: Router) { }
  onSubmit() {
    const user = new User(
      this.myForm.value.email,
      this.myForm.value.userName,
      this.myForm.value.password,
      this.myForm.value.referral,
      null
    );
    console.log('THE LOGGED USER: IS ' + user.userName);
    this.signupService.signup(user).subscribe(
          data => {
            localStorage.setItem('token', data.token);
            localStorage.setItem('message', data.message);
            localStorage.setItem('userName', data.userName);
          },
            error => console.log(error)
    );
    this.dataSharing.changeUser(user);
    this.dataSharing.currentUser.subscribe(user => this.user = user);

    this.router.navigateByUrl('/');
  }
  ngOnInit() {
    this.myForm = new FormGroup({
      email: new FormControl(null, Validators.required),
      userName: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
      referral: new FormControl(null, Validators.required)
    });
  }

}
