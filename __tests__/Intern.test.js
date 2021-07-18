const { expect, test } = require("@jest/globals");
const Intern = require("../lib/Intern");

let intern;

beforeEach(() => {
  intern = new Intern("James", 1, "james@email.com", "University of State");
});

test("create intern object", () => {
  expect(intern.name).toBe("James");
  expect(intern.id).toEqual(expect.any(Number));
  expect(intern.email).toBe("james@email.com");
  expect(intern.school).toBe("University of State");
});

test("get intern's school", () => {
  expect(intern.getSchool()).toBe("University of State");
});

test("get intern's role", () => {
  expect(intern.getRole()).toBe("Intern");
});
