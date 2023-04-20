import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { AppComponent } from './app.component';
import { ServiceService } from './service.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';


describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  let service: ServiceService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
      ],
      declarations: [AppComponent],
      providers:[ServiceService,HttpClient]
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(ServiceService);
    fixture.detectChanges();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'jestDemoShowing'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('jestDemoShowing');
  });


  // to be
  it('adding two numbers', () => {
    // component.addingTwoNumbers();

    // expect(component.finalNumber).toBe(4);
    component.addingTwoNumbers();
    expect(component.finalNumber).toBe(4)
  });

  // to be truthy
  it('includes letters or not', () => {
    component.lettersIncludes();
    expect(component.resultOfLetter).toBeTruthy();
  });

  // toBeNull
  it('the value should be null', () => {
    component.NullValues();
    expect(component.numberIsNull).not.toBeNull();
  });

  // toBeDefined
  it('the value should be defined', () => {
    component.NullValues();
    expect(component.numberIsNull).toBeDefined();
  });

  // greater the number
  it('greater Numbers', () => {
    component.greaterNumber();
    expect(component.finalNumber).toBeGreaterThan(3);
  });

  // greater then or equal to
  it('greater then or equal to', () => {
    component.greaterThenOrEqualTO();
    expect(component.addGreaterNumbers).toBeGreaterThanOrEqual(11);
  });

  // missing letters
  it('missing letters', () => {
    component.missingLetters();
    expect(component.missingletter).toMatch(/g/);
  });

  // selected btn
  it('should change the  selected button', () => {
    component.data = [
      { name: 'test', id: 1 },
      { name: 'check', id: 2 },
      { name: 'testCheck', id: 3 },
    ];
    component.testing(component.data[1]);
    expect(component.selectedBtn).toBe(component.data[1]);
  });

  it('get method', () => {
    const result =
      {
        "id": 1,
        "title": "json-server",
        "author": "typicode"
      }

    const apiServiceSpy = jest.spyOn(service, 'getEmployee').mockReturnValue(of());
    service.getEmployee();
    service.getEmployee();
    expect(apiServiceSpy).toHaveBeenCalledTimes(2);
  });
});
