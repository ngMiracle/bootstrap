import { Component, DebugElement } from '@angular/core'
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser'

import { TextAlignDirective } from './text-align.directive';

@Component({
  template: `
    <div [bsTextAlign]="textAlign">Content</div>
  `
})
class TestComponent {
  textAlign: string | null
}

describe('ContainerDirective', () => {
  let fixture: ComponentFixture<TestComponent>
  let debugElement: DebugElement
  let component: TestComponent

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestComponent,
        TextAlignDirective
      ],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent)
    debugElement = fixture.debugElement.query(By.directive(TextAlignDirective))
    component = fixture.componentInstance

    fixture.detectChanges()
  })

  it(`should have 'text-left' class when set to 'left'`, async(() => {
    component.textAlign = 'left'
    fixture.detectChanges()

    expect(debugElement.classes['text-left']).toBeTruthy()
  }))

  it(`should have 'text-center' class when set to 'center'`, async(() => {
    component.textAlign = 'center'
    fixture.detectChanges()

    expect(debugElement.classes['text-center']).toBeTruthy()
  }))

  it(`should have 'text-right' class when set to 'right'`, async(() => {
    component.textAlign = 'right'
    fixture.detectChanges()

    expect(debugElement.classes['text-right']).toBeTruthy()
  }))

  it(`should have 'text-justify' class when set to 'justify'`, async(() => {
    component.textAlign = 'justify'
    fixture.detectChanges()

    expect(debugElement.classes['text-justify']).toBeTruthy()
  }))
})
