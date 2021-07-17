const Employee = require("../lib/Employee");

test("create an engineer object", () => {
  const employee = new Employee("Sam", 1, "sam@gmail.com");

  expect(employee.name).toBe("Sam");
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toBe("sam@gmail.com");
});

test("get employee name", () => {
  const employee = new Employee("Sam", 1, "sam@gamil.com");

  expect(employee.getName()).toBe("Sam");
});

test("get employee id", () => {
  const employee = new Employee("Sam", 1, "sam@gamil.com");

  expect(employee.getId()).toEqual(expect.any(Number));
});

test("get employee email", () => {
  const employee = new Employee("Sam", 1, "sam@gmail.com");
  
  expect(employee.getEmail()).toBe("sam@gmail.com");
});

test("get employee role", () => {
  const employee = new Employee("Sam");

  expect(employee.getRole()).toBe("Employee");
});
