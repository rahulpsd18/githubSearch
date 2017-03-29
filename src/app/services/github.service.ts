import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {

  private username: string;
  private client_id = '0895556b161c50d76ebf';
  private client_secret = 'cad052b008ecaa2a9a994e7212512c8ad721cb79';

  constructor(private _http:Http) {
    console.log('Github Service Ready...');
  }

  // Getting user data based on the username

  getUser(){
    return this._http.get('http://api.github.com/users/' + this.username + '?client_id=' + this.client_id + '&client_secret=' + this.client_secret)
        .map(res => res.json());
  }


  // Getting Repository list of the user from Github Repo API

  getRepos(){
      return this._http.get('http://api.github.com/users/'+this.username+'/repos?client_id='+this.client_id+'&client_secret='+this.client_secret)
          .map(res => res.json());
  }


  // Updating the username (string) which is to be sent to api to fetch data

  updateUser(username:string){
      this.username = username;
  }

}
