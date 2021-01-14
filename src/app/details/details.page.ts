import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhotosService } from '../services/photos.service';
import { Storage } from '@ionic/storage'

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  // récupérer la route active pour récup. le parametre id
  // on recup. notre PhotosService
  constructor(
    private activatedRoute: ActivatedRoute, 
    private photoService: PhotosService,
    private storage: Storage) { }

    // on définit l'index du tableau à 0
    photoIndex = 0;
    favList=[];
    photoFav="";
    btnText: string = 'Add to fave';
    btnAdded: boolean = true;
    // déclaration de notre élément pour l'utiliser dans page
    // de details
    photoDetails = this.photoService.data[this.photoIndex];
    changeText(): void {
      if(this.btnText === 'Add to fave') { 
        this.btnAdded = false;
        this.btnText = 'Remove'
      } else {
        this.btnAdded = true;
        this.btnText = 'Add to fave'
      }
    }
    addFav(){
      this.favList.push(this.photoDetails);
      console.log(this.favList);
      this.storage.set('favList', this.favList);
      if(this.photoDetails){
        
      }
    }
    async getStorage(){
      const data = await this.storage.get('favList');
      if (data) this.favList = data;
      console.log('Données récupérées au storage', data);
    }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {

      // on recherche l'index du tableau de photos correspondant
      // à l'id récupéré en paramètre
      this.photoIndex = this.photoService.data.findIndex(item => item.id == params.id);

      console.log(this.photoService.data[this.photoIndex]);

      this.photoDetails = this.photoService.data[this.photoIndex];

      
    });
    this.getStorage();
  }

}