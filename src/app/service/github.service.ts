import { environment } from './../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../user';
import { Repos } from '../repos';


@Injectable({
  providedIn: 'root'
})
export class GithubService {
user: User;
repo: Repos;

  constructor(private http: HttpClient) {
    this.user = new User('', '', '', '', '', '', '', '', new Date());
    this.repo = new Repos('', '', '', '', '');
   }
}
