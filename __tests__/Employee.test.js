const Employee = require("../lib/Employee");

test("create an engineer object", () => {
  const employee = new Employee("Sam", 1, "sam@gamil.com", "Engineer", "samgit");

  expect(employee.name).toBe("Sam");
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toBe("sam@gamil.com");
});