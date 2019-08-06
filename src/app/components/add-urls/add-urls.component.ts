import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-add-urls',
  templateUrl: './add-urls.component.html',
  styleUrls: ['./add-urls.component.css']
})
export class AddUrlsComponent implements OnInit {

  url: {id, urlName, url, description} = {id: null, urlName: "", url: "", description: ""};

  constructor(public dataService: DataService) { }

  ngOnInit() {
  }

  createContact(){
    console.log(this.url);
    this.dataService.createUrl(this.url);
    this.url = {id: null, urlName: "", url: "", description: ""};

  }
}
