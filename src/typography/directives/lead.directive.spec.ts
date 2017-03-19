import { Component, DebugElement } from '@angular/core'
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser'

import { LeadDirective } from './lead.directive';

@Component({
  template: `
    <div bsLead>Content</div>
  `
})
class TestComponent { }

describe('LeadDirective', () => {
  let fixture: ComponentFixture<TestComponent>
  let debugElement: DebugElement
  let component: TestComponent

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestComponent,
        LeadDirective
      ],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent)
    debugElement = fixture.debugElement.query(By.directive(LeadDirective))
    component = fixture.componentInstance

    fixture.detectChanges()
  })

  it(`should have 'lead' class by default`, async(() => {
    expect(debugElement.classes['lead']).toBeTruthy()
  }))
})
