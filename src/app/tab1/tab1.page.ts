import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page implements OnInit{
row : any;
constructor(private http : HttpClient){}

ngOnInit(): void {
  this.http.get('http://api.rifhandi.com/kuliner/product.php').subscribe(response=>{
    this.row = response
});
}

}
