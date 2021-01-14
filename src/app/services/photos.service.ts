import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  public data = [
    {
      id: 12,
      url: '../../../assets/img/britney-1.jpg',
      title: 'Popstar',
      author: 'Britney Spears',
      description:'She\'s so lucky, she\'s a star. But she cries, cries, cries in her lonely heart thinking: \"if there\'s nothing missing with my life then why do these tears come at night?\"',
    },
    {
      id: 15,
      url: '../../../assets/img/image1.jpg',
      title: 'Photographer',
      author: 'Tokyo',
      description: 'Hey, Baldy, you didn\'t have to take everything off jackass!'
    },
    {
      id: 18,
      url: '../../../assets/img/image2.jpg',
      title: 'Parks & Rec',
      author: 'Donna and Tom',
      description: 'Once a year, Donna and I spend a day treating ourselves. What do we treat ourselves to? Clothes. Treat Yoself. Massages. Treat Yoself. Treat yoself. Fine leather goods. Treat yoself! It\'s the best day of the year. The best day of the year!'
    },
    {
      id: 21,
      url: '../../../assets/img/image3.png',
      title: 'Parks & Rec',
      author: 'Jane Done',
      description: 'Just remember, every time you look up at the moon, I, too, will be looking at a moon. Not the same moon, obviously. That\'s impossible'
    }
  ];
  constructor() { }
}
