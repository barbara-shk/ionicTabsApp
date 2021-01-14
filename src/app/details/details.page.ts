import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhotosService } from '../services/photos.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

//récupérer la route active pour le param id
//récupérer photoservicer
  constructor(private activatedRoute:ActivatedRoute, private photoService: PhotosService) { }

//définir index du tableau à 0
  photoIndex = 0;
// déclaration de l'élément qu'on utilise pour la page details
  photoDetails = this.photoService.data[this.photoIndex];

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
    
      //recherche l'index du tab de photos correspondant à l'id recup
      //passage en parametre
    this.photoIndex = this.photoService.data.findIndex( item => item.id === params.id );
    this.photoService.data[this.photoIndex];
    })
  };

}
