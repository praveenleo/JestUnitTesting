import { Component } from '@angular/core';
import { ServiceService } from './service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jestDemoShowing';
  number1: number|any;
  number2: number|any;
  finalNumber: number|any;
  letter: string | any;
  resultOfLetter: boolean|any;
  numberIsNull: null | any;
  greaterNumbers: number | any;
  greaterNumbers1: number | any;
  addGreaterNumbers: number | any;
  missingletter: string | any;

  data=[
    {name:'test',id:1},
    {name:'check',id:2},
    {name:'testCheck',id:3}
  ]
  selectedBtn: any;
  employeeData: any;
  constructor(private api: ServiceService) { }
  ngOnInit() {
    this.addingTwoNumbers();
    this.lettersIncludes();
    this.NullValues();
    this.greaterNumber();
    this.greaterThenOrEqualTO();
    this.missingLetters();
    this.getAllEmployee();
  }


  addingTwoNumbers() {
    this.number1 = 2;
    this.number2 = 2;
    this.finalNumber = this.number1 + this.number2;
    console.log('finalNumber',this.finalNumber);
  }

  lettersIncludes() {
    this.letter = 'testing';
    this.resultOfLetter = this.letter.includes('t')
    console.log('resultOfLetter',this.resultOfLetter);
  }

  NullValues() {
    this.numberIsNull = '';
  }

  greaterNumber() {
    this.number1 = 2;
    this.number2 = 2;
    this.finalNumber = this.number1 + this.number2;
    console.log('finalNumber',this.finalNumber);
  }

  greaterThenOrEqualTO() {
    this.greaterNumbers = 5;
    this.greaterNumbers1=6
    this.addGreaterNumbers = this.greaterNumbers + this.greaterNumbers1
  }

  missingLetters() {
    this.missingletter = 'checking';
  }

  testing(name:any) {
    console.log('nem',name);
    this.selectedBtn = name;
  }

  getAllEmployee() {
    this.api.getEmployee()
      .subscribe((res: any) => {
        this.employeeData = res;
        console.log('11111',res);
      })
  }
}
