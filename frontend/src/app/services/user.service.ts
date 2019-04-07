import { Injectable } from '@angular/core';

import {HttpClient} from "@angular/common/http";

import {environment} from '../../environments/environment'
@Injectable()
export class UserService {





  constructor(private http:HttpClient) {
     
  }




 

  isAuthenticated(){
      return  !!localStorage.getItem('jwt');
  }


  saveToken(token:string){
      localStorage.setItem('jwt',token)
  }

  getUser(){
    return this.http.get(`${environment.apiEndpoint}/user/me`);
  };

  getFollower(){
    return this.http.get(`${environment.apiEndpoint}/user/me/followers`);
  };


  logout(){
    localStorage.removeItem('jwt')
  }


}
