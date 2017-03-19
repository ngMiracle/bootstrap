import { Component, DebugElement } from '@angular/core'
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser'

import { ColumnDirective } from './column.directive';

@Component({
  template: `
    <div [bsGridColXs]="xs" [bsGridColSm]="sm" [bsGridColMd]="md" [bsGridColLg]="lg">Content</div>
  `
})
class TestComponent {
  xs: string | number | null
  sm: string | number | null
  md: string | number | null
  lg: string | number | null
}

describe('ColumnDirective', () => {
  let fixture: ComponentFixture<TestComponent>
  let debugElement: DebugElement
  let component: TestComponent

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestComponent,
        ColumnDirective
      ],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent)
    debugElement = fixture.debugElement.query(By.directive(ColumnDirective))
    component = fixture.componentInstance

    fixture.detectChanges()
  })

  it(`should have 'col-xs-6' class when set 'bsGridXs' to 6`, async(() => {
    component.xs = 6
    fixture.detectChanges()

    expect(debugElement.classes['col-xs-6']).toBeTruthy()
  }))

  it(`should have 'col-sm-6' class when set 'bsGridSm' to 6`, async(() => {
    component.sm = 6
    fixture.detectChanges()

    expect(debugElement.classes['col-sm-6']).toBeTruthy()
  }))

  it(`should have 'col-md-6' class when set 'bsGridMd' to 6`, async(() => {
    component.md = 6
    fixture.detectChanges()

    expect(debugElement.classes['col-md-6']).toBeTruthy()
  }))

  it(`should have 'col-lg-6' class when set 'bsGridLg' to 6`, async(() => {
    component.lg = 6
    fixture.detectChanges()

    expect(debugElement.classes['col-lg-6']).toBeTruthy()
  }))

  it(`should support string value`, async(() => {
    component.md = '6'
    fixture.detectChanges()

    expect(debugElement.classes['col-md-6']).toBeTruthy()
  }))
})
