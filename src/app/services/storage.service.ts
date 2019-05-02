/**
 * 定义服务  ng g service services/storage
 */
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

	constructor() { }
	setItem(key: any, value: any) {
		localStorage.setItem(key, value);
	}
	getItem(key: any) {
		return localStorage.getItem(key);
	}
	removeItem(key: any) {
		localStorage.removeItem(key);
	}
}
