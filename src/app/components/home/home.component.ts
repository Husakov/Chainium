import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';
import { Url } from './../../services/url';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  urls ;
  selectedUrl;
  declaration: Url[] = [{ id: 0, urlName: '', url: '', description: ''}];
  constructor(public dataService: DataService) {
    if (localStorage.getItem('brokenUrls') == null) {
      localStorage.setItem('brokenUrls', JSON.stringify(this.declaration));
    }
    if (localStorage.getItem('urls') == null) {
      localStorage.setItem('urls', JSON.stringify(this.declaration));
    }
  }

  ngOnInit() {
    this.urls = JSON.parse(this.dataService.getUrls());
    console.log(this.urls);

  }
  public selectUrl(urls) {
    this.selectedUrl = urls;
  }
  public deleteUrl(urls) {
  this.dataService.delete(urls,1);
  }
}
