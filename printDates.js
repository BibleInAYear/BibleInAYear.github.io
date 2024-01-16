
const verses= // List of Bible Verse References
    ["Genesis 1-3",
        "Genesis 4-7",
        "Genesis 8-11",
        "Genesis 12-15",
        "Genesis 16-18",
        "Genesis 19-21",
        "Genesis 22-24",
        "Genesis 25-26",
        "Genesis 27-29",
        "Genesis 30-31",
        "Genesis 32-34",
        "Genesis 35-37",
        "Genesis 38-40",
        "Genesis 41-42",
        "Genesis 43-45",
        "Genesis 46-47",
        "Genesis 48-50",
        "Exodus 1-3",
        "Exodus 4-6",
        "Exodus 7-9",
        "Exodus 10-12",
        "Exodus 13-15",
        "Exodus 16-18",
        "Exodus 19-21",
        "Exodus 22-24",
        "Exodus 25-27",
        "Exodus 28-29",
        "Exodus 30-32",
        "Exodus 33-35",
        "Exodus 36-38",
        "Exodus 39-40",
        "Leviticus 1-4",
        "Leviticus 5-7",
        "Leviticus 8-10",
        "Leviticus 11-13",
        "Leviticus 14-15",
        "Leviticus 16-18",
        "Leviticus 19-21",
        "Leviticus 22-23",
        "Leviticus 24-25",
        "Leviticus 26-27",
        "Numbers 1-2",
        "Numbers 3-4",
        "Numbers 5-6",
        "Numbers 7",
        "Numbers 8-10",
        "Numbers 11-13",
        "Numbers 14-15",
        "Numbers 16-17",
        "Numbers 18-20",
        "Numbers 21-22",
        "Numbers 23-25",
        "Numbers 26-27",
        "Numbers 28-30",
        "Numbers 31-32",
        "Numbers 33-34",
        "Numbers 35-36",
        "Deuteronomy 1-2",
        "Deuteronomy 3-4",
        "Deuteronomy 5-7",
        "Deuteronomy 8-10",
        "Deuteronomy 11-13",
        "Deuteronomy 14-16",
        "Deuteronomy 17-20",
        "Deuteronomy 21-23",
        "Deuteronomy 24-27",
        "Deuteronomy 28-29",
        "Deuteronomy 30-31",
        "Deuteronomy 32-34",
        "Joshua 1-4",
        "Joshua 5-8",
        "Joshua 9-11",
        "Joshua 12-15",
        "Joshua 16-18",
        "Joshua 19-21",
        "Joshua 22-24",
        "Judges 1-2",
        "Judges 3-5",
        "Judges 6-7",
        "Judges 8-9",
        "Judges 10-12",
        "Judges 13-15",
        "Judges 16-18",
        "Judges 19-21",
        "Ruth",
        "1 Samuel 1-3",
        "1 Samuel 4-8",
        "1 Samuel 9-12",
        "1 Samuel 13-14",
        "1 Samuel 15-17",
        "1 Samuel 18-20",
        "1 Samuel 21-24",
        "1 Samuel 25-27",
        "1 Samuel 28-31",
        "2 Samuel 1-3",
        "2 Samuel 4-7",
        "2 Samuel 8-12",
        "2 Samuel 13-15",
        "2 Samuel 16-18",
        "2 Samuel 19-21",
        "2 Samuel 22-24",
        "1 Kings 1-2",
        "1 Kings 3-5",
        "1 Kings 6-7",
        "1 Kings 8-9",
        "1 Kings 10-11",
        "1 Kings 12-14",
        "1 Kings 15-17",
        "1 Kings 18-20",
        "1 Kings 21-22",
        "2 Kings 1-3",
        "2 Kings 4-5",
        "2 Kings 6-8",
        "2 Kings 9-11",
        "2 Kings 12-14",
        "2 Kings 15-17",
        "2 Kings 18-19",
        "2 Kings 20-22",
        "2 Kings 23-25",
        "1 Chronicles 1-2",
        "1 Chronicles 3-5",
        "1 Chronicles 6",
        "1 Chronicles 7-8",
        "1 Chronicles 9-11",
        "1 Chronicles 12-14",
        "1 Chronicles 15-17",
        "1 Chronicles 18-21",
        "1 Chronicles 22-24",
        "1 Chronicles 25-27",
        "1 Chronicles 28-29 and 2 Chronicles 1",
        "2 Chronicles 2-5",
        "2 Chronicles 6-8",
        "2 Chronicles 9-12",
        "2 Chronicles 13-17",
        "2 Chronicles 18-20",
        "2 Chronicles 21-24",
        "2 Chronicles 25-27",
        "2 Chronicles 28-31",
        "2 Chronicles 32-34",
        "2 Chronicles 35-36",
        "Ezra 1-3",
        "Ezra 4-7",
        "Ezra 8-10",
        "Nehemiah 1-3",
        "Nehemiah 4-6",
        "Nehemiah 7",
        "Nehemiah 8-9",
        "Nehemiah 10-11",
        "Nehemiah 12-13",
        "Esther 1-5",
        "Esther 6-10",
        "Job 1-4",
        "Job 5-7",
        "Job 8-10",
        "Job 11-13",
        "Job 14-16",
        "Job 17-20",
        "Job 21-23",
        "Job 24-28",
        "Job 29-31",
        "Job 32-34",
        "Job 35-37",
        "Job 38-39",
        "Job 40-42",
        "Psalms 1-8",
        "Psalms 9-16",
        "Psalms 17-20",
        "Psalms 21-25",
        "Psalms 26-31",
        "Psalms 32-35",
        "Psalms 36-39",
        "Psalms 40-45",
        "Psalms 46-50",
        "Psalms 51-57",
        "Psalms 58-65",
        "Psalms 66-69",
        "Psalms 70-73",
        "Psalms 74-77",
        "Psalms 78-79",
        "Psalms 80-85",
        "Psalms 86-89",
        "Psalms 90-95",
        "Psalms 96-102",
        "Psalms 103-105",
        "Psalms 106-107",
        "Psalms 108-114",
        "Psalms 115-118",
        "Psalms 119:1-88",
        "Psalms 119:89-176",
        "Psalms 120-132",
        "Psalms 133-139",
        "Psalms 140-145",
        "Psalms 146-150",
        "Proverbs 1-3",
        "Proverbs 4-6",
        "Proverbs 7-9",
        "Proverbs 10-12",
        "Proverbs 13-15",
        "Proverbs 16-18",
        "Proverbs 19-21",
        "Proverbs 22-23",
        "Proverbs 24-26",
        "Proverbs 27-29",
        "Proverbs 30-31",
        "Ecclesiastes 1-4",
        "Ecclesiastes 5-8",
        "Ecclesiastes 9-12",
        "Song of Solomon 1-8",
        "Isaiah 1-4",
        "Isaiah 5-8",
        "Isaiah 9-12",
        "Isaiah 13-17",
        "Isaiah 18-22",
        "Isaiah 23-27",
        "Isaiah 28-30",
        "Isaiah 31-35",
        "Isaiah 36-41",
        "Isaiah 42-44",
        "Isaiah 45-48",
        "Isaiah 49-53",
        "Isaiah 54-58",
        "Isaiah 59-63",
        "Isaiah 64-66",
        "Jeremiah 1-3",
        "Jeremiah 4-6",
        "Jeremiah 7-9",
        "Jeremiah 10-13",
        "Jeremiah 14-17",
        "Jeremiah 18-22",
        "Jeremiah 23-25",
        "Jeremiah 26-29",
        "Jeremiah 30-31",
        "Jeremiah 32-34",
        "Jeremiah 35-37",
        "Jeremiah 38-41",
        "Jeremiah 42-45",
        "Jeremiah 46-48",
        "Jeremiah 49-50",
        "Jeremiah 51-52",
        "Lamentations 1-3:36",
        "Lamentations 3:37-5",
        "Ezekiel 1-4",
        "Ezekiel 5-8",
        "Ezekiel 9-12",
        "Ezekiel 13-15",
        "Ezekiel 16-17",
        "Ezekiel 18-20",
        "Ezekiel 21-22",
        "Ezekiel 23-24",
        "Ezekiel 25-27",
        "Ezekiel 28-30",
        "Ezekiel 31-33",
        "Ezekiel 34-36",
        "Ezekiel 37-39",
        "Ezekiel 40-42",
        "Ezekiel 43-45",
        "Ezekiel 46-48",
        "Daniel 1-3",
        "Daniel 4-6",
        "Daniel 7-9",
        "Daniel 10-12",
        "Hosea 1-7",
        "Hosea 8-14",
        "Joel",
        "Amos 1-5",
        "Amos 6-9",
        "Obadiah and Jonah",
        "Micah 1-7",
        "Nahum 1-3",
        "Habakkuk and Zephaniah",
        "Haggai 1-2",
        "Zechariah 1-7",
        "Zechariah 8-14",
        "Malachi 1-4",
        "Matthew 1-4",
        "Matthew 5-6",
        "Matthew 7-8",
        "Matthew 9-10",
        "Matthew 11-12",
        "Matthew 13-14",
        "Matthew 15-17",
        "Matthew 18-19",
        "Matthew 20-21",
        "Matthew 22-23",
        "Matthew 24-25",
        "Matthew 26",
        "Matthew 27-28",
        "Mark 1-3",
        "Mark 4-5",
        "Mark 6-7",
        "Mark 8-9",
        "Mark 10-11",
        "Mark 12-13",
        "Mark 14",
        "Mark 15-16",
        "Luke 1",
        "Luke 2-3",
        "Luke 4-5",
        "Luke 6-7",
        "Luke 8-9",
        "Luke 10-11",
        "Luke 12-13",
        "Luke 14-16",
        "Luke 17-18",
        "Luke 19-20",
        "Luke 21-22",
        "Luke 23-24",
        "John 1-2",
        "John 3-4",
        "John 5-6",
        "John 7-8",
        "John 9-10",
        "John 11-12",
        "John 13-15",
        "John 16-18",
        "John 19-21",
        "Acts 1-3",
        "Acts 4-6",
        "Acts 7-8",
        "Acts 9-10",
        "Acts 11-13",
        "Acts 14-15",
        "Acts 16-17",
        "Acts 18-20",
        "Acts 21-23",
        "Acts 24-26",
        "Acts 27-28",
        "Romans 1-3",
        "Romans 4-7",
        "Romans 8-10",
        "Romans 11-13",
        "Romans 14-16",
        "1 Corinthians 1-4",
        "1 Corinthians 5-8",
        "1 Corinthians 9-11",
        "1 Corinthians 12-14",
        "1 Corinthians 15-16",
        "2 Corinthians 1-4",
        "2 Corinthians 5-9",
        "2 Corinthians 10-13",
        "Galatians 1-3",
        "Galatians 4-6",
        "Ephesians 1-3",
        "Ephesians 4-6",
        "Philippians ",
        "Colossians ",
        "1 Thessalonians",
        "2 Thessalonians",
        "1 Timothy",
        "2 Timothy",
        "Titus and Philemon",
        "Hebrews 1-6",
        "Hebrews 7-10",
        "Hebrews 11-13",
        "James ",
        "1 Peter ",
        "2 Peter ",
        "1 John ",
        "2John, 3John, and Jude",
        "Revelation 1-3",
        "Revelation 4-8",
        "Revelation 9-12",
        "Revelation 13-16",
        "Revelation 17-19",
        "Revelation 20-22"]
