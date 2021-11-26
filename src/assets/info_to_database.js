import {getDatabase, ref, set} from 'firebase/database';

const fantasy = [
    {
        id: '00001',
        category: 'Sci-fi & fantasy',
        bookName: 'Dune',
        authors: 'Frank Herbert',
        description: 'Set on the desert planet Arrakis, Dune is the story of the boy Paul Atreides, ' +
            'heir to a noble family tasked with ruling an inhospitable world where the only thing ' +
            'of value is the “spice” melange, a drug capable of extending life and enhancing consciousness. ' +
            'Coveted across the known universe, melange is a prize worth killing for....' +
            'When House Atreides is betrayed, the destruction of Paul’s family will set the boy on a journey toward ' +
            'a destiny greater than he could ever have imagined. And as he evolves into the mysterious man known as Muad’Dib, ' +
            'he will bring to fruition humankind’s most ancient and unattainable dream.' +
            'A stunning blend of adventure and mysticism, environmentalism and politics, ' +
            'Dune won the first Nebula Award, shared the Hugo Award, ' +
            'and formed the basis of what is undoubtedly the grandest epic in science fiction.',
        pages: '890',
        cover: 'hardcover',
        language: 'English',
        picture: 'https://firebasestorage.googleapis.com/v0/b/book-store-e9483.appspot.com/o/books%2Ffiction%2Fsci-fi%2F00001.jpg?alt=media&token=537eaa0c-b9ba-4eae-a9d6-cfd0464d338b',
        price: '9,99$'
    },
    {
        id: '00002',
        category: 'Sci-fi & fantasy',
        bookName: 'Station Eleven',
        authors: 'Emily St. John Mandel',
        description: 'Kirsten Raymonde will never forget the night Arthur Leander, the famous Hollywood actor, ' +
            'had a heart attack on stage during a production of King Lear.' +
            ' That was the night when a devastating flu pandemic arrived in the city, ' +
            'and within weeks, civilization as we know it came to an end.',
        pages: '352',
        cover: 'paperback',
        language: 'English',
        picture: 'https://firebasestorage.googleapis.com/v0/b/book-store-e9483.appspot.com/o/books%2Ffiction%2Fsci-fi%2F00002.jpg?alt=media&token=d888daca-0a7e-4c63-a683-e05d96df5499',
        price: '9,72$'
    },
    {
        id: '00003',
        category: 'Sci-fi & fantasy',
        bookName: 'Ready Player One: A Novel',
        authors: 'Ernest Cline',
        description: 'In the year 2045, reality is an ugly place. The only time Wade Watts really feels alive is ' +
            'when he’s jacked into the OASIS, a vast virtual world where most of humanity spends their days.' +
            'When the eccentric creator of the OASIS dies, he leaves behind a series of fiendish puzzles,' +
            ' based on his obsession with the pop culture of decades past. ' +
            'Whoever is first to solve them will inherit his vast fortune—and control of the OASIS itself.' +
            'Then Wade cracks the first clue. Suddenly he’s beset by rivals who’ll kill to take this prize. ' +
            'The race is on—and the only way to survive is to win.',
        pages: '384',
        cover: 'paperback',
        language: 'English',
        picture: 'https://firebasestorage.googleapis.com/v0/b/book-store-e9483.appspot.com/o/books%2Ffiction%2Fsci-fi%2F00003.jpg?alt=media&token=530d0dc0-1184-4c83-91ea-4da2c8e26c16',
        price: '12,14$'
    },
    {
        id: '00004',
        category: 'Sci-fi & fantasy',
        bookName: 'We Could Be Heroes: a novel',
        authors: 'Mike Chen',
        description: 'Jamie woke up in an empty apartment with no memory and only a few clues to his identity, ' +
            'but with the ability to read and erase other people’s memories—a power he uses to hold up banks to buy coffee, ' +
            'cat food and books.' +
            'Zoe is also searching for her past, and using her abilities of speed and strength…to deliver fast food.' +
            ' And she’ll occasionally put on a cool suit and beat up bad guys, if she feels like it.' +
            'When the archrivals meet in a memory-loss support group, ' +
            'they realize the only way to reveal their hidden pasts might be through each other. ' +
            'As they uncover an ongoing threat, suddenly much more is at stake than their fragile friendship.' +
            'With countless people at risk, Zoe and Jamie will have to recognize ' +
            'that sometimes being a hero starts with trusting someone else—and yourself.',
        pages: '336',
        cover: 'hardcover',
        language: 'English',
        picture: 'https://firebasestorage.googleapis.com/v0/b/book-store-e9483.appspot.com/o/books%2Ffiction%2Fsci-fi%2F00004.jpg?alt=media&token=27a0f4b3-e899-4b63-9e16-f4930b51987e',
        price: '15,99$'
    },
    {
        id: '00005',
        category: 'Sci-fi & fantasy',
        bookName: 'Star Wars: Thrawn Ascendancy (Book III: Lesser Evil)',
        authors: 'Timothy Zahn',
        description: '(Star Wars: The Ascendancy Trilogy)' +
            'For thousands of years the Chiss Ascendancy has been an island of calm, a center of power, ' +
            'and a beacon of integrity. It is led by the Nine Ruling Families, ' +
            'whose leadership stands as a bulwark of stability against the Chaos of the Unknown Regions.\n' +
            'But that stability has been eroded by a cunning foe who winnows away trust and loyalty in equal measure. ' +
            'Bonds of fidelity have given way to lines of division among the families. ' +
            'Despite the efforts of the Expansionary Defense Fleet, the Ascendancy slips closer and closer to civil war.',
        pages: '576',
        cover: 'paperback',
        language: 'English',
        picture: 'https://firebasestorage.googleapis.com/v0/b/book-store-e9483.appspot.com/o/books%2Ffiction%2Fsci-fi%2F00005.jpg?alt=media&token=4a0c108f-0bee-49d8-be28-5fda64845a51',
        price: '14,99$'
    },
    {
        id: '00006',
        category: 'Sci-fi & fantasy',
        bookName: 'The Lord of the Rings Illustrated Edition',
        authors: 'J.R.R. Tolkien',
        description: 'In ancient times the Rings of Power were crafted by the Elven-smiths, ' +
            'and Sauron, the Dark Lord, forged the One Ring, filling it with his own power so that he could rule all others.' +
            'But the One Ring was taken from him, and though he sought it throughout Middle-earth, it remained lost to him.' +
            ' After many ages it fell by chance into the hands of the hobbit Bilbo Baggins.' +
            'From Sauron’s fastness in the Dark Tower of Mordor, his power spread far and wide. ' +
            'Sauron gathered all the Great Rings to him, but always he searched for the One Ring that would complete his dominion.',
        pages: '1248',
        cover: 'hardcover',
        language: 'English',
        picture: 'https://firebasestorage.googleapis.com/v0/b/book-store-e9483.appspot.com/o/books%2Ffiction%2Fsci-fi%2F00006.jpg?alt=media&token=fc3ef72b-d3f8-4133-ba8c-28d9dfbb028c',
        price: '45,00$'
    },
    {
        id: '00007',
        category: 'Sci-fi & fantasy',
        bookName: 'The Midnight Library: A Novel',
        authors: 'Matt Haig',
        description: 'When Nora Seed finds herself in the Midnight Library, she has a chance to make things right. ' +
            'Up until now, her life has been full of misery and regret. She feels she has let everyone down, including herself. ' +
            'But things are about to change.' +
            'The books in the Midnight Library enable Nora to live as if she had done things differently. ' +
            'With the help of an old friend, she can now undo every one of her regrets as she tries to work out her perfect life. ' +
            'But things aren’t always what she imagined they’d be, ' +
            'and soon her choices place the library and herself in extreme danger.' +
            'Before time runs out, she must answer the ultimate question: what is the best way to live?',
        pages: '304',
        cover: 'paperback',
        language: 'English',
        picture: 'https://firebasestorage.googleapis.com/v0/b/book-store-e9483.appspot.com/o/books%2Ffiction%2Fsci-fi%2F00007.jpg?alt=media&token=3d1eac6a-5ee1-4534-b976-db4eeed5ccdf',
        price: '26,87$'
    },
    {
        id: '00008',
        category: 'Sci-fi & fantasy',
        bookName: 'Project Hail Mary: A Novel',
        authors: 'Andy Weir',
        description: 'Ryland Grace is the sole survivor on a desperate, ' +
            'last-chance mission—and if he fails, humanity and the earth itself will perish.' +
            'Except that right now, he doesn’t know that. He can’t even remember his own name,' +
            ' let alone the nature of his assignment or how to complete it.' +
            'All he knows is that he’s been asleep for a very, very long time. ' +
            'And he’s just been awakened to find himself millions of miles from home, with nothing but two corpses for company.' +
            'His crewmates dead, his memories fuzzily returning, Ryland realizes that an impossible task now confronts him. ' +
            'Hurtling through space on this tiny ship, it’s up to him to puzzle out' +
            ' an impossible scientific mystery—and conquer an extinction-level threat to our species.' +
            'And with the clock ticking down and the nearest human being light-years away, he’s got to do it all alone.' +
            'Or does he?',
        pages: '496',
        cover: 'hardcover',
        language: 'English',
        picture: 'https://firebasestorage.googleapis.com/v0/b/book-store-e9483.appspot.com/o/books%2Ffiction%2Fsci-fi%2F00008.jpg?alt=media&token=45e9d442-a927-4654-8ef8-5fa22bdf70d5',
        price: '9,77$'
    },
];

