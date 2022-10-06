const googleDatabase = [
  "cats.com",
  "souprecipes.com",
  "flowers.com",
  "animals.com",
  "x.com",
  "myfavouritecats.com",
];

const googleSearch = (searchInput, database) => {
  const matches = database.filter((website) => {
    return website.includes(searchInput);
  });
  return matches.length > 3 ? matches.slice(0, 3) : matches;
};

module.exports = googleSearch;
