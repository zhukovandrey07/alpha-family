// ========================================
// ALPHAFAMILY PRO - PROFESSIONAL EDITION
// ========================================

// Translations
const TRANS = {
    ru: {
        subtitle: "Учим буквы и цифры весело!",
        jun_t: "Малыши", jun_d: "до 6 лет", sen_t: "Старшие", sen_d: "до 10 лет",
        sel_sub: "Выбери предмет:", l_let: "Буквы", l_math: "Математика", l_syllables: "Слоги",
        map: "Карта уровней", dict: "Словарь", hard: "Сложно",
        p_let: "Буква", p_num: "Цифра", paint: "Раскрась!", pop: "Лопай!",
        write: "Напиши слово:", task: "Задания", table: "Таблица", choose: "Выбери цифру",
        yes: [
            "Молодец!",
            "Отлично!",
            "Супер!",
            "Великолепно!",
            "Ты умница!",
            "У тебя здорово получается!",
            "Невероятно!",
            "Потрясающе!",
            "Ты справился!",
            "Какой ты способный!",
            "Замечательно!",
            "Я горжусь тобой!",
            "Ты настоящий герой!",
            "Продолжай в том же духе!",
            "Ты становишься всё лучше!"
        ],
        no: [
            "Попробуй ещё раз, у тебя обязательно получится!",
            "Почти получилось! Давай ещё разок!",
            "Не переживай, попробуем снова!",
            "Всё хорошо, давай попробуем ещё!",
            "Ты молодец, что стараешься! Попробуй снова!",
            "В следующий раз точно получится!",
            "Ничего страшного! Давай вместе попробуем!",
            "Ошибаться — это нормально! Попробуй ещё!",
            "Не сдавайся, у тебя всё получится!",
            "Я верю в тебя! Попробуй ещё раз!"
        ], find: "Найди слова", find_p: "Найди:",
        syl_basic: "По слогам", syl_advanced: "Собери слово", next_word: "Следующее слово", reset: "Сброс",
        select_mode: "Выбери режим:", click_syllable: "Нажми на слог"
    },
    en: {
        subtitle: "Learn letters and numbers with fun!",
        jun_t: "Junior", jun_d: "up to 6", sen_t: "Senior", sen_d: "up to 10",
        sel_sub: "Select Subject:", l_let: "Letters", l_math: "Math",
        map: "Level Map", dict: "Dictionary", hard: "Hard",
        p_let: "Letter", p_num: "Number", paint: "Paint it!", pop: "Pop it!",
        write: "Write word:", task: "Tasks", table: "Table", choose: "Choose number",
        yes: [
            "Good job!",
            "Excellent!",
            "Super!",
            "Amazing!",
            "You're so smart!",
            "You're doing great!",
            "Incredible!",
            "Fantastic!",
            "You did it!",
            "You're a star!",
            "Wonderful!",
            "I'm proud of you!",
            "You're awesome!",
            "Keep it up!",
            "You're getting better!"
        ],
        no: [
            "Try again, you can do it!",
            "Almost there! One more time!",
            "Don't worry, let's try again!",
            "It's okay, let's give it another go!",
            "Good effort! Try once more!",
            "You'll get it next time!",
            "No problem! Let's try together!",
            "Mistakes help us learn! Try again!",
            "Don't give up, you've got this!",
            "I believe in you! Try again!"
        ], find: "Find Words", find_p: "Find:"
    },
    he: {
        subtitle: "לומדים אותיות ומספרים בכיף!",
        jun_t: "קטנטנים", jun_d: "עד גיל 6", sen_t: "גדולים", sen_d: "עד גיל 10",
        sel_sub: "בחר נושא:", l_let: "אותיות", l_math: "חשבון",
        map: "מפת שלבים", dict: "מילון", hard: "קשה",
        p_let: "האות", p_num: "המספר", paint: "צייר!", pop: "פוצץ!",
        write: "כתוב מילה:", task: "תרגילים", table: "לוח הכפל", choose: "בחר מספר",
        yes: [
            "כל הכבוד!",
            "מצוין!",
            "סופר!",
            "נהדר!",
            "אתה חכם!",
            "יוצא לך מעולה!",
            "מדהים!",
            "פנטסטי!",
            "הצלחת!",
            "אתה כוכב!",
            "נפלא!",
            "אני גאה בך!",
            "אתה מעולה!",
            "תמשיך ככה!",
            "אתה משתפר!"
        ],
        no: [
            "נסה שוב, אתה יכול!",
            "כמעט! עוד פעם אחת!",
            "לא נורא, בוא ננסה שוב!",
            "הכל בסדר, בוא ננסה עוד!",
            "מאמץ טוב! נסה שוב!",
            "בפעם הבאה תצליח!",
            "אין בעיה! בוא ננסה ביחד!",
            "טעויות עוזרות ללמוד! נסה שוב!",
            "אל תוותר, אתה מסוגל!",
            "אני מאמין בך! נסה שוב!"
        ], find: "מצא מילים", find_p: "מצא:"
    }
};

