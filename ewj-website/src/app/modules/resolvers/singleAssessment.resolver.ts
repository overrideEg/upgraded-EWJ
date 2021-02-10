import { API_URLS } from '../../../assets/constants/API_URLS';
import { ApiDataService } from '../../shared/utils/api-data.service';
import { OverrideService } from '../../shared/utils/override.service';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SingleAssessment implements Resolve<any> {
  constructor(
    private apiService: ApiDataService,
    private override: OverrideService
  ) {}
  resolve(route: ActivatedRouteSnapshot): Observable<any> | Promise<any> | any {
    let singleAss = route.paramMap.get('id');
    return this.apiService.getData(
      API_URLS.Assessment.getOne.replace('{entityId}', singleAss),
      this.override.AuthHeaders
    );
  }
}
