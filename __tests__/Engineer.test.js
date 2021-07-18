const Engineer = require("../lib/Engineer");

let engineer;

beforeEach(() => {
  engineer = new Engineer("Sam", 1, "sam@gamil.com", "samgit");
});

test("create an engineer object", () => {
  // const engineer = new Engineer("Sam", 1, "sam@gamil.com", "samgit");

  expect(engineer.name).toBe("Sam");
  expect(engineer.id).toEqual(expect.any(Number));
  expect(engineer.email).toBe("sam@gamil.com");
});

test("get engineers github username", () => {
  // const engineer = new Engineer("Sam", 1, "sam@gamil.com", "samgit");

  expect(engineer.github).toBe("samgit");
});

test("get engineers role", () => {
  // const engineer = new Engineer("Sam");

  expect(engineer.getRole()).toBe("Engineer");
});
