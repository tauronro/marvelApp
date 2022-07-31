import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(
    private homeService: HomeService
  ) { }

  ngOnInit(): void {
  }

  testHero() {
    this.homeService.getHero().subscribe(res => console.log(res));
  }

}
