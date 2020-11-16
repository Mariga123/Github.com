import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchName: string;
  @Output() addsearch = new EventEmitter<any>();
  constructor() { }
// tslint:disable-next-line: typedef
search(){
  this.addsearch.emit(this.searchName);
}

  // tslint:disable-next-line: typedef
  ngOnInit(){
  }

}
