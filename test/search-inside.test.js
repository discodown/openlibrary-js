const { SearchInsideAPI } = require('../src/search-inside');
const jest = require("jest");

test('Tests locateItem', async () => {
    const searchInside = new SearchInsideAPI();

    const host = await searchInside.locateItem("designevaluation25clin");
    expect(host).toBe("ia600204.us.archive.org")

});

test('Tests searchInside', async () => {
    const searchInside = new SearchInsideAPI();

    const testData = require("./testdata/searchinsideresult.json");

    const data = await searchInside.searchInside("ia800204.us.archive.org", "designevaluation25clin", "designevaluation25clin",
    "/27/items/designevaluation25clin", "\"library science\"");

    expect(data).toStrictEqual(testData);
});