const googleSearch = require("./script");

dbMock = [
  "test.com",
  "what.com",
  "cutie.com",
  "math.com",
  "test.co",
  "math.co",
  "maths.com",
  "math.io",
];

describe("googleSearch", () => {
  it("is google search test", () => {
    expect(googleSearch("testtest", dbMock)).toEqual([]);
    expect(googleSearch("test", dbMock)).toEqual(["test.com", "test.co"]);
    expect(googleSearch("what", dbMock)).toEqual(["what.com"]);
  });

  it("work with undefined and null input", () => {
    expect(googleSearch(undefined, dbMock)).toEqual([]);
    expect(googleSearch(null, dbMock)).toEqual([]);
  });

  it("returns no more than three results", () => {
    expect(googleSearch(".com", dbMock).length).toEqual(3);
  });
});
