import { Component, OnInit } from '@angular/core';
import { PersonasService } from '../personas.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-listado-persona',
  templateUrl: './listado-persona.page.html',
  styleUrls: ['./listado-persona.page.scss'],
})
export class ListadoPersonaPage implements OnInit {
  personas = []
  constructor(private PersonasServicio : PersonasService , private router : Router) { }

  ngOnInit() {
    this.personas = this.PersonasServicio.getPersonas();
  }
  ionViewWillEnter() {
    this.personas = this.PersonasServicio.getPersonas();
  }
  agregar()
  {
    this.router.navigate(['/ingresar'])
  }

}
