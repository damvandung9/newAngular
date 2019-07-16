import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Product';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  product: Product = {
    name: "Product 1",
    desc : "No way to see",
    img: "assets/images/picture.jpg",
    price: 300,
    status: true,
  };

  onClickMe = event => {
    this.product.name="Test Even Binding";
    this.product.img="https://3c1703fe8d.site.internapcdn.net/newman/csz/news/800/2019/ofalltheforc.jpg"
  }
  handleKeyUp = event =>{
    if(event.target.value!=""){
      this.product.desc = event.target.value;
    }else{
      this.product.desc="No way to see";
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
