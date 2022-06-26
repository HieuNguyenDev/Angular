import { Component, OnInit } from '@angular/core';
import { DulieuService } from '../dulieu.service';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sanpham-list',
  templateUrl: './sanpham-list.component.html',
  styleUrls: ['./sanpham-list.component.css']
})
export class SanphamListComponent implements OnInit {

  constructor( private d:DulieuService ) { }
  listSanPham:any;
  ngOnInit(): void {
    this.listSanPham = this.d.getAll().subscribe ( 
      data => this.listSanPham= data
    );

  }


  @Output() chonSP = new EventEmitter();
  suaSP(sp:any){
    console.log(sp);    
    this.chonSP.emit(sp);
  }

  xoaSP(id:number){
    if (confirm('Xóa thật không')==true){
      this.d.xoaSanPham(id).subscribe(data => alert('Xóa thành công'))
    }
  }

}
