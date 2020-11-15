import { Injectable } from '@angular/core';
import { User } from '../user';
import { Repos } from '../repos';
import { HttpClient} from '@angular/common/http';
import { environment} from '../../environments/environment';

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
    // tslint:disable-next-line: typedef
    getUser(searchName: string){
      interface ApiResponse{
         public_repos: any;
         login: any;
         html_url: any;
         name: any;
         avatar_url: any;
         followers: any;
         following: any;
         repos_url: any;
         created_at: Date;
      }
      const promise = new Promise((resolve, reject) => {
        const apiURL = 'https://api.github.com/users/' + searchName + '?access_token=' + environment.apiKey;
        this.http.get<ApiResponse>(apiURL)
          .toPromise()
          .then(
            res => { // Success
              this.user = res;
              resolve();
            },
            (error) => {
              reject();
            }
          );
      });
      return promise;
  }
  // tslint:disable-next-line: typedef
  getRepo(searchName: string){
    interface ApiResponse{
      html_url: string;
      name: string;
      repos_url: string;
      description: string;
      forks_count: number;
    }
    const promise = new Promise((resolve, reject) => {
      const apiURL = 'https://api.github.com/users/' + searchName + '/repos?access_token=' + environment.apiKey;
      this.http.get<ApiResponse>(apiURL)
        .toPromise()
        .then(
          res => { // Success
            this.repo = res;
            resolve();
          },
          (error) => {
            reject();
          }
        );
    });
    return promise;
  }
}

