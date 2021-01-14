import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../services/photos.service';
import { Storage } from '@ionic/storage'
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  galleryList = [];

  constructor(private PhotosService: PhotosService,
    private storage: Storage) {}

  titre = "Images Gallery";
  photoFav="";
  favList=[];

  addFav(){
    this.favList.push(this.photoFav);
    this.photoFav = "";
    console.log(this.favList);
    this.storage.set('favList', this.favList);
  }
  delFav(i){
    this.favList.splice(i,1);
    this.storage.set('favList', this.favList);
  }
  async getStorage(){
    const data = await this.storage.get('favList');
    if (data) this.favList = data;
    console.log('Données récupérées au storage', data);
  }

  ngOnInit(){
    console.log(this.PhotosService.data);
    this.galleryList = this.PhotosService.data;
    this.getStorage();
  }
}
