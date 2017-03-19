import { Component, DebugElement } from '@angular/core'
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser'

import { ColumnMdPullDirective } from './column-md-pull.directive';

@Component({
  template: `
    <div [bsColMdPull]="mdPull">Content</div>
  `
})
class TestComponent {
  mdPull: string | number | null
}

describe('ColumnMdPullDirective', () => {
  let fixture: ComponentFixture<TestComponent>
  let debugElement: DebugElement
  let component: TestComponent

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestComponent,
        ColumnMdPullDirective
      ],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent)
    debugElement = fixture.debugElement.query(By.directive(ColumnMdPullDirective))
    component = fixture.componentInstance

    fixture.detectChanges()
  })

  it(`should have 'col-md-pull-6' class when set 'bsGridMd' to 6`, async(() => {
    component.mdPull = 6
    fixture.detectChanges()

    expect(debugElement.classes['col-md-pull-6']).toBeTruthy()
  }))

  it(`should support string value`, async(() => {
    component.mdPull = '6'
    fixture.detectChanges()

    expect(debugElement.classes['col-md-pull-6']).toBeTruthy()
  }))
})
