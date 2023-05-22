import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ToggleComponent } from './toggle.component';

describe('ToggleComponent', () => {
  let component: ToggleComponent;
  let fixture: ComponentFixture<ToggleComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ToggleComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have buttons', () => {
    const items = fixture.nativeElement.getElementsByTagName('button')
    expect(items.length).toBe(2);
  });

  it('should have titles', ()=> {
    const items = fixture.nativeElement.getElementsByTagName('span')
    component.left = "button1";
    component.right = "button2";

    fixture.detectChanges();

    expect(items[0].innerText).toBe("button1");
    expect(items[1].innerText).toBe("button2");
  })

  it('should toggle', ()=> {
    const items = fixture.nativeElement.getElementsByTagName('button');
    expect(items[0].className).toContain('selected');
    expect(items[1].className).not.toContain('selected');
    
    items[1].click();
    fixture.detectChanges();

    expect(items[1].className).toContain('selected');
    expect(items[0].className).not.toContain('selected');
  })

  it('should emit value', ()=> {
    const items = fixture.nativeElement.getElementsByTagName('button');
    items[1].click();
    expect(component.valueChange.emit).toBeTruthy();
  })


});
