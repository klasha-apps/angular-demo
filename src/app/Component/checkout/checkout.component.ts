import { Component, OnInit } from '@angular/core';
import {
  KlashaKitOptions,
  KlashaOptions,
} from 'angular-klasha/model/klasha-options';
import { config } from 'src/app/config';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  title: any;
  klasha = false;
  price: any = sessionStorage.getItem('price');
  email = config.email;
  phoneNumber = config.phoneNumber;
  merchantKey = config.merchantKey;
  amount = parseInt(this.price);
  sourceCurrency = config.sourceCurrency;
  destinationCurrency = config.destinationCurrency;
  txRef = config.txRef + this.makeId(16);
  businessId = config.businessId;
  fullname = config.fullname;
  paymentDescription = config.paymentDescription;
  paymentType = config.paymentType;
  hideBtn: boolean = true;

  options: KlashaOptions = {
    email: config.email,
    phone_number: config.phoneNumber,
    merchantKey: config.merchantKey,
    amount: parseInt(this.price),
    sourceCurrency: config.sourceCurrency,
    destinationCurrency: config.destinationCurrency,
    tx_ref: config.txRef + this.makeId(16),
    businessId: config.businessId,
    fullname: config.fullname,
    paymentDescription: config.paymentDescription,
    isTestMode: config.isTestMode,
    kit: {
      currency: config.currency,
      phone_number: config.phoneNumber,
      email: config.email,
      fullname: config.fullname,
      tx_ref: config.txRef + this.makeId(16),
      paymentType: config.paymentType,
    },
  };
  constructor() {}

  ngOnInit(): void {}

  makeId(length: any) {
    let result = '';
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  paymentInit() {
    console.log('Payment initialized');
  }

  paymentDone(info: any) {
    this.title = 'Payment Done';
    console.log(this.title, info);
  }

  checkOutButton() {
    this.hideBtn = false;
    this.klasha = true;
  }
}
