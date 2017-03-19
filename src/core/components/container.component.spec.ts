import { Component, DebugElement } from '@angular/core'
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser'

import { ContainerComponent } from './container.component';

describe('ContainerComponent', () => {
  let fixture: ComponentFixture<ContainerComponent>
  let debugElement: DebugElement
  let component: ContainerComponent

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ContainerComponent
      ],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerComponent)
    debugElement = fixture.debugElement.query(By.css('div'))
    component = fixture.componentInstance

    fixture.detectChanges()
  })

  it(`should have 'container' class by default`, async(() => {
    expect(debugElement.classes['container']).toBeTruthy()
  }))

  it(`should have 'container-fluid' class when bsFluid set to true`, async(() => {
    component.bsFluid = true
    fixture.detectChanges()

    expect(debugElement.classes['container-fluid']).toBeTruthy()
  }))
})
