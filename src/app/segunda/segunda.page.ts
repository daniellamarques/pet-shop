import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-segunda',
  templateUrl: './segunda.page.html',
  styleUrls: ['./segunda.page.scss'],
})
export class SegundaPage  {

  constructor(private router: Router){};
  
  Voltarpagina(){
    this.router.navigate(['home']);
  }
  
  exibirPagina3(){
    this.router.navigate(['terceiro'])
  }
  exibirPagina4(){
    this.router.navigate(['cat'])
  }
 

}