// Simplified DB - Full version will be in your final code
const DB = {
    ru: {
        letters: [
            { l: 'А', t: 'А', s: 'А', ops: [{ w: 'Арбуз', i: '🍉' }, { w: 'Автобус', i: '🚌' }, { w: 'Акула', i: '🦈' }] },
            { l: 'Б', t: 'Б', s: 'Бэ', ops: [{ w: 'Банан', i: '🍌' }, { w: 'Белка', i: '🐿️' }, { w: 'Бык', i: '🐂' }] },
            { l: 'В', t: 'В', s: 'Вэ', ops: [{ w: 'Волк', i: '🐺' }, { w: 'Ведро', i: '🪣' }, { w: 'Вода', i: '💧' }] },
            { l: 'Г', t: 'Г', s: 'Гэ', ops: [{ w: 'Гриб', i: '🍄' }, { w: 'Гусь', i: '🦆' }, { w: 'Гора', i: '⛰️' }] },
            { l: 'Д', t: 'Д', s: 'Дэ', ops: [{ w: 'Дом', i: '🏠' }, { w: 'Дерево', i: '🌳' }, { w: 'Дельфин', i: '🐬' }] },
            { l: 'Е', t: 'Е', s: 'Е', ops: [{ w: 'Енот', i: '🦝' }, { w: 'Ель', i: '🌲' }, { w: 'Еда', i: '🍽️' }] },
            { l: 'Ё', t: 'Ё', s: 'Ё', ops: [{ w: 'Ёжик', i: '🦔' }, { w: 'Ёлка', i: '🎄' }, { w: 'Ёрш', i: '🐟' }] },
            { l: 'Ж', t: 'Ж', s: 'Жэ', ops: [{ w: 'Жираф', i: '🦒' }, { w: 'Жук', i: '🪲' }, { w: 'Желудь', i: '🌰' }] },
            { l: 'З', t: 'З', s: 'Зэ', ops: [{ w: 'Заяц', i: '🐰' }, { w: 'Зонт', i: '☂️' }, { w: 'Замок', i: '🏰' }] },
            { l: 'И', t: 'И', s: 'И', ops: [{ w: 'Игла', i: '🪡' }, { w: 'Индюк', i: '🦃' }, { w: 'Игрушка', i: '🧸' }] },
            { l: 'Й', t: 'Й', s: 'Й краткое', ops: [{ w: 'Йогурт', i: '🥛' }, { w: 'Йод', i: '💊' }, { w: 'Йети', i: '👹' }] },
            { l: 'К', t: 'К', s: 'Ка', ops: [{ w: 'Кот', i: '🐱' }, { w: 'Книга', i: '📖' }, { w: 'Конфета', i: '🍬' }] },
            { l: 'Л', t: 'Л', s: 'Эль', ops: [{ w: 'Лиса', i: '🦊' }, { w: 'Лимон', i: '🍋' }, { w: 'Лошадь', i: '🐴' }] },
            { l: 'М', t: 'М', s: 'Эм', ops: [{ w: 'Медведь', i: '🐻' }, { w: 'Мяч', i: '⚽' }, { w: 'Мышь', i: '🐭' }] },
            { l: 'Н', t: 'Н', s: 'Эн', ops: [{ w: 'Носорог', i: '🦏' }, { w: 'Ножницы', i: '✂️' }, { w: 'Небо', i: '☁️' }] },
            { l: 'О', t: 'О', s: 'О', ops: [{ w: 'Обезьяна', i: '🐵' }, { w: 'Облако', i: '☁️' }, { w: 'Огонь', i: '🔥' }] },
            { l: 'П', t: 'П', s: 'Пэ', ops: [{ w: 'Пингвин', i: '🐧' }, { w: 'Пчела', i: '🐝' }, { w: 'Паук', i: '🕷️' }] },
            { l: 'Р', t: 'Р', s: 'Эр', ops: [{ w: 'Рыба', i: '🐟' }, { w: 'Ракета', i: '🚀' }, { w: 'Радуга', i: '🌈' }] },
            { l: 'С', t: 'С', s: 'Эс', ops: [{ w: 'Слон', i: '🐘' }, { w: 'Собака', i: '🐕' }, { w: 'Солнце', i: '☀️' }] },
            { l: 'Т', t: 'Т', s: 'Тэ', ops: [{ w: 'Тигр', i: '🐅' }, { w: 'Торт', i: '🎂' }, { w: 'Трактор', i: '🚜' }] },
            { l: 'У', t: 'У', s: 'У', ops: [{ w: 'Утка', i: '🦆' }, { w: 'Улитка', i: '🐌' }, { w: 'Улыбка', i: '😊' }] },
            { l: 'Ф', t: 'Ф', s: 'Эф', ops: [{ w: 'Фонарь', i: '🔦' }, { w: 'Флаг', i: '🚩' }, { w: 'Фрукты', i: '🍎' }] },
            { l: 'Х', t: 'Х', s: 'Ха', ops: [{ w: 'Хомяк', i: '🐹' }, { w: 'Хлеб', i: '🍞' }, { w: 'Художник', i: '🎨' }] },
            { l: 'Ц', t: 'Ц', s: 'Цэ', ops: [{ w: 'Цветок', i: '🌸' }, { w: 'Цыпленок', i: '🐤' }, { w: 'Царь', i: '👑' }] },
            { l: 'Ч', t: 'Ч', s: 'Че', ops: [{ w: 'Черепаха', i: '🐢' }, { w: 'Часы', i: '⏰' }, { w: 'Чашка', i: '☕' }] },
            { l: 'Ш', t: 'Ш', s: 'Ша', ops: [{ w: 'Шар', i: '🎈' }, { w: 'Шапка', i: '🧢' }, { w: 'Шоколад', i: '🍫' }] },
            { l: 'Щ', t: 'Щ', s: 'Ща', ops: [{ w: 'Щенок', i: '🐶' }, { w: 'Щетка', i: '🪥' }, { w: 'Щит', i: '🛡️' }] },
            { l: 'Ъ', t: 'Ъ', s: 'Твёрдый знак', ops: [{ w: 'Объект', i: '📦' }, { w: 'Съел', i: '🍽️' }, { w: 'Подъезд', i: '🏢' }] },
            { l: 'Ы', t: 'Ы', s: 'Ы', ops: [{ w: 'Рыба', i: '🐟' }, { w: 'Сыр', i: '🧀' }, { w: 'Мыло', i: '🧼' }] },
            { l: 'Ь', t: 'Ь', s: 'Мягкий знак', ops: [{ w: 'Медведь', i: '🐻' }, { w: 'Пять', i: '5️⃣' }, { w: 'Тюлень', i: '🦭' }] },
            { l: 'Э', t: 'Э', s: 'Э', ops: [{ w: 'Экран', i: '📺' }, { w: 'Эхо', i: '🔊' }, { w: 'Эму', i: '🦤' }] },
            { l: 'Ю', t: 'Ю', s: 'Ю', ops: [{ w: 'Юла', i: '🌀' }, { w: 'Юрта', i: '⛺' }, { w: 'Юбка', i: '👗' }] },
            { l: 'Я', t: 'Я', s: 'Я', ops: [{ w: 'Яблоко', i: '🍎' }, { w: 'Ящерица', i: '🦎' }, { w: 'Якорь', i: '⚓' }] }
        ],
        numbers: [
            { v: 1, t: 'Один', s: 'Один', w: 'Один', i: '🍎' },
            { v: 2, t: 'Два', s: 'Два', w: 'Два', i: '🍎🍎' },
            { v: 3, t: 'Три', s: 'Три', w: 'Три', i: '🍎🍎🍎' }
        ],
        syllableWords: [
            { word: 'ба-то́н', syllables: ['ба', 'то́н'], stressIndex: 1, emoji: '🥖' },
            { word: 'ба-на́н', syllables: ['ба', 'на́н'], stressIndex: 1, emoji: '🍌' },
            { word: 'ба́н-ка', syllables: ['ба́н', 'ка'], stressIndex: 0, emoji: '🏺' },
            { word: 'ка-ба́н', syllables: ['ка', 'ба́н'], stressIndex: 1, emoji: '🐗' },
            { word: 'со-ба́-ка', syllables: ['со', 'ба́', 'ка'], stressIndex: 1, emoji: '🐕' },
            { word: 'о́к-но', syllables: ['о́к', 'но'], stressIndex: 0, emoji: '🪟' },
            { word: 'ко́-ты', syllables: ['ко́', 'ты'], stressIndex: 0, emoji: '🐈' },
            { word: 'пу-шо́к', syllables: ['пу', 'шо́к'], stressIndex: 1, emoji: '🐾' },
            { word: 'ку-со́к', syllables: ['ку', 'со́к'], stressIndex: 1, emoji: '🍰' },
            { word: 'мы́ш-ка', syllables: ['мы́ш', 'ка'], stressIndex: 0, emoji: '🐭' },
            { word: 'ма́с-ка', syllables: ['ма́с', 'ка'], stressIndex: 0, emoji: '🎭' },
            { word: 'ка́ш-ка', syllables: ['ка́ш', 'ка'], stressIndex: 0, emoji: '🥣' },
            { word: 'ка́с-ка', syllables: ['ка́с', 'ка'], stressIndex: 0, emoji: '⛑️' },
            { word: 'шу́т-ка', syllables: ['шу́т', 'ка'], stressIndex: 0, emoji: '😄' },
            { word: 'ко-ле-со́', syllables: ['ко', 'ле', 'со́'], stressIndex: 2, emoji: '🎡' },
            { word: 'пу́ш-ка', syllables: ['пу́ш', 'ка'], stressIndex: 0, emoji: '💣' },
            { word: 'ме́-сто', syllables: ['ме́с', 'то'], stressIndex: 0, emoji: '📍' },
            { word: 'ке́п-ка', syllables: ['ке́п', 'ка'], stressIndex: 0, emoji: '🧢' },
            { word: 'бе́л-ка', syllables: ['бе́л', 'ка'], stressIndex: 0, emoji: '🐿️' },
            { word: 'ша́п-ка', syllables: ['ша́п', 'ка'], stressIndex: 0, emoji: '🧶' },
            { word: 'ка-ту́ш-ка', syllables: ['ка', 'ту́ш', 'ка'], stressIndex: 1, emoji: '🧵' },
            { word: 'ма-ку́ш-ка', syllables: ['ма', 'ку́ш', 'ка'], stressIndex: 1, emoji: '👤' },
            { word: 'ко́ш-ка', syllables: ['ко́ш', 'ка'], stressIndex: 0, emoji: '🐱' },
            { word: 'ма-ту́ш-ка', syllables: ['ма', 'ту́ш', 'ка'], stressIndex: 1, emoji: '👵' },
            { word: 'стре́л-ка', syllables: ['стре́л', 'ка'], stressIndex: 0, emoji: '➡️' },
            { word: 'лу-на́', syllables: ['лу', 'на́'], stressIndex: 1, emoji: '🌙' },
            { word: 'пы́ш-ка', syllables: ['пы́ш', 'ка'], stressIndex: 0, emoji: '🍩' },
            { word: 'бу́л-ка', syllables: ['бу́л', 'ка'], stressIndex: 0, emoji: '🍞' }
        ],
        locale: 'ru-RU'
    },
    en: {
        letters: [
            { l: 'A', t: 'A', s: 'A', ops: [{ w: 'Apple', i: '🍎' }, { w: 'Ant', i: '🐜' }, { w: 'Airplane', i: '✈️' }] },
            { l: 'B', t: 'B', s: 'B', ops: [{ w: 'Ball', i: '⚽' }, { w: 'Bear', i: '🐻' }, { w: 'Book', i: '📖' }] },
            { l: 'C', t: 'C', s: 'C', ops: [{ w: 'Cat', i: '🐱' }, { w: 'Car', i: '🚗' }, { w: 'Cake', i: '🎂' }] },
            { l: 'D', t: 'D', s: 'D', ops: [{ w: 'Dog', i: '🐕' }, { w: 'Duck', i: '🦆' }, { w: 'Door', i: '🚪' }] },
            { l: 'E', t: 'E', s: 'E', ops: [{ w: 'Elephant', i: '🐘' }, { w: 'Egg', i: '🥚' }, { w: 'Eagle', i: '🦅' }] },
            { l: 'F', t: 'F', s: 'F', ops: [{ w: 'Fish', i: '🐟' }, { w: 'Flower', i: '🌸' }, { w: 'Fox', i: '🦊' }] },
            { l: 'G', t: 'G', s: 'G', ops: [{ w: 'Giraffe', i: '🦒' }, { w: 'Grapes', i: '🍇' }, { w: 'Guitar', i: '🎸' }] },
            { l: 'H', t: 'H', s: 'H', ops: [{ w: 'Horse', i: '🐴' }, { w: 'House', i: '🏠' }, { w: 'Hat', i: '🎩' }] },
            { l: 'I', t: 'I', s: 'I', ops: [{ w: 'Ice cream', i: '🍦' }, { w: 'Igloo', i: '🏔️' }, { w: 'Insect', i: '🐛' }] },
            { l: 'J', t: 'J', s: 'J', ops: [{ w: 'Juice', i: '🧃' }, { w: 'Jellyfish', i: '🪼' }, { w: 'Jacket', i: '🧥' }] },
            { l: 'K', t: 'K', s: 'K', ops: [{ w: 'Kangaroo', i: '🦘' }, { w: 'Key', i: '🔑' }, { w: 'Kite', i: '🪁' }] },
            { l: 'L', t: 'L', s: 'L', ops: [{ w: 'Lion', i: '🦁' }, { w: 'Lemon', i: '🍋' }, { w: 'Leaf', i: '🍃' }] },
            { l: 'M', t: 'M', s: 'M', ops: [{ w: 'Monkey', i: '🐵' }, { w: 'Moon', i: '🌙' }, { w: 'Mouse', i: '🐭' }] },
            { l: 'N', t: 'N', s: 'N', ops: [{ w: 'Nest', i: '🪺' }, { w: 'Nurse', i: '👩‍⚕️' }, { w: 'Nut', i: '🥜' }] },
            { l: 'O', t: 'O', s: 'O', ops: [{ w: 'Octopus', i: '🐙' }, { w: 'Orange', i: '🍊' }, { w: 'Owl', i: '🦉' }] },
            { l: 'P', t: 'P', s: 'P', ops: [{ w: 'Penguin', i: '🐧' }, { w: 'Pizza', i: '🍕' }, { w: 'Panda', i: '🐼' }] },
            { l: 'Q', t: 'Q', s: 'Q', ops: [{ w: 'Queen', i: '👸' }, { w: 'Question', i: '❓' }, { w: 'Quilt', i: '🛏️' }] },
            { l: 'R', t: 'R', s: 'R', ops: [{ w: 'Rabbit', i: '🐰' }, { w: 'Rainbow', i: '🌈' }, { w: 'Robot', i: '🤖' }] },
            { l: 'S', t: 'S', s: 'S', ops: [{ w: 'Sun', i: '☀️' }, { w: 'Star', i: '⭐' }, { w: 'Snake', i: '🐍' }] },
            { l: 'T', t: 'T', s: 'T', ops: [{ w: 'Tiger', i: '🐅' }, { w: 'Tree', i: '🌳' }, { w: 'Turtle', i: '🐢' }] },
            { l: 'U', t: 'U', s: 'U', ops: [{ w: 'Umbrella', i: '☂️' }, { w: 'Unicorn', i: '🦄' }, { w: 'UFO', i: '🛸' }] },
            { l: 'V', t: 'V', s: 'V', ops: [{ w: 'Violin', i: '🎻' }, { w: 'Volcano', i: '🌋' }, { w: 'Vest', i: '🦺' }] },
            { l: 'W', t: 'W', s: 'W', ops: [{ w: 'Whale', i: '🐋' }, { w: 'Watch', i: '⌚' }, { w: 'Wolf', i: '🐺' }] },
            { l: 'X', t: 'X', s: 'X', ops: [{ w: 'Xylophone', i: '🎹' }, { w: 'X-ray', i: '🩻' }, { w: 'Fox', i: '🦊' }] },
            { l: 'Y', t: 'Y', s: 'Y', ops: [{ w: 'Yacht', i: '⛵' }, { w: 'Yo-yo', i: '🪀' }, { w: 'Yellow', i: '🟡' }] },
            { l: 'Z', t: 'Z', s: 'Z', ops: [{ w: 'Zebra', i: '🦓' }, { w: 'Zoo', i: '🦁' }, { w: 'Zipper', i: '🤐' }] }
        ],
        numbers: [{ v: 1, t: 'One', s: 'One', w: 'One', i: '🍎' }],
        syllableWords: [
            { word: 'ba-con', syllables: ['ba', 'con'], stressIndex: 0, emoji: '🥓' },
            { word: 'ba-na-na', syllables: ['ba', 'na', 'na'], stressIndex: 1, emoji: '🍌' },
            { word: 'bot-tle', syllables: ['bot', 'tle'], stressIndex: 0, emoji: '🍼' },
            { word: 'ti-ger', syllables: ['ti', 'ger'], stressIndex: 0, emoji: '🐅' },
            { word: 'pup-py', syllables: ['pup', 'py'], stressIndex: 0, emoji: '🐶' },
            { word: 'win-dow', syllables: ['win', 'dow'], stressIndex: 0, emoji: '🪟' },
            { word: 'kit-ty', syllables: ['kit', 'ty'], stressIndex: 0, emoji: '🐈' },
            { word: 'cook-ie', syllables: ['cook', 'ie'], stressIndex: 0, emoji: '🍪' },
            { word: 'ap-ple', syllables: ['ap', 'ple'], stressIndex: 0, emoji: '🍎' },
            { word: 'mous-ie', syllables: ['mous', 'ie'], stressIndex: 0, emoji: '🐭' },
            { word: 'pen-cil', syllables: ['pen', 'cil'], stressIndex: 0, emoji: '✏️' },
            { word: 'ta-ble', syllables: ['ta', 'ble'], stressIndex: 0, emoji: '📋' },
            { word: 'hel-met', syllables: ['hel', 'met'], stressIndex: 0, emoji: '⛑️' },
            { word: 'fun-ny', syllables: ['fun', 'ny'], stressIndex: 0, emoji: '😄' },
            { word: 'cir-cle', syllables: ['cir', 'cle'], stressIndex: 0, emoji: '⭕' },
            { word: 'can-non', syllables: ['can', 'non'], stressIndex: 0, emoji: '💣' },
            { word: 'pock-et', syllables: ['pock', 'et'], stressIndex: 0, emoji: '👝' },
            { word: 'bas-ket', syllables: ['bas', 'ket'], stressIndex: 0, emoji: '🧺' },
            { word: 'squir-rel', syllables: ['squir', 'rel'], stressIndex: 0, emoji: '🐿️' },
            { word: 'mit-ten', syllables: ['mit', 'ten'], stressIndex: 0, emoji: '🧤' },
            { word: 'but-ton', syllables: ['but', 'ton'], stressIndex: 0, emoji: '🔘' },
            { word: 'ar-row', syllables: ['ar', 'row'], stressIndex: 0, emoji: '➡️' },
            { word: 'moon', syllables: ['moon'], stressIndex: 0, emoji: '🌙' },
            { word: 'do-nut', syllables: ['do', 'nut'], stressIndex: 0, emoji: '🍩' },
            { word: 'bread', syllables: ['bread'], stressIndex: 0, emoji: '🍞' }
        ],
        locale: 'en-US'
    },
    he: {
        letters: [
            { l: 'א', t: 'א', s: 'אָלֶף', ops: [{ w: 'אריה', i: '🦁' }, { w: 'אָדֹם', i: '🔴' }, { w: 'אֹזֶן', i: '👂' }] },
            { l: 'ב', t: 'ב', s: 'בֵּית', ops: [{ w: 'בַּיִת', i: '🏠' }, { w: 'בָּנָן', i: '🍌' }, { w: 'בָּלוֹן', i: '🎈' }] },
            { l: 'ג', t: 'ג', s: 'גִּימֶל', ops: [{ w: 'גָּמָל', i: '🐫' }, { w: 'גַּן', i: '🌳' }, { w: 'גְּבִינָה', i: '🧀' }] },
            { l: 'ד', t: 'ד', s: 'דָּלֶת', ops: [{ w: 'דוּב', i: '🐻' }, { w: 'דָּג', i: '🐟' }, { w: 'דֶּלֶת', i: '🚪' }] },
            { l: 'ה', t: 'ה', s: 'הֵא', ops: [{ w: 'הַר', i: '⛰️' }, { w: 'הִפּוֹפּוֹטָם', i: '🦛' }, { w: 'הוֹד', i: '🌺' }] },
            { l: 'ו', t: 'ו', s: 'וָו', ops: [{ w: 'וֶרֶד', i: '🌹' }, { w: 'וִילוֹן', i: '🪟' }, { w: 'וָתִיק', i: '👴' }] },
            { l: 'ז', t: 'ז', s: 'זַיִן', ops: [{ w: 'זְאֵב', i: '🐺' }, { w: 'זָהָב', i: '💰' }, { w: 'זְבוּב', i: '🪰' }] },
            { l: 'ח', t: 'ח', s: 'חֵית', ops: [{ w: 'חָתוּל', i: '🐱' }, { w: 'חֲזִיר', i: '🐖' }, { w: 'חַלּוֹן', i: '🪟' }] },
            { l: 'ט', t: 'ט', s: 'טֵית', ops: [{ w: 'טֶלֶה', i: '🐑' }, { w: 'טִיס', i: '✈️' }, { w: 'טַבַּעַת', i: '💍' }] },
            { l: 'י', t: 'י', s: 'יוֹד', ops: [{ w: 'יוֹנָה', i: '🕊️' }, { w: 'יָם', i: '🌊' }, { w: 'יָרֵחַ', i: '🌙' }] },
            { l: 'כ', t: 'כ', s: 'כַּף', ops: [{ w: 'כֶּלֶב', i: '🐕' }, { w: 'כּוֹכָב', i: '⭐' }, { w: 'כַּדּוּר', i: '⚽' }] },
            { l: 'ל', t: 'ל', s: 'לָמֶד', ops: [{ w: 'לֶחֶם', i: '🍞' }, { w: 'לֵב', i: '❤️' }, { w: 'לַיְלָה', i: '🌙' }] },
            { l: 'מ', t: 'מ', s: 'מֵם', ops: [{ w: 'מַיִם', i: '💧' }, { w: 'מֶלֶךְ', i: '👑' }, { w: 'מָטוֹס', i: '✈️' }] },
            { l: 'נ', t: 'נ', s: 'נוּן', ops: [{ w: 'נָחָשׁ', i: '🐍' }, { w: 'נֵר', i: '🕯️' }, { w: 'נָהָר', i: '🏞️' }] },
            { l: 'ס', t: 'ס', s: 'סָמֶךְ', ops: [{ w: 'סוּס', i: '🐴' }, { w: 'סֵפֶר', i: '📖' }, { w: 'סִירָה', i: '⛵' }] },
            { l: 'ע', t: 'ע', s: 'עַיִן', ops: [{ w: 'עֵץ', i: '🌳' }, { w: 'עַיִן', i: '👁️' }, { w: 'עַכְבָּר', i: '🐭' }] },
            { l: 'פ', t: 'פ', s: 'פֵּא', ops: [{ w: 'פִּיל', i: '🐘' }, { w: 'פֶּרַח', i: '🌸' }, { w: 'פָּרָה', i: '🐄' }] },
            { l: 'צ', t: 'צ', s: 'צַדִּי', ops: [{ w: 'צָב', i: '🐢' }, { w: 'צִפּוֹר', i: '🐦' }, { w: 'צֶבַע', i: '🎨' }] },
            { l: 'ק', t: 'ק', s: 'קוֹף', ops: [{ w: 'קוֹף', i: '🐵' }, { w: 'קֶשֶׁת', i: '🌈' }, { w: 'קֵן', i: '🪺' }] },
            { l: 'ר', t: 'ר', s: 'רֵישׁ', ops: [{ w: 'רַעַם', i: '⚡' }, { w: 'רֶגֶל', i: '🦵' }, { w: 'רֹאשׁ', i: '🧠' }] },
            { l: 'ש', t: 'ש', s: 'שִׁין', ops: [{ w: 'שֶׁמֶשׁ', i: '☀️' }, { w: 'שׁוֹר', i: '🐂' }, { w: 'שׁוּלְחָן', i: '🪑' }] },
            { l: 'ת', t: 'ת', s: 'תָּו', ops: [{ w: 'תַּפּוּחַ', i: '🍎' }, { w: 'תּוּכִּי', i: '🦜' }, { w: 'תּוֹף', i: '🥁' }] }
        ],
        numbers: [{ v: 1, t: 'אחת', s: 'אַחַת', w: 'אחת', i: '🍎' }],
        syllableWords: [
            { word: 'לֶ-חֶם', syllables: ['לֶ', 'חֶם'], stressIndex: 0, emoji: '🍞' },
            { word: 'בָּ-נָ-נָה', syllables: ['בָּ', 'נָ', 'נָה'], stressIndex: 1, emoji: '🍌' },
            { word: 'בַּ-קְ-בּוּק', syllables: ['בַּ', 'קְ', 'בּוּק'], stressIndex: 2, emoji: '🍼' },
            { word: 'חָ-זִיר', syllables: ['חָ', 'זִיר'], stressIndex: 1, emoji: '🐗' },
            { word: 'כֶּ-לֶב', syllables: ['כֶּ', 'לֶב'], stressIndex: 1, emoji: '🐕' },
            { word: 'חַ-לּוֹן', syllables: ['חַ', 'לּוֹן'], stressIndex: 1, emoji: '🪟' },
            { word: 'חָ-תוּל', syllables: ['חָ', 'תוּל'], stressIndex: 1, emoji: '🐈' },
            { word: 'עוּ-גָה', syllables: ['עוּ', 'גָה'], stressIndex: 1, emoji: '🍰' },
            { word: 'עַ-כְ-בָּר', syllables: ['עַ', 'כְ', 'בָּר'], stressIndex: 2, emoji: '🐭' },
            { word: 'מַ-סֵּ-כָה', syllables: ['מַ', 'סֵּ', 'כָה'], stressIndex: 2, emoji: '🎭' },
            { word: 'דַּ-יָּה', syllables: ['דַּ', 'יָּה'], stressIndex: 1, emoji: '🥣' },
            { word: 'כּוֹ-בַע', syllables: ['כּוֹ', 'בַע'], stressIndex: 1, emoji: '⛑️' },
            { word: 'בְּ-דִי-חָה', syllables: ['בְּ', 'דִי', 'חָה'], stressIndex: 2, emoji: '😄' },
            { word: 'גַּל-גַּל', syllables: ['גַּל', 'גַּל'], stressIndex: 1, emoji: '🎡' },
            { word: 'תּוֹ-תָח', syllables: ['תּוֹ', 'תָח'], stressIndex: 1, emoji: '💣' },
            { word: 'מָ-קוֹם', syllables: ['מָ', 'קוֹם'], stressIndex: 1, emoji: '📍' },
            { word: 'כּוֹ-בַע', syllables: ['כּוֹ', 'בַע'], stressIndex: 1, emoji: '🧢' },
            { word: 'סְ-נַאי', syllables: ['סְ', 'נַאי'], stressIndex: 1, emoji: '🐿️' },
            { word: 'כּוֹ-בַע', syllables: ['כּוֹ', 'בַע'], stressIndex: 1, emoji: '🧶' },
            { word: 'חָ-תוּל', syllables: ['חָ', 'תוּל'], stressIndex: 1, emoji: '🐱' },
            { word: 'חֵץ', syllables: ['חֵץ'], stressIndex: 0, emoji: '➡️' },
            { word: 'יָ-רֵ-חַ', syllables: ['יָ', 'רֵ', 'חַ'], stressIndex: 1, emoji: '🌙' },
            { word: 'סֻ-פְ-גָּנִיָּה', syllables: ['סֻ', 'פְ', 'גָּנִיָּה'], stressIndex: 2, emoji: '🍩' },
            { word: 'לֶ-חֶם', syllables: ['לֶ', 'חֶם'], stressIndex: 1, emoji: '🍞' }
        ],
        locale: 'he-IL'
    }
};

