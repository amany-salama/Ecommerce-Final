import { Component, OnInit, Input } from '@angular/core';

declare var paypal: any;

@Component({
  selector: 'app-paypal-button',
  standalone: true,
  imports: [],
  templateUrl: './paypal-button.component.html',
  styleUrl: './paypal-button.component.css'
})
export class PaypalButtonComponent  implements OnInit {
  
  @Input() amount?: string;  // Amount passed in
  constructor() { }
  ngOnInit(): void {
    this.renderPayPalButton();
  }
  renderPayPalButton() {
    paypal.Buttons({
      createOrder: (data: any, actions: any) => {
        return actions.order.create({
          purchase_units: [{
            amount: {
              value: this.amount  // Use the dynamic amount
            }
          }]
        });
      },
      onApprove: (data: any, actions: any) => {
        return actions.order.capture().then((details: any) => {
          alert('Transaction completed by ' + details.payer.name.given_name);
        });
      },
      onError: (err: any) => {
        console.error(err);
      }
    }).render('#paypal-button-container');
  }
}
