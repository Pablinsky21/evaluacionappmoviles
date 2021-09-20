import { Component, OnInit } from '@angular/core';
import { PersonasService } from '../personas.service';
import { ActivatedRoute,Router } from '@angular/router';
import {Persona} from '../persona.model';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-ingresar',
  templateUrl: './ingresar.page.html',
  styleUrls: ['./ingresar.page.scss'],
})
export class IngresarPage implements OnInit {

  constructor(private PersonasService : PersonasService , private router : Router,
    private activatedRouter: ActivatedRoute,
    private personasService: PersonasService,
    
    private alertController: AlertController) { }

  ngOnInit() {
  }
  async guardar(nombre: HTMLInputElement, edad: HTMLInputElement , url: HTMLInputElement)
  {
    {  
      const nom = nombre.value;
      const eda = edad.value;
      const img = url.value;
      const alertElement = await this.alertController.create({
        header : "Se ha guardado su asistencia satisfactoriamente",
        message : ":)",
        buttons : [       
      {
        text:"OK!",
        handler:() =>{
          this.PersonasService.addPersona(nom , Number (eda)  , img);
          this.router.navigateByUrl("/listadop");
        }
      }
    ]
      })
        await alertElement.present();
    }
  
  }

}
