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
  numberPage: string;
  listMovie: any[] = [];
  searchMovie: any[] = [];

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
          this.numberPage = params.page;
          this.sendSearch();
        } else {
          this.getMovies();
        }
      });
  }

  getMovies() {
    this.spinner.show();
    this.charService.getMovie().subscribe(res => {
      console.log(res)
      this.listMovie = res.results
    }).add(() => this.spinner.hide());
  }

  sendSearch() {
    this.spinner.show();
    this.charService.searchMovie(this.currentSearch, this.numberPage).subscribe(res => {
      console.log(res,'search');

      this.searchMovie = res.results;

    }).add(() => this.spinner.hide());
  }
}



