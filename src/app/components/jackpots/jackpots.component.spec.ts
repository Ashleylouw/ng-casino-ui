import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { CasinoService } from 'src/app/services/casino.service';

import { JackpotsComponent } from './jackpots.component';

describe('JackpotsComponent', () => {
  let component: JackpotsComponent;
  let fixture: ComponentFixture<JackpotsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ CasinoService ],
      declarations: [ JackpotsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JackpotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getJackpots On comp init', () => {
    spyOn(component.casinoService, 'getJackpots');
    component.ngOnInit();
    expect(component.casinoService.getJackpots).toHaveBeenCalled();
  });

  it('should get jackpots from service and set loaded to true', fakeAsync (() => {
    spyOn(component.casinoService, 'getJackpots').and.returnValue(of([
      {
        amount: 1234,
        game: "The Wish Master"
      },
      {
        amount: 23456,
        game: "The Toggle Master"
      }
    ]));
    component.getJackpotFeed();
    fixture.whenStable().then(() => {
      expect(component.jackpots).toEqual([
        {
          amount: 1234,
          game: "The Wish Master"
        },
        {
          amount: 23456,
          game: "The Toggle Master"
        }
      ]);
      expect(component.loaded).toEqual(true);
    });
  }));

  it('should NOT get jackpots from service when there is an error', () => {
    spyOn(component.casinoService, 'getJackpots').and.throwError('Problem occured.');
    component.getJackpotFeed();
    expect(component.jackpots).toBe(undefined);
    expect(component.loaded).toEqual(false);
  });
});
