const Engineer = require("../lib/Engineer");

test("create an engineer object", () => {
  const engineer = new Engineer("Sam", 1, "sam@gamil.com", "Engineer", "samgit");

  expect(engineer.name).toBe("Sam");
  expect(engineer.id).toEqual(expect.any(Number));
  expect(engineer.email).toBe("sam@gamil.com");
  expect(engineer.github).toBe("samgit");
  expect(engineer.role).toBe("Engineer");
  
});