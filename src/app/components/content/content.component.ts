import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.less']
})
export class ContentComponent implements OnInit {
	h2: string
	list: Array<object>
	flasg: boolean
	msg: string
	constructor() {
		this.h2 = '<h2>我是一个H2标签</h2>'
		this.msg = '我是父组件传给子组件的'
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
		this.flasg = true
	}
	setH2() {
		this.h2 = '<h2>我是修改之后的</h2>'
	}
	propsFun() {
		console.log('我是父组件的方法');
	}
  ngOnInit() {
  }

}
