import { Injectable } from '@angular/core';
import {Apod} from '../shared/models/apod';

@Injectable({
  providedIn: 'root'
})
export class NasaApiService {

  private readonly DATA: Apod =  {
    title: 'prueba',
    date: '2019/11/08',
    url: 'https://s1.eestatic.com/2017/01/05/actualidad/Actualidad_183744742_129728060_1024x576.jpg',
    explanation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus urna id lorem gravida, sed aliquet tellus vestibulum. Phasellus mi est, interdum sit amet maximus ut, volutpat quis eros. Morbi pellentesque mi libero, id tristique dolor porttitor eget. Suspendisse eu nibh sit amet nulla vulputate efficitur. Donec at ex nec ligula rutrum dapibus. Ut quis elementum mauris. Quisque vitae enim bibendum, consectetur massa a, ultricies purus. Nam vulputate, orci a dignissim aliquam, lorem magna scelerisque ipsum, sit amet porttitor dolor ex et neque.\n' +
      '\n' +
      'Cras lacinia, est non rutrum eleifend, sapien ipsum faucibus purus, vitae vehicula turpis nulla ut augue. Curabitur faucibus massa eu vulputate accumsan. Quisque a dignissim sem. Phasellus mollis vel orci id sollicitudin. Mauris nec tellus a eros blandit consequat. Pellentesque placerat, augue ac consectetur interdum, tellus ipsum aliquet mi, quis tincidunt erat diam et risus. Aliquam erat volutpat. Vestibulum diam neque, porttitor et turpis non, posuere hendrerit ex. Sed id ante lacus. Pellentesque lobortis vel lectus quis sagittis. Nullam ac leo dolor. Sed nec elit hendrerit, scelerisque magna sed, pulvinar justo.\n' +
      '\n' +
      'In dolor sapien, volutpat eget mi ut, vestibulum pellentesque dolor. Nulla eu tortor a neque dictum convallis at sit amet purus. Morbi a augue pulvinar nisi consectetur pharetra. Quisque a risus lorem. Vivamus turpis nisl, tristique ut feugiat eu, aliquet in velit. Proin ac luctus leo. Cras vitae facilisis sapien, vitae tempus lorem. Vestibulum a felis eu mi molestie bibendum vel id risus. Etiam egestas ultrices odio, ut dapibus elit tempus ac. Nunc ut tellus molestie, luctus nisl sit amet, iaculis nunc. Quisque tristique efficitur urna, eget molestie turpis luctus condimentum. Cras laoreet, nisl non interdum vulputate, arcu magna fermentum erat, non lacinia lacus ligula quis elit. Cras sed nulla diam.'
  };



  constructor() { }

  getApod() {
    return this.DATA;

  }


}
