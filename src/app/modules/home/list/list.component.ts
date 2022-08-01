import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpinnerVisibilityService } from 'ng-http-loader';
import { CharacterService } from 'src/app/services/api/character.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  currentSearch: string = '';
  listHero: any[] = [];

  constructor(
    private charService: CharacterService,
    private route: ActivatedRoute,
    private spinner: SpinnerVisibilityService
  ) { }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
        console.log(params);
        if (!!params && params.query) {
          this.currentSearch = params.query;
          this.sendSearch();
        } else {
          this.getHeroes();
        }
      });
  }

  getHeroes() {
    this.spinner.show();
    this.charService.getHero().subscribe(res => {
      console.log(res)
      this.listHero = res.data.results
    }).add(() => this.spinner.hide());
  }

  sendSearch() {
    this.spinner.show();
    this.charService.searchHero(this.currentSearch).subscribe(res => {
      console.log(res);
      
      this.listHero = res.data.results;
    }).add(() => this.spinner.hide());
  }
}



