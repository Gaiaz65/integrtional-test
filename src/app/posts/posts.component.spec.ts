import {  HttpClientModule } from '@angular/common/http';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { of } from 'rxjs';
import {PostsComponent} from "./posts.component";
import {PostsService} from "./posts.service";

describe('PostsComponent', () => {
  let fixture :ComponentFixture<PostsComponent>
  let component: PostsComponent
  let service: PostsService

  beforeEach(() => {
   TestBed.configureTestingModule({
     declarations: [PostsComponent],
     providers: [PostsService],
     imports: [HttpClientModule]
   })

   fixture = TestBed.createComponent(PostsComponent)
   component = fixture.componentInstance
   service = TestBed.get(PostsService);
  })

  it('should fetch posts on ngOnInIt', () => {
    const posts = [1,2,3]
    // service = fixture.debugElement.injector.get(PostsService)

    spyOn(service, 'fetch').and.returnValue(of(posts));

    fixture.detectChanges()

    expect(component.posts).toEqual(posts)
  })


})
