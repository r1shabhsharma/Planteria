import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-item-page',
  templateUrl: './item-page.component.html',
  styleUrls: ['./item-page.component.css']
})
export class ItemPageComponent implements OnInit {

  collections = this.store.collection('collections').valueChanges({ idField: 'id' });
  item_name: string;
  item_id: number;
  item_desc: string;
  item_photo: string;
  item_mrp: number;
  isDataRetrieved = false;
  isLoading = true;
  order;

  qtyForm = this.formbuilder.group({
    qty: ''
  })

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private store: AngularFirestore,
    private formbuilder: FormBuilder
  ) {
    this.route.queryParams.subscribe(params => {
      this.item_id = parseInt(params.no);
    })

    this.collections.subscribe(res => {
      res.map(val => {
        for (let data in val) {
          if (data === "data") {
            val[data].map(res => {
              for (let arrdta in res) {
                if (arrdta === 'id') {
                  if (res[arrdta] === this.item_id) {
                    // console.log(res)
                    this.item_name = res.name;
                    this.item_desc = res.desc;
                    this.item_mrp = res.mrp;
                    this.item_photo = res.photo;
                  }
                }
              }
            })
          }
        }
      });
      console.log("data retrived");
      this.isDataRetrieved = true;
    });

    this.isLoading = false;
  }


  ngOnInit(): void {
  }

  addToCart() {

    let storedCart = window.localStorage.getItem('cart');
    if (storedCart === null) {
      //Cart doesnt exist
      let order = {};
      if (this.qtyForm.get('qty').value === null || this.qtyForm.get('qty').value === '') {
        order[this.item_id] = 1;
      }
      else {
        order[this.item_id] = this.qtyForm.get('qty').value;
      }
      // console.log(order);
      window.localStorage.setItem('cart', JSON.stringify(order));
    }
    else {
      //Cart exists
      let order = {};
      let storedOrder = JSON.parse(storedCart);
      for (let dta in storedOrder) {
        // console.log(dta);
        if (parseInt(dta) === this.item_id) {
          //order exists for given id
          if (this.qtyForm.get('qty').value === null || this.qtyForm.get('qty').value === '') {
            storedOrder[dta] = parseInt(storedOrder[dta]) + 1;
            // console.log(storedOrder[dta]);
            // console.log(typeof (storedOrder[dta]));
            console.log('//order exists for given id value null');
            console.log(this.item_id);
            break;
          }
          else {
            storedOrder[dta] = parseInt(storedOrder[dta]) + parseInt(this.qtyForm.get('qty').value);
            console.log('//order exists for given id not null');
            console.log(this.item_id);
            break;
          }
        }
        else {
          //order doesnt exist for given id
          if (this.qtyForm.get('qty').value === null || this.qtyForm.get('qty').value === '') {
            storedOrder[this.item_id] = 1;
            // console.log(typeof (storedOrder[dta]));
            console.log('//order doesnt exist for given id and value null');
            console.log(this.item_id);
            break;
          }
          else {
            storedOrder[this.item_id] = this.qtyForm.get('qty').value;
            console.log('//order doesnt exist for given id and value not null');
            console.log(this.item_id);
            break;
          }
        }
      }
      window.localStorage.setItem('cart', JSON.stringify(storedOrder));
    }

    alert("Item added to cart");
    this.qtyForm.reset();
  }
}