const classic = [
    {
        id: '00009',
        category: 'Classic',
        bookName: 'Fahrenheit 451',
        authors: ' Ray Bradbury',
        description: 'Guy Montag is a fireman. His job is to destroy the most illegal of commodities, ' +
            'the printed book, along with the houses in which they are hidden. ' +
            'Montag never questions the destruction and ruin his actions produce, ' +
            'returning each day to his bland life and wife, Mildred, ' +
            'who spends all day with her television “family.” ' +
            'But when he meets an eccentric young neighbor, Clarisse, ' +
            'who introduces him to a past where people didn’t live in fear and to a present' +
            ' where one sees the world through the ideas in books instead of the mindless chatter of television, ' +
            'Montag begins to question everything he has ever known.',
        pages: '249',
        cover: 'hardcover',
        language: 'English',
        picture: 'https://firebasestorage.googleapis.com/v0/b/book-store-e9483.appspot.com/o/books%2Ffiction%2Fclassic%2F71OFqSRFDgL.jpg?alt=media&token=12a65e49-dbf5-4930-a235-303f4c49d782',
        price: '7,88$'
    },
    {
        id: '00010',
        category: 'Classic',
        bookName: '1984',
        authors: 'Джордж Оруэлл',
        description: 'Роман, написанный более 70 лет назад, стал пугающим пророчеством Джорджа Оруэлла о будущем. ' +
            'И хотя 1984 год пришел и ушел, правительство многих стран и сейчас делает все, чтобы контролировать и повелевать. ' +
            'Это феноменальная история борьбы человека и системы, свободы и диктатуры, права и беззакония, личности и государства.' +
            ' Это одновременно книга-предсказание и книга-предостережение. ' +
            'И хотя автор никогда не жил в условиях тоталитаризма, удивительно четко и' +
            ' точно описал весь ужас человеческого порабощения в пределах диктатуры.',
        pages: '320',
        cover: 'paperback',
        language: 'Русский',
        picture: 'https://firebasestorage.googleapis.com/v0/b/book-store-e9483.appspot.com/o/books%2Ffiction%2Fclassic%2F21562561.jpg?alt=media&token=a85349fa-fc3b-48f8-a07c-60e773ded98a',
        price: '8,99$'
    },
    {
        id: '00011',
        category: 'Classic',
        bookName: 'Атлант розправив плеч',
        authors: 'Айн Рэнд',
        description: '"Атлант розправив плечі" magnus opus Айн Ренд, який авторка писала впродовж 12 років, ' +
            'став її найгучнішим бестселером, одним із найвпливовіших художніх творів світової літератури. ' +
            'Згідно з даними опитування Бібліотеки Конгресу США, це друга після Біблії книга, яка змінила життя американських читачів.' +
            ' Три частини трилогії названі відповідно до основних законів логіки: "Несуперечність", "Або-або", "А є А".',
        pages: '620',
        cover: 'hardcover',
        language: 'Украї́нська',
        picture: 'https://firebasestorage.googleapis.com/v0/b/book-store-e9483.appspot.com/o/books%2Ffiction%2Fclassic%2F72406748.jpg?alt=media&token=071592da-5de0-4bca-a36c-a07dac61a8a9',
        price: '7,99$'
    },
    {
        id: '00012',
        category: 'Classic',
        bookName: 'Мессия Дюны. Дети Дюны ',
        authors: 'Фрэнк Герберт',
        description: '12 лет Пол Атрейдес является Императором. Однако власть его начинает колебаться — ' +
            'Бене Гессерит, Тлейлаксу, Гильдия Космонавигации и даже его собственная жена — ' +
            'принцесса Ирулан вступают в заговор против него.' +
            'Их первый удар — посылка Императору особым образом воскрешённого Дункана Айдахо. ' +
            'Обладая способностью видеть будущее, Пол вроде бы без труда может разоблачить заговорщиков, однако, похоже, ' +
            'Император и сам стремится подорвать свою власть…' +
            'В книге развивается поднятый в первой части цикла важный философский вопрос о предзнании ' +
            '(состоянии, в котором человек видит будущее).',
        pages: '312',
        cover: 'hardcover',
        language: 'Русский',
        picture: 'https://firebasestorage.googleapis.com/v0/b/book-store-e9483.appspot.com/o/books%2Ffiction%2Fclassic%2F235741592.jpg?alt=media&token=54168db6-23b8-4942-993a-c10adbd8107e',
        price: '14,88$'
    },
    {
        id: '00013',
        category: 'Classic',
        bookName: 'Jane Eyre',
        authors: 'Charlotte Brontë ',
        description: 'The Marjolein Bastin Classics Series is a chance to rediscover classic literature in collectible, ' +
            'luxuriously illustrated volumes. For the first time ever, ' +
            'the internationally celebrated artwork of Marjolein Bastin graces the pages of a timeless classic,' +
            ' Jane Eyre, the story of a penniless orphan who finds love and friendship despite great adversity. ' +
            'Beyond bringing these stories to life, Bastin’s series adds elaborately designed ephemera,' +
            ' such as four-color maps, letters, family trees, and sheet music. ' +
            'Whether an ideal gift for an Austen or Brontë devotee or a treat for yourself,' +
            ' The Marjolein Bastin Classics Series, as a set or individually purchased, ' +
            'is perfect for anyone who feels a connection to these enduring literary gems.',
        pages: '408',
        cover: 'hardcover',
        language: 'English',
        picture: 'https://firebasestorage.googleapis.com/v0/b/book-store-e9483.appspot.com/o/books%2Ffiction%2Fclassic%2F81knTG5IfrL.jpg?alt=media&token=4f5819b9-9ad4-4553-a5a4-d3d662f48e3f',
        price: '28,41$'
    },
    {
        id: '00014',
        category: 'Classic',
        bookName: 'Emma',
        authors: 'Jane Austen',
        description: 'The Marjolein Bastin Classics Seriesis a chance to rediscover classic literature in collectible,' +
            ' luxuriously illustrated volumes. For the first time ever, ' +
            'the internationally celebrated artwork of Marjolein Bastin graces the pages of the timeless classic,' +
            ' Emma, the story of the well-meaning matchmaker of Highbury village.' +
            ' Beyond bringing these stories to life, Bastin’s series adds elaborately designed ephemera, ' +
            'such as letters, invitations, and more. Whether an ideal gift for an Austen or Brontë devotee or a treat for yourself, ' +
            'The Marjolein Bastin Classics Series, as a set or individually purchased, ' +
            'is perfect for anyone who feels a connection to these enduring literary gems.',
        pages: '360',
        cover: 'hardcover',
        language: 'English',
        picture: 'https://firebasestorage.googleapis.com/v0/b/book-store-e9483.appspot.com/o/books%2Ffiction%2Fclassic%2F817%2BrX7ba5L.jpg?alt=media&token=6e0d7905-6843-427b-988b-de035ac79ff1',
        price: '27,94$'
    },
    {
        id: '00015',
        category: 'Classic',
        bookName: 'Pride and Prejudice',
        authors: 'Jane Austen',
        description: 'For anyone who loves Austen, and for anyone who still cherishes the joy of letter writing,' +
            ' this book illuminates a favorite story in a whole new way.' +
            '• Step inside the world of Pride and Prejudice, one of the most beloved novels of all time.' +
            '• Great Mother\'s Day, birthday, or holiday gift for diehard Jane Austen fans' +
            '• A visually gorgeous book that will be at home on the shelf or on the coffee table' +
            '• Add it to the shelf with books like What Would Jane Do?',
        pages: '249',
        cover: 'hardcover',
        language: 'English',
        picture: 'https://firebasestorage.googleapis.com/v0/b/book-store-e9483.appspot.com/o/books%2Ffiction%2Fclassic%2F91MfFBRDceL.jpg?alt=media&token=728d8342-4713-4c19-896f-cdd08037f160',
        price: '7,88$'
    },
    {
        id: '00016',
        category: 'Classic',
        bookName: 'Little Women',
        authors: 'Barbara Heller ',
        description: 'For anyone who loves Little Women, or still cherishes the joy of letter writing, ' +
            'this book illuminates a favorite story in a whole new way. ' +
            'Louisa May Alcott\'s classic tale follows the March sisters as they come of age,' +
            ' and these unforgettable characters come alive in their letters and other writings.' +
            ' When Laurie invites Jo to join him for a picnic and "all sorts of larks," ' +
            'the unbridled joy of their friendship shines through. ' +
            'Each of the girls\' personalities is perfectly encapsulated in the letters they pen to Marmee. ' +
            'And Jo\'s heart-wrenching poem "My Beth" speaks to the profound bond between two sisters. ' +
            'As you read this deluxe edition of the novel, ' +
            'ou will find pockets throughout containing replicas ' +
            'of all 17 significant letters and paper ephemera from the story, ' +
            're-created with beautiful calligraphy and painstaking attention to historical detail. ' +
            'Pull out each one, peruse its contents, and allow yourself to be transported to the parlor of the March family home.',
        pages: '352',
        cover: 'hardcover',
        language: 'English',
        picture: 'https://firebasestorage.googleapis.com/v0/b/book-store-e9483.appspot.com/o/books%2Ffiction%2Fclassic%2F1713212811.01._SCLZZZZZZZ_SX500_.jpg?alt=media&token=e04a6149-28a7-4e14-bcdf-03125836f329',
        price: '27,63$'
    },
    {
        id: '00017',
        category: 'Classic',
        bookName: 'The Wonderful Wizard of Oz',
        authors: ' L. Frank Baum',
        description: 'Hailed as “America’s greatest and best-loved homegrown fairytale” by the Library of Congress, ' +
            'L. Frank Baum’s classic story has been enjoyed by generations of young readers since its publication in 1900. ' +
            'One of the most-read children’s books, ' +
            'it is a staple of American literature and the inspiration for the beloved 1939 Academy Award-winning movie ' +
            '(widely acclaimed as one of the greatest films of all time), as well as stage plays and musicals.' +
            'When a tornado strikes the Kansas prairie, ' +
            'young orphan Dorothy Gale and her little dog Toto are blown away to Oz, ' +
            'a magical place filled with witches, munchkins, winged monkeys, and other unusual inhabitants. ' +
            'Lost and afraid, all Dorothy wants is to return to her Uncle Henry and Auntie Em.' +
            ' But to do so, the Good Witch of the North tells her, ' +
            'she must follow the Yellow Brick Road that leads to the Emerald City. ' +
            'There, she will find the fearsome Wizard of Oz who can help her find her way home. ',
        pages: '256',
        cover: 'hardcover',
        language: 'English',
        picture: 'https://firebasestorage.googleapis.com/v0/b/book-store-e9483.appspot.com/o/books%2Ffiction%2Fclassic%2F91NSfg8bqvL.jpg?alt=media&token=a75ab200-94f3-4c07-b547-d3b5f9d132d7',
        price: '24,72$'
    },
];

