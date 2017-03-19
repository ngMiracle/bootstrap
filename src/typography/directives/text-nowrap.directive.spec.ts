import { Component, DebugElement } from '@angular/core'
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser'

import { TextNowrapDirective } from './text-nowrap.directive';

@Component({
  template: `
    <div bsTextNowrap>Content</div>
  `
})
class TestComponent { }

describe('TextNowrapDirective', () => {
  let fixture: ComponentFixture<TestComponent>
  let debugElement: DebugElement
  let component: TestComponent

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestComponent,
        TextNowrapDirective
      ],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent)
    debugElement = fixture.debugElement.query(By.directive(TextNowrapDirective))
    component = fixture.componentInstance

    fixture.detectChanges()
  })

  it(`should have 'text-nowrap' class by default`, async(() => {
    expect(debugElement.classes['text-nowrap']).toBeTruthy()
  }))
})
