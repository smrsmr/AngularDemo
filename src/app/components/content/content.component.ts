import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.less']
})
export class ContentComponent implements OnInit {
	h2: string
	list: Array<object>
	constructor() {
		this.h2 = '<h2>我是一个H2标签</h2>'
		this.list = [
			{
				id: 1,
				name: 'vue'
			},
			{
				id: 2,
				name: 'react'
			},
			{
				id: 3,
				name: 'angular'
			}
		]
	}

  ngOnInit() {
  }

}
