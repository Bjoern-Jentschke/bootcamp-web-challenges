import { news } from "./utils/news.js";
import { Card } from "./components/Card/Card.js";
import { checkFilteredNews, checkSortedNews } from "./utils/results.js";

const container = document.querySelector('[data-js="card-container"]');

// Part 1 - start here
const filteredNews = news.filter((card) => {
  return card.categories.includes("politics");
});

// Part 2 - start here
const sortedNews = filteredNews;

sortedNews
.slice()
.sort ((a, b) => {
  const nameA = a.body.length;
  const nameB = b.body.length;
  if (nameA < nameB) {
    return -1;
  } if (nameA > nameB) {
    return 1;
  }
  return 0;
})

sortedNews.forEach((news) => {
  const cardElement = Card(news);
  container.append(cardElement);
});

// Check your filter and sorting order here:
checkFilteredNews(filteredNews);

checkSortedNews(sortedNews);
