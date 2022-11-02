const path = require("path");
const fs = require("fs");
const _ = require("lodash");
const { faker } = require("@faker-js/faker/locale/ru");

const genres = [
  "фэнтези",
  "фантастика",
  "научпоп",
  "детектив",
  "мелодрама",
  "драма",
  "пьеса",
];

const CATEGORIES_COUNT = 7;
const BOOKS_COUNT_IN_CATEGORY = 5;
const REVIEWS_FOR_EACH_BOOK_COUNT = 3;

function generateCategory(lastBookId = 0) {
  let lastId = lastBookId;
  const result = [];
  for (let i = 0; i < BOOKS_COUNT_IN_CATEGORY; i++) {
    const book = {
      id: ++lastId,
      author: faker.name.fullName(),
      title: (() => {
        const string = faker.random.words(3);
        return (
          string.charAt(0).toUpperCase() + string.substring(1).toLowerCase()
        );
      })(),
      price: Math.round(Number(faker.finance.amount(10, 3000))),
      description: faker.random.words(30) + ".",
      genre: genres[_.random(0, genres.length - 1)],
    };
    result.push(book);
  }
  return { category: result, lastId };
}
function generateBooks() {
  const result = [];
  let lastBookId = 0;
  for (let i = 0; i < CATEGORIES_COUNT; i++) {
    const { category, lastId } = generateCategory(lastBookId);
    result.push(category);
    lastBookId = lastId;
  }
  return result;
}

function generateReviews(booksData) {
  const booksCategories = _.cloneDeep(booksData);
  const result = [];
  for (const books of booksCategories) {
    for (const book of books) {
      const bookReviews = [];
      for (let i = 0; i < REVIEWS_FOR_EACH_BOOK_COUNT; i++) {
        const review = {
            
          name: faker.name.fullName(),
          rate: Math.floor(Math.random() * (5 - 1) + 1),
          text: faker.random.words(10) + ".",
        };
        bookReviews.push(review);
      }
      result.push({ bookId: book.id, reviews: bookReviews });
    }
  }
  return result;
}

function generate() {
  const books = generateBooks();
  const reviews = generateReviews(books);
  fs.writeFileSync(
    path.join(__dirname, "/src/constants/mock.json"),
    JSON.stringify({ books, reviews })
  );
}

generate();
