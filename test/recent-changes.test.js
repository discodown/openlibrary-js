const { RecentChangesAPI } = require('../src/recent-changes');

test('Tests getRecentChanges with default args', async () => {
    const changes = new RecentChangesAPI();

    const testData = require('./testdata/changesnoargs.json');

    const data = await changes.getRecentChanges();

    expect(data).toStrictEqual(testData);
});

test('Tests getRecentChanges with date modifier', async () => {
    const changes = new RecentChangesAPI();

    const testData = require('./testdata/changesdatemod.json');

    const data = await changes.getRecentChanges({"date" : "2010/08", "kind" : null});

    expect(data).toStrictEqual(testData);
});

test('Tests getRecentChanges with kind modifier', async () => {
    const changes = new RecentChangesAPI();

    const testData = require('./testdata/changeskindmod.json');

    const data = await changes.getRecentChanges({"date" : null, "kind" : "merge-authors"});

    expect(data).toStrictEqual(testData);
});

test('Tests getRecentChanges with date and kind modifiers', async () => {
    const changes = new RecentChangesAPI();

    const testData = require('./testdata/changesdateandkindmod.json');

    const data = await changes.getRecentChanges({"date" : "2010/08", "kind" : "merge-authors"});

    expect(data).toStrictEqual(testData);
});

test('Tests getRecentChanges with date and kind modifiers and bot flag', async () => {
    const changes = new RecentChangesAPI();

    const testData = require('./testdata/changesdateandkindbot.json');

    const data = await changes.getRecentChanges({"date" : "2010/08", "kind" : "merge-authors"}, true);

    expect(data).toStrictEqual(testData);
});

test('Tests getRecentChanges with no modifiers and bot flag', async () => {
    const changes = new RecentChangesAPI();

    const testData = require('./testdata/changesbot.json');

    const data = await changes.getRecentChanges({"date" : null, "kind" : null}, true);

    expect(data).toStrictEqual(testData);
});

test('Tests getRecentChanges with modifiers and human flag', async () => {
    const changes = new RecentChangesAPI();

    const testData = require('./testdata/changesdateandkindhuman.json');

    const data = await changes.getRecentChanges({"date" : "2010/08", "kind" : "merge-authors"}, false);

    expect(data).toStrictEqual(testData);
});