import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iuser } from 'interface/user.interface';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user:Iuser;
  isLoaded:boolean = false;
  followerFetched:boolean = false;
  followers = [];

  constructor(private userService:UserService) { 
  }

  ngOnInit() {
    // in real app i would run these 2 in parallel
    this.getUser();
    this.getFollower();
   
  }


  getUser(){
    this.userService.getUser().subscribe((user:Iuser)=>{
      this.user = user;
      this.isLoaded = true;
    },(err)=>{
      // in real website i would use toast
      alert(err.error);
    })
  }

  getFollower(){
    this.userService.getFollower().subscribe((followers:any)=>{
      this.followers = followers.users;
      this.followerFetched = true;
    },(err)=>{
      // in real website i would use toast
      alert(err.error);
    })
  }

}
