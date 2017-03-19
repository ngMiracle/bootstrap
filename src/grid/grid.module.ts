import { NgModule } from '@angular/core'
import { BootstrapCoreModule } from '../core'
import { ColumnDirective, RowDirective } from './directives'

@NgModule({
  declarations: [
    ColumnDirective,
    RowDirective
  ],
  imports: [
    BootstrapCoreModule
  ],
  exports: [
    BootstrapCoreModule,
    ColumnDirective,
    RowDirective
  ],
})
export class BootstrapGridModule {

}
