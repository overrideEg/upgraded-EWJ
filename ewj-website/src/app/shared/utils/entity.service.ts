import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { ApiDataService } from './api-data.service';
import { OverrideService } from 'src/app/shared/utils/override.service';
import { API_URLS } from './../../../assets/constants/API_URLS';

@Injectable({
  providedIn: 'root'
})
export class EntityService {


  allrecords: any[];
  record: any;

  constructor(
    private APIService: ApiDataService,
    private override: OverrideService,

    private _snackBar: MatSnackBar
  ) { }
  async save(url: string, body: any, headers?: HttpHeaders, contentType?: any) {

    return await this.APIService.post(url, body, headers, contentType);
  }

  async upload(url: string, data: any[]) {
    // var url = API_URLS[apiSelector]['upload'];
    // if (url) {
    // }
    return await this.APIService.post(url, data);
  }



  async update(url: string, body: any, entityId?: any, headers?: HttpHeaders, contentType?: string) {
    // let url: string;
    // if (API_URLS[apiSelector]['put']) {
    //   url = API_URLS[apiSelector]['put'];
    // }
    // else {
    //   url = API_URLS[apiSelector]['post'];
    // }

    if (body) {
      if (entityId) {
        url = url.replace('{entityId}', entityId);
      }
      return await this.APIService.update(url, body, headers, contentType);
    }
  }

  async delete(apiSelector: string, body?: any, entityId?: string, headers?: HttpHeaders, contentType?: string) {
    var url = API_URLS[apiSelector]['delete'];
    if (body) {
      if (entityId) {
        url = url.replace('{entityId}', entityId);
      }
      return await this.APIService.delete(url, body, headers, contentType);
    }
  }

  async getAll(url: string, page?: number, pageSize?: number, headers?: HttpHeaders, contentType?: string) {
    // let url;
    // if (!apiSelector.includes('http')) {
    //   url = API_URLS[apiSelector]['get'];
    // }
    // else {
    //   url = apiSelector;
    // }
    return await this.APIService.getData(url, headers, contentType);
  }

  async getOne(url: string, entityId: any, headers?: HttpHeaders, contentType?: string) {
    if (entityId) {
      url = url.replace('{entityId}', entityId);
      return await this.APIService.getData(url, headers, contentType);
    }
  }

  async getData(url: string, headers?: HttpHeaders, contentType?: string) {
    return await this.APIService.getData(url, headers, contentType);
  }
  showSuccessToast(type: string) {
    this._snackBar.open('record ' + type + ' successfully', 'Success', {
      duration: 2000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    });
  }

  showErrorToast(error?: any, errorString?: string) {
    this._snackBar.open(errorString ? errorString : error?.error?.error, 'Error', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    });
  }
}
