/* ===== WEEK 8 — Passive voice ===== */
COURSE.weeks.push({
  n: 8,
  title: 'Страдательный залог (Passive)',
  tag: 'is made · was built · by · made in / made of',
  goal: 'Говорить о процессах, изобретениях и событиях, когда важно действие, а не тот, кто его совершил. Образовывать пассив в Present Simple и Past Simple, добавлять исполнителя через by, правильно выбирать active или passive.',
  days: [
    ['Теория — в центре внимания объект', ['Прочитать раздел «Теория»: камера смотрит на результат', 'Аналогия Фейнмана: новость о картине, а не о воре', 'Найти 5 пассивных конструкций на упаковках и табличках']],
    ['Present Simple Passive', ['am / is / are + V3', 'Процессы: <i>Tea is grown in India.</i>', 'Описать, как делают хлеб или сыр (6 шагов)']],
    ['Past Simple Passive', ['was / were + V3', 'История и изобретения: <i>The telephone was invented in 1876.</i>', 'Составить 6 фактов о знаменитых зданиях']],
    ['By и без by', ['<i>by</i> + исполнитель, если он важен: <i>written by J. K. Rowling</i>', 'Когда исполнитель очевиден или неизвестен — без by', '<i>made in / made of / made from</i>']],
    ['Диалог и аудирование', ['Разыграть диалог в музее — обе роли', 'Послушать короткий документальный фрагмент и выписать пассив', 'Рассказать о своём городе: когда что построено']],
    ['Тест + закрепление', ['Пройти тест недели (раздел 🎯) — цель 80%+', 'Написать текст (80–100 слов): <i>A famous place in my country</i>', 'Переписать 5 активных предложений в пассивные']],
    ['Фейнман-урок недели', ['Запись 2–3 мин: зачем нужен пассив', 'Формула: be (в нужном времени) + V3', 'Список пробелов → план недели 9 (-ing и to)']],
  ],
  progress: ['Present Passive', 'Past Passive', 'By и made of / in', 'Active или Passive'],
  theory: `
    <h3>Идея в одной фразе</h3>
    <p>В пассиве <strong>главный герой предложения — предмет, с которым что-то делают</strong>, а не тот, кто делает.</p>
    ${tl([['Someone stole the painting', 'active: важен вор'], ['The painting was stolen', 'passive: важна картина', 1]])}
    ${ex('The painting was stolen last night.', 'Картину украли прошлой ночью (кто — неизвестно и не главное).')}
    <h3>Аналогия Фейнмана</h3>
    <p>Представьте новость. Журналист наводит <strong>камеру</strong> на то, что важно зрителям. Если важна картина — камера на картине: <i>The painting was stolen.</i> Если поймали вора — камера на воре: <i>The police caught the thief.</i></p>
    <p>В русском мы часто говорим «картину украли» или «картина была украдена». В английском «они украли» без подлежащего не бывает, поэтому пассив встречается очень часто.</p>
    ${note('<strong>Правило-проверка:</strong> по-русски хочется сказать «делают, построили, говорят» без «кто»? Скорее всего, в английском нужен пассив: <i>is made, was built, is spoken</i>.')}`,
  forms: `
    <h3>be + V3</h3>
    ${tbl(['Время', 'Active', 'Passive'], [
      ['Present Simple', 'They make cars here.', 'Cars <em>are made</em> here.'],
      ['Present Simple', 'People speak English here.', 'English <em>is spoken</em> here.'],
      ['Past Simple', 'They built the bridge in 1894.', 'The bridge <em>was built</em> in 1894.'],
      ['Past Simple', 'Someone stole our bikes.', 'Our bikes <em>were stolen</em>.']])}
    <h3>Отрицания и вопросы</h3>
    ${tbl(['', 'Present', 'Past'], [
      ['−', 'It isn’t made in China.', 'They weren’t invited.'],
      ['?', 'Where is it made?', 'When was it built?']])}
    <h3>Нужные причастия</h3>
    ${tbl(['V1', 'V3', 'V1', 'V3'], [
      ['build', '<em>built</em>', 'steal', '<em>stolen</em>'],
      ['write', '<em>written</em>', 'grow', '<em>grown</em>'],
      ['speak', '<em>spoken</em>', 'find', '<em>found</em>'],
      ['sell', '<em>sold</em>', 'give', '<em>given</em>']])}`,
  usage: `
    <h3>By — когда исполнитель важен</h3>
    ${ex('Harry Potter was written by J. K. Rowling.', '«Гарри Поттер» написан Джоан Роулинг.')}
    ${ex('My wallet was stolen.', 'У меня украли кошелёк (кто — неизвестно, by не нужно).')}
    <h3>Made in / of / from</h3>
    ${tbl(['Фраза', 'Значение', 'Пример'], [
      ['made in', 'страна производства', 'This phone was made in Korea.'],
      ['made of', 'материал виден', 'The table is made of wood.'],
      ['made from', 'материал изменился', 'Paper is made from wood.']])}
    <h3>Где встречается пассив</h3>
    ${ul(['Таблички: <i>Breakfast is served from 7 to 10.</i>', 'Новости: <i>Two people were injured in the accident.</i>', 'Инструкции и процессы: <i>The milk is heated and then cooled.</i>', 'История: <i>The castle was built in the 12th century.</i>'])}`,
  compare: `
    ${tbl(['', 'Active', 'Passive'], [
      ['Фокус', 'кто делает', 'что происходит с предметом'],
      ['Пример', 'Shakespeare wrote Hamlet.', 'Hamlet was written by Shakespeare.'],
      ['Когда', 'исполнитель важен и известен', 'исполнитель неважен / неизвестен / очевиден'],
      ['Рус.', 'Шекспир написал «Гамлета».', '«Гамлет» написан Шекспиром.']])}
    <h3>Одно событие — две камеры</h3>
    ${ex('The police arrested the man.', 'Полиция арестовала мужчину (камера на полиции).')}
    ${ex('The man was arrested.', 'Мужчину арестовали (камера на мужчине).')}
    ${note('<strong>Частые ошибки русскоговорящих:</strong> пропускать be: <i>The house built in 1990</i> → <i>The house <em>was</em> built in 1990</i>. И ставить V2 вместо V3: <i>was wrote</i> → <i>was written</i>.')}`,
  dialog: [
    ['G', 'Welcome to the castle. It was built in the eleventh century.', 'Добро пожаловать в замок. Он был построен в одиннадцатом веке.'],
    ['V', 'Wow! Who was it built by?', 'Ух ты! Кем он был построен?'],
    ['G', 'It was built by William the Conqueror. The walls are made of local stone.', 'Его построил Вильгельм Завоеватель. Стены сделаны из местного камня.'],
    ['V', 'Is the castle still used today?', 'Замок используется сегодня?'],
    ['G', 'Yes, it is. Concerts are held here every summer.', 'Да. Каждое лето здесь проводятся концерты.'],
    ['V', 'And what’s in this room?', 'А что в этой комнате?'],
    ['G', 'These paintings were given to the castle by a rich family. One was stolen in 1980, but it was found two years later.', 'Эти картины подарила замку богатая семья. Одну украли в 1980-м, но через два года её нашли.'],
    ['V', 'What a story! Are photos allowed in here?', 'Вот это история! Здесь можно фотографировать?'],
    ['G', 'Yes, they are, but flash photography isn’t permitted.', 'Да, но со вспышкой снимать нельзя.'],
  ],
  test: [
    { q: 'English ___ in many countries.', o: ['speaks', 'is spoken', 'is speaking', 'spoken'], a: 1, c: 0, e: 'Пассив Present Simple: is + V3.' },
    { q: 'Cars ___ in this factory.', o: ['are made', 'is made', 'make', 'are make'], a: 0, c: 0, e: 'Cars — мн. ч. → are + V3.' },
    { q: 'The bridge ___ in 1894.', o: ['built', 'is built', 'was building', 'was built'], a: 3, c: 1, e: 'Пассив Past Simple: was + V3.' },
    { q: 'Our bikes ___ last night.', o: ['were stolen', 'was stolen', 'stole', 'were stole'], a: 0, c: 1, e: 'bikes — мн. ч. → were + V3 (stolen).' },
    { q: '«Hamlet» was written ___ Shakespeare.', o: ['from', 'of', 'by', 'with'], a: 2, c: 2, e: 'Исполнитель → by.' },
    { q: 'The table is made ___ wood. (дерево видно)', o: ['from', 'by', 'in', 'of'], a: 3, c: 2, e: 'Материал виден → made of.' },
    { q: 'When ___ the telephone invented?', o: ['did', 'was', 'is', 'were'], a: 1, c: 1, e: 'Вопрос в пассиве: When was it invented?' },
    { q: 'Someone took my bag! = ', o: ['My bag taken!', 'My bag took!', 'My bag was taken!', 'My bag was took!'], a: 2, c: 3, e: 'Исполнитель неизвестен → пассив: was + V3 (taken).' },
    { q: 'Which is better? (важен автор)', o: ['The Beatles wrote this song.', 'This song wrote the Beatles.', 'This song is writing by the Beatles.', 'This song wrote by the Beatles.'], a: 0, c: 3, e: 'Если исполнитель — главное, можно и активный залог.' },
    { q: 'Breakfast ___ from 7 to 10 every day.', o: ['serves', 'is served', 'served', 'is serving'], a: 1, c: 0, e: 'Табличка в отеле → Present Passive.' },
  ],
  feynman: {
    task: 'Объясните, зачем нужен пассив, на примере «камеры в новостях» так, чтобы понял 10-летний ребёнок.',
    prompts: ['Когда исполнителя добавляют через by, а когда нет?', 'Почему <i>The house built in 1990</i> — ошибка?', 'Чем made of отличается от made from?', 'Расскажите 3 факта о своём городе в пассиве.'],
  },
});
