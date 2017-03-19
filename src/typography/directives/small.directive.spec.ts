import { Component, DebugElement } from '@angular/core'
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser'

import { SmallDirective } from './small.directive';

@Component({
  template: `
    <div bsSmall>Content</div>
  `
})
class TestComponent { }

describe('SmallDirective', () => {
  let fixture: ComponentFixture<TestComponent>
  let debugElement: DebugElement
  let component: TestComponent

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestComponent,
        SmallDirective
      ],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent)
    debugElement = fixture.debugElement.query(By.directive(SmallDirective))
    component = fixture.componentInstance

    fixture.detectChanges()
  })

  it(`should have 'small' class by default`, async(() => {
    expect(debugElement.classes['small']).toBeTruthy()
  }))
})
