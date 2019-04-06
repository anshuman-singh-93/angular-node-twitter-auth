import { Component, OnInit, Input } from '@angular/core';
import {environment} from '../../../environments/environment'
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() profile_image_url :string;
  @Input() name :string;

  constructor(private userService:UserService,private router:Router) { }

  ngOnInit() {
  }

  onLogout(){
    this.userService.logout();
    this.router.navigate(['/login']);

  }

}