const horrors = [
    {
        id: '00025',
        category: 'Horror',
        bookName: 'It',
        authors: 'Stephen King',
        description: 'Welcome to Derry, Maine. It’s a small city, a place as hauntingly familiar as your own hometown. ' +
            'Only in Derry the haunting is real.' +
            'They were seven teenagers when they first stumbled upon the horror. ' +
            'Now they are grown-up men and women who have gone out into the big world to gain success and happiness.' +
            ' But the promise they made twenty-eight years ago calls them reunite in the same place where, as teenagers,' +
            ' they battled an evil creature that preyed on the city’s children.' +
            ' Now, children are being murdered again and their repressed memories' +
            ' of that terrifying summer return as they prepare to once again battle the monster lurking in Derry’s sewers.' +
            'Readers of Stephen King know that Derry, Maine, is a place with a deep, dark hold on the author. ' +
            'It reappears in many of his books, including Bag of Bones, Hearts in Atlantis, and 11/22/63. But it all starts with It.',
        pages: '1184',
        cover: 'paperback',
        language: 'English',
        picture: 'https://firebasestorage.googleapis.com/v0/b/book-store-e9483.appspot.com/o/books%2Ffiction%2Fhorrors%2F518ydWjyq6L.jpg?alt=media&token=cbde2b27-55b3-43a3-863c-43874c7dafe4',
        price: '23,51$'
    },
    {
        id: '00026',
        category: 'Horror',
        bookName: 'Doctor Sleep',
        authors: 'Stephen King',
        description: 'Years ago, the haunting of the Overlook Hotel nearly broke young Dan Torrance’s sanity,' +
            ' as his paranormal gift known as “the shining” opened a door straight into hell. ' +
            'And even though Dan is all grown up, ' +
            'the ghosts of the Overlook—and his father’s legacy of alcoholism ' +
            'and violence—kept him drifting aimlessly for most of his life.' +
            ' Now, Dan has finally found some order in the chaos by working in a local hospice, ' +
            'earning the nickname “Doctor Sleep” by secretly using his special abilities' +
            ' to comfort the dying and prepare them for the afterlife.' +
            ' But when he unexpectedly meets twelve-year-old Abra Stone—who possesses ' +
            'an even more powerful manifestation of the shining—the two find their lives in' +
            ' sudden jeopardy at the hands of the ageless and murderous nomadic tribe known as the True Knot,' +
            ' reigniting Dan’s own demons and summoning him to battle for this young girl’s soul and survival...',
        pages: '584',
        cover: 'paperback',
        language: 'English',
        picture: 'https://firebasestorage.googleapis.com/v0/b/book-store-e9483.appspot.com/o/books%2Ffiction%2Fhorrors%2F1982131802.01._SCLZZZZZZZ_SX500_.jpg?alt=media&token=e4ce370d-fb51-4ec6-81a9-1f9ef5bff84a',
        price: '14,38$'
    },
    {
        id: '00027',
        category: 'Horror',
        bookName: 'The Shining',
        authors: 'Stephen King',
        description: 'Jack Torrance’s new job at the Overlook Hotel is the perfect chance for a fresh start. ' +
            'As the off-season caretaker at the atmospheric old hotel, he’ll have plenty of time ' +
            'to spend reconnecting with his family and working on his writing. ' +
            'But as the harsh winter weather sets in, the idyllic location feels ever more remote... ' +
            'and more sinister. And the only one to notice the strange and terrible forces ' +
            'gathering around the Overlook is Danny Torrance, a uniquely gifted five-year-old.',
        pages: '688',
        cover: 'hardcover',
        language: 'English',
        picture: 'https://firebasestorage.googleapis.com/v0/b/book-store-e9483.appspot.com/o/books%2Ffiction%2Fhorrors%2F81k5sx8YOhL.jpg?alt=media&token=f3ad06e9-be95-4e3f-ba77-7c4568b4e910',
        price: '10,73$'
    },
    {
        id: '00028',
        category: 'Horror',
        bookName: 'Devoted',
        authors: 'Dean Koontz',
        description: 'Woody Bookman hasn’t spoken a word in his eleven years of life.' +
            ' Not when his father died in a freak accident. Not when his mother, Megan, ' +
            'tells him she loves him. For Megan, keeping her boy safe and happy is what matters. ' +
            'But Woody believes a monstrous evil was behind his father’s death and now threatens him and his mother.' +
            ' And he’s not alone in his thoughts. An ally unknown to him is listening.' +
            'A uniquely gifted dog with a heart as golden as his breed, Kipp is devoted beyond reason to people.' +
            ' When he hears the boy who communicates like he does, without speaking, ' +
            'Kipp knows he needs to find him before it’s too late.' +
            'Woody’s fearful suspicions are taking shape. A man driven by a malicious evil has set a depraved plan into motion. ' +
            'And he’s coming after Woody and his mother. The reasons are primal. His powers are growing.' +
            ' And he’s not alone. Only a force greater than evil can stop what’s coming next.',
        pages: '380',
        cover: 'hardcover',
        language: 'English',
        picture: 'https://firebasestorage.googleapis.com/v0/b/book-store-e9483.appspot.com/o/books%2Ffiction%2Fhorrors%2F81rTDFiANLL.jpg?alt=media&token=28e1b25f-52db-4eb1-833e-d1ae237e75ae',
        price: '18,99$'
    },
    {
        id: '00029',
        category: 'Horror',
        bookName: 'The Sentence',
        authors: 'Louise Erdrich',
        description: 'Louise Erdrich\'s latest novel, The Sentence, asks what we owe to the living, ' +
            'the dead, to the reader and to the book.' +
            ' A small independent bookstore in Minneapolis is haunted from November 2019 to November 2020' +
            ' by the store\'s most annoying customer. Flora dies on All Souls\' Day, but she simply won\'t leave the store. ' +
            'Tookie, who has landed a job selling books after years of incarceration that she survived ' +
            'by reading "with murderous attention," must solve the mystery of this haunting while' +
            ' at the same time trying to understand all that occurs in Minneapolis during a year' +
            ' of grief, astonishment, isolation, and furious reckoning.' +
            'The Sentence begins on All Souls\' Day 2019 and ends on All Souls\' Day 2020. ' +
            'Its mystery and proliferating ghost stories during this one year propel a narrative' +
            ' as rich, emotional, and profound as anything Louise Erdrich has written. ',
        pages: '400',
        cover: 'hardcover',
        language: 'English',
        picture: 'https://firebasestorage.googleapis.com/v0/b/book-store-e9483.appspot.com/o/books%2Ffiction%2Fhorrors%2FB08TWYG991.01._SCLZZZZZZZ_SX500_.jpg?alt=media&token=7e0df938-89ee-4588-825e-9b7a869a6b6b',
        price: '22,99$'
    },
];

