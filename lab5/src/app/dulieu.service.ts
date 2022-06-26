import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DulieuService {

  constructor( private h:HttpClient ) { }

  getAll(){
    return this.h.get('http://localhost:3000/sanpham');
  }
  themSanPham(sp:any){
    return this.h.post('http://localhost:3000/sanpham',sp);
  }
  xoaSanPham(id:number){
    return this.h.delete('http://localhost:3000/sanpham/'+ id)
  }
  suaSanPham(sp:any){
    return this.h.put('http://localhost:3000/sanpham/' + sp.id ,sp);
  }
}
