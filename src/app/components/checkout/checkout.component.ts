import { Component } from '@angular/core';
import { faBarcode } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {

  payments = '';
  faBarcode = faBarcode

  onSelect(option: string){

    this.payments = option;

  }

}
