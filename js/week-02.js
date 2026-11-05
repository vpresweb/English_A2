/* ===== WEEK 2 — Present Perfect ===== */
COURSE.weeks.push({
  n: 2,
  title: 'Present Perfect',
  tag: 'have / has + V3 · опыт · just / already / yet',
  goal: 'Говорить об опыте («я когда-нибудь…»), о недавних событиях с результатом сейчас и о том, что уже сделано или ещё нет. Образовывать Present Perfect с правильными и неправильными причастиями, использовать ever, never, just, already, yet.',
  days: [
    ['Теория — «прошлое с результатом сейчас»', ['Прочитать раздел «Теория»: мост между прошлым и настоящим', 'Аналогия Фейнмана: «чемодан опыта»', 'Найти 3 примера Present Perfect в английской песне или сериале']],
    ['Формы', ['have / has + третья форма (V3)', 'Сокращения: <i>I’ve, she’s, haven’t, hasn’t</i>', 'Выучить 20 неправильных причастий (been, done, seen, eaten…)']],
    ['Опыт: ever / never', ['Вопрос <i>Have you ever…?</i> и ответы <i>Yes, I have / No, I haven’t</i>', '<i>never</i> = «ни разу» (без второго отрицания!)', 'Составить 8 вопросов «Have you ever…?» и ответить на них']],
    ['Just / already / yet', ['just и already — между have и V3', 'yet — в конце, в вопросах и отрицаниях', 'Список дел: что уже сделано, что ещё нет (8 предложений)']],
    ['Been или gone', ['<i>She has gone to Paris</i> (она там) vs <i>She has been to Paris</i> (была и вернулась)', 'Разыграть диалог недели — обе роли', 'Рассказать о 5 местах, где вы были']],
    ['Тест + закрепление', ['Пройти тест недели (раздел 🎯) — цель 80%+', 'Написать e-mail другу (60–80 слов): что нового за неделю', 'Проверить каждое have / has + V3']],
    ['Фейнман-урок недели', ['Запись 2–3 мин: что такое Present Perfect «как ребёнку»', 'Шкала: событие в прошлом → стрелка → результат сейчас', 'Список пробелов → план недели 3 (Perfect vs Past Simple)']],
  ],
  progress: ['Формы have + V3', 'Опыт: ever / never', 'Just / already / yet', 'Been / gone'],
  theory: `
    <h3>Идея в одной фразе</h3>
    <p>Present Perfect — это <strong>прошлое, которое важно сейчас</strong>. Нам не важно, <em>когда</em> это было, важно, что у меня <em>есть</em> этот опыт или результат.</p>
    ${tl([['I have lost my keys', 'в прошлом, когда — неважно'], ['now', 'результат: ключей нет', 1]])}
    ${ex('I have lost my keys.', 'Я потерял ключи (и сейчас их у меня нет).')}
    <h3>Аналогия Фейнмана</h3>
    <p>Представьте <strong>чемодан опыта</strong>, который вы носите с собой. Present Perfect рассказывает, что в чемодане лежит: <i>I have been to London. I have read this book.</i> Когда именно вы это туда положили — не говорим.</p>
    <p>В русском такого времени нет, у нас просто «был, читал». Поэтому главный вопрос всегда: <strong>говорю ли я о результате или опыте сейчас?</strong></p>
    ${note('<strong>Правило-проверка:</strong> если в предложении есть точное время в прошлом (<i>yesterday, in 2020, last week</i>) — это <em>не</em> Present Perfect. Подробно — неделя 3.')}
    <h3>Три главные ситуации</h3>
    ${ul(['<b>Опыт</b>: <i>Have you ever eaten sushi?</i>', '<b>Свежая новость с результатом</b>: <i>I’ve just finished my report.</i>', '<b>Сделано / не сделано к этому моменту</b>: <i>Have you done your homework yet?</i>'])}`,
  forms: `
    <h3>have / has + V3 (третья форма)</h3>
    ${tbl(['Лицо', '+', '−', '?'], [
      ['I / you / we / they', 'I’ve worked', 'I <em>haven’t</em> worked', 'Have you worked?'],
      ['he / she / it', 'she’s worked', 'she <em>hasn’t</em> worked', 'Has she worked?']])}
    <h3>Неправильные причастия (V3)</h3>
    ${tbl(['V1', 'V2', 'V3', 'V1', 'V2', 'V3'], [
      ['be', 'was / were', '<em>been</em>', 'eat', 'ate', '<em>eaten</em>'],
      ['do', 'did', '<em>done</em>', 'see', 'saw', '<em>seen</em>'],
      ['go', 'went', '<em>gone</em>', 'write', 'wrote', '<em>written</em>'],
      ['take', 'took', '<em>taken</em>', 'speak', 'spoke', '<em>spoken</em>'],
      ['buy', 'bought', '<em>bought</em>', 'meet', 'met', '<em>met</em>'],
      ['make', 'made', '<em>made</em>', 'forget', 'forgot', '<em>forgotten</em>']])}
    ${note('<strong>Внимание:</strong> <i>she’s</i> может быть <i>she is</i> или <i>she has</i>. Смотрите на следующее слово: <i>she’s working</i> (is), <i>she’s worked</i> (has).')}`,
  usage: `
    <h3>Маркеры и их место</h3>
    ${tbl(['Слово', 'Значение', 'Место', 'Пример'], [
      ['ever', 'когда-нибудь', 'в вопросе, перед V3', '<i>Have you ever been to Scotland?</i>'],
      ['never', 'ни разу', 'перед V3', '<i>I’ve never seen snow.</i>'],
      ['just', 'только что', 'перед V3', '<i>She’s just left.</i>'],
      ['already', 'уже (раньше, чем ждали)', 'перед V3', '<i>We’ve already eaten.</i>'],
      ['yet', 'уже? / ещё не', 'в конце', '<i>Have you finished yet? I haven’t finished yet.</i>']])}
    <h3>Been или gone</h3>
    ${ex('Anna has gone to the shop.', 'Анна ушла в магазин (она сейчас там).')}
    ${ex('Anna has been to the shop.', 'Анна сходила в магазин (уже вернулась).')}
    <h3>Короткие ответы</h3>
    ${ul(['<i>Have you ever been to Wales? — Yes, I have. / No, I haven’t.</i>', '<i>Has he called yet? — Yes, he has. / No, he hasn’t.</i>'])}`,
  compare: `
    ${tbl(['', 'Present Perfect', 'Past Simple'], [
      ['Пример', 'I’ve seen this film.', 'I saw this film last week.'],
      ['Вопрос', 'Есть ли опыт / результат?', 'Когда это было?'],
      ['Время', 'не названо', 'названо (yesterday, in May…)'],
      ['Рус.', 'я видел (этот фильм мне знаком)', 'я видел (на прошлой неделе)']])}
    <h3>Never — одно отрицание</h3>
    ${ex('I have never been to Ireland.', 'Я никогда не был в Ирландии.')}
    ${note('<strong>Частая ошибка русскоговорящих:</strong> двойное отрицание, как в русском «никогда не»: <i>I haven’t never been</i> — неверно. В английском отрицание одно: <i>I’ve never been</i> или <i>I haven’t ever been</i>.')}`,
  dialog: [
    ['S', 'Hi, Mark! Have you ever been to Edinburgh?', 'Привет, Марк! Ты когда-нибудь был в Эдинбурге?'],
    ['M', 'No, I haven’t. But my sister has just come back from there.', 'Нет, не был. Но моя сестра только что оттуда вернулась.'],
    ['S', 'Really? I’ve already booked my tickets for the festival.', 'Правда? А я уже забронировала билеты на фестиваль.'],
    ['M', 'Lucky you! Have you found a hotel yet?', 'Везёт тебе! Ты уже нашла отель?'],
    ['S', 'Not yet. Hotels are expensive, so I’ve written to a friend who lives there.', 'Пока нет. Отели дорогие, так что я написала подруге, которая там живёт.'],
    ['M', 'Good idea. Have you ever tried haggis?', 'Хорошая идея. Ты когда-нибудь пробовала хаггис?'],
    ['S', 'Never! I’ve heard about it, but I’ve never eaten it.', 'Ни разу! Я слышала о нём, но никогда не ела.'],
    ['M', 'Then you have to try it. Where’s Lucy, by the way? I haven’t seen her today.', 'Тогда обязательно попробуй. А где Люси, кстати? Я её сегодня не видел.'],
    ['S', 'She’s gone to the bookshop to buy a guidebook for us!', 'Она ушла в книжный купить нам путеводитель!'],
  ],
  test: [
    { q: 'She ___ her keys. She can’t open the door.', o: ['lost', 'has lost', 'have lost', 'is losing'], a: 1, c: 0, e: 'Результат сейчас (не может открыть) → has lost.' },
    { q: 'V3 of «write»:', o: ['wrote', 'writed', 'written', 'writing'], a: 2, c: 0, e: 'write – wrote – written.' },
    { q: 'Have you ___ been to Scotland?', o: ['ever', 'yet', 'already', 'never'], a: 0, c: 1, e: 'Вопрос об опыте → ever.' },
    { q: 'I ___ seen snow.', o: ['haven’t never', 'have ever', 'never have', 'have never'], a: 3, c: 1, e: 'Одно отрицание: have never + V3.' },
    { q: 'Is Tom here? — No, he ___ to the bank. He’ll be back soon.', o: ['has been', 'has gone', 'went', 'is been'], a: 1, c: 3, e: 'Он сейчас там (ещё не вернулся) → has gone.' },
    { q: 'I’ve ___ been to Paris three times.', o: ['gone', 'yet', 'went', 'already'], a: 3, c: 2, e: 'already — «уже», стоит перед V3.' },
    { q: 'Have you finished your homework ___?', o: ['already', 'just', 'yet', 'ever'], a: 2, c: 2, e: 'yet — в конце вопроса.' },
    { q: 'Wow, look! It ___ stopped raining.', o: ['has just', 'just', 'have just', 'is just'], a: 0, c: 2, e: 'Только что, результат виден → has just + V3.' },
    { q: 'She’s been to Rome. =', o: ['Она сейчас в Риме.', 'Она бывала в Риме.', 'Она едет в Рим.', 'Она в Риме не была.'], a: 1, c: 3, e: 'been to — была и вернулась (опыт).' },
    { q: '«She’s worked here for years.» she’s = ', o: ['she is', 'she was', 'she does', 'she has'], a: 3, c: 0, e: 'После she’s стоит V3 (worked) → she has.' },
  ],
  feynman: {
    task: 'Объясните Present Perfect так, чтобы понял 10-летний ребёнок, без слов «перфект» и «причастие».',
    prompts: ['Что лежит в вашем «чемодане опыта»? Назовите 5 вещей по-английски.', 'Почему <i>I have seen him yesterday</i> — ошибка?', 'Чем been отличается от gone?', 'Где стоят just, already и yet?'],
  },
});
