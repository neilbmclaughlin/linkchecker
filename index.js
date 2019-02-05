const axios = require('axios')
const cheerio = require('cheerio')

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
    let list = await getAllLinks('https://www.nhs.uk')
    console.log(list);
}

crawlPage()
