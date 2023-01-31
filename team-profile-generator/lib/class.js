// class Car {
//     constructor(name, id, email, role) {
//         this.name = name;
//         this.id = id;
//         this.email = email;
//         this.role = role;
//     }
//     printInfo() {
//         console.log(`Name: ${this.name}`);
//         console.log(`id: ${this.id}`);
//     }
// }
    
// const myCar1 = new Car("Ruby", "45", "@email.com", "Manager");
// const myCar2 = new Car("Rupert", "55", "@email.com", "Engineer");

// myCar1.printInfo();

class Employee {
    constructor(name, ID, email) {
        this.name = name;
        this.ID = ID;
        this.email = email;
    } 

    getName() {
        return this.name;
    }

    getId() {
        // return `ID: ${this.ID}`;
        return this.ID;
    }

    getEmail() {
        return this.email;
        // console.log(`Email: ${this.email}`);
    }

    getRole() {
        return "Employee";
    }

    present() {
        console.log(this.getName() + this.getId() + this.getEmail());
        //+ this.officeNumber
    }
}

const employee = new Employee ("Ruby ", "123 ", "email.com ");
employee.present();

class Manager extends Employee {
    constructor(name, ID, email, office) {
        super(name, ID, email, office);
        this.officeNumber = office;
    }
        getRole() {
            return "Manager";
        }

        getOffice() {
            return this.officeNumber,
            console.log(this.officeNumber)
        }

        show() {
            return this.present() + this.getOffice();
        }
    }

const manager = new Manager ("Rupert ", "345 ", "j@email.com ", "999");
manager.show();



// myEmployee.show();

// class Engineer {
// }

// class Intern {

// }
