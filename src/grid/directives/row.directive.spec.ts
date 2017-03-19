import { Component, DebugElement } from '@angular/core'
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser'

import { RowDirective } from './row.directive';

@Component({
  template: `
    <div bsGridRow>Content</div>
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
        RowDirective
      ],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent)
    debugElement = fixture.debugElement.query(By.directive(RowDirective))
    component = fixture.componentInstance

    fixture.detectChanges()
  })

  it(`should have 'row' class by default`, async(() => {
    expect(debugElement.classes['row']).toBeTruthy()
  }))
})
