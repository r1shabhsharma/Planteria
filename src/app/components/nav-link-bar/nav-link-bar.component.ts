import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-link-bar',
  templateUrl: './nav-link-bar.component.html',
  styleUrls: ['./nav-link-bar.component.css']
})
export class NavLinkBarComponent implements OnInit {

  constructor(
    public router: Router
  ) { }

  ngOnInit(): void {
  }


  loadCollection(page_title) {
    this.router.navigate(['/collection'], {
      queryParams: {
        page: page_title
      },
    }).then(() => {
      window.location.reload();
    });;
  }

}