const programming = [
    {
        id: '00018',
        category: 'Programming',
        bookName: 'JavaScript: The Definitive Guide: Master the World\'s Most-Used Programming Language',
        authors: 'David Flanagan',
        description: 'JavaScript is the programming language of the web and is used by more ' +
            'software developers today than any other programming language. ' +
            'For nearly 25 years this best seller has been the go-to guide for JavaScript programmers.' +
            ' The seventh edition is fully updated to cover the 2020 version of JavaScript, ' +
            'and new chapters cover classes, modules, iterators, generators, Promises, async/await, and metaprogramming. ' +
            'You’ll find illuminating and engaging example code throughout.' +
            'This book is for programmers who want to learn JavaScript and for web developers' +
            ' who want to take their understanding and mastery to the next level.' +
            ' It begins by explaining the JavaScript language itself, in detail, from the bottom up. ' +
            'It then builds on that foundation to cover the web platform and Node.js.',
        pages: '706',
        cover: 'paperback',
        language: 'English',
        picture: 'https://firebasestorage.googleapis.com/v0/b/book-store-e9483.appspot.com/o/books%2FTextbooks%2Fprogramming%2F51HbNW6RzhL._SX375_BO1%2C204%2C203%2C200_.jpg?alt=media&token=69a1967e-f57c-42f3-84b2-90d145c5e808',
        price: '50,99$'
    },
    {
        id: '00019',
        category: 'Programming',
        bookName: 'Programming TypeScript: Making Your JavaScript Applications Scale ',
        authors: 'Boris Cherny',
        description: 'Any programmer working with a dynamically typed language will tell you ' +
            'how hard it is to scale to more lines of code and more engineers.' +
            ' That’s why Facebook, Google, and Microsoft invented gradual' +
            ' static type layers for their dynamically typed JavaScript and Python code. ' +
            'This practical book shows you how one such type layer,' +
            ' TypeScript, is unique among them: it makes programming fun with its powerful static type system.' +
            'If you’re a programmer with intermediate JavaScript experience, ' +
            'author Boris Cherny will teach you how to master the TypeScript language. ' +
            'You’ll understand how TypeScript can help you eliminate bugs in your code' +
            ' and enable you to scale your code across more engineers than you could before.',
        pages: '324',
        cover: 'paperback',
        language: 'English',
        picture: 'https://firebasestorage.googleapis.com/v0/b/book-store-e9483.appspot.com/o/books%2FTextbooks%2Fprogramming%2F51csAp-ykgL._SX379_BO1%2C204%2C203%2C200_.jpg?alt=media&token=af4741fa-94a9-4652-92bb-2f656ce94a2e',
        price: '34,80$'
    },
    {
        id: '00020',
        category: 'Programming',
        bookName: 'Learning React: Modern Patterns for Developing React Apps',
        authors: 'Alex Banks, Eve Porcello',
        description: 'If you want to learn how to build efficient React applications, this is your book. ' +
            'Ideal for web developers and software engineers who understand ' +
            'how JavaScript, CSS, and HTML work in the browser, ' +
            'this updated edition provides best practices and patterns for writing modern React code.' +
            ' No prior knowledge of React or functional JavaScript is necessary.' +
            'With their learning road map, authors Alex Banks and Eve Porcello ' +
            'show you how to create UIs that can deftly display changes without ' +
            'page reloads on large-scale, data-driven websites. ' +
            'You’ll also discover how to work with functional programming and the latest ECMAScript features. ' +
            'Once you learn how to build React components with this hands-on guide,' +
            ' you’ll understand just how useful React can be in your organization.',
        pages: '310',
        cover: 'hardcover',
        language: 'English',
        picture: 'https://firebasestorage.googleapis.com/v0/b/book-store-e9483.appspot.com/o/books%2FTextbooks%2Fprogramming%2F1492051721.01._SCLZZZZZZZ_SX500_.jpg?alt=media&token=8834aa0a-d0c7-4bb4-bb8b-68a1a4d5ce4a',
        price: '27,99$'
    },
    {
        id: '00021',
        category: 'Programming',
        bookName: 'Modern JavaScript for the Impatient',
        authors: 'Cay Horstmann ',
        description: 'Exploit the Power of Modern JavaScript and Avoid the Pitfalls' +
            'JavaScript was originally designed for small-scale programming in web browsers, ' +
            'but modern JavaScript is radically different. Nowadays, JavaScript programmers actively embrace functional, ' +
            'object-oriented, and asynchronous programming, while deprecating error-prone concepts from the past.' +
            ' Modern JavaScript for the Impatient is a complete yet concise guide to JavaScript E6 and beyond. ' +
            'Rather than first requiring you to learn and transition from older versions,' +
            ' it helps you quickly get productive with today’s far' +
            ' more powerful versions and rapidly move from languages such as Java, C#, C, or C++.',
        pages: '288',
        cover: 'hardcover',
        language: 'English',
        picture: 'https://firebasestorage.googleapis.com/v0/b/book-store-e9483.appspot.com/o/books%2FTextbooks%2Fprogramming%2FB08F5HFWBH.01._SCLZZZZZZZ_SX500_.jpg?alt=media&token=08a8778d-73f4-4f0a-ac10-347f62d3b71f',
        price: '39,19$'
    },
    {
        id: '00022',
        category: 'Programming',
        bookName: 'JavaScript Cookbook: Programming the Web',
        authors: 'Adam D. Scott, Matthew MacDonald, Shelley Powers',
        description: 'Why reinvent the wheel every time you run into a problem with JavaScript? ' +
            'This cookbook is chock-full of code recipes for common programming tasks,' +
            ' along with techniques for building apps that work in any browser. ' +
            'You\'ll get adaptable code samples that you can add to almost ' +
            'any project--and you\'ll learn more about JavaScript in the process.',
        pages: '538',
        cover: 'paperback',
        language: 'English',
        picture: 'https://firebasestorage.googleapis.com/v0/b/book-store-e9483.appspot.com/o/books%2FTextbooks%2Fprogramming%2F1492055751.01._SCLZZZZZZZ_SX500_.jpg?alt=media&token=6f102c7d-366e-4474-94fb-b898c86134e2',
        price: '51,71$'
    },
    {
        id: '00023',
        category: 'Programming',
        bookName: 'Web Development with Node and Express: Leveraging the JavaScript Stack',
        authors: ' Ethan Brown',
        description: 'Build dynamic web applications with Express, a key component of the Node/JavaScript development stack. ' +
            'In this updated edition, author Ethan Brown teaches you Express fundamentals ' +
            'by walking you through the development of an example application.' +
            ' This hands-on guide covers everything from server-side rendering ' +
            'to API development suitable for usein single-page apps (SPAs).' +
            'Express strikes a balance between a robust framework and no framework at all,' +
            ' allowing you a free hand in your architecture choices. Frontend and backend engineers ' +
            'familiar with JavaScript will also learn best practices for building multipage and hybrid web apps with Express. ' +
            'Pick up this book anddiscover new ways to look at web development.',
        pages: '346',
        cover: 'paperback',
        language: 'English',
        picture: 'https://firebasestorage.googleapis.com/v0/b/book-store-e9483.appspot.com/o/books%2FTextbooks%2Fprogramming%2F1492053511.01._SCLZZZZZZZ_SX500_.jpg?alt=media&token=a4642e2e-6694-4619-9347-698ee5dac2d1',
        price: '33,49$'
    },
    {
        id: '00024',
        category: 'Programming',
        bookName: 'MongoDB: The Definitive Guide: Powerful and Scalable Data Storage',
        authors: 'Shannon Bradshaw, Eoin Brazil, Kristina Chodorow ',
        description: 'Manage your data with a system designed to support modern application development. Updated for MongoDB 4.2,' +
            ' the third edition of this authoritative and accessible guide ' +
            'shows you the advantages of using document-oriented databases. ' +
            'You’ll learn how this secure, high-performance system enables flexible data models,' +
            ' high availability, and horizontal scalability.' +
            'Authors Shannon Bradshaw, Eoin Brazil, and Kristina Chodorow provide guidance for database developers, ' +
            'advanced configuration for system administrators, and use cases for a variety of projects. ' +
            'NoSQL newcomers and experienced MongoDB users will find updates on querying,' +
            ' indexing, aggregation, transactions, replica sets, ops management, sharding' +
            ' and data administration, durability, monitoring, and security.',
        pages: '514',
        cover: 'hardcover',
        language: 'English',
        picture: 'https://firebasestorage.googleapis.com/v0/b/book-store-e9483.appspot.com/o/books%2FTextbooks%2Fprogramming%2F1491954469.01._SCLZZZZZZZ_SX500_.jpg?alt=media&token=3a16745b-0f58-4d31-94f9-cc26f596ac87',
        price: '40,49$'
    }
];

