import { Component, OnInit } from '@angular/core';
import { GithubService } from '../service/github.service';
import { User } from '../user';
import { Repos } from '../repos';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {

user: User;
repo: Repos;

  constructor(public githubService: GithubService) { }

  // tslint:disable-next-line: typedef
  getRepo(searchName){
    this.githubService.getUser(searchName).then(
      (success) => {
        this.user = this.githubService.user;
      },
      (error) => {
        console.log(error);
      }
    );
    this.githubService.getRepo(searchName).then(
      (success) => {
        this.repo = this.githubService.repo;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  // tslint:disable-next-line: typedef
  ngOnInit() {
    this.getRepo('Mariga123');
  }

}
