const fetch = require("node-fetch");

class SubjectsAPI {
    constructor(details = false, ebooks = false, limit = 50) {
        this.BASE_API_URL = "https://openlibrary.org/subjects/";
        this.details = details;
        this.ebooks = ebooks;
        this.limit = limit;
    }

    async getSubjectWorks(subject, offset, publishedIn = null) {
        let req_url = `${this.BASE_API_URL}${subject}.json?limit=${this.limit}&offset=${offset}`;

        if (this.ebooks == true) {
            req_url = req_url + "&ebooks=true";
        }

        if (this.details == true) {
            req_url = req_url + "&details=true";
        }

        if (publishedIn != null) {
            req_url = req_url.concat(`&published_in=${publishedIn}`);
        }
        
        console.log("URLLL: " + req_url)
        const res = await fetch(req_url);
        const data = await res.json();

        return data;
    }
}

module.exports = { SubjectsAPI };