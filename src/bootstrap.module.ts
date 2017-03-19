import { NgModule } from '@angular/core'
import { BootstrapCoreModule } from './core'
import { BootstrapGridModule } from './grid'
import { BootstrapTypographyModule } from './typography'

@NgModule({
  imports: [
    BootstrapCoreModule,
    BootstrapGridModule,
    BootstrapTypographyModule
  ],
  exports: [
    BootstrapCoreModule,
    BootstrapGridModule,
    BootstrapTypographyModule
  ],
})
export class BootstrapModule {

}
