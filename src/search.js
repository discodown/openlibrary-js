const fetch = require("node-fetch");

const fields = ['title', 'author', 'subject', 'place', 'person', 'language', 'publisher',
                'first_publish_year', 'title_suggest', 'ddc', 'lcc', 'birth_date'];

const types = ['place', 'time', 'person'];

const sorts = ['relevence', 'new', 'old', 'random', 'key', 'title'];

class QueryField {
    constructor(value, key = 'q') {
        this.key = key;
        this.value = value;
    }

    toString() {
        return `${this.key}=${this.value}`;
    }
}

class SearchAPI {
    constructor(sort = 'relevance', fields = ['*'], limit = 50) {
        this.BASE_API_URL = "https://openlibrary.org/search";
        this.sort = sort;
        this.fields = fields;
        this.limit = limit;
    }

    async search(q) {
        const req_url = this.BASE_API_URL + `.json/${q.toString()}&sort=${this.sort}&fields=${this.fields.toString()}&limit=${this.limit}`;

        const res = await fetch(req_url);
        const data = await res.json();

        return data;
    }

    async searchAuthors(q) {
        const req_url = this.BASE_API_URL + `/authors.json/${q.toString()}&sort=${this.sort}&fields=${this.fields.toString()}&limit=${this.limit}`;
        
        const res = await fetch(req_url);
        const data = await res.json();

        return data;
    }
}