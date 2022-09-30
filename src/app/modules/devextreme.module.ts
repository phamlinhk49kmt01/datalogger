import { NgModule } from '@angular/core';
import { DxBulletModule, DxTemplateModule } from 'devextreme-angular';
import { DxDataGridModule } from 'devextreme-angular/ui/data-grid';



const AllDevextremeModules=[
    DxDataGridModule,
    DxBulletModule,
    DxTemplateModule,
];

@NgModule({
  imports: [AllDevextremeModules],
  exports: [AllDevextremeModules],
})
export class DevextremeModule {}