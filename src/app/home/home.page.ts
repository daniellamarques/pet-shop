import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage {

  constructor(public alertController: AlertController, public navegador: NavController) {}

  async exibirAlerta() {

    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      message: 'Cadastrado com sucesso!',
      buttons: ['OK']
    });

    await alert.present();
  }
  exibirPagina(){
    this.navegador.navigateForward('segunda');
  }
  
 
}
