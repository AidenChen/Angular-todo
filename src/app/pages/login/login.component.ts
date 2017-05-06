import { Component, OnInit, Inject  } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username = '';
  password = '';

  constructor(@Inject('auth') private service) {
  }

  ngOnInit() {
  }

  onClick() {
    console.log('auth result is: ' + this.service.loginWithCredentials(this.username, this.password));
  }

  onSubmit(formValue) {
    console.log(formValue);
  }

}
