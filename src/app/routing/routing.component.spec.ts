import { Observable } from 'rxjs';

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingComponent } from './routing.component';
import { ActivatedRoute, Params, Router, RouterOutlet } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Subject } from 'rxjs';
import { By } from '@angular/platform-browser';
import { NO_ERRORS_SCHEMA } from '@angular/compiler';

class RouterStub{
  navigate(path:string[]) {}
}

class ActivatedRouteStub {
  private subject = new Subject()
  push(params:Params) {
    this.subject.next(params);
  }
  get params() {
    return this.subject.asObservable()
  }
}

describe('RoutingComponent', () => {
  let component: RoutingComponent;
  let fixture: ComponentFixture<RoutingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RoutingComponent],
      imports:[RouterTestingModule],
      providers: [
        { provide: Router, useClass: RouterStub },
        { provide: ActivatedRoute, useClass: ActivatedRouteStub },
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
    fixture = TestBed.createComponent(RoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges()
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should naviagte to posts if goBack method is used', () => {
    let router = TestBed.inject(Router)
    let spy = spyOn(router, 'navigate')

    component.goBack()

    expect(spy).toHaveBeenCalledWith(['/posts'])
  })

  it('should navigate to /404 if id = 0', () => {
    let router = TestBed.inject(Router)
    let route:ActivatedRouteStub = TestBed.get(ActivatedRoute)
    let spy = spyOn(router, 'navigate')

    route.push({id:'0'})
    expect(spy).toHaveBeenCalledOnceWith(['/404'])
  })

  it('sould have router directive', () => {
    let de = fixture.debugElement.query(By.directive(RouterOutlet))

    expect(de).not.toBeNull()
  })
});
