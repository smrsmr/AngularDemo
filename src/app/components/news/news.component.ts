import { Component, OnInit } from '@angular/core';
import axios from '../../../plugins/axios';
import '../../../plugins/mock';
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.less']
})
export class NewsComponent implements OnInit {
  constructor() { }

  ngOnInit() {
	}
	getData() {
		axios.Get('/data/getchart').then(res => {
		  console.log(res);	
		}).catch(e => {
			console.log(e);
		})
	}
	getPage() {
		axios.Post('/data/page', { current: 2, pageSize: 30 }).then(res => {
			console.log(res);
		}).catch(e=> {
			console.log(e);
		})
	}
}
