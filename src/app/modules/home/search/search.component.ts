import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  value = 'Clear me';
  searchForm: FormGroup;

  constructor(
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

      this.router.navigate(['/search/movie'], { queryParams: { query, page:1 } });

  }

}
