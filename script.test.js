const googleSearch = require("./script");

dbMock = ["test.com", "what.com"];
it("is google search test", () => {
  expect(googleSearch("testtest", dbMock)).toEqual([]);
  expect(googleSearch("test", dbMock)).toEqual(["test.com"]);
  expect(googleSearch("what", dbMock)).toEqual(["what.com"]);
});
