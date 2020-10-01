import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
//   name: string= "ghasaaaaaaaaaaaaaa";
//   url ='http://35.239.35.192:32001/hello_user'
//   constructor(
//     public http: Http, private router: Router) {
//      this.getContact(this.name).subscribe(user => {
//       if(!user){
//         return;
//       }
//       // this.listData = new MatTableDataSource(user.data);
//       this.s=user.data
//   });
//
//   }
//   getContact(x) {
//     return this.http.post('http://35.239.35.192:32001/hello_user', {
//       name:  x,
//       }).map(res => res.json());
//   }


    title = "getContact();"

}
