import {
    Component,
    Directive,
    ElementRef,
    Input,
    SimpleChange,
    HostListener,
    ChangeDetectorRef,
    OnInit,
    AfterViewInit,
  } from '@angular/core';
  import { NzTableComponent } from 'ng-zorro-antd/table';

  @Directive({
    // tslint:disable-next-line: directive-selector
    selector: '[nsAutoHeightTable]',
  })
  export class NsAutoHeightTableDirective implements OnInit, AfterViewInit {
    @Input('nsAutoHeightTable')
    offset: number = 0;
  
    constructor(private element: ElementRef, private table: NzTableComponent<any>, private cd: ChangeDetectorRef) {
      if (this.table && this.table.nzPageIndexChange) {
        this.table.nzPageIndexChange.subscribe((index) => {
          const tableBody = this.element.nativeElement.querySelector('.ant-table-body');
          if (tableBody && tableBody.scrollTop) {
            tableBody.scrollTop = 0;
          }
        });
      }
    }
  
    /**
     * 响应浏览器窗体大小变化
     */
    @HostListener('window:resize', ['$event'])
    onResize() {
      this.doAutoSize();
    }
  
    ngOnInit() {}
  
    ngAfterViewInit() {
      this.doAutoSize();
    }
  
    private doAutoSize() {
      setTimeout(() => {
        const offset = this.offset || 70;
        if (
          this.element &&
          this.element.nativeElement &&
          this.element.nativeElement.parentElement &&
          this.element.nativeElement.parentElement.offsetHeight
        ) {
          if (this.table && this.table.nzScroll && this.table.nzScroll.x) {
            const originNzScroll = this.table.nzScroll ? { ...this.table.nzScroll } : null;
            this.table.nzScroll = {
              y:
                (
                  this.element.nativeElement.parentElement.offsetHeight -
                  this.element.nativeElement.offsetTop -
                  offset
                ).toString() + 'px',
              x: this.table.nzScroll.x,
            };
            this.table.ngOnChanges({
              nzScroll: new SimpleChange({ originNzScroll }, this.table.nzScroll, false),
            });
            this.cd.detectChanges();
          } else {
            const originNzScroll = this.table.nzScroll ? { ...this.table.nzScroll } : null;
    
            this.table.nzScroll = {
              ...{
    
                y:
                  (
                    this.element.nativeElement.parentElement.offsetHeight -
                    this.element.nativeElement.offsetTop -
                    offset
                  ).toString() + 'px',
              },
            };
  
            this.table.ngOnChanges({
              nzScroll: new SimpleChange({ originNzScroll }, this.table.nzScroll, false),
            });
            this.cd.detectChanges();
          }
        }
      }, 10);
    }
  }