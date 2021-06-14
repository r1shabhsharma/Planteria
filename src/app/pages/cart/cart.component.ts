import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  @ViewChild('qntty')  qntty: number;

  collections = this.store.collection('collections').valueChanges({ idField: 'id' });
  item_total_price;
  item_mrp = 1;
  order;
  CartItemArray = new Array;
  TotalPrice = 0;
  isDataRetrieved = false;
  isLoading = true;
  isCouponApplied = false;

  // qtyForm = this.formbuilder.group({
  //   qty: 1
  // })

  constructor(
    private formbuilder: FormBuilder,
    private store: AngularFirestore,
  ) {

    // this.isLoading = true;

    this.order = JSON.parse(window.localStorage.getItem('cart'));
    console.log(typeof (this.order));

    for (let res in this.order) {
      this.retrieveItem(parseInt(res));
    };

    this.isLoading = false;
    this.isDataRetrieved = true;
  }

  ngOnInit(): void {
  }

  retrieveItem(item_id) {
    this.collections.subscribe(res => {
      res.map(val => {
        for (let data in val) {
          if (data === "data") {
            val[data].map(res => {
              for (let arrdta in res) {
                if (arrdta === 'id') {
                  if (res[arrdta] === item_id) {
                    this.CartItemArray.push(res);
                    // this.CartItemArray.push()
                    this.CartItemArray.map(dta => {
                      if (dta['id'] === item_id) {
                        dta['qty'] = this.cartItemQty(item_id);
                        this.TotalPrice += this.cartItemQty(item_id) * dta['mrp'];
                        // console.log(dta);
                      }
                    })
                    // this.CartItemArray["qty"]=this.cartItemQty(item_id);
                    // console.log(this.CartItemArray);
                  }
                }
              }
            })
          }
        }
      });
    });

  }

  cartItemQty(item_id) {
    for (let res in this.order) {
      if (res === item_id.toString()) {
        // console.log(this.order[res]);
        return this.order[res];
      }
    }
    // console.log(item_id);
  }

  // calcItemPrice() {
  //   // return item_mrp * item_qty;
  //   console.log(this.qntty);
  // }

  applyCoupon() {
    // this.isLoading=true;
    if (this.isCouponApplied === false) {
      this.TotalPrice = this.TotalPrice - 200;
    }
    this.isCouponApplied = true;
    // this.isLoading=false;
  }

  removeItem() {

  }
}