const cookbooks = [
    {
        id: '00030',
        category: 'Cookbook',
        bookName: 'The Complete Cookbook for Young Chefs: 100+ Recipes that You\'ll Love to Cook and Eat ',
        authors: 'America\'s Test Kitchen Kids',
        description: 'Want to bake the most-awesome-ever cupcakes? Or surprise your family with breakfast tacos on Sunday morning? ' +
            'Looking for a quick snack after school? Or maybe something special for a sleepover? ' +
            'It\'s all here. Learn to cook like a pro―it\'s easier than you think.' +
            'For the first time ever, America\'s Test Kitchen is bringing their scientific know-how, ' +
            'rigorous testing, and hands-on learning to KIDS in the kitchen!',
        pages: '208',
        cover: 'hardcover',
        language: 'English',
        picture: 'https://firebasestorage.googleapis.com/v0/b/book-store-e9483.appspot.com/o/books%2FHome%20%26%20Hobby%2FCookbooks%2FA1A84JD9wGL.jpg?alt=media&token=61ba1f63-93bc-418d-9260-b72b0b6f0f29',
        price: '4,88$'
    },
    {
        id: '00031',
        category: 'Cookbook',
        bookName: 'Olive & Thyme: Everyday Meals Made Extraordinary',
        authors: 'Melina Davies',
        description: 'Melina Davies treats everyone like family.' +
            ' Stop by her house and she\'ll whip you up a fluffy, buttery vegetable quiche with fresh greens in a homemade dressing. ' +
            'Visit her wildly popular L.A. restaurant and marketplace, Olive & Thyme,' +
            ' and she\'ll come by your table to see how you\'re enjoying your avocado and burrata toast. ' +
            'Ask her for tips on hosting the in-laws for dinner, ' +
            'and she\'ll walk you through her juicy roast chicken with thyme and which wine to serve and music to play.' +
            ' A consummate host and lauded chef, Davies brings her love of togetherness to Olive & Thyme, where the vibe is relaxed ' +
            'and warm and the food is fresh and delicious. Davies brings that same passion to her book, ' +
            'Olive & Thyme, which shares her most popular recipes (drawn from French, Californian, Italian, ' +
            'and Middle Eastern influences), along with her breezy, practical entertaining advice. ' +
            'With stunning photos by Ann Elliott Cutting and Ashley Barrett' +
            ' and a foreword by the four-time James Beard winner Nancy Silverton ' +
            '(author of Chi Spacca and The Mozza Cookbook), ' +
            'Olive & Thyme is the ingredient every kitchen needs―a fun, ' +
            'inspirational guide to enjoying what matters most in life: family, friends, good food, and music.',
        pages: '240',
        cover: 'hardcover',
        language: 'English',
        picture: 'https://firebasestorage.googleapis.com/v0/b/book-store-e9483.appspot.com/o/books%2FHome%20%26%20Hobby%2FCookbooks%2F91jUn9Dr6BL.jpg?alt=media&token=0d0efbf6-80bf-49d6-a03d-06b4151dbc08',
        price: '28,21$'
    },
    {
        id: '00032',
        category: 'Cookbook',
        bookName: 'Vegan, at Times: 120+ Recipes for Every Day or Every So Often',
        authors: 'Jessica Seinfeld',
        description: 'Jessica Seinfeld isn’t a committed vegan. Her husband and her children aren’t, either. ' +
            'Instead of convincing you to become vegan or shaming you for eating meat, ' +
            'she simply wants to show you how easy it is to be a vegan, at times, by cooking flavorful,' +
            'affordable, and robust plant-based meals whenever you want—whether that’s every day, once a week, or just once in a while.' +
            'With her reassuring and accessible style, Jessica shows you step-by-step ' +
            'recipes for sweet and savory breakfasts, comforting and healthy meals for lunch and dinner,' +
            ' delicious snacks that can be whipped together quickly, and essential sauces and dressings—all tailored to home cooks.' +
            ' She also demonstrates how to create a basic vegan pantry filled with the essential items to keep in stock,' +
            ' explains what kitchen equipment you’ll want to have on hand, gives sample menus for combining recipes, ' +
            'and tells relatable stories from her adventures in vegan cooking with her family.' +
            'Simple, affordable, and comforting, and infused with Jessica’s “encouraging attitude” ' +
            '(Publishers Weekly), Vegan, at Times is the perfect gateway to a healthier and more balanced you.',
        pages: '256',
        cover: 'hardcover',
        language: 'English',
        picture: 'https://firebasestorage.googleapis.com/v0/b/book-store-e9483.appspot.com/o/books%2FHome%20%26%20Hobby%2FCookbooks%2F81H%2B4Y9vKlS.jpg?alt=media&token=f0d96064-632e-48bb-a59c-fe60d5babd02',
        price: '20,99$'
    },
];

