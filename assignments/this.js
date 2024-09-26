/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
Questions to ask to identify each:
* 1. Is the function called by new?
* 2. Is the function called by call(), apply(), or bind()?
* 3. Is the function called as a method, ie: obj.func()?
* 4. Is the function called in the global scope? 'use strict'
-If strict mode is enabled, return undefined.
-Otherwise, return the global object, ie: window

*
* write out a code example of each explanation above
*/

// Principle 1
function kitten(){
     console.log(this.meow);
    }
    
    var meow = 'hi';
    
    kitten();
    
// code example for Window Binding




//Principle 2

   let myKitten = {
    name: 'Mittens',
    meow: 'meowww',
    location: 'Meowshington',
    greet: function(){
    console.log(`Hi I am ${this.name}, I am from ${this.location} and I ${this.meow}`);
    }
    }
  
  

myKitten.greet();

// code example for Implicit Binding




// Principle 3

function Puppy(saying){
this.thing = saying;
   }
let myPuppy = new Puppy ('Puppies are adorable!')
    
console.log (myPuppy.thing); 





// Principle 4

function Pet(attributes){
    this.newName = attributes.name, 
    this.newSpecies = attributes.species, 
    this.newPronoun = attributes.pronoun,
    this.newFavFood = attributes.favFood,
  console.log(this);
  }
  function Child(attributes){
    this.newName = attributes.name, 
    this.newastroSign = attributes.astroSign, 
    this.newPronoun = attributes.pronoun,
    this.newFavFood = attributes.favFood,
  console.log(this);
  }
  Child.prototype.eat = function(){
      return `${this.newName} is a ${this.newastroSign} and ${this.newPronoun} likes to eat ${this.newFavFood}`;
    } 
  
  const childOne = new Child({
    name: 'Phenix',
    astroSign: 'leo',
    pronoun: 'she',
    favFood: 'michelin quality',
  });
  const childTwo = new Child({
    name: 'Luna',
    astroSign: 'cancer',
    pronoun: 'she',
    favFood: 'charcuterie',
  });
  
  
  
  
  
  


// code example for Explicit Binding