import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PhotoService } from '../services/photo.service';
@Component({
  selector: 'app-cat',
  templateUrl: './cat.page.html',
  styleUrls: ['./cat.page.scss'],
})
export class CatPage {
    constructor(private router: Router, public photoService: PhotoService){};
    
    Voltarpagina0(){
      this.router.navigate(['home']);
    }
    addPhotoToGallery(){
      this.photoService.addNewToGallery();
    }   
}
