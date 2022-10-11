const fetch = require("node-fetch");
const swapi = require("./script2");

it("calls swapi to get people", (done) => {
  expect.assertions(1); // make sure the code is running
  swapi.getPeople(fetch).then((data) => {
    expect(data.count).toEqual(82);
    done();
  });
});

it("calls swapi to get people method two", () => {
  expect.assertions(1); // make sure the code is running
  return swapi.getPeople(fetch).then((data) => {
    expect(data.count).toEqual(82);
  });
});

it("calls swapi to get people with a promise", (done) => {
  expect.assertions(2);
  swapi.getPeople(fetch).then((data) => {
    expect(data.count).toEqual(82);
    expect(data.results.length).toBeGreaterThan(5);
    done();
  });
});
