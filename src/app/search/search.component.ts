import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchName: string;

  @Output() search = new EventEmitter<any>();
  constructor() {}

  // tslint:disable-next-line: typedef
  searchUserName(){
    this.search.emit(this.searchName);
  }

  // tslint:disable-next-line: typedef
  ngOnInit() {
  }

}
