const axios = require('axios')
const cheerio = require('cheerio')

const contentSubscriptionKey = process.env["CONTENT_SUBSCRIPTION_KEY"];

async function getAllLinks(url) {
    try {
        let result = await axios.get(url);
        $ = cheerio.load(result.data);
        links = [];
        $('a').each((i, link) => {
            links.push(link)
        })
        return links;
    } catch (err) {
        console.log(err);
        return err;
    }
}

async function crawlPage() {
    let list = await getAllLinks('https://api.nhs.uk/conditions/acne?subscription-key=' + contentSubscriptionKey)
    console.log(list);
}

crawlPage()
