const fetch = require("node-fetch");

class RecentChangesAPI {
    constructor(limit = 100, offset = 0) {
        this.BASE_API_URL = "http://openlibrary.org/recentchanges";
        this.limit = limit;
        this.offset = offset;
    }

    async getRecentChanges(modifers = {"date" : null, "kind" : null}, bot = null) {
        let req_url = this.BASE_API_URL;

        if (modifers["date"] != null) {
            req_url = req_url + `/${modifers["date"]}`;
        }
        if (modifers["kind"] != null) {
            req_url = req_url + `/${modifers["kind"]}`;
        }
        req_url = req_url + `.json?limit=${this.limit}?offset=${this.offset}`;
        
        if (bot != null) {
            req_url = req_url + `&bot=${bot}`;
        }

        const res = await fetch(req_url);
        const data = await res.json();

        return data;
    }
}

module.exports = { RecentChangesAPI };