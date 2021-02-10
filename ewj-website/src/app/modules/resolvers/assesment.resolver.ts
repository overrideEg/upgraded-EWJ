import { API_URLS } from './../../../assets/constants/API_URLS';
import { ApiDataService } from './../../shared/utils/api-data.service';
import { OverrideService } from './../../shared/utils/override.service';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class Assessment implements Resolve<any> {
  constructor(
    private apiService: ApiDataService,
    private override: OverrideService
  ) {}
  resolve(route: ActivatedRouteSnapshot): Observable<any> | Promise<any> | any {
    return this.apiService.getData(
      API_URLS.Assessment.get,
      this.override.AuthHeaders
    );
  }
}
