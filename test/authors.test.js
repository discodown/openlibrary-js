const { AuthorsAPI } = require('../src/authors');

test('test getAuthor', async () => {
    const authors = new AuthorsAPI();

    const testData = require('./testdata/authordata.json');
    const data = await authors.getAuthor("OL23919A");
    expect(data).toStrictEqual(testData);

});

test('test getAuthorWorks', async () => {
    const authors = new AuthorsAPI();

    const testData = require('./testdata/authorworksdata.json');
    const data = await authors.getAuthorWorks("OL23919A");
    expect(data).toStrictEqual(testData);
});