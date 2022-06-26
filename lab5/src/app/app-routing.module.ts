import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ReactloginComponent } from './reactlogin/reactlogin.component';
import { LoaiSanphamComponent } from './loai-sanpham/loai-sanpham.component';
import { SanphamListComponent } from './sanpham-list/sanpham-list.component';
import { SanphamSuaComponent } from './sanpham-sua/sanpham-sua.component';
import { SanphamThemComponent } from './sanpham-them/sanpham-them.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'login2', component:ReactloginComponent},
  {path: 'sanpham', component:SanphamListComponent},
  {path: 'loaisanpham', component:LoaiSanphamComponent},
  {path: 'themsanpham', component:SanphamThemComponent},
  {path: 'suasanpham/:id', component:SanphamSuaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
