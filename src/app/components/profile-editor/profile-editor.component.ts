import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormControl } from '@angular/forms';
//当需要与多个表单打交道时，手动创建多个表单控件实例会非常繁琐。FormBuilder 服务提供了一些便捷方法来生成表单控件
import { FormBuilder } from '@angular/forms';
//表单验证
import { Validators } from '@angular/forms';
//引入服务
import { StorageService } from '../../services/storage.service';
@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.less']
})
export class ProfileEditorComponent implements OnInit {
	/* profileForm = new FormGroup({
    firstName: new FormControl(''),
		lastName: new FormControl(''),
		address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl('')
    })
  }); */
	profileForm = this.fb.group({
    firstName: ['',Validators.required],
    lastName: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    }),
	});
	constructor(private fb: FormBuilder, private storage: StorageService) {
		// this.storage.setItem('name', 'smr');
		// console.log(this.storage.getItem('name'));
	} 

	onSubmit() {
		// TODO: Use EventEmitter with form value
 	 	console.warn(this.profileForm.value);
	}
	updateProfile() {
		this.profileForm.patchValue({
			firstName: 'Nancy',
			address: {street: '123 Drew Street'}
		});
	}
  ngOnInit() {
  }

}
