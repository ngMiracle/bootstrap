import { NgModule } from '@angular/core'
import { ContainerDirective } from './directives'

@NgModule({
  declarations: [
    ContainerDirective
  ],
  exports: [
    ContainerDirective
  ],
})
export class BootstrapCoreModule {

}
