import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NzTableComponent, NzTableQueryParams } from 'ng-zorro-antd/table';
import { Observable } from 'rxjs';
import { CollectionPointService } from 'src/app/services/collection-point.service';
import { environment } from 'src/environments/environment';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { UntypedFormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ModalCreateComponent } from './modal-create/modal-create.component';
@Component({
  selector: 'app-collection-point',
  templateUrl: './collection-point.component.html',
  styleUrls: ['./collection-point.component.scss']
})
export class CollectionPointComponent implements OnInit, AfterViewInit {
  constructor(private service: CollectionPointService, private modal: NzModalService, private dialog: MatDialog) { }

  collectionPoints = <any>[];
  total = 1;
  loading = true;
  pageSize = 50;
  pageIndex = 1;

  confirmModal?: NzModalRef;

  isVisibleModalEdit = false;

  validateForm!: UntypedFormGroup;


  ngOnInit(): void {

  }
  

  ngAfterViewInit() {

  }

  loadDataFromServer(
    pageIndex: number,
    pageSize: number
  ): void {
    this.loading = true;
    this.service.getListsCollectionPoint({
      "limit": pageSize,
      "offset": (pageIndex - 1) * pageSize,
      "keyword": "",
    }).subscribe(data => {
      this.loading = false;

      this.total = data.total_rows;
      this.collectionPoints = data.data;
      // this.total = 50;
      // this.collectionPoints =[];
      // for (let index = 0; index < 50; index++) {
      //   this.collectionPoints .push({"name" : "test "+(index+this.collectionPoints .length)})
        
      // }
      // this.total = 0;
      // this.collectionPoints =[];
    }, );
  }

  onQueryParamsChange(params: NzTableQueryParams): void {
    const { pageSize, pageIndex, sort, filter } = params;
    this.loadDataFromServer(pageIndex, pageSize);
  }
  beforeConfirmDelete(): Observable<boolean> {
    return new Observable(observer => {
      setTimeout(() => {
        observer.next(true);
        observer.complete();
      }, 3000);
    });
  }
  cancel(): void {
    // this.nzMessageService.info('click cancel');
  }

  confirm(): void {
    // this.nzMessageService.info('click confirm');
  }
  showConfirm(): void {
    this.confirmModal = this.modal.confirm({
      nzTitle: 'Do you Want to delete these items?',
      nzContent: 'When clicked the OK button, this dialog will be closed after 1 second',
      nzOnOk: () =>
        new Promise((resolve, reject) => {
          setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
        }).catch(() => console.log('Oops errors!'))
    });
  }

  showModalEdit(){
    // this.dialog.open(ModalCreateComponent, {

    // })
    this.modal.create({
      nzTitle: 'Modal Title',
      nzContent: ModalCreateComponent,
      nzOnCancel: () => new Promise(resolve => setTimeout(resolve, 1000))
    });
  }
}


