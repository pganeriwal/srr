const removeDuplicateAndBlacklist = (original) => {
    const cleaned = new Set();
    const duplicates = [];

    original.forEach(e => {
        if (cleaned.has(e)) {
            console.log("Duplicate", e);
            duplicates.push(e);
        } else {
            cleaned.add(e);
        }
    });

    const blacklisted = [
        "931durgesh@gmail.com",
        "indrashreegupta1234@gmail.com",
        "karanyadav111213@gmail.com",
        "manishakurrich22@gmail.com",
        "mehrotrarangoli1993@gmail.com",
        "neelam1babbar@gmail.com",
        "nehasharma0731996@gmail.com",
        "nitinchoithramani@gmail.com",
        "nitish.agrawal23@gmail.com",
        "parshuramdmrc@gmail.com",
        "poojagoswami1@yahoo.in",
        "rajeshnil.iiest@gmail.com",
        "rimanshikocher641@gmail.com",
        "sa3479945@gmail.com",
        "sakshi@vidyamandir.com",
        "shashankgupta11290@gmail.com",
        "shenu.66786@gmail.com",
        "shivanioberoi67@gmail.com",
        "shriyanshgupta00@gmail.com",
        "solankiarun02041997@gmail.com",
        "soodsheetal206@gmail.com",
        "spotalchunda@mail.ru",
        "sweet12priya@gmail.com",
        "tanishqsharma294@gmail.com",
        "vermasv1995@gmail.com",
        "vickymehta2356@gmail.com",
    ];
    const blacklistRemoved = [];
    blacklisted.forEach(e => {
        if (cleaned.has(e)) {
            console.log("Deleted", e);
            cleaned.delete(e);
            blacklistRemoved.push(e);
        }
    });
    return {
        cleaned: Array.from(cleaned),
        duplicates,
        blacklistRemoved,
    };
};