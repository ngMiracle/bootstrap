import { Component, DebugElement } from '@angular/core'
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser'

import { ClearfixDirective } from './clearfix.directive';

@Component({
  template: `
    <div bsGridClearfix>Content</div>
  `
})
class TestComponent { }

describe('RowDirective', () => {
  let fixture: ComponentFixture<TestComponent>
  let debugElement: DebugElement
  let component: TestComponent

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestComponent,
        ClearfixDirective
      ],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent)
    debugElement = fixture.debugElement.query(By.directive(ClearfixDirective))
    component = fixture.componentInstance

    fixture.detectChanges()
  })

  it(`should have 'clearfix' class by default`, async(() => {
    expect(debugElement.classes['clearfix']).toBeTruthy()
  }))
})
