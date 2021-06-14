import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-collection-page',
  templateUrl: './collection-page.component.html',
  styleUrls: ['./collection-page.component.css']
})
export class CollectionPageComponent implements OnInit {

  collections = this.store.collection('collections').valueChanges({ idField: 'id' });
  collection_name: string;
  collection_heading: string;
  page_id: string;
  collection_array = new Array;
  collection_desc: string;
  isDataRetrieved = false;
  isLoading = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: AngularFirestore,
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      // console.log(params.page);
      this.page_id = params.page;
    })

    switch (this.page_id) {
      case ('shrubs'):
        this.collection_name = 'living-gift';
        this.collection_heading = 'Gift That Grows';
        break;
      case ('soil'):
        this.collection_name = 'soil';
        this.collection_heading = 'Soil';
        break;
      case ('ceramic'):
        this.collection_name = 'ceramic';
        this.collection_heading = 'Ceramic';
        break;
      case ('succulent'):
        this.collection_name = 'succulent';
        this.collection_heading = 'Succulent';
        break;
      case ('bonsai'):
        this.collection_name = 'bonsai';
        this.collection_heading = 'Bonsai';
        break;
      case ('seeds'):
        this.collection_name = 'seeds';
        this.collection_heading = 'Seeds';
        break;
      default:
        this.collection_name = '';
    }



    this.collections.subscribe(res => {
      console.log(res);

      res.map(val => {
        if (val.id === this.collection_name) {
          console.log(val);
          for (let data in val) {
            if (data === "data") {
              // console.log(val[data]);
              val[data].map(r => {
                // console.log(r);
                this.collection_array.push(r);
              })
            }
            if (data === "collection_desc") {
              this.collection_desc = val[data];
            }
          }
        }
      });
      console.log("data retrived");
      this.isDataRetrieved = true;
      console.log(this.collection_array);
    });

    this.isLoading = false;

  }

  goToItemPage(item_no) {
    this.router.navigate(['/collection/item'], {
      queryParams: {
        no: item_no
      },
    }).then(() => {
      window.location.reload();
    });
  }
}
