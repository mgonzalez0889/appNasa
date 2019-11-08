import { Component, OnInit } from '@angular/core';
import { Apod } from '../../shared/models/apod';
import {NasaApiService} from '../../services/nasa-api.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  apod: Apod;
  constructor(private nasaApi: NasaApiService) {}

  ngOnInit() {
    this.nasaApi.getApod().
        subscribe(data => {
        this.apod = data;
    });

  }



}
