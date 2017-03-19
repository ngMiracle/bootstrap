import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ContainerComponent } from './components'
import { ContainerDirective } from './directives'

@NgModule({
  declarations: [
    ContainerComponent,
    ContainerDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ContainerComponent,
    ContainerDirective
  ],
})
export class BootstrapCoreModule { }