const fairyTales = [
    {
        id: '00033',
        category: 'Children\'s books',
        bookName: 'Harry Potter and the Chamber of Secrets',
        authors: 'J. K. Rowling',
        description: 'A stunning new edition of J.K. Rowling\'s Harry Potter and the Chamber of Secrets, ' +
            'with beautiful full color illustrations and eight interactive paper craft elements featuring the Whomping Willow, ' +
            'the Weasleys\' Burrow, and more. A gift to be treasured by Harry Potter fans and book lovers of all ages!' +
            'Prepare to be dazzled by this new edition of J.K. Rowling\'s Harry Potter and the Chamber of Secrets,' +
            'designed and illustrated by MinaLima. With over 150 full-color illustrations and eight exclusive,' +
            ' interactive paper craft elements, readers will travel via the Floo Network, watch out for the Whomping Willow, ' +
            'reveal the spiral staircase to Dumbledore\'s office, pull Mandrakes from their pots, and more.' +
            'This keepsake edition is the perfect gift for Harry Potter fans of all ages, ' +
            'a beautiful addition to any collector\'s bookshelf, ' +
            'and an enchanting way to introduce this beloved series to a new generation of readers.',
        pages: '400',
        cover: 'hardcover',
        language: 'English',
        picture: 'https://firebasestorage.googleapis.com/v0/b/book-store-e9483.appspot.com/o/books%2FChildren\'s%20books%2F71rCcl7ZEKL.jpg?alt=media&token=f5bd4c9f-8025-4b41-9461-42ca414d6d07',
        price: '22,79$'
    },
    {
        id: '00034',
        category: 'Children\'s books',
        bookName: 'The Christmas Pig',
        authors: 'J. K. Rowling',
        description: 'One boy and his toy are about to change everything...' +
            'Jack loves his childhood toy, Dur Pig. DP has always been there for him, ' +
            'through good and bad. Until one Christmas Eve something terrible happens -- DP is lost.' +
            ' But Christmas Eve is a night for miracles and lost causes, a night when all things can come to life... even toys.' +
            ' And Jack’s newest toy -- the Christmas Pig (DP’s replacement) -- has a daring plan:' +
            ' Together they’ll embark on a magical journey to seek something lost, and to save the best friend Jack has ever known...',
        pages: '288',
        cover: 'paperback',
        language: 'English',
        picture: 'https://firebasestorage.googleapis.com/v0/b/book-store-e9483.appspot.com/o/books%2FChildren\'s%20books%2F71bROORU%2BnL.jpg?alt=media&token=ba1e3022-87ca-4742-95de-96a885633a44',
        price: '14,99$'
    },
    {
        id: '00035',
        category: 'Children\'s books',
        bookName: 'How the Grinch Stole Christmas! ',
        authors: 'Dr. Seuss',
        description: 'Every Who down in Who-ville liked Christmas a lot . . . but the Grinch, who lived just north of Who-ville, did NOT!' +
            'Not since "\'Twas the night before Christmas" has the beginning of a Christmas tale been so instantly recognizable. ' +
            'This heartwarming story about the effects of the Christmas spirit will grow even the coldest and smallest of hearts.' +
            ' Like mistletoe, candy canes, and caroling, the Grinch is a mainstay of the holidays, ' +
            'and his story is the perfect gift for readers young and old.',
        pages: '64',
        cover: 'hardcover',
        language: 'English',
        picture: 'https://firebasestorage.googleapis.com/v0/b/book-store-e9483.appspot.com/o/books%2FChildren\'s%20books%2F91Q9eneR7BL.jpg?alt=media&token=99a4fcbb-1a83-4c3d-b45c-583503f0fab8',
        price: '3,18$'
    },
    {
        id: '00036',
        category: 'Children\'s books',
        bookName: 'Disney Animated Classic: Beauty and the Beast',
        authors: 'Editors of Studio Fun International',
        description: 'Relive the Disney animated classic, Beauty and the Beast, in this beautiful, illustrated storybook.' +
            'This fresh retelling of Beauty and the Beast follows the story of the classic animated film and includes paintings, ' +
            'sketches, and concept art from the original Disney Studio artists. ' +
            'See how Disney\'s artists interpreted the story through different styles and mediums, ' +
            'and follow Belle on her journey of breaking a curse that turned a prince into a Beast.' +
            ' A foil-stamped cover and ribbon marker make this a must-have for the movie\'s fans.',
        pages: '68',
        cover: 'hardcover',
        language: 'English',
        picture: 'https://firebasestorage.googleapis.com/v0/b/book-store-e9483.appspot.com/o/books%2FChildren\'s%20books%2F81mqDzMgfIS.jpg?alt=media&token=8347d277-55f6-4977-915d-994cb5717b37',
        price: '12,99$'
    },
];

