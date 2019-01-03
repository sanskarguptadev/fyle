import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import { FilterPipe } from '../pipe/filter.pipe';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  selectedCity: string = '';
  private apiUrl = 'https://vast-shore-74260.herokuapp.com/banks?city=';
  data: any = {};
  constructor(private http: Http) {
    console.log('Hello fellow user');
   }

  ngOnInit() {
  }

  getData() {
    return this.http.get(this.apiUrl+this.selectedCity).pipe(map((res : Response) => res.json()))
  }

  getCities() {
    this.getData().subscribe(data => {
      console.log(data);
      this.data = data
    })
  }

  selectChangeHandler (event: any) {
    this.selectedCity = event.target.value;
    this.getData();
    this.getCities();
  }

}
