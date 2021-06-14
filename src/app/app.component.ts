import { Component, OnChanges } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnChanges{
  title = 'Planteria';
  isHomepage = true;
  isCollectionpage = false;

  collections = this.store.collection('collections').valueChanges({ idField: 'id' });

  constructor(
    private store: AngularFirestore, 
    public router: Router) {

    // this.collections.subscribe(res => {
    //   console.log(res);

    //   // for (let i = 0; i < res.length; i++) {
    //   //   console.log(res[i]);
    //   //   if (res[i].id === "seeds") {
    //   //     for (let data in res[i]) {
    //   //       // console.log(data);
    //   //       if (data === "data") {
    //   //         console.log(res[i][data]);
    //   //         for (let subdata in res[i][data])
    //   //           console.log(res[i][data][subdata]);
    //   //       }
    //   //     }
    //   //   }
    //   // }

    //   res.map(val => {
    //     if (val.id === "seeds") {
    //       // console.log(val);
    //       for (let data in val) {
    //         if (data === "data") {
    //           // console.log(val[data]);
    //           val[data].map(r => {
    //             console.log(r);
    //           })
    //         }
    //       }
    //     }
    //   });
    // });
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
  }

  ngOnChanges() {
    if (this.router.url === '/') {
      this.isHomepage = true;
      console.log("HOME");
    }
    if (this.router.url === '/collection') {
      this.isCollectionpage = true;
      console.log("COLLECTION");
    }
    else {
      this.isHomepage = false;
      console.log("else");
    }
    
  }

}
