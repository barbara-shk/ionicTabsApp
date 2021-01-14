import { Component } from '@angular/core';
import { PhotosService } from '../services/photos.service';
import { Storage } from '@ionic/storage'
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private PhotosService: PhotosService,
    private storage: Storage) {}

    favList=[];
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
      this.getStorage();
    }
}
