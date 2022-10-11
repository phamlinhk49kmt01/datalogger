import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NzTableQueryParams } from 'ng-zorro-antd/table';
import { DataloggerService } from 'src/app/services/datalogger.service';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.scss']
})
export class DeviceComponent implements OnInit {

  constructor(private service: DataloggerService, public translate: TranslateService) { }
  listDataloggers = <any>[];
  isLoading = false;
  totalRows = 0;
  pageSize = 20;
  pageIndex = 1;

  ngOnInit(): void {

  }

  loadData(params: NzTableQueryParams){
    const { pageSize, pageIndex, sort, filter } = params;
    this.isLoading = true;
    this.service.getAllDatalogger({ page: this.pageIndex, limit: this.pageSize, search: '' }).subscribe(res => {
      this.isLoading = false;
      this.listDataloggers = res.data;
      this.totalRows = res.total_rows;
    });
  }
}
