const Manager = require("../lib/manager");

test("create a manager object", () => {
  const manager = new Manager("Liz", 1, "liz@email.com", "555-555-5555");

  expect(manager.name).toBe("Liz");
  expect(manager.id).toEqual(expect.any(Number));
  expect(manager.email).toBe("liz@email.com");
  expect(manager.officeNumber).toBe("555-555-5555");
});

test("get manager's role", () => {
  const manager = new Manager("Liz");

  expect(manager.getRole()).toBe("Manager");
})

