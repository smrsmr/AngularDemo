/**
 * Input 父组件给子组件传值
 */
import { Component, OnInit, Input } from '@angular/core';
import {Header} from './components/header'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
	private _msg = '';
	@Input() 
	set msg(msg: string) {
		this._msg = msg+'我是修改之后的'
		}
	@Input() propsFun: any;
	title: String
	header: Header = {
		id: 1,
		name: '组件'
	}
	sonData: string;
	constructor() {
		this.sonData = '我是子组件的数据';
	}

	ngOnInit() {
		this.title = `我是一个Header${this.header.name}`
	}
	run() {
		console.log('我是子组件里面的方法!');
	}
}
