import mongoose from "mongoose";
import config from "./config/index.js";
import { getNews } from "./services/scrapperService/index.js";
import { getNews as getArtAndFashion } from "./services/scrapperService/Art-and-Fashion/index.js";
import { getNews as getBizAndFinance } from "./services/scrapperService/Biz-and-Finance/index.js";
import { getNews as getEntertainment } from "./services/scrapperService/Entertainment/index.js";
import { getNews as getGaming } from "./services/scrapperService/Gaming/index.js";
import { getNews as getLawAndCrime } from "./services/scrapperService/Law-and-crime/index.js";
import { getNews as getLifestyleAndHealth } from "./services/scrapperService/Lifestyle-and-health/index.js";
import { getNews as getPolitics } from "./services/scrapperService/politics/index.js";
import { getNews as getScienceAndTech } from "./services/scrapperService/Science-and-Tech/index.js";
import { getNews as getSports } from "./services/scrapperService/Sports/index.js";
import { getNews as getWeb3 } from "./services/scrapperService/Web3/index.js";

const newses = [
    getArtAndFashion(),
    getBizAndFinance(),
    getEntertainment(),
    getGaming(),
    getLawAndCrime(),
    getLifestyleAndHealth(),
    getPolitics(),
    getScienceAndTech(),
    getSports(),
    getWeb3()
]

mongoose.connect(config.db).then(() => {
  console.log("Successfully connected to mongo server.");
  console.log(`connection uri ${config.db}}`);
  Promise.all(newses)
  .then( results => {
    console.log("\n=========finished=========\n")
    process.exit()
  })
  .catch( error => {
    console.error(error)
    process.exit(-1)
  })
});
