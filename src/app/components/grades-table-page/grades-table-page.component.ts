import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-grades-table-page',
  templateUrl: './grades-table-page.component.html',
  styleUrls: ['./grades-table-page.component.scss']
})

export class GradesTablePageComponent implements OnInit {
  year = 0;
  title = "";

  constructor(
    private route: ActivatedRoute
  ) {

  }

  async ngOnInit()  {
    this.route.queryParams.subscribe(params => {
      this.year = params['year'] as number;
      if (this.year == 1) {
        this.title = this.year + "ère année";
      } else {
        this.title = this.year + "ème années";
      }
    });


  }
}
