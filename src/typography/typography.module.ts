import { NgModule } from '@angular/core'
import { SmallDirective } from './directives'

@NgModule({
  declarations: [
    SmallDirective
  ],
  exports: [
    SmallDirective
  ],
})
export class BootstrapTypographyModule {

}
