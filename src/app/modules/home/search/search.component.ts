import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CharacterService } from 'src/app/services/api/character.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  value = 'Clear me';
  searchForm: FormGroup;

  constructor(
    private charService: CharacterService,
    private router: Router
  ) {
    this.searchForm = new FormGroup({
      search: new FormControl('')
    })
  }

  ngOnInit(): void {
  }

  sendSearch() {
    const query = this.searchForm.controls['search'].value;

    // se pone un if para restringir las busquedas a minimo 3 letras
    if (query.length >= 3) {
      this.router.navigate(['/characters'], { queryParams: { query: query } });
    }
  }

}
