import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ReactloginComponent } from './reactlogin/reactlogin.component';
import { LoaiSanphamComponent } from './loai-sanpham/loai-sanpham.component';
import { SanphamListComponent } from './sanpham-list/sanpham-list.component';
import { SanphamThemComponent } from './sanpham-them/sanpham-them.component';
import { SanphamSuaComponent } from './sanpham-sua/sanpham-sua.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ReactloginComponent,
    LoaiSanphamComponent,
    SanphamListComponent,
    SanphamThemComponent,
    SanphamSuaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
