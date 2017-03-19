import { NgModule } from '@angular/core'
import { BootstrapCoreModule } from './core'
import { BootstrapGridModule } from './grid'

@NgModule({
  imports: [
    BootstrapCoreModule,
    BootstrapGridModule
  ],
  exports: [
    BootstrapCoreModule,
    BootstrapGridModule
  ],
})
export class BootstrapModule {

}