const link_arr= [
    "https://www.biblegateway.com/passage/?search=Genesis+1",
    "https://www.biblegateway.com/passage/?search=Genesis+4",
    "https://www.biblegateway.com/passage/?search=Genesis+8",
    "https://www.biblegateway.com/passage/?search=Genesis+12",
    "https://www.biblegateway.com/passage/?search=Genesis+16",
    "https://www.biblegateway.com/passage/?search=Genesis+19",
    "https://www.biblegateway.com/passage/?search=Genesis+22",
    "https://www.biblegateway.com/passage/?search=Genesis+25",
    "https://www.biblegateway.com/passage/?search=Genesis+27",
    "https://www.biblegateway.com/passage/?search=Genesis+30",
    "https://www.biblegateway.com/passage/?search=Genesis+32",
    "https://www.biblegateway.com/passage/?search=Genesis+35",
    "https://www.biblegateway.com/passage/?search=Genesis+38",
    "https://www.biblegateway.com/passage/?search=Genesis+41",
    "https://www.biblegateway.com/passage/?search=Genesis+43",
    "https://www.biblegateway.com/passage/?search=Genesis+46",
    "https://www.biblegateway.com/passage/?search=Genesis+48",
    "https://www.biblegateway.com/passage/?search=Exodus+1",
    "https://www.biblegateway.com/passage/?search=Exodus+4",
    "https://www.biblegateway.com/passage/?search=Exodus+7",
    "https://www.biblegateway.com/passage/?search=Exodus+10",
    "https://www.biblegateway.com/passage/?search=Exodus+13",
    "https://www.biblegateway.com/passage/?search=Exodus+16",
    "https://www.biblegateway.com/passage/?search=Exodus+19",
    "https://www.biblegateway.com/passage/?search=Exodus+22",
    "https://www.biblegateway.com/passage/?search=Exodus+25",
    "https://www.biblegateway.com/passage/?search=Exodus+28",
    "https://www.biblegateway.com/passage/?search=Exodus+30",
    "https://www.biblegateway.com/passage/?search=Exodus+33",
    "https://www.biblegateway.com/passage/?search=Exodus+36",
    "https://www.biblegateway.com/passage/?search=Exodus+39",
    "https://www.biblegateway.com/passage/?search=Leviticus+1",
    "https://www.biblegateway.com/passage/?search=Leviticus+5",
    "https://www.biblegateway.com/passage/?search=Leviticus+8",
    "https://www.biblegateway.com/passage/?search=Leviticus+11",
    "https://www.biblegateway.com/passage/?search=Leviticus+14",
    "https://www.biblegateway.com/passage/?search=Leviticus+16",
    "https://www.biblegateway.com/passage/?search=Leviticus+19",
    "https://www.biblegateway.com/passage/?search=Leviticus+22",
    "https://www.biblegateway.com/passage/?search=Leviticus+24",
    "https://www.biblegateway.com/passage/?search=Leviticus+26",
    "https://www.biblegateway.com/passage/?search=Numbers+1",
    "https://www.biblegateway.com/passage/?search=Numbers+3",
    "https://www.biblegateway.com/passage/?search=Numbers+5",
    "https://www.biblegateway.com/passage/?search=Numbers+7",
    "https://www.biblegateway.com/passage/?search=Numbers+8",
    "https://www.biblegateway.com/passage/?search=Numbers+11",
    "https://www.biblegateway.com/passage/?search=Numbers+14",
    "https://www.biblegateway.com/passage/?search=Numbers+16",
    "https://www.biblegateway.com/passage/?search=Numbers+18",
    "https://www.biblegateway.com/passage/?search=Numbers+21",
    "https://www.biblegateway.com/passage/?search=Numbers+23",
    "https://www.biblegateway.com/passage/?search=Numbers+26",
    "https://www.biblegateway.com/passage/?search=Numbers+28",
    "https://www.biblegateway.com/passage/?search=Numbers+31",
    "https://www.biblegateway.com/passage/?search=Numbers+33",
    "https://www.biblegateway.com/passage/?search=Numbers+35",
    "https://www.biblegateway.com/passage/?search=Deuteronomy+1",
    "https://www.biblegateway.com/passage/?search=Deuteronomy+3",
    "https://www.biblegateway.com/passage/?search=Deuteronomy+5",
    "https://www.biblegateway.com/passage/?search=Deuteronomy+8",
    "https://www.biblegateway.com/passage/?search=Deuteronomy+11",
    "https://www.biblegateway.com/passage/?search=Deuteronomy+14",
    "https://www.biblegateway.com/passage/?search=Deuteronomy+17",
    "https://www.biblegateway.com/passage/?search=Deuteronomy+21",
    "https://www.biblegateway.com/passage/?search=Deuteronomy+24",
    "https://www.biblegateway.com/passage/?search=Deuteronomy+28",
    "https://www.biblegateway.com/passage/?search=Deuteronomy+30",
    "https://www.biblegateway.com/passage/?search=Deuteronomy+32",
    "https://www.biblegateway.com/passage/?search=Joshua+1",
    "https://www.biblegateway.com/passage/?search=Joshua+5",
    "https://www.biblegateway.com/passage/?search=Joshua+9",
    "https://www.biblegateway.com/passage/?search=Joshua+12",
    "https://www.biblegateway.com/passage/?search=Joshua+16",
    "https://www.biblegateway.com/passage/?search=Joshua+19",
    "https://www.biblegateway.com/passage/?search=Joshua+22",
    "https://www.biblegateway.com/passage/?search=Judges+1",
    "https://www.biblegateway.com/passage/?search=Judges+3",
    "https://www.biblegateway.com/passage/?search=Judges+6",
    "https://www.biblegateway.com/passage/?search=Judges+8",
    "https://www.biblegateway.com/passage/?search=Judges+10",
    "https://www.biblegateway.com/passage/?search=Judges+13",
    "https://www.biblegateway.com/passage/?search=Judges+16",
    "https://www.biblegateway.com/passage/?search=Judges+19",
    "https://www.biblegateway.com/passage/?search=Ruth",
    "https://www.biblegateway.com/passage/?search=1+Samuel+1",
    "https://www.biblegateway.com/passage/?search=1+Samuel+4",
    "https://www.biblegateway.com/passage/?search=1+Samuel+9",
    "https://www.biblegateway.com/passage/?search=1+Samuel+13",
    "https://www.biblegateway.com/passage/?search=1+Samuel+15",
    "https://www.biblegateway.com/passage/?search=1+Samuel+18",
    "https://www.biblegateway.com/passage/?search=1+Samuel+21",
    "https://www.biblegateway.com/passage/?search=1+Samuel+25",
    "https://www.biblegateway.com/passage/?search=1+Samuel+28",
    "https://www.biblegateway.com/passage/?search=2+Samuel+1",
    "https://www.biblegateway.com/passage/?search=2+Samuel+4",
    "https://www.biblegateway.com/passage/?search=2+Samuel+8",
    "https://www.biblegateway.com/passage/?search=2+Samuel+13",
    "https://www.biblegateway.com/passage/?search=2+Samuel+16",
    "https://www.biblegateway.com/passage/?search=2+Samuel+19",
    "https://www.biblegateway.com/passage/?search=2+Samuel+22",
    "https://www.biblegateway.com/passage/?search=1+Kings+1",
    "https://www.biblegateway.com/passage/?search=1+Kings+3",
    "https://www.biblegateway.com/passage/?search=1+Kings+6",
    "https://www.biblegateway.com/passage/?search=1+Kings+8",
    "https://www.biblegateway.com/passage/?search=1+Kings+10",
    "https://www.biblegateway.com/passage/?search=1+Kings+12",
    "https://www.biblegateway.com/passage/?search=1+Kings+15",
    "https://www.biblegateway.com/passage/?search=1+Kings+18",
    "https://www.biblegateway.com/passage/?search=1+Kings+21",
    "https://www.biblegateway.com/passage/?search=2+Kings+1",
    "https://www.biblegateway.com/passage/?search=2+Kings+4",
    "https://www.biblegateway.com/passage/?search=2+Kings+6",
    "https://www.biblegateway.com/passage/?search=2+Kings+9",
    "https://www.biblegateway.com/passage/?search=2+Kings+12",
    "https://www.biblegateway.com/passage/?search=2+Kings+15",
    "https://www.biblegateway.com/passage/?search=2+Kings+18",
    "https://www.biblegateway.com/passage/?search=2+Kings+20",
    "https://www.biblegateway.com/passage/?search=2+Kings+23",
    "https://www.biblegateway.com/passage/?search=1+Chronicles+1",
    "https://www.biblegateway.com/passage/?search=1+Chronicles+3",
    "https://www.biblegateway.com/passage/?search=1+Chronicles+6",
    "https://www.biblegateway.com/passage/?search=1+Chronicles+7",
    "https://www.biblegateway.com/passage/?search=1+Chronicles+9",
    "https://www.biblegateway.com/passage/?search=1+Chronicles+12",
    "https://www.biblegateway.com/passage/?search=1+Chronicles+15",
    "https://www.biblegateway.com/passage/?search=1+Chronicles+18",
    "https://www.biblegateway.com/passage/?search=1+Chronicles+22",
    "https://www.biblegateway.com/passage/?search=1+Chronicles+25",
    "https://www.biblegateway.com/passage/?search=1+Chronicles+28",
    "https://www.biblegateway.com/passage/?search=2+Chronicles+2",
    "https://www.biblegateway.com/passage/?search=2+Chronicles+6",
    "https://www.biblegateway.com/passage/?search=2+Chronicles+9",
    "https://www.biblegateway.com/passage/?search=2+Chronicles+13",
    "https://www.biblegateway.com/passage/?search=2+Chronicles+18",
    "https://www.biblegateway.com/passage/?search=2+Chronicles+21",
    "https://www.biblegateway.com/passage/?search=2+Chronicles+25",
    "https://www.biblegateway.com/passage/?search=2+Chronicles+28",
    "https://www.biblegateway.com/passage/?search=2+Chronicles+32",
    "https://www.biblegateway.com/passage/?search=2+Chronicles+35",
    "https://www.biblegateway.com/passage/?search=Ezra+1",
    "https://www.biblegateway.com/passage/?search=Ezra+4",
    "https://www.biblegateway.com/passage/?search=Ezra+8",
    "https://www.biblegateway.com/passage/?search=Nehemiah+1",
    "https://www.biblegateway.com/passage/?search=Nehemiah+4",
    "https://www.biblegateway.com/passage/?search=Nehemiah+7",
    "https://www.biblegateway.com/passage/?search=Nehemiah+8",
    "https://www.biblegateway.com/passage/?search=Nehemiah+10",
    "https://www.biblegateway.com/passage/?search=Nehemiah+12",
    "https://www.biblegateway.com/passage/?search=Esther+1",
    "https://www.biblegateway.com/passage/?search=Esther+6",
    "https://www.biblegateway.com/passage/?search=Job+1",
    "https://www.biblegateway.com/passage/?search=Job+5",
    "https://www.biblegateway.com/passage/?search=Job+8",
    "https://www.biblegateway.com/passage/?search=Job+11",
    "https://www.biblegateway.com/passage/?search=Job+14",
    "https://www.biblegateway.com/passage/?search=Job+17",
    "https://www.biblegateway.com/passage/?search=Job+21",
    "https://www.biblegateway.com/passage/?search=Job+24",
    "https://www.biblegateway.com/passage/?search=Job+29",
    "https://www.biblegateway.com/passage/?search=Job+32",
    "https://www.biblegateway.com/passage/?search=Job+35",
    "https://www.biblegateway.com/passage/?search=Job+38",
    "https://www.biblegateway.com/passage/?search=Job+40",
    "https://www.biblegateway.com/passage/?search=Psalms+1",
    "https://www.biblegateway.com/passage/?search=Psalms+9",
    "https://www.biblegateway.com/passage/?search=Psalms+17",
    "https://www.biblegateway.com/passage/?search=Psalms+21",
    "https://www.biblegateway.com/passage/?search=Psalms+26",
    "https://www.biblegateway.com/passage/?search=Psalms+32",
    "https://www.biblegateway.com/passage/?search=Psalms+36",
    "https://www.biblegateway.com/passage/?search=Psalms+40",
    "https://www.biblegateway.com/passage/?search=Psalms+46",
    "https://www.biblegateway.com/passage/?search=Psalms+51",
    "https://www.biblegateway.com/passage/?search=Psalms+58",
    "https://www.biblegateway.com/passage/?search=Psalms+66",
    "https://www.biblegateway.com/passage/?search=Psalms+70",
    "https://www.biblegateway.com/passage/?search=Psalms+74",
    "https://www.biblegateway.com/passage/?search=Psalms+78",
    "https://www.biblegateway.com/passage/?search=Psalms+80",
    "https://www.biblegateway.com/passage/?search=Psalms+86",
    "https://www.biblegateway.com/passage/?search=Psalms+90",
    "https://www.biblegateway.com/passage/?search=Psalms+96",
    "https://www.biblegateway.com/passage/?search=Psalms+103",
    "https://www.biblegateway.com/passage/?search=Psalms+106",
    "https://www.biblegateway.com/passage/?search=Psalms+108",
    "https://www.biblegateway.com/passage/?search=Psalms+115",
    "https://www.biblegateway.com/passage/?search=Psalms+119",
    "https://www.biblegateway.com/passage/?search=Psalms+119:89-176",
    "https://www.biblegateway.com/passage/?search=Psalms+120",
    "https://www.biblegateway.com/passage/?search=Psalms+133",
    "https://www.biblegateway.com/passage/?search=Psalms+140",
    "https://www.biblegateway.com/passage/?search=Psalms+146",
    "https://www.biblegateway.com/passage/?search=Proverbs+1",
    "https://www.biblegateway.com/passage/?search=Proverbs+4",
    "https://www.biblegateway.com/passage/?search=Proverbs+7",
    "https://www.biblegateway.com/passage/?search=Proverbs+10",
    "https://www.biblegateway.com/passage/?search=Proverbs+13",
    "https://www.biblegateway.com/passage/?search=Proverbs+16",
    "https://www.biblegateway.com/passage/?search=Proverbs+19",
    "https://www.biblegateway.com/passage/?search=Proverbs+22",
    "https://www.biblegateway.com/passage/?search=Proverbs+24",
    "https://www.biblegateway.com/passage/?search=Proverbs+27",
    "https://www.biblegateway.com/passage/?search=Proverbs+30",
    "https://www.biblegateway.com/passage/?search=Ecclesiastes+1",
    "https://www.biblegateway.com/passage/?search=Ecclesiastes+5",
    "https://www.biblegateway.com/passage/?search=Ecclesiastes+9",
    "https://www.biblegateway.com/passage/?search=Song+Of+Solomon",
    "https://www.biblegateway.com/passage/?search=Isaiah+1",
    "https://www.biblegateway.com/passage/?search=Isaiah+5",
    "https://www.biblegateway.com/passage/?search=Isaiah+9",
    "https://www.biblegateway.com/passage/?search=Isaiah+13",
    "https://www.biblegateway.com/passage/?search=Isaiah+18",
    "https://www.biblegateway.com/passage/?search=Isaiah+23",
    "https://www.biblegateway.com/passage/?search=Isaiah+28",
    "https://www.biblegateway.com/passage/?search=Isaiah+31",
    "https://www.biblegateway.com/passage/?search=Isaiah+36",
    "https://www.biblegateway.com/passage/?search=Isaiah+42",
    "https://www.biblegateway.com/passage/?search=Isaiah+45",
    "https://www.biblegateway.com/passage/?search=Isaiah+49",
    "https://www.biblegateway.com/passage/?search=Isaiah+54",
    "https://www.biblegateway.com/passage/?search=Isaiah+59",
    "https://www.biblegateway.com/passage/?search=Isaiah+64",
    "https://www.biblegateway.com/passage/?search=Jeremiah+1",
    "https://www.biblegateway.com/passage/?search=Jeremiah+4",
    "https://www.biblegateway.com/passage/?search=Jeremiah+7",
    "https://www.biblegateway.com/passage/?search=Jeremiah+10",
    "https://www.biblegateway.com/passage/?search=Jeremiah+14",
    "https://www.biblegateway.com/passage/?search=Jeremiah+18",
    "https://www.biblegateway.com/passage/?search=Jeremiah+23",
    "https://www.biblegateway.com/passage/?search=Jeremiah+26",
    "https://www.biblegateway.com/passage/?search=Jeremiah+30",
    "https://www.biblegateway.com/passage/?search=Jeremiah+32",
    "https://www.biblegateway.com/passage/?search=Jeremiah+35",
    "https://www.biblegateway.com/passage/?search=Jeremiah+38",
    "https://www.biblegateway.com/passage/?search=Jeremiah+42",
    "https://www.biblegateway.com/passage/?search=Jeremiah+46",
    "https://www.biblegateway.com/passage/?search=Jeremiah+49",
    "https://www.biblegateway.com/passage/?search=Jeremiah+51",
    "https://www.biblegateway.com/passage/?search=Lamentations+1",
    "https://www.biblegateway.com/passage/?search=Lamentations+3:37-66",
    "https://www.biblegateway.com/passage/?search=Ezekiel+1",
    "https://www.biblegateway.com/passage/?search=Ezekiel+5",
    "https://www.biblegateway.com/passage/?search=Ezekiel+9",
    "https://www.biblegateway.com/passage/?search=Ezekiel+13",
    "https://www.biblegateway.com/passage/?search=Ezekiel+16",
    "https://www.biblegateway.com/passage/?search=Ezekiel+18",
    "https://www.biblegateway.com/passage/?search=Ezekiel+21",
    "https://www.biblegateway.com/passage/?search=Ezekiel+23",
    "https://www.biblegateway.com/passage/?search=Ezekiel+25",
    "https://www.biblegateway.com/passage/?search=Ezekiel+28",
    "https://www.biblegateway.com/passage/?search=Ezekiel+31",
    "https://www.biblegateway.com/passage/?search=Ezekiel+34",
    "https://www.biblegateway.com/passage/?search=Ezekiel+37",
    "https://www.biblegateway.com/passage/?search=Ezekiel+40",
    "https://www.biblegateway.com/passage/?search=Ezekiel+43",
    "https://www.biblegateway.com/passage/?search=Ezekiel+46",
    "https://www.biblegateway.com/passage/?search=Daniel+1",
    "https://www.biblegateway.com/passage/?search=Daniel+4",
    "https://www.biblegateway.com/passage/?search=Daniel+7",
    "https://www.biblegateway.com/passage/?search=Daniel+10",
    "https://www.biblegateway.com/passage/?search=Hosea+1",
    "https://www.biblegateway.com/passage/?search=Hosea+8",
    "https://www.biblegateway.com/passage/?search=Joel+1",
    "https://www.biblegateway.com/passage/?search=Amos+1",
    "https://www.biblegateway.com/passage/?search=Amos+6",
    "https://www.biblegateway.com/passage/?search=Obadiah+1",
    "https://www.biblegateway.com/passage/?search=Micah+1",
    "https://www.biblegateway.com/passage/?search=Nahum+1",
    "https://www.biblegateway.com/passage/?search=Habakkuk+1",
    "https://www.biblegateway.com/passage/?search=Haggai+1",
    "https://www.biblegateway.com/passage/?search=Zechariah+1",
    "https://www.biblegateway.com/passage/?search=Zechariah+8",
    "https://www.biblegateway.com/passage/?search=Malachi+1",
    "https://www.biblegateway.com/passage/?search=Matthew+1",
    "https://www.biblegateway.com/passage/?search=Matthew+5",
    "https://www.biblegateway.com/passage/?search=Matthew+7",
    "https://www.biblegateway.com/passage/?search=Matthew+9",
    "https://www.biblegateway.com/passage/?search=Matthew+11",
    "https://www.biblegateway.com/passage/?search=Matthew+13",
    "https://www.biblegateway.com/passage/?search=Matthew+15",
    "https://www.biblegateway.com/passage/?search=Matthew+18",
    "https://www.biblegateway.com/passage/?search=Matthew+20",
    "https://www.biblegateway.com/passage/?search=Matthew+22",
    "https://www.biblegateway.com/passage/?search=Matthew+24",
    "https://www.biblegateway.com/passage/?search=Matthew+26",
    "https://www.biblegateway.com/passage/?search=Matthew+27",
    "https://www.biblegateway.com/passage/?search=Mark+1",
    "https://www.biblegateway.com/passage/?search=Mark+4",
    "https://www.biblegateway.com/passage/?search=Mark+6",
    "https://www.biblegateway.com/passage/?search=Mark+8",
    "https://www.biblegateway.com/passage/?search=Mark+10",
    "https://www.biblegateway.com/passage/?search=Mark+12",
    "https://www.biblegateway.com/passage/?search=Mark+14",
    "https://www.biblegateway.com/passage/?search=Mark+15",
    "https://www.biblegateway.com/passage/?search=Luke+1",
    "https://www.biblegateway.com/passage/?search=Luke+2",
    "https://www.biblegateway.com/passage/?search=Luke+4",
    "https://www.biblegateway.com/passage/?search=Luke+6",
    "https://www.biblegateway.com/passage/?search=Luke+8",
    "https://www.biblegateway.com/passage/?search=Luke+10",
    "https://www.biblegateway.com/passage/?search=Luke+12",
    "https://www.biblegateway.com/passage/?search=Luke+14",
    "https://www.biblegateway.com/passage/?search=Luke+17",
    "https://www.biblegateway.com/passage/?search=Luke+19",
    "https://www.biblegateway.com/passage/?search=Luke+21",
    "https://www.biblegateway.com/passage/?search=Luke+23",
    "https://www.biblegateway.com/passage/?search=John+1",
    "https://www.biblegateway.com/passage/?search=John+3",
    "https://www.biblegateway.com/passage/?search=John+5",
    "https://www.biblegateway.com/passage/?search=John+7",
    "https://www.biblegateway.com/passage/?search=John+9",
    "https://www.biblegateway.com/passage/?search=John+11",
    "https://www.biblegateway.com/passage/?search=John+13",
    "https://www.biblegateway.com/passage/?search=John+16",
    "https://www.biblegateway.com/passage/?search=John+19",
    "https://www.biblegateway.com/passage/?search=Acts+1",
    "https://www.biblegateway.com/passage/?search=Acts+4",
    "https://www.biblegateway.com/passage/?search=Acts+7",
    "https://www.biblegateway.com/passage/?search=Acts+9",
    "https://www.biblegateway.com/passage/?search=Acts+11",
    "https://www.biblegateway.com/passage/?search=Acts+14",
    "https://www.biblegateway.com/passage/?search=Acts+16",
    "https://www.biblegateway.com/passage/?search=Acts+18",
    "https://www.biblegateway.com/passage/?search=Acts+21",
    "https://www.biblegateway.com/passage/?search=Acts+24",
    "https://www.biblegateway.com/passage/?search=Acts+27",
    "https://www.biblegateway.com/passage/?search=Romans+1",
    "https://www.biblegateway.com/passage/?search=Romans+4",
    "https://www.biblegateway.com/passage/?search=Romans+8",
    "https://www.biblegateway.com/passage/?search=Romans+11",
    "https://www.biblegateway.com/passage/?search=Romans+14",
    "https://www.biblegateway.com/passage/?search=1+Corinthians+1",
    "https://www.biblegateway.com/passage/?search=1+Corinthians+5",
    "https://www.biblegateway.com/passage/?search=1+Corinthians+9",
    "https://www.biblegateway.com/passage/?search=1+Corinthians+12",
    "https://www.biblegateway.com/passage/?search=1+Corinthians+15",
    "https://www.biblegateway.com/passage/?search=2+Corinthians+1",
    "https://www.biblegateway.com/passage/?search=2+Corinthians+5",
    "https://www.biblegateway.com/passage/?search=2+Corinthians+10",
    "https://www.biblegateway.com/passage/?search=Galatians+1",
    "https://www.biblegateway.com/passage/?search=Galatians+4",
    "https://www.biblegateway.com/passage/?search=Ephesians+1",
    "https://www.biblegateway.com/passage/?search=Ephesians+4",
    "https://www.biblegateway.com/passage/?search=Philippians+1",
    "https://www.biblegateway.com/passage/?search=Colossians+1",
    "https://www.biblegateway.com/passage/?search=1+Thessalonians+1",
    "https://www.biblegateway.com/passage/?search=2+Thessalonians+1",
    "https://www.biblegateway.com/passage/?search=1+Timothy+1",
    "https://www.biblegateway.com/passage/?search=2+Timothy+1",
    "https://www.biblegateway.com/passage/?search=Titus+1",
    "https://www.biblegateway.com/passage/?search=Hebrews+1",
    "https://www.biblegateway.com/passage/?search=Hebrews+7",
    "https://www.biblegateway.com/passage/?search=Hebrews+11",
    "https://www.biblegateway.com/passage/?search=James+1",
    "https://www.biblegateway.com/passage/?search=1+Peter+1",
    "https://www.biblegateway.com/passage/?search=2+Peter+1",
    "https://www.biblegateway.com/passage/?search=1+John+1",
    "https://www.biblegateway.com/passage/?search=2+John+1",
    "https://www.biblegateway.com/passage/?search=Revelation+1",
    "https://www.biblegateway.com/passage/?search=Revelation+4",
    "https://www.biblegateway.com/passage/?search=Revelation+9",
    "https://www.biblegateway.com/passage/?search=Revelation+13",
    "https://www.biblegateway.com/passage/?search=Revelation+17",
    "https://www.biblegateway.com/passage/?search=Revelation+20"
] //List of Links to Bible Verse References
function printDates(){ // Function to output Table with Dates and Verse References
    var days = []

    var start_date =new Date(new Date(document.getElementById("start_date").value).setDate(new Date(document.getElementById("start_date").value).getDate()+1));
    var end_date = new Date(start_date).setDate(start_date.getDate()+365);

    for (var d= new Date(start_date);d<=end_date;d.setDate(d.getDate()+1)) {
        days.push(new Date(d).toLocaleDateString("en-US"));
    }
    
    var table = "<table style='width: 80%; margin: 20px auto; border-collapse: collapse;font-family: Gabarito, sans-serif;'>"
    table += "<tr style='background-color: transparent;'><th style='padding: 10px; border: 1px solid black; '>Bible Reference</th><th style='padding: 10px; border: 1px solid black;'>Date</th></tr>";

    for (var i = 0; i < 365; i++) {
            table += "<tr style='background-color: transparent" + ";'><td style='padding: 10px; border: 1px solid black;'>" +"<a href="+link_arr[i]+" target='_blank'>"+verses[i]+"</a>" + "</td><td style='padding: 10px; border: 1px solid black;'>" + (!end_date ? 'Day ' +parseInt(i+1):days[i]) + "</td></tr>";
        }


    table += "</table>"

    // var newWindow = window.open('','_blank');
    document.write("<html><head><title>Bible Reading Plan</title><link href='https://fonts.googleapis.com/css2?family=Gabarito:wght@400;700&display=swap' rel='stylesheet'></head><body>" + table + "</body></html>");
    document.body.style.background = 'linear-gradient(to right,#99ccff, #66ccff)';
    document.body.style.color = 'black';
}