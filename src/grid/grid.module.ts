import { NgModule } from '@angular/core'
import { BootstrapCoreModule } from '../core'
import { ColumnXsDirective, ColumnSmDirective, ColumnMdDirective, ColumnLgDirective, RowDirective } from './directives'

@NgModule({
  declarations: [
    ColumnXsDirective,
    ColumnSmDirective,
    ColumnMdDirective,
    ColumnLgDirective,
    RowDirective
  ],
  imports: [
    BootstrapCoreModule
  ],
  exports: [
    BootstrapCoreModule,
    ColumnXsDirective,
    ColumnSmDirective,
    ColumnMdDirective,
    ColumnLgDirective,
    RowDirective
  ],
})
export class BootstrapGridModule {

}
