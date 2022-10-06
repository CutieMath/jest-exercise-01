const googleSearch = require("./script");

dbMock = ["test.com", "what.com"];
it("Test 01", () => {
  expect(googleSearch("testtest", dbMock)).toEqual([]);
});