// ========================================
// AUDIO SYSTEM
// ========================================

class AudioManager {
    constructor() {
        this.ctx = new (window.AudioContext || window.webkitAudioContext)();
        this.masterVolume = 0.3;
    }

    wakeUp() {
        if (this.ctx.state === 'suspended') this.ctx.resume();
    }

    playTone(frequency, type, duration, volume = 1) {
        this.wakeUp();
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = type;
        osc.frequency.setValueAtTime(frequency, this.ctx.currentTime);
        gain.gain.setValueAtTime(this.masterVolume * volume, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + duration);

        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(this.ctx.currentTime + duration);
    }

    playSuccess() {
        this.playTone(523.25, 'sine', 0.1);
        setTimeout(() => this.playTone(659.25, 'sine', 0.1), 100);
        setTimeout(() => this.playTone(783.99, 'sine', 0.3), 200);
    }

    playPop() {
        this.playTone(800, 'sine', 0.05, 0.5);
    }

    playError() {
        this.playTone(150, 'sawtooth', 0.3, 0.4);
    }

    playClick() {
        this.playTone(600, 'sine', 0.05, 0.3);
    }
}

const audio = new AudioManager();

// ========================================
// PARTICLE SYSTEM
// ========================================

class ParticleSystem {
    constructor() {
        this.container = document.getElementById('particles');
    }

