import { Directive, HostBinding } from '@angular/core'

@Directive({
  selector: '[bsLead]'
})
export class LeadDirective {
  @HostBinding('class.lead')
  hasLeadClass = true
}
