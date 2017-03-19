import { Component, DebugElement } from '@angular/core'
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser'

import { TextTransformDirective } from './text-transform.directive';

@Component({
  template: `
    <div [bsTextTransform]="textTransform">Content</div>
  `
})
class TestComponent {
  textTransform: string | null
}

describe('ContainerDirective', () => {
  let fixture: ComponentFixture<TestComponent>
  let debugElement: DebugElement
  let component: TestComponent

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestComponent,
        TextTransformDirective
      ],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent)
    debugElement = fixture.debugElement.query(By.directive(TextTransformDirective))
    component = fixture.componentInstance

    fixture.detectChanges()
  })

  it(`should have 'text-lowercase' class when set to 'lowercase'`, async(() => {
    component.textTransform = 'lowercase'
    fixture.detectChanges()

    expect(debugElement.classes['text-lowercase']).toBeTruthy()
  }))

  it(`should have 'text-uppercase' class when set to 'uppercase'`, async(() => {
    component.textTransform = 'uppercase'
    fixture.detectChanges()

    expect(debugElement.classes['text-uppercase']).toBeTruthy()
  }))

  it(`should have 'text-capitalize' class when set to 'capitalize'`, async(() => {
    component.textTransform = 'capitalize'
    fixture.detectChanges()

    expect(debugElement.classes['text-capitalize']).toBeTruthy()
  }))
})
