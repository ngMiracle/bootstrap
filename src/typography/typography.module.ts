import { NgModule } from '@angular/core'
import { SmallDirective, LeadDirective, TextAlignDirective } from './directives'

@NgModule({
  declarations: [
    SmallDirective,
    LeadDirective,
    TextAlignDirective
  ],
  exports: [
    SmallDirective,
    LeadDirective,
    TextAlignDirective
  ],
})
export class BootstrapTypographyModule { }
