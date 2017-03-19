import { NgModule } from '@angular/core'
import { BootstrapCoreModule } from '../core'
import { COLUMN_DIRECTIVES, ClearfixDirective, RowDirective } from './directives'

@NgModule({
  declarations: [
    COLUMN_DIRECTIVES,
    ClearfixDirective,
    RowDirective
  ],
  imports: [
    BootstrapCoreModule
  ],
  exports: [
    BootstrapCoreModule,

    COLUMN_DIRECTIVES,
    ClearfixDirective,
    RowDirective
  ],
})
export class BootstrapGridModule {

}
