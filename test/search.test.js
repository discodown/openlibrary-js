const {QueryField, SearchAPI} = require("../src/search");

test('test SearchAPI.search with query', async () => {
    const search = new SearchAPI();

    const testData = require("./testdata/queryallfields.json");

    const q = new QueryField("the lord of the rings", "q");

    const data = await search.search(q);
    expect(data).toStrictEqual(testData);
})

test('test SearchAPI.search with author field', async () => {
    const search = new SearchAPI();

    const testData = require("./testdata/searchauthorfield.json");
    const q = new QueryField("tolkien", "author");

    const data = await search.search(q);
    expect(data).toStrictEqual(testData);
})

test('test SearchAPI.search with query and restricted fields', async () => {
    const search = new SearchAPI("default", ["author", "title", "language"], 50);

    const testData = require("./testdata/querywithfields.json");

    const q = new QueryField("the lord of the rings", "q");

    const data = await search.search(q);
    expect(data).toStrictEqual(testData);
})

test('test SearchAPI.search with author field and restricted fields', async () => {
    const search = new SearchAPI("default", ["author", "title", "language"], 50);

    const testData = require("./testdata/searchauthorwithfields.json");
    const q = new QueryField("tolkien", "author");

    const data = await search.search(q);
    expect(data).toStrictEqual(testData);
})

test('test SearchAPI.searchAuthors', async () => {
    const search = new SearchAPI();
    const testData = require("./testdata/searchauthors.json");

    const q = new QueryField("twain", "q");

    const data = await search.searchAuthors(q);
    expect(data).toStrictEqual(testData);

})