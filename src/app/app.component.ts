import { Component , OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'test';
  fruits = [
    'Mango',
    'Apple',
    'Guava',
    'Grapes'
  ];

  vegetables = [
    'cabbage',
    'cauliflower',
    'potato',
    'onoin',
    'peas',
    'Turnip',
    'Radish',
    'Carrot'
  ];
  words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
  result = this.words.filter(word => word.length > 6);
  position = 1;
  number = 1;
  numberArray = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  map1 = this.numberArray.map( x => x * 2);
  first = this.fruits[0];
  length = this.fruits.length;
  last = this.fruits[ this.fruits.length - 1 ];
  ngOnInit(): void {
     console.log('first: ', this.first);
     console.log('length of array :', this.length);
     console.log('Last: ', this.last);
     console.log('new Fruits Added : ', this.fruits.push('Pine Apple'));
     this.fruits.shift();
     this.fruits.unshift('Strawery');
     this.fruits.push('Banana');
     console.log(this.fruits);
     console.log('Psition of Banana', this.fruits.indexOf('Banana'));
     this.vegetablesArray();
   }

   vegetablesArray(): void {
     console.log('Vegetables', this.vegetables);
    // this is how to remove items, number defines the number of items to be removed,
    // starting at the index position specified by position and progressing toward the end of array.
     console.log('removed items', this.vegetables.splice(this.position, this.number));
     console.log('copy an array', this.fruits.slice());
     console.log('see this is array', Array.isArray(this.fruits));
     console.log('concatenate', this.fruits.concat(this.vegetables));
     console.log('find index of value', this.fruits.indexOf('Banana'));
     console.log('result is', this.result);
     console.log('Prime no', this.numberArray.filter(this.isPrime));
     console.log('map function', this.map1);
   }

   isPrime(num): boolean {
    for (let i = 2; num > i; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return num > 1;
   }


}
