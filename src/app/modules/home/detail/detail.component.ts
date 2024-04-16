import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpinnerVisibilityService } from 'ng-http-loader';
import { CharacterService } from 'src/app/services/api/character.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  detailMovie: any;
  listGenres: any[] = [];
  listCompanies: any[] = [];
  homeUrl: string;
  photoDetail: string;
  list: any[] = [];
  date: string;
  vote: string;

  constructor(
    private route: ActivatedRoute,
    private charService: CharacterService,
    private spinner: SpinnerVisibilityService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getMovie();
  }

  getMovie(): void {
    const id = this.route.snapshot.paramMap.get('idMovie');
    console.log(id,'iddd');


    this.spinner.show();
    this.charService.getMovieDetail(id).subscribe(res => {
      console.log(res,'ressss');
      this.vote = res.vote_average
      this.date = res.release_date;
      this.list = res.runtime;
      this.detailMovie = res.title;
      this.listGenres = res.genres;
      this.listCompanies = res.production_companies;

    }).add(() => this.spinner.hide());

  }
  back(): void {
    this.location.back()
  }
}
