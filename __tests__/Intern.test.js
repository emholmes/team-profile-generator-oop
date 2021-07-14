const { expect, test } = require("@jest/globals");
const Intern = require("../lib/Intern");

test("create intern object", () => {
  const intern = new Intern("James", 1, "james@email.com", "University of State");

  expect(intern.name).toBe("James");
  expect(intern.id).toEqual(expect.any(Number));
  expect(intern.email).toBe("james@email.com");
  expect(intern.school).toBe("University of State");
});

test("get intern's school", () => {
  const intern = new Intern("James", 1, "james@email.com", "University of State");

  expect(intern.getSchool()).toBe("University of State");
});

test("get intern's role", () => {
  const intern = new Intern("James");

  expect(intern.getRole()).toBe("Intern");
})