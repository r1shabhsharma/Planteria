import { Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(
    public router: Router,
    private ngzone: NgZone,
    private route: ActivatedRoute,) { }

  ngOnInit(): void {
  }

  refresh() {
    window.location.reload()
  }

  loadCollection(page_title) {
    // console.log(page_title);
    // this.ngzone.run(() => this.router.navigateByUrl('/collection'));


    this.router.navigate(['/collection'], {
      // relativeTo: this.route,
      queryParams: {
        page: page_title
      },
      // queryParamsHandling: 'merge',
      // preserve the existing query params in the route
      // skipLocationChange: true
      // do not trigger navigation
    }).then(() => {
      window.location.reload();
    });;

    // this.router.navigate(['/collection',page_title]);
    // this.router.navigate(['/collection']);
  }



}
