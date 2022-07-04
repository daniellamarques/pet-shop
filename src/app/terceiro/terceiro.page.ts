import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PhotoService } from '../services/photo.service'; 
@Component({
  selector: 'app-terceiro',
  templateUrl: './terceiro.page.html',
  styleUrls: ['./terceiro.page.scss'],
})
export class TerceiroPage  {
  //photoService: any;

 
    constructor(private router: Router, public photoService: PhotoService){};

    
    Voltarpagina1(){
      this.router.navigate(['home']);
    }
    addPhotoToGallery(){
      this.photoService.addNewToGallery();
    }
}
