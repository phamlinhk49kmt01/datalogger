import { Component, OnInit } from '@angular/core';
import { CollectionPointService } from 'src/app/services/collection-point.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-collection-point',
  templateUrl: './collection-point.component.html',
  styleUrls: ['./collection-point.component.scss']
})
export class CollectionPointComponent implements OnInit {
  constructor(private service: CollectionPointService) { }

  ngOnInit(): void {
    // this.dtOptions = {
    //   ajax: {
    //     url: `${environment.apiUrl}api/v1/collection-point/get-list`,
    //     headers: {
    //       Authorization: `Bearer ${localStorage.getItem('token')}`,
    //       "Content-Type": "application/json"
    //     },
    //     contentType : "application/json",
    //     type: 'POST',
    //     data:  function ( d:any ) {
    //       d.offset  = 0;
    //       d.limit = 10;

    //   return JSON.stringify( d );
    // }
    //   },
    //   columns: [{
    //     title: 'ID',
    //     data: 'id'
    //   }, {
    //     title: 'Name',
    //     data: 'name'
    //   },]
    // };

//     this.service.getListsCollectionPoint({limit: 50, offset: 0}).subscribe(response=>{
//       console.log(response);
//     }, error => {
// console.error(error);
//     });
  }

}
