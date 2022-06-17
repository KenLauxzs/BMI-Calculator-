import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  height: number;
  weight: number;
  bmi: number;
  result: string;

  constructor() {
  }

  calculateBMI() {
      if (this.weight > 0 && this.height > 0) {
        let calculate = this.weight / (this.height / 100 * this.height / 100);
        this.bmi = parseFloat(calculate.toFixed(2));
        this.bmiresult();
      }
    }
    
     bmiresult() {
      if (this.bmi < 18.5) {
        this.result = "Underweight"
      }
    
      if (this.bmi > 18.5 && this.bmi < 25) {
        this.result = "Normal"
      }
    
      if (this.bmi > 25 && this.bmi < 30) {
        this.result = "Overweight"
      }
    
      if (this.bmi > 30) {
        this.result = "Obese"
      }
    }
}