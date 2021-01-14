import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../services/photos.service'
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  galleryList = [];

  constructor(private PhotosService: PhotosService) {}

  ngOnInit(){
    console.log(this.PhotosService.data);
    this.galleryList = this.PhotosService.data;
  }
}