const marvel = [
    {
        id: '00037',
        category: 'Marvel',
        bookName: 'Essential Iron Man, Vol. 1 (Marvel Essentials)',
        authors: 'Stan Lee ',
        description: 'Experience the armored Avenger\'s earliest adventures - ' +
            'including classic confrontations with arch-foes Crimson Dynamo, the Mandarin,' +
            ' and the Titanium Man. Guest-starring the X-Men, Captain America, and the Black Widow.',
        pages: '512',
        cover: 'paperback',
        language: 'English',
        picture: 'https://firebasestorage.googleapis.com/v0/b/book-store-e9483.appspot.com/o/books%2FComics%2FMarvel%2F81dVJAgNB0L.jpg?alt=media&token=33b57e63-2ba2-4f17-bf7b-9acf24a160df',
        price: '8,48$'
    },
    {
        id: '00038',
        category: 'Marvel',
        bookName: 'Essential Doctor Strange',
        authors: 'Stan Lee ',
        description: 'Stephen Strange is Doctor Strange. ' +
            'But he is no doctor, and least not the kind that would initially come to mind. ' +
            'He is the Master of the Mystic Arts, a sorcerer supreme, ' +
            'a white knight who wields black magic against blacker villains still. ' +
            'Strange is mankind\'s only hope against the dark otherworldly forces that conspire to destroy the conscious world' +
            ' - forces such as Baron Mordo, the Dread Dormammu, Nightmare, Aggamon, ' +
            'The House of Shadows, Loki, the Mindless Ones and more. ' +
            'Collected here in glorious black and white is the run ' +
            'of Stan Lee and Steve Ditko\'s amazing run of Strange Tales #110, 111, & 114-168 - ' +
            'Strange\'s first and greatest adventures.',
        pages: '608',
        cover: 'paperback',
        language: 'English',
        picture: 'https://firebasestorage.googleapis.com/v0/b/book-store-e9483.appspot.com/o/books%2FComics%2FMarvel%2F5154EYS4QNL.jpg?alt=media&token=4ac0a800-0294-42ba-84a6-6fa41e3de419',
        price: '17,83$'
    },
    {
        id: '00039',
        category: 'Marvel',
        bookName: 'Thor Masterworks Vol. 3 (Journey Into Mystery (1952-1966)) ',
        authors: 'Stan Lee ',
        description: 'The creative team that sparked the Marvel revolution, ' +
            'Stan Lee and Jack Kirby, shows you how it\'s done with classic stories including ' +
            'an earth-shaking fight to end all fights between Thor and the Incredible Hulk, ' +
            'the return of the Grey Gargoyle, the entrance of the Absorbing Man,' +
            ' Thor and Loki\'s exile to the danger and desolation of Skornheim, ' +
            'the first appearance of the unstoppable Destroyer, and the introduction of Hercules ' +
            'and the Greek gods to the Marvel Universe! And it\'s all backed by the fan-favorite "Tales of Asgard"' +
            ' featuring the origins of Marvel\'s Norse pantheon of heroes, villains, giants and mystic lands.',
        pages: '245',
        cover: 'paperback',
        language: 'English',
        picture: 'https://firebasestorage.googleapis.com/v0/b/book-store-e9483.appspot.com/o/books%2FComics%2FMarvel%2FB073PH6W19.01._SCLZZZZZZZ_SX500_.jpg?alt=media&token=6102a719-cd3b-429f-8cce-91f8ebc25221',
        price: '16,99$'
    }];

