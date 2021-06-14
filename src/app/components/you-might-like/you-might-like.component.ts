import { ElementRef, ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-you-might-like',
  templateUrl: './you-might-like.component.html',
  styleUrls: ['./you-might-like.component.css']
})
export class YouMightLikeComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {

  }


  goToItemPage(item_no) {
    this.router.navigate(['/collection/item'], {
      queryParams: {
        no: item_no
      },
    }).then(() => {
      window.location.reload();
    });;
  }

}
