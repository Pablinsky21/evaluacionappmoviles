import { Injectable } from '@angular/core';
import {Persona} from './persona.model'
@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  private personas : Persona[] = [

    {

      id      : 1,

      nombre  : 'Juan',

      edad    : 20,

      foto    : 'https://img.freepik.com/foto-gratis/retrato-joven-sonriente-gafas_171337-4842.jpg?size=626&ext=jpg'
      
      
    },

    {

      id      : 2,

      nombre  : 'Andrea',

      edad    : 21,

      foto    : 'https://img.freepik.com/foto-gratis/mujer-tranquila-cabello-tenido-pie-manos-cruzadas-sonrisa-sincera-encantadora-demostrando-sus-dientes-perfectos-posando_273609-7675.jpg?size=626&ext=jpg'

      
    },

    {

      id      : 3,

      nombre  : 'Ana',

      edad    : 22,

      foto    : 'https://img.freepik.com/psd-gratis/mujer-morena-hispanica-joven-que-mira-arriba-mientras-que-sonrie_1368-41150.jpg?size=626&ext=jpg'

      

    }

  ]


  constructor() { }

  getPersonas()
  {
    return this.personas
  }
  getPersona(id: number)
  {//devuelve a la persona segun el id encontrado
    return this.personas.find(x=> {return x.id == id})
  }
  addPersona(nombre :string , edad: number , foto:string )
  {
    this.personas.push(
      {
        id : this.personas.length +1 ,
        nombre : nombre ,
        edad : edad,
        foto : foto,
       
      }
    )
  }
  deletePersona(id : number)
  {
    this.personas = this.personas.filter(x=> {return x.id !=id})
  }
  
  
}
