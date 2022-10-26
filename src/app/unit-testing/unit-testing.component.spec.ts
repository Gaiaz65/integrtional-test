
import { FormBuilder } from '@angular/forms';

import { UnitTestingComponent } from './unit-testing.component';

describe('UnitTestingComponent', () => {
  let  unitComponent = new UnitTestingComponent(new FormBuilder);


  beforeEach(() => {
    unitComponent = new UnitTestingComponent(new FormBuilder());
  });


  it('should increment counter by 1', () => {
    unitComponent.increment();
    expect(unitComponent.counter).toBe(1);
  });

  it('should decrement counter by 1', () => {
    unitComponent.decrement();
    expect(unitComponent.counter).toBe(-1);
  });

  it('should increment value by event emitter',() =>{
    let result = 0
    unitComponent.counterEmiter.subscribe(res => result = res)

    unitComponent.increment()

    expect(result).toBe(1)
  }
  )

  it('should create form with two controls', () => {
    expect(unitComponent.form.contains('login')).toBe(true)
    expect(unitComponent.form.contains('email')).toBeTruthy()
  })

  it('should mark login as invalid if there is no value', () => {
    const control = unitComponent.form.get('login')

    control?.setValue('')

    expect(control?.valid).toBeFalsy()
  })
});
