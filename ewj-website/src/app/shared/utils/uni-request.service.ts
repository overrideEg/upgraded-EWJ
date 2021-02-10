import { Injectable } from '@angular/core';
import { requestDetails } from 'src/app/shared/utils/uniRequest';
@Injectable({
  providedIn: 'root'
})
export class UniRequestService {

  constructor() { }
  uniRequest: any[] = [];
  
  addUniRequest(request) {
    this.uniRequest.push(request);
  }
  getUniRequest() {
    return this.uniRequest;
  }
}
