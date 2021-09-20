import { Component, OnInit } from '@angular/core';
import { PersonasService } from '../personas.service';
import { ActivatedRoute,Router } from '@angular/router';
import {Persona} from '../persona.model';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-pagina2',
  templateUrl: './pagina2.page.html',
  styleUrls: ['./pagina2.page.scss'],
})
export class Pagina2Page implements OnInit {

  constructor(private activatedRouter: ActivatedRoute,
    private personasService: PersonasService,
    private router         : Router,
    private alertController: AlertController) { 
    
  }

  ngOnInit() {
  }
  async guardar()
  {  
    const alertElement = await this.alertController.create({
      header : "Ha recuperado su password y se inicio la sesion",
      message : ":)",
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
  }


}
