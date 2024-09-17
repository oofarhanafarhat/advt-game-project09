import inquirer from "inquirer";

class player {
  name: string;
  fuel: number = 100;
  constructor(name: string) {
    this.name = name;

  }
  fuelDecrease() {
    let fuel = this.fuel -25
    this.fuel=fuel;
  }
  fuelIncrease(){
    this.fuel=100
  }
}
class openent {
  name: string;
  fuel: number = 100;
  constructor(name: string) {
    this.name = name;
  }
  fuelDecrease() {
    let fuel = this.fuel -25
    this.fuel=fuel;
  }
}

let palyer = await inquirer.prompt([
  {
    name: "name",
    type: "input",
    message: " Please Enter your name",
  },
]);

let Openent = await inquirer.prompt([
  {
    name: "select",
    type: "list",
    message: "select your openent",
    choices: ["skeletan", "Allian", "zombie"],
  },
]);

let p1 = new player(palyer.name);
let o1 = new openent(Openent.select);

do {
    // skeletan
  if (Openent.select == "skeletan") {
    let ask = await inquirer.prompt([
      {
        name: "opt",
        type: "list",
        message: "what would like to do?",
        choices: ["Attack", "Drink portion", "Run for your life"],
      },
    ]);
    if (ask.opt == "Attack") {
      let num = Math.floor(Math.random() * 2);
      if (num > 0) {
        p1.fuelDecrease()
        console.log(`${p1.name} fuel is ${p1.fuel}`);
        console.log(`${o1.name} fuel is ${o1.fuel}`);
        if (p1.fuel <= 0) {
            console.log("YOU LOOSE ,BETTER LUCK TO NEXT TIME");
            process.exit()
            
        }
        
      }
      if (num <= 0) {

           o1.fuelDecrease()
        console.log(`${p1.name} fuel is ${p1.fuel}`);
        console.log(`${o1.name} fuel is ${o1.fuel}`);
        if (o1.fuel <= 0) {
            console.log("Congratulation you Win the Game");
            process.exit()
            
        }
      }
    }
    if (ask.opt=="Drink portion") {

        p1.fuelIncrease()
        console.log(`you drink health portion your fuel is ${p1.fuel}`);
        
        
    }
    if (ask.opt =="Run for your life") {
        console.log("You Loose ,Better Luck to Next Time");
        process.exit()
        
        
    }
  }

//   Allian
if (Openent.select == "Allian") {
    let ask = await inquirer.prompt([
      {
        name: "opt",
        type: "list",
        message: "what would like to do?",
        choices: ["Attack", "Drink portion", "Run for your life"],
      },
    ]);
    if (ask.opt == "Attack") {
      let num = Math.floor(Math.random() * 2);
      if (num > 0) {
        p1.fuelDecrease()
        console.log(`${p1.name} fuel is ${p1.fuel}`);
        console.log(`${o1.name} fuel is ${o1.fuel}`);
        if (p1.fuel <= 0) {
            console.log("YOU LOOSE ,BETTER LUCK TO NEXT TIME");
            process.exit()
            
        }
        
      }
      if (num <= 0) {

           o1.fuelDecrease()
        console.log(`${p1.name} fuel is ${p1.fuel}`);
        console.log(`${o1.name} fuel is ${o1.fuel}`);
        if (o1.fuel <= 0) {
            console.log("Congratulation you Win the Game");
            process.exit()
            
        }
      }
    }
    if (ask.opt=="Drink portion") {

        p1.fuelIncrease()
        console.log(`you drink health portion your fuel is ${p1.fuel}`);
        
        
    }
    if (ask.opt =="Run for your life") {
        console.log("You Loose ,Better Luck to Next Time");
        process.exit()
        
        
    }
  }

//   zombie
if (Openent.select == "zombie") {
    let ask = await inquirer.prompt([
      {
        name: "opt",
        type: "list",
        message: "what would like to do?",
        choices: ["Attack", "Drink portion", "Run for your life"],
      },
    ]);
    if (ask.opt == "Attack") {
      let num = Math.floor(Math.random() * 2);
      if (num > 0) {
        p1.fuelDecrease()
        console.log(`${p1.name} fuel is ${p1.fuel}`);
        console.log(`${o1.name} fuel is ${o1.fuel}`);
        if (p1.fuel <= 0) {
            console.log("YOU LOOSE ,BETTER LUCK TO NEXT TIME");
            process.exit()
            
        }
        
      }
      if (num <= 0) {

           o1.fuelDecrease()
        console.log(`${p1.name} fuel is ${p1.fuel}`);
        console.log(`${o1.name} fuel is ${o1.fuel}`);
        if (o1.fuel <= 0) {
            console.log("Congratulation you Win the Game");
            process.exit()
            
        }
      }
    }
    if (ask.opt=="Drink portion") {

        p1.fuelIncrease()
        console.log(`you drink health portion your fuel is ${p1.fuel}`);
        
        
    }
    if (ask.opt =="Run for your life") {
        console.log("You Loose ,Better Luck to Next Time");
        process.exit()
        
        
    }
  }
} while (true);
