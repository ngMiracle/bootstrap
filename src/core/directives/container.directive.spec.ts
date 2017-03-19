import { Component, DebugElement } from '@angular/core'
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser'

import { ContainerDirective } from './container.directive';

@Component({
  template: `
    <div [bsContainer]="containerType">Content</div>
  `
})
class TestComponent {
  containerType: string | null
}

describe('ContainerDirective', () => {
  let fixture: ComponentFixture<TestComponent>
  let debugElement: DebugElement
  let component: TestComponent

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestComponent,
        ContainerDirective
      ],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent)
    debugElement = fixture.debugElement.query(By.directive(ContainerDirective))
    component = fixture.componentInstance

    fixture.detectChanges()
  })

  it(`should have 'container' class by default`, async(() => {
    expect(debugElement.classes['container']).toBeTruthy()
  }))

  it(`should have 'container-fluid' class when set to 'fluid'`, async(() => {
    component.containerType = 'fluid'
    fixture.detectChanges()

    expect(debugElement.classes['container-fluid']).toBeTruthy()
  }))
})
