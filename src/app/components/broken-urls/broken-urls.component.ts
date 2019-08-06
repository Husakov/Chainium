import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-broken-urls',
  templateUrl: './broken-urls.component.html',
  styleUrls: ['./broken-urls.component.css']
})
export class BrokenUrlsComponent implements OnInit {

  urls ;
  selectedUrl;
  constructor(public dataService: DataService) { }

  ngOnInit() {
    this.urls = JSON.parse(this.dataService.getBrokenUrls());
    console.log(this.urls);
  }
  public selectUrl(urls) {
    this.selectedUrl = urls;
  }
  public deleteUrl(urls) {
    this.dataService.delete(urls,2);
  }
}
