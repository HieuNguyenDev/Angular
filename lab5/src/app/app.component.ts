import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lab5';
  sp:any;
  ganSP(sp:any){
    this.sp=sp;
    console.log(this.sp);
  }
}
