import { Component } from '@angular/core';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-imagem',
  templateUrl: './imagem.page.html',
  styleUrls: ['./imagem.page.scss'],
})
export class ImagemPage  {

  constructor(public photoService: PhotoService) { }

  addPhotoToGallery(){
    this.photoService.addNewToGallery();
  }   
}
