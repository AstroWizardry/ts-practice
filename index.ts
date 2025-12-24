console.log("Hello via Bun!");

let message: string = "Hello typescript'o";
let count: number = 45;
let isActive: boolean = true;

console.log(`You have a message: ${message}`)
console.log(`The current count is: ${count}`)
console.log(`status: ${isActive}`)

function greet (name: string): string {
  return `konichiwa ${name}`
}

function add (a: number, b: number): number {
  return a + b;
}

console.log(greet("Kiwi chan"));
console.log(`add function ${add(2, 4)}`);

enum HumanSex {
  FEMALE = "female",
  MALE = "male"
}

interface Person {
  name: string,
  age: number,
  email?: string,
  sex: HumanSex 
}

const person: Person = {
  name: "Jane Doe",
  age: 21,
  email: "janedoe@gmail.com",
  sex: HumanSex.FEMALE
}

enum UserRole {
  ADMIN = "admin",
  GUEST = "guest",
  USER = "user",
}

enum OrderStatus {
  PENDING,
  PROCESSING,
  SHIPPED,
  CANCELLED,
  DELIVERED,
}

interface User {
  id: number;
  name: string;
  role: UserRole;
  status: OrderStatus;
}

class UserAccount implements User {
  id: number;
  name: string;
  role: UserRole;
  status: OrderStatus;

  constructor(id: number, name: string, role: UserRole) {
    this.id = id;
    this.name = name;
    this.role = role;
    this.status = OrderStatus.PENDING;
  }

  promote(): void {
    if (this.role === UserRole.USER) {
      this.role = UserRole.ADMIN;
    }
  }

  updateStatus(newStatus: OrderStatus): void {
    this.status = newStatus;
  }

  getRoleInfo(): string {
    return `${this.name} has the role: ${this.role}`;
  }
}

const User1 = new UserAccount(1, "Jane", UserRole.ADMIN);
const User2 = new UserAccount(2, "Kiwi", UserRole.USER);

console.log(User2.getRoleInfo());
User2.promote();
console.log(User2.getRoleInfo());

User1.updateStatus(OrderStatus.PROCESSING);
console.log(OrderStatus[User2.status]);

interface User2 {
  id: number,
  name: string,
  email?: string
}

const userObj: User2 = {
  id: 5,
  name: "johnny",
  email: "johnnyboy822@gmail.com"
}

//const {id, name, email} = userObj;
//console.log(id, name, email);

const {id: userId, name: firstName, email: userEmail} = userObj;
console.log(userId, firstName, userEmail);

const identifierName: string = "Alex";
//const {age = 7, codeName = identifierName} = userObj;
//console.log(age, codeName);


const arrowAdd = (a: number, b: number): number => a + b;
const arrowGreet = (name: string): string => `Hello ${name}`;
const arrowDouble = (a: number): number => a * 2;

console.log(arrowAdd(6, 8));
console.log(arrowGreet("Kiwi Araga"));
console.log(arrowDouble(5));

const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];

console.log(arr2);

interface TestObj {
  name: string,
  age: number,
  email?: string
}

const obj1: TestObj = {name: "kiwi", age: 19};
const obj2: TestObj = { ...obj1, email: "kiwiaraga19@gmail.com"};

console.log(obj2);
