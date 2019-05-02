import { Component, OnInit } from '@angular/core';
import { Config,ConfigService } from './config.service';
@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.less']
})
export class ConfigComponent implements OnInit {
	error: any;
  headers: string[];
  config: Config;
	constructor(private configService: ConfigService) { }
	
  ngOnInit() {
	}
	showConfig() {
    this.configService.getConfig()
      .subscribe(
        (data: Config) => this.config = { ...data }, // success path
        error => this.error = error // error path
		);
		console.log(this.config);
  }
}
