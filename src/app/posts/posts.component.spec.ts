import { HttpClientModule } from '@angular/common/http';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { throwError } from 'rxjs';
import { EMPTY } from 'rxjs';
import { empty, Observable } from 'rxjs';
import { of } from 'rxjs';
import { PostsComponent } from './posts.component';
import { PostsService } from './posts.service';

describe('PostsComponent', () => {
  let fixture: ComponentFixture<PostsComponent>;
  let component: PostsComponent;
  let service: PostsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostsComponent],
      providers: [PostsService],
      imports: [HttpClientModule],
    });

    fixture = TestBed.createComponent(PostsComponent);
    component = fixture.componentInstance;
    service = TestBed.get(PostsService);
  });

  it('should fetch posts on ngOnInIt', () => {
    const posts = [1, 2, 3];
    service = fixture.debugElement.injector.get(PostsService);

    spyOn(service, 'fetch').and.returnValue(of(posts));

    fixture.detectChanges();

    expect(component.posts).toEqual(posts);
  });

  it('should add new post', () => {
    const post = { title: 'test' };
    const spy = spyOn(service, 'create').and.returnValue(of(post));

    component.add(post.title);
    expect(spy).toHaveBeenCalled();
    expect(component.posts.length).toBe(1);
  });

  it('should throw error', () => {
    const error = 'Error message';
    spyOn(service, 'create').and.returnValue(throwError(error));

    component.add('Post title');

    expect(component.message).toBe(error);
  });

  it('should remove post if user confirms', () => {
    const spy = spyOn(service, 'remove').and.returnValue(EMPTY);
    spyOn(window, 'confirm').and.returnValue(true);
    component.delete(10);

    expect(spy).toHaveBeenCalledWith(10);
  });

  it('should not remove post if user does not confirm', () => {
    const spy = spyOn(service, 'remove').and.returnValue(EMPTY);
    spyOn(window, 'confirm').and.returnValue(false);

    component.delete(10);

    expect(spy).not.toHaveBeenCalledWith(10);
  });
});