    createParticle(x, y, emoji, duration = 1000) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: absolute;
            left: ${x}px;
            top: ${y}px;
            font-size: 2rem;
            pointer-events: none;
            z-index: 1000;
            animation: particleRise ${duration}ms ease-out forwards;
        `;
        particle.textContent = emoji;
        this.container.appendChild(particle);

        setTimeout(() => particle.remove(), duration);
    }

    burst(x, y, count = 10) {
        const emojis = ['✨', '⭐', '🌟', '💫', '🎉', '🎊'];
        for (let i = 0; i < count; i++) {
            setTimeout(() => {
                const emoji = emojis[Math.floor(Math.random() * emojis.length)];
                const offsetX = (Math.random() - 0.5) * 100;
                const offsetY = (Math.random() - 0.5) * 100;
                this.createParticle(x + offsetX, y + offsetY, emoji);
            }, i * 50);
        }
    }
}

const particles = new ParticleSystem();

// Add CSS animation
const style = document.createElement('style');
style.textContent = `
    @keyframes particleRise {
        0% { opacity: 1; transform: translateY(0) scale(1); }
        100% { opacity: 0; transform: translateY(-100px) scale(0); }
    }
`;
document.head.appendChild(style);

// ========================================
// CONFETTI SYSTEM
// ========================================

class ConfettiSystem {
    constructor() {
        this.canvas = document.getElementById('confetti');
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.resize();
        window.addEventListener('resize', () => this.resize());
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    fire() {
        this.particles = [];
        const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8', '#F7DC6F', '#BB8FCE'];

        for (let i = 0; i < 150; i++) {
            this.particles.push({
                x: this.canvas.width / 2,
                y: this.canvas.height / 2,
                vx: (Math.random() - 0.5) * 20,
                vy: (Math.random() - 0.5) * 20 - 5,
                color: colors[Math.floor(Math.random() * colors.length)],
                size: Math.random() * 8 + 4,
                rotation: Math.random() * 360,
                rotationSpeed: (Math.random() - 0.5) * 10,
                life: 100
            });
        }

        this.animate();
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        if (this.particles.length === 0) return;

        this.particles.forEach((p, i) => {
            p.x += p.vx;
            p.y += p.vy;
            p.vy += 0.5; // Gravity
            p.rotation += p.rotationSpeed;
            p.life--;

            this.ctx.save();
            this.ctx.translate(p.x, p.y);
            this.ctx.rotate(p.rotation * Math.PI / 180);
            this.ctx.fillStyle = p.color;
            this.ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
            this.ctx.restore();

            if (p.life <= 0) this.particles.splice(i, 1);
        });

        requestAnimationFrame(() => this.animate());
    }
}

const confetti = new ConfettiSystem();

// ========================================
// MAIN APP
// ========================================

const app = {
    // State
    profile: '',
    lang: 'ru',
    level: 0,
    isMathMode: false,

    // Progress
    progress: {
        junior: {
            ru: { lvl: 0, stars: [] },
            en: { lvl: 0, stars: [] },
            he: { lvl: 0, stars: [] },
            numbers: { lvl: 0, stars: [] }
        },
        senior: {
            ru: { lvl: 0, stars: [] },
            en: { lvl: 0, stars: [] },
            he: { lvl: 0, stars: [] }
        }
    },

    // Initialization
    init() {
        this.loadProgress();
        this.updateLocalization();
        this.hideLoading();
    },

    // Loading
    hideLoading() {
        setTimeout(() => {
            const loading = document.getElementById('loading-screen');
            loading.classList.add('hidden');
        }, 1500);
    },

    // Progress Management
    loadProgress() {
        const saved = localStorage.getItem('alphaFamilyPro');
        if (saved) {
            const data = JSON.parse(saved);
            if (data.progress) this.progress = data.progress;
            if (data.lang) this.lang = data.lang;
        }
    },

    saveProgress() {
        localStorage.setItem('alphaFamilyPro', JSON.stringify({
            progress: this.progress,
            lang: this.lang
        }));
    },

    // Navigation
    go(screenId) {
        audio.playClick();
        document.querySelectorAll('.screen').forEach(s => s.classList.add('hidden'));
        document.getElementById(screenId).classList.remove('hidden');
    },

    goBackFromMap() {
        this.go('view-roles');
    },

    // Language
    toggleLang() {
        const langs = ['ru', 'en', 'he'];
        const currentIndex = langs.indexOf(this.lang);
        this.setLang(langs[(currentIndex + 1) % langs.length]);
    },

    setLang(lang) {
        this.lang = lang;
        document.documentElement.dir = (lang === 'he') ? 'rtl' : 'ltr';
        const flags = { ru: '🇷🇺', en: '🇺🇸', he: '🇮🇱' };
        document.querySelector('.lang-flag').textContent = flags[lang];
        this.updateLocalization();
        this.saveProgress();
    },

    updateLocalization() {
        const t = TRANS[this.lang];
        document.getElementById('lbl-subtitle').textContent = t.subtitle;
        document.getElementById('lbl-jun-title').textContent = t.jun_t;
        document.getElementById('lbl-jun-desc').textContent = t.jun_d;
        document.getElementById('lbl-sen-title').textContent = t.sen_t;
        document.getElementById('lbl-sen-desc').textContent = t.sen_d;
        document.getElementById('lbl-select-subj').textContent = t.sel_sub;
        document.getElementById('lbl-letters').textContent = t.l_let;
        document.getElementById('lbl-math').textContent = t.l_math;
        document.getElementById('lbl-map').textContent = t.map;
        document.getElementById('lbl-dict').textContent = t.dict;
        document.getElementById('lbl-find').textContent = t.find;

        // Syllable labels
        const lblSyllables = document.getElementById('lbl-syllables');
        if (lblSyllables) lblSyllables.textContent = t.l_syllables;
        const lblSylSelect = document.getElementById('lbl-syllable-select');
        if (lblSylSelect) lblSylSelect.textContent = t.select_mode;
        const lblSylBasic = document.getElementById('lbl-syl-basic');
        if (lblSylBasic) lblSylBasic.textContent = t.syl_basic;
        const lblSylAdv = document.getElementById('lbl-syl-advanced');
        if (lblSylAdv) lblSylAdv.textContent = t.syl_advanced;
        const lblNextWord = document.getElementById('lbl-next-word');
        if (lblNextWord) lblNextWord.textContent = t.next_word;
        const lblReset = document.getElementById('lbl-reset');
        if (lblReset) lblReset.textContent = t.reset;
    },

    // Profile Selection
    setProfile(profile) {
        this.profile = profile;
        confetti.fire();

        if (profile === 'junior') {
            this.isMathMode = false;
            this.renderMap();
            setTimeout(() => this.go('view-map'), 600);
        } else {
            setTimeout(() => this.go('view-senior-menu'), 600);
        }
    },

    startSeniorLetters() {
        this.isMathMode = false;
        this.renderMap();
        this.go('view-map');
    },

    goToMathMenu() {
        this.go('view-math-menu');
    },

    // Map Rendering
    renderMap() {
        const container = document.getElementById('map-container');
        container.innerHTML = '';

        let list, current, starsArr;
        if (this.isMathMode && this.profile === 'junior') {
            list = DB[this.lang].numbers;
            current = this.progress.junior.numbers.lvl;
            starsArr = this.progress.junior.numbers.stars;
        } else {
            list = DB[this.lang].letters;
            current = this.progress[this.profile][this.lang].lvl;
            starsArr = this.progress[this.profile][this.lang].stars;
        }

        list.forEach((item, idx) => {
            const node = document.createElement('div');
            node.textContent = item.l || item.v;

            if (idx < current) {
                node.className = 'level-node completed';
                node.onclick = () => this.startLevel(idx);

                const stars = starsArr[idx] || 0;
                let starsHTML = '<div class="level-stars">';
                for (let i = 0; i < 3; i++) {
                    starsHTML += `<div class="tiny-star ${i < stars ? 'gold' : ''}">★</div>`;
                }
                starsHTML += '</div>';
                node.innerHTML += starsHTML;
            } else if (idx === current) {
                node.className = 'level-node unlocked';
                node.onclick = () => this.startLevel(idx);
            } else {
                node.className = 'level-node locked';
            }

            container.appendChild(node);

            // Stagger animation
            setTimeout(() => {
                node.style.animation = 'fadeInUp 0.5s ease forwards';
            }, idx * 50);
        });
    },

    // Level Start
    startLevel(idx) {
        this.level = idx;
        console.log('Starting level:', idx);
        // Game logic will be added in full version

        // For demo, just show success after delay
        setTimeout(() => {
            this.finishLevel(3);
        }, 2000);
    },

    // Finish Level
    finishLevel(stars) {
        audio.playSuccess();
        confetti.fire();

        const center = {
            x: window.innerWidth / 2,
            y: window.innerHeight / 2
        };
        particles.burst(center.x, center.y, 20);

        let user, maxLvl;
        if (this.isMathMode && this.profile === 'junior') {
            user = this.progress.junior.numbers;
            maxLvl = DB[this.lang].numbers.length;
        } else {
            user = this.progress[this.profile][this.lang];
            maxLvl = DB[this.lang].letters.length;
        }

        if (this.level === user.lvl) {
            user.lvl++;
            user.stars[this.level] = stars;
        } else if (this.level < user.lvl) {
            if (!user.stars[this.level] || stars > user.stars[this.level]) {
                user.stars[this.level] = stars;
            }
        }

        this.saveProgress();

        // Speak praise
        const praises = TRANS[this.lang].yes;
        const praise = praises[Math.floor(Math.random() * praises.length)];
        this.speak(praise);

        // Next level or return to map
        setTimeout(() => {
            const nextIdx = this.level + 1;
            if (nextIdx < maxLvl) {
                this.startLevel(nextIdx);
            } else {
                this.renderMap();
                this.go('view-map');
            }
        }, 2000);
    },

    // Speech
    speak(text) {
        audio.wakeUp();
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = DB[this.lang].locale;
        utterance.rate = 0.9;
        window.speechSynthesis.speak(utterance);
    },

    // ==================================
    // SYLLABLE EXERCISES
    // ==================================

    currentSyllableWord: 0,
    selectedSyllables: [],

    goToSyllableMenu() {
        this.go('view-syllable-menu');
    },

    startSyllableBasic() {
        this.currentSyllableWord = 0;
        this.renderSyllableBasic();
        this.go('view-syllable-basic');
    },

    startSyllableAdvanced() {
        this.currentSyllableWord = 0;
        this.renderSyllableAdvanced();
        this.go('view-syllable-advanced');
    },

    renderSyllableBasic() {
        const words = DB[this.lang].syllableWords;
        if (!words || words.length === 0) return;

        const wordData = words[this.currentSyllableWord];

        // Update emoji
        document.getElementById('syllable-emoji').textContent = wordData.emoji;

        // Update word display (show the word without hyphens for display)
        const wordDisplay = wordData.word.replace(/-/g, '').replace(/́/g, '');
        document.getElementById('syllable-word').textContent = wordDisplay;

        // Update hint
        const t = TRANS[this.lang];
        document.getElementById('syllable-hint').textContent = t.click_syllable;

        // Create syllable tiles
        const container = document.getElementById('syllable-tiles');
        container.innerHTML = '';

        wordData.syllables.forEach((syllable, index) => {
            const tile = document.createElement('div');
            tile.className = 'syllable-tile';
            if (index === wordData.stressIndex) {
                tile.classList.add('stressed');
            }
            tile.textContent = syllable.replace(/́/g, ''); // Remove combining acute accent for display

            tile.onclick = () => {
                audio.playClick();
                // Highlight tile
                document.querySelectorAll('.syllable-tile').forEach(t => t.classList.remove('active'));
                tile.classList.add('active');

                // Speak syllable
                this.speak(syllable.replace(/́/g, ''));

                // Remove active class after animation
                setTimeout(() => {
                    tile.classList.remove('active');
                }, 600);
            };

            container.appendChild(tile);

            // Stagger animation
            setTimeout(() => {
                tile.style.animation = 'syllablePop 0.4s ease forwards';
            }, index * 100);
        });
    },

    nextSyllableWord() {
        const words = DB[this.lang].syllableWords;
        audio.playSuccess();

        this.currentSyllableWord++;
        if (this.currentSyllableWord >= words.length) {
            this.currentSyllableWord = 0;
        }

        this.renderSyllableBasic();
    },

    renderSyllableAdvanced() {
        const words = DB[this.lang].syllableWords;
        if (!words || words.length === 0) return;

        const wordData = words[this.currentSyllableWord];
        this.selectedSyllables = [];

        // Update emoji
        document.getElementById('advanced-emoji').textContent = wordData.emoji;

        // Clear assembly zone
        const assemblyZone = document.getElementById('assembly-zone');
        assemblyZone.innerHTML = '';
        assemblyZone.style.minHeight = '80px';

        // Create scrambled syllables
        const scrambledTiles = document.getElementById('scrambled-tiles');
        scrambledTiles.innerHTML = '';

        // Scramble the syllables
        const syllables = [...wordData.syllables];
        for (let i = syllables.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [syllables[i], syllables[j]] = [syllables[j], syllables[i]];
        }

        syllables.forEach((syllable, index) => {
            const tile = document.createElement('div');
            tile.className = 'syllable-tile scrambled';
            tile.textContent = syllable.replace(/́/g, '');
            tile.dataset.syllable = syllable;

            tile.onclick = () => {
                if (tile.classList.contains('used')) return;

                audio.playClick();
                this.addSyllableToAssembly(syllable, tile);
            };

            scrambledTiles.appendChild(tile);

            // Stagger animation
            setTimeout(() => {
                tile.style.animation = 'syllablePop 0.4s ease forwards';
            }, index * 100);
        });
    },

    addSyllableToAssembly(syllable, sourceTile) {
        const wordData = DB[this.lang].syllableWords[this.currentSyllableWord];
        const assemblyZone = document.getElementById('assembly-zone');

        // Mark source tile as used
        sourceTile.classList.add('used');

        // Add to selected array
        this.selectedSyllables.push(syllable);

        // Create tile in assembly zone
        const tile = document.createElement('div');
        tile.className = 'syllable-tile assembled';
        tile.textContent = syllable.replace(/́/g, '');
        assemblyZone.appendChild(tile);

        // Check if word is complete
        if (this.selectedSyllables.length === wordData.syllables.length) {
            setTimeout(() => {
                this.checkSyllableAssembly();
            }, 300);
        }
    },

    checkSyllableAssembly() {
        const wordData = DB[this.lang].syllableWords[this.currentSyllableWord];
        const correct = this.selectedSyllables.every((syl, i) => syl === wordData.syllables[i]);

        if (correct) {
            audio.playSuccess();
            confetti.fire();

            const center = {
                x: window.innerWidth / 2,
                y: window.innerHeight / 2
            };
            particles.burst(center.x, center.y, 15);

            // Speak praise
            const praises = TRANS[this.lang].yes;
            const praise = praises[Math.floor(Math.random() * praises.length)];
            this.speak(praise);

            // Move to next word
            setTimeout(() => {
                this.currentSyllableWord++;
                const words = DB[this.lang].syllableWords;
                if (this.currentSyllableWord >= words.length) {
                    this.currentSyllableWord = 0;
                }
                this.renderSyllableAdvanced();
            }, 2000);
        } else {
            audio.playError();

            // Shake animation
            const assemblyZone = document.getElementById('assembly-zone');
            assemblyZone.style.animation = 'shake 0.5s ease';
            setTimeout(() => {
                assemblyZone.style.animation = '';
            }, 500);

            // Speak error message
            const errors = TRANS[this.lang].no;
            const error = errors[Math.floor(Math.random() * errors.length)];
            this.speak(error);

            // Auto reset after a delay
            setTimeout(() => {
                this.resetSyllableAssembly();
            }, 1500);
        }
    },

    resetSyllableAssembly() {
        audio.playClick();
        this.selectedSyllables = [];

        // Clear assembly zone
        const assemblyZone = document.getElementById('assembly-zone');
        assemblyZone.innerHTML = '';

        // Reset scrambled tiles
        document.querySelectorAll('.syllable-tile.scrambled').forEach(tile => {
            tile.classList.remove('used');
        });
    },

    // Dictionary placeholder
    showDictionary() {
        console.log('Dictionary');
    },

    showPhilwordMenu() {
        console.log('Philword menu');
    },

    // ==================================
    // MATH GAME LOGIC
    // ==================================
    mathState: {
        score: 0,
        level: 1,
        currentAnswer: 0,
        mode: 'junior' // 'junior' or 'senior'
    },

    startMathGame(mode) {
        this.mathState.mode = mode;
        this.mathState.score = 0;
        this.mathState.level = 1;
        this.updateMathUI();
        this.generateMathProblem();
        this.go('view-math-game');
    },

    updateMathUI() {
        document.getElementById('math-score').textContent = this.mathState.score;
        document.getElementById('math-level').textContent = this.mathState.level;
    },

    generateMathProblem() {
        const visualArea = document.getElementById('math-visual-items');
        const equationArea = document.getElementById('math-equation');
        const optionsArea = document.getElementById('math-options');

        visualArea.innerHTML = '';
        equationArea.innerHTML = '';
        optionsArea.innerHTML = '';

        let answer, options;

        if (this.mathState.mode === 'junior') {
            // JUNIOR: Counting Objects
            const maxNum = this.mathState.level <= 2 ? 3 : (this.mathState.level <= 5 ? 5 : 10);
            answer = Math.floor(Math.random() * maxNum) + 1;

            // Visuals
            const emojis = ['🍎', '🚗', '🐶', '🎈', '⭐', '🍪'];
            const emoji = emojis[Math.floor(Math.random() * emojis.length)];

            for (let i = 0; i < answer; i++) {
                const item = document.createElement('div');
                item.className = 'math-item';
                item.textContent = emoji;
                item.style.animationDelay = `${i * 0.1}s`;
                visualArea.appendChild(item);
            }
        } else {
            // SENIOR: Arithmetic
            const level = this.mathState.level;
            let n1, n2, op;

            if (level <= 5) { // Addition up to 10
                n1 = Math.floor(Math.random() * 5) + 1;
                n2 = Math.floor(Math.random() * 5) + 1;
                op = '+';
                answer = n1 + n2;
            } else if (level <= 10) { // Subtraction up to 10
                n1 = Math.floor(Math.random() * 9) + 1;
                n2 = Math.floor(Math.random() * n1);
                op = '-';
                answer = n1 - n2;
            } else { // Addition up to 20
                n1 = Math.floor(Math.random() * 10) + 1;
                n2 = Math.floor(Math.random() * 10) + 1;
                op = '+';
                answer = n1 + n2;
            }

            equationArea.textContent = `${n1} ${op} ${n2} = ?`;
        }

        this.mathState.currentAnswer = answer;

        // Generate Options
        options = [answer];
        while (options.length < 3) {
            let wrong;
            if (this.mathState.mode === 'junior') {
                wrong = Math.floor(Math.random() * 10) + 1;
            } else {
                wrong = answer + (Math.floor(Math.random() * 5) - 2);
                if (wrong < 0) wrong = 0;
            }
            if (!options.includes(wrong) && wrong !== answer) {
                options.push(wrong);
            }
        }

        // Shuffle options
        options.sort(() => Math.random() - 0.5);

        options.forEach(opt => {
            const btn = document.createElement('button');
            btn.className = 'math-option-btn';
            btn.textContent = opt;
            btn.onclick = (e) => this.checkMathAnswer(opt, e.target);
            optionsArea.appendChild(btn);
        });
    },

    checkMathAnswer(selected, btn) {
        if (selected === this.mathState.currentAnswer) {
            // Correct
            btn.classList.add('correct');
            audio.playSuccess();
            confetti.fire();
            this.mathState.score += 10;

            // Level up every 3 correct answers
            if (this.mathState.score % 30 === 0) {
                this.mathState.level++;
                this.speak(TRANS[this.lang].yes[0]);
            }

            this.updateMathUI();

            setTimeout(() => {
                this.generateMathProblem();
            }, 1000);
        } else {
            // Wrong
            btn.classList.add('wrong');
            audio.playError();
            this.speak(TRANS[this.lang].no[0]);
        }
    }
};



// ========================================
// START APP
// ========================================

window.addEventListener('load', () => {
    app.init();
});

