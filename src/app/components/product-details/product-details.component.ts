import { Component } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {

  qtd = 1

  addQtd(){

    this.qtd += 1

  }

  rmvQtd(){
     
    if(this.qtd > 1)
      this.qtd -= 1

  }

}
