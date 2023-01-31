// Create classes & constructor methods for inheritance
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

class Engineer extends Employee {
    constructor(name, ID, email, username) {
        super(name, ID, email, username);
        this.ghusername = username;
    }
        getRole() {
            return "Engineer";
        }

        getUsername() {
            return this.ghusername,
            console.log(this.ghusername)
        }

        show() {
            return this.present() + this.getUsername();
        }
    }

const engineer = new Engineer ("Ryan ", "999 ", "cat@email.com ", "ryanryan");
engineer.show();


class Intern extends Employee {
    constructor(name, ID, email, school) {
        super(name, ID, email, school);
        this.school = school;
    }
        getRole() {
            return "Intern";
        }

        getSchoolname() {
            return this.school,
            console.log(this.school)
        }

        show() {
            return this.present() + this.getSchoolname();
        }
    }

const intern = new Intern ("Connie ", "432 ", "dog@email.com ", "UofT");
intern.show();

// myEmployee.show();

// class Engineer {
// }

// class Intern {

// }
