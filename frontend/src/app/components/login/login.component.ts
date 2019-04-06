import { Component, OnInit } from '@angular/core';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  apiEndpoint = `${environment.apiEndpoint}/auth/twitter`;

  constructor() { }

  ngOnInit() {
  }

}
