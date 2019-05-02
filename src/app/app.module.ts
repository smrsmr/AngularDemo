//这个根模块会告诉 Angular 如何组装该应用
//引入模块

import { BrowserModule } from '@angular/platform-browser'; //*BrowserModule，浏览器解析的模块*/
import { NgModule } from '@angular/core';  /*核心模块*/
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ContentComponent } from './components/content/content.component';
import { NameEditorComponent } from './components/name-editor/name-editor.component';
import { ProfileEditorComponent } from './components/profile-editor/profile-editor.component';
import { StorageService } from './services/storage.service';
import { NewsComponent } from './components/news/news.component';
import { HttpClientModule } from '@angular/common/http';
import { ConfigComponent } from './components/config/config.component';


/*@NgModule装饰器将AppModule标记为 Angular 模块类（也叫NgModule类）。
 @NgModule接受一个元数据对象，告诉 Angular 如何编译和启动应用。*/

@NgModule({
  declarations: [    /*引入当前项目运行的的组件  自定义组件都需要引入并且在这个里面配制*/
    AppComponent, HeaderComponent, ContentComponent, NameEditorComponent, ProfileEditorComponent, NewsComponent, ConfigComponent
  ],
  imports: [  /*当前的项目依赖哪些模块*/
		BrowserModule,
		ReactiveFormsModule,
		HttpClientModule
  ],
  providers: [StorageService], /*定义的服务  回头放在这个里面*/
  bootstrap: [AppComponent]   /*默认启动那个组件*/
})


/*根模块不需要导出任何东西，   因为其它组件不需要导入根模块。 但是一定要写*/

export class AppModule { }
