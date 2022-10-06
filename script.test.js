const googleSearch = require("./script");

dbMock = ["test.com", "what.com"];
it("is google search test", () => {
  expect(googleSearch("testtest", dbMock)).toEqual([]);
});

it("is google search test", () => {
  expect(googleSearch("test", dbMock)).toEqual(["test.com"]);
});
