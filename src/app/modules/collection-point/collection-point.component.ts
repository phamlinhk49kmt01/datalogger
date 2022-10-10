import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NzTableQueryParams } from 'ng-zorro-antd/table';
import { Observable } from 'rxjs';
import { CollectionPointService } from 'src/app/services/collection-point.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-collection-point',
  templateUrl: './collection-point.component.html',
  styleUrls: ['./collection-point.component.scss']
})
export class CollectionPointComponent implements OnInit, AfterViewInit {
  constructor(private service: CollectionPointService) { }

  collectionPoints = <any>[];
  displayedColumns: string[] = ['name'];
  total = 1;
  loading = true;
  pageSize = 50;
  pageIndex = 1;
  scrollY = 0;



  ngOnInit(): void {

  }

  @ViewChild('tableWrapper') elementView: ElementRef = {} as ElementRef;

  ngAfterViewInit() {
    // this.scrollY =`${this.elementView.nativeElement.offsetHeight}px`;
    // console.log(this.scrollY);
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
      // this.total = 0;
      // this.collectionPoints =[];
    });
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

}


