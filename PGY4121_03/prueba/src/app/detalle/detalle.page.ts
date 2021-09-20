import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import {Persona} from '../persona.model';
import { PersonasService } from '../personas.service';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {
  persona : Persona
  constructor(
    private activatedRouter: ActivatedRoute,
    private personasService: PersonasService,
    private router         : Router,
    private alertController: AlertController
  ) { }

  ngOnInit() {
    this.activatedRouter.paramMap.subscribe(paramMap => {
      const id = paramMap.get('id') // Es de tipo string 
      this.persona = this.personasService.getPersona(Number(id));
    })
  }
  async eliminar()
  {
    const alertElement = await this.alertController.create({
      header : "Esta seguro de eliminar a la persona?",
      message : "Favor confirmar",
      buttons : [
        {
        text:"No",
        role:"cancel"
        },
    {
      text:"Si",
      handler:() =>{
        this.personasService.deletePersona(this.persona.id);
        this.router.navigateByUrl("/listadop");
      }
    }
  ]
    })
      await alertElement.present();
  }

}
