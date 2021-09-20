import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina3',
  templateUrl: './pagina3.page.html',
  styleUrls: ['./pagina3.page.scss'],
})
export class Pagina3Page implements OnInit {
  promedio : number;
  constructor() { }

  ngOnInit() {
  }
    onClick(n1 : HTMLInputElement , n2 : HTMLInputElement , n3 : HTMLInputElement,
      p1 : HTMLInputElement , p2 : HTMLInputElement , p3 : HTMLInputElement)
    {
      let no1 = Number (n1.value) * Number(p1.value)/100
      let no2 = Number (n2.value) * Number(p2.value)/100
      let no3 = Number (n3.value) * Number(p3.value)/100

      this.promedio = no1+no2+no3
      /*res = res /3
      this.promedio = res;
      console.log("el promedio es: " + res)*/
    }
}
