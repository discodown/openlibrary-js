const fetch = require("node-fetch");

class SubjectsAPI {
    constructor(details = "false", ebooks = "false", limit = 50, offset = 50) {
        this.BASE_API_URL = "https://openlibrary.org/subjects/";
        this.details = details;
        this.ebooks = ebooks;
        this.limit = limit;
        this.offset = offset;
    }

    async getSubjectWorks(subject, publishedIn = null) {
        let req_url = `${this.BASE_API_URL}/${subject}.json?details=${this.details}?ebooks=${this.ebooks}?limit=${this.limit}?offset=${this.offset}`

        if (publishedIn != null) {
            req_url = req_url.concat(`?published_in=${publishedIn}`);
        }

        const res = await fetch(req_url);
        const data = await res.json();

        return data;
    }
}

modules.export = { SubjectsAPI };