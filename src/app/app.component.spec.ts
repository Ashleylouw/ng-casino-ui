import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { CasinoService } from './services/casino.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserTestingModule } from '@angular/platform-browser/testing';

describe('AppComponent', () => {
  let comp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[
        RouterTestingModule,
        HttpClientTestingModule,
        BrowserTestingModule
      ],
      providers: [
        CasinoService
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
    
    fixture = TestBed.createComponent(AppComponent);
    comp = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(comp).toBeTruthy();
  });
});
