import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http'
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {
  row : any = [];
  constructor(private http: HttpClient, private route : ActivatedRoute, private routes : Router) { }
  
  ngOnInit() {
      const id = Number(this.route.snapshot.paramMap.get('id'));
      console.log(id);
      this.http.get('http://api.rifhandi.com/kuliner/detail_product.php?id='+id).subscribe(response=>{
        console.log(response);
        this.row = response;
      })
  }

}