const dc = [
    {
        id: '00040',
        category: 'DC',
        bookName: 'Injustice: Gods Among Us Year One: The Complete Collection',
        authors: 'Tom Taylor ',
        description: 'Forget everything you think you know about the DC Universe.' +
            ' Tradition is tossed aside and chaos erupts in Injustice: ' +
            'Gods Among Us Year One—The Complete Edition, inspired by the video game phenomenon!' +
            ' This graphic novel edition collects the initial year of the best-selling series in its entirety for the first time!' +
            'Superman is Earth’s greatest hero. ' +
            'But when the Man of Steel can’t protect the thing he holds most dear,' +
            ' he decides to stop trying to save the world—and start ruling it.' +
            'Now, the Last Son of Krypton is enforcing peace on Earth by any means necessary.' +
            ' Only one man stands between Superman and absolute power: Batman.' +
            ' And the Dark Knight will use any method at his disposal' +
            ' to stop his former friend from reshaping the world in his shattered image.' +
            'Written by Tom Taylor (Earth 2) with art by Jheremy Raapack (Resident Evil), ' +
            'Mike S. Miller (A Game of Thrones) and more, this thrilling graphic novel collects Injustice: ' +
            'Gods Among Us digital chapters 1-36 and in single magazine form as Injustice: Gods Among Us 1-12 ' +
            'and Injustice: Gods Among Us Annual #1.',
        pages: '424',
        cover: 'paperback',
        language: 'English',
        picture: 'https://firebasestorage.googleapis.com/v0/b/book-store-e9483.appspot.com/o/books%2FComics%2FDC%2FA1K9nERtv%2BL.jpg?alt=media&token=c61f7a1c-0f8d-44dc-8a89-693bc6ef95f0',
        price: '11,99$'
    },
    {
        id: '00041',
        category: 'DC',
        bookName: 'Batman: The Long Halloween',
        authors: 'Jeph Loeb ',
        description: 'Christmas. St. Patrick\'s Day. Easter. ' +
            'As the calendar\'s days stack up, so do the bodies littered in the streets of Gotham City.' +
            ' A murderer is loose, killing only on holidays. The only man that can stop this fiend? The Dark Knight. ' +
            'In a mystery taking place during Batman\'s early days of crime fighting,' +
            ' Batman: The Long Halloween is one of the greatest Dark Knight stories ever told.' +
            'Working with District Attorney Harvey Dent and Lieutenant James Gordon, ' +
            'Batman races against the calendar as he tries to discover who Holiday is before he claims his next victim each month.' +
            ' A mystery that has the reader continually guessing the identity of the killer, ' +
            'this story also ties into the events that transform Harvey Dent into Batman\'s deadly enemy, Two-Face.' +
            'The magnificent creative team of Jeph Loeb and Tim Sale reach their apex in Batman: The Long Halloween. ' +
            'This edition includes original 13-issue series as well as four additional story pages cut from the original series,' +
            ' which are presented fully colored and restored to their place in the story. ' +
            ' Also featured are sketches and an introduction by the director' +
            ' and writer of The Dark Knight Rises, Christopher Nolan and David Goyer. ',
        pages: '384',
        cover: 'paperback',
        language: 'English',
        picture: 'https://firebasestorage.googleapis.com/v0/b/book-store-e9483.appspot.com/o/books%2FComics%2FDC%2F81yXMRPKqYL.jpg?alt=media&token=e5c9e194-0241-4daf-9f46-b98863e05de0',
        price: '14,25$'
    },
    {
        id: '00042',
        category: 'DC',
        bookName: 'Batman: Last Knight on Earth',
        authors: 'Scott Snyder',
        description: 'Twenty years in the future, ' +
            'Bruce Wayne wakes up in Arkham Asylum. Young. Sane. And...he\'s never been Batman.' +
            ' To piece together the mystery of his past, the Dark Knight embarks on a sprawling quest through this unknown world,' +
            ' meeting futuristic versions of former friends and enemies, including a grisly traveling companion--the Joker\'s head. ' +
            'Somehow still alive, Joker\'s decapitated head becomes Batman\'s' +
            ' ghoulish guide through the landscape of the devastated DC Universe. ' +
            'But to unravel the cause of this terrible future, he\'ll need to track down the unspeakable' +
            ' force that destroyed the world he once knew. This could be the last Batman story ever told... ' +
            'Collects Batman: Last Knight on Earth #1-3',
        pages: '184',
        cover: 'hardcover',
        language: 'English',
        picture: 'https://firebasestorage.googleapis.com/v0/b/book-store-e9483.appspot.com/o/books%2FComics%2FDC%2F81mKZbGImrL.jpg?alt=media&token=b4b52a6b-48b0-4a75-8e4a-51be1cea220d',
        price: '15,63$'
    }
];

function writeUserData(path, book) {
    const db = getDatabase();
    set(ref(db, path), {
        id: book.id,
        category: book.category,
        bookName: book.bookName,
        authors: book.authors,
        description: book.description,
        pages: book.pages,
        cover: book.cover,
        language: book.language,
        picture: book.picture,
        price: book.price,
    });
}

// classic.forEach(elem => {
//     writeUserData(`fiction/classic/${elem.id}`, elem);
// });