function Individual(fullName, years) {
  this.fullName = fullName;
  this.years = years;
}

Individual.prototype.greet = function() {
  console.log(`Hello, I am ${this.fullName} and I am ${this.years} years old.`);
};

function Professional(fullName, years, position) {
  Individual.call(this, fullName, years);
  this.position = position;
}

Professional.prototype = Object.create(Individual.prototype);
Professional.prototype.constructor = Professional;

Professional.prototype.performDuties = function() {
  console.log(`${this.fullName} is working as a ${this.position}.`);
};

const individual = new Individual('Alice', 30);
individual.greet(); 

const professional = new Professional('Bob', 40, 'Software Engineer');
professional.greet(); 
professional.performDuties();