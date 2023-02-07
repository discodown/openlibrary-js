const fetch = require("node-fetch");
const { TsJestCompiler } = require("ts-jest");

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
    constructor(sort = 'default', fields = ['*'], limit = 50) {
        this.BASE_API_URL = "https://openlibrary.org/search";
        if (sort == 'default') {
            this.sort = "";
        }
        else {
            this.sort = sort;
        }
        this.fields = fields;
        this.limit = limit;
    }

    async search(q) {
        const req_url = this.BASE_API_URL + `.json?${q}&fields=${this.fields.toString()}&sort=${this.sort}&limit=${this.limit}`;
        const res = await fetch(req_url);
        const data = await res.json();

        return data;
    }

    async searchAuthors(q) {
        const req_url = this.BASE_API_URL + `/authors.json?${q}&fields=${this.fields.toString()}&sort=${this.sort}&limit=${this.limit}`;
        
        const res = await fetch(req_url);
        const data = await res.json();

        return data;
    }
}

module.exports = { QueryField, SearchAPI };