import { Component, OnInit } from '@angular/core';
import {Header} from './components/header'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
	title: String
	header: Header = {
		id: 1,
		name: '组件'
	}
  constructor() { }

	ngOnInit() {
		this.title = `我是一个Header${this.header.name}`
  }

}
