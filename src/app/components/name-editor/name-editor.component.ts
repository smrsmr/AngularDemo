import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-name-editor',
  templateUrl: './name-editor.component.html',
  styleUrls: ['./name-editor.component.less']
})
export class NameEditorComponent  {
	name = new FormControl('');
	constructor() {
		this.name.setValue('请输入值...')
	}
	updateName() {
		this.name.setValue('Nancy');
	}
}
