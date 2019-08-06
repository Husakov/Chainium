import { Injectable } from '@angular/core';
import { Url } from './url';
import { HttpClient } from '@angular/common/http';
import * as isReachable from 'is-reachable';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  urls: Url[] = [];
  brokenUrls: Url[] = [];

  constructor(private http: HttpClient) {
  }
  public getUrls() {
    return localStorage.getItem('urls');
  }
  public getBrokenUrls() {
    return localStorage.getItem('brokenUrls');
  }
  public createUrl(url) {
    this.urls = JSON.parse(localStorage.getItem('urls'));
    this.brokenUrls = JSON.parse(localStorage.getItem('brokenUrls'));
    (async () => {
      if (await isReachable(url.url)){
        this.urls.push(url);
        localStorage.setItem('urls', JSON.stringify(this.urls));
      }
      if ((await isReachable(url.url)) == false ){
        this.brokenUrls.push(url);
        localStorage.setItem('brokenUrls', JSON.stringify(this.brokenUrls));
      }
    })();
    }
    public delete(url, id) {
    if (id == 1){
      let deleting = JSON.parse(localStorage["urls"]);
      for (let i = 0; i < deleting.length; i++) {
        if(deleting[i].url == url.url){
          deleting.splice(i,1);
          localStorage.setItem('urls', JSON.stringify(deleting));
          break;
        }
      }
    } else if (id == 2) {
      let deleting = JSON.parse(localStorage["brokenUrls"]);
      for (let i = 0; i < deleting.length; i++) {
        if(deleting[i].url == url.url){
          deleting.splice(i,1);
          localStorage.setItem('brokenUrls', JSON.stringify(deleting));
          break;
        }
      }

    }
    }
}
