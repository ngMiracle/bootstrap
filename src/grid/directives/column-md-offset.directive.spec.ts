import { Component, DebugElement } from '@angular/core'
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser'

import { ColumnMdOffsetDirective } from './column-md-offset.directive';

@Component({
  template: `
    <div [bsColMdOffset]="mdOffset">Content</div>
  `
})
class TestComponent {
  mdOffset: string | number | null
}

describe('ColumnMdOffsetDirective', () => {
  let fixture: ComponentFixture<TestComponent>
  let debugElement: DebugElement
  let component: TestComponent

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestComponent,
        ColumnMdOffsetDirective
      ],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent)
    debugElement = fixture.debugElement.query(By.directive(ColumnMdOffsetDirective))
    component = fixture.componentInstance

    fixture.detectChanges()
  })

  it(`should have 'col-md-offset-6' class when set 'bsGridMd' to 6`, async(() => {
    component.mdOffset = 6
    fixture.detectChanges()

    expect(debugElement.classes['col-md-offset-6']).toBeTruthy()
  }))

  it(`should support string value`, async(() => {
    component.mdOffset = '6'
    fixture.detectChanges()

    expect(debugElement.classes['col-md-offset-6']).toBeTruthy()
  }))
})
