const Manager = require("../lib/manager");

let manager;

beforeEach(() => {
  manager = new Manager("Liz", 1, "liz@email.com", "555-555-5555");
});

test("create a manager object", () => {
  expect(manager.name).toBe("Liz");
  expect(manager.id).toEqual(expect.any(Number));
  expect(manager.email).toBe("liz@email.com");
});

test("get manager's office number", () => {
  expect(manager.officeNumber).toBe("555-555-5555");
});

test("get manager's role", () => {
  expect(manager.getRole()).toBe("Manager");
});
