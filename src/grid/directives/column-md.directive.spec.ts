import { Component, DebugElement } from '@angular/core'
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser'

import { ColumnMdDirective } from './column-md.directive';

@Component({
  template: `
    <div [bsColMd]="md">Content</div>
  `
})
class TestComponent {
  md: string | number | null
}

describe('ColumnMdDirective', () => {
  let fixture: ComponentFixture<TestComponent>
  let debugElement: DebugElement
  let component: TestComponent

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestComponent,
        ColumnMdDirective
      ],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent)
    debugElement = fixture.debugElement.query(By.directive(ColumnMdDirective))
    component = fixture.componentInstance

    fixture.detectChanges()
  })

  it(`should have 'col-md-6' class when set 'bsGridMd' to 6`, async(() => {
    component.md = 6
    fixture.detectChanges()

    expect(debugElement.classes['col-md-6']).toBeTruthy()
  }))

  it(`should support string value`, async(() => {
    component.md = '6'
    fixture.detectChanges()

    expect(debugElement.classes['col-md-6']).toBeTruthy()
  }))
})
