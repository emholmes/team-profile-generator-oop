const Employee = require("../lib/Employee");

let employee;

beforeEach(() => {
  employee = new Employee("Sam", 1, "sam@gmail.com");
});

test("create an engineer object", () => {
  expect(employee.name).toBe("Sam");
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toBe("sam@gmail.com");
});

test("get employee name", () => {
  expect(employee.getName()).toBe("Sam");
});

test("get employee id", () => {
  expect(employee.getId()).toEqual(expect.any(Number));
});

test("get employee email", () => {
  expect(employee.getEmail()).toBe("sam@gmail.com");
});

test("get employee role", () => {
  expect(employee.getRole()).toBe("Employee");
});
