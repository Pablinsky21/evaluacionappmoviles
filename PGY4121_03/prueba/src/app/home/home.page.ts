import { Component } from '@angular/core';
import { PersonasService } from '../personas.service';
import { ActivatedRoute,Router } from '@angular/router';
import {Persona} from '../persona.model';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor( private activatedRouter: ActivatedRoute,
    private personasService: PersonasService,
    private router         : Router,
    private alertController: AlertController) { }
  ngOnInit() {
  }
  async iniciarsesion(usuario: HTMLInputElement, password: HTMLInputElement ) {
      const user = usuario.value;
      const pass = password.value;
      if(user=="alumno01" && pass=="123" || user=="docente01" && pass=="321"){
        const alertElement = await this.alertController.create({
          header : "Se ha iniciado sesion correctamente",
          message : "Para registrar tu asistencia presiona el boton rojo de la parte inferior derecha",
          buttons : [       
        {
          text:"Gracias!",
          handler:() =>{
            
            this.router.navigateByUrl("/listadop");
          }
        }
      ]
        })
          await alertElement.present();
    }else
    {
      const alertElement = await this.alertController.create({
        header : "Password o usuario incorrecto :(!",
        message : "Por favor intentelo denuevo",
        buttons : [       
      {
        text:"OK!",
        handler:() =>{
          
          this.router.navigateByUrl("/home");
        }
      }
    ]
      })
        await alertElement.present();

    }
      }
  
  

  olvidecontrasena( ) {
  

    this.router.navigate(['/pagina2']);
}
 


}