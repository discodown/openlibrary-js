const fetch = require("node-fetch");

class RecentChangesAPI {
    constructor(limit = 100, offset = 0) {
        this.BASE_API_URL = "http://openlibrary.org/recentchanges";
        this.limit = limit;
        this.offset = offset;
    }

    async getRecentChanges(modifers = {"date" : null, "kind" : null}) {

    }

}