import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { DulieuService } from '../dulieu.service';

@Component({
  selector: 'app-sanpham-sua',
  templateUrl: './sanpham-sua.component.html',
  styleUrls: ['./sanpham-sua.component.css']
})
export class SanphamSuaComponent implements OnInit {

  constructor( private d:DulieuService ) { }

  ngOnInit(): void {
  }
  @Input() sp:any;
  spSua(sp:any){
    this.d.suaSanPham(sp).subscribe ( data => { 
      alert('Sửa thành công');
      console.log("Sửa",data);
    });

}
}
