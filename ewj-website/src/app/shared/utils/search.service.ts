import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor() { }
  public searchData = {
    items: [],
    links: { first: "", previous: "", next: "", last: "" },
    meta: { 
      totalItems: 1, 
      itemCount: 1, 
      itemsPerPage: 9, 
      totalPages: 1, 
      currentPage: "1" }
  };
}
