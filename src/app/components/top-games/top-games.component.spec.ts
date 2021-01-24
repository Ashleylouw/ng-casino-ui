import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { CasinoService } from 'src/app/services/casino.service';

import { TopGamesComponent } from './top-games.component';

describe('TopGamesComponent', () => {
  let component: TopGamesComponent;
  let fixture: ComponentFixture<TopGamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ CasinoService ],
      declarations: [ TopGamesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getGameFeed On comp init', () => {
    spyOn(component.casinoService, 'getGames');
    component.ngOnInit();
    expect(component.casinoService.getGames).toHaveBeenCalled();
  });

  it('should get games from service and set loaded to true', fakeAsync (() => {
    spyOn(component.casinoService, 'getGames').and.returnValue(of([
      {
        categories: ["top", "new"],
        id: "NETHEWISHMASTER",
        image: "//stage.whgstage.com/scontent/images/games/NETHEWISHMASTER.jpg",
        name: "The Wish Master"

      }
    ]));
    component.getGameFeed();
    fixture.whenStable().then(() => {
      expect(component.games).toEqual([
        {
          categories: ["top", "new"],
          id: "NETHEWISHMASTER",
          image: "//stage.whgstage.com/scontent/images/games/NETHEWISHMASTER.jpg",
          name: "The Wish Master"
  
        }
      ]);
      expect(component.loaded).toEqual(true);
    });
  }));

  it('should NOT get games from service when there is an error', () => {
    spyOn(component.casinoService, 'getGames').and.throwError('Problem occured.');
    component.getGameFeed();
    expect(component.games).toBe(undefined);
    expect(component.loaded).toEqual(false);
  });
});
