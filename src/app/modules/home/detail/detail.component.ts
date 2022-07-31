import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharacterService } from 'src/app/services/api/character.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  detailHero: any;
  listComics: any[] = [];
  listStories: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private charService: CharacterService
  ) { }

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = this.route.snapshot.paramMap.get('idHeroe');
    
    this.charService.getHeroDetail(id).subscribe(res => {
      this.detailHero = res.data.results[0];
      this.listComics = res.data.results[0].series.items;
      this.listStories = res.data.results[0].stories.items
      console.log(res);
      
      console.log(this.listComics);
    } );
    
  }
} 
