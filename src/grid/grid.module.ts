import { NgModule } from '@angular/core'
import { BootstrapCoreModule } from '../core'
import { RowDirective } from './directives'

@NgModule({
  declarations: [
    RowDirective
  ],
  imports: [
    BootstrapCoreModule
  ],
  exports: [
    BootstrapCoreModule,
    RowDirective
  ],
})
export class BootstrapGridModule {

}
