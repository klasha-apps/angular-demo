import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  products: any = [
    {
      name: 'Nike Mercurial Superfly 7 Elite Mbappé Rosa FG',
      price: 12000,
      shipping: 'Eligible for Shipping To Mars or somewhere else',
      rating: 4.05,
      image: 'nike-1.png',
    },
    {
      name: 'Nike Air VaporMax Plus',
      price: 10500,
      shipping: 'Eligible for Shipping To Mars or somewhere else',
      rating: 4.05,
      image: 'nike-2.png',
    },
    {
      name: 'Nike Air Max 270 G',
      price: 8000,
      shipping: 'Eligible for Shipping To Mars or somewhere else',
      rating: 4.05,
      image: 'nike-3.png',
    },
    {
      name: 'NikeCourt Air Zoom GP Turbo Naomi Osaka',
      price: 15000,
      shipping: 'Eligible for Shipping To Mars or somewhere else',
      rating: 4.05,
      image: 'nike-4.png',
    },
    {
      name: 'Nike Air Zoom Pegasus 38 Shield By You',
      price: 11500,
      shipping: 'Eligible for Shipping To Mars or somewhere else',
      rating: 4.05,
      image: 'nike-5.png',
    },
    {
      name: 'Nike Air Force 1 GTX Boot',
      price: 10000,
      shipping: 'Eligible for Shipping To Mars or somewhere else',
      rating: 4.05,
      image: 'nike-6.png',
    },
    {
      name: 'Nike Air Max Plus SE',
      price: 18000,
      shipping: 'Eligible for Shipping To Mars or somewhere else',
      rating: 4.05,
      image: 'nike-7.png',
    },
    {
      name: 'Nike Air Zoom Terra Kiger 7',
      price: 5000,
      shipping: 'Eligible for Shipping To Mars or somewhere else',
      rating: 4.05,
      image: 'nike-8.png',
    },
  ];
  cart: any = [];
  cartSize = 0;
  totalPrice = 0;
  constructor() {}

  ngOnInit(): void {
    sessionStorage.clear();
  }

  addToCart(item: any) {
    this.cartSize++;
    this.cart.push(item);
    this.totalPrice += item.price;
    sessionStorage.setItem('price', this.totalPrice.toString());
  }
}
