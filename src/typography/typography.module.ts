import { NgModule } from '@angular/core'
import { SmallDirective, LeadDirective } from './directives'

@NgModule({
  declarations: [
    SmallDirective,
    LeadDirective
  ],
  exports: [
    SmallDirective,
    LeadDirective
  ],
})
export class BootstrapTypographyModule { }
