import { NgModule } from '@angular/core'
import { BootstrapCoreModule } from '../core'
import {
  ClearfixDirective,
  ColumnXsDirective,
  ColumnSmDirective,
  ColumnMdDirective,
  ColumnLgDirective,
  RowDirective
} from './directives'

@NgModule({
  declarations: [
    ClearfixDirective,
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
    ClearfixDirective,
    ColumnXsDirective,
    ColumnSmDirective,
    ColumnMdDirective,
    ColumnLgDirective,
    RowDirective
  ],
})
export class BootstrapGridModule {

}
