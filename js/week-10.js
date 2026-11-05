/* ===== WEEK 10 — Used to + relative clauses ===== */
COURSE.weeks.push({
  n: 10,
  title: 'Used to и относительные предложения',
  tag: 'used to · didn’t use to · who / which / that / where / whose',
  goal: 'Рассказывать о прошлых привычках и о том, как всё изменилось (used to). Описывать людей, вещи и места одним длинным предложением с who, which, that, where, whose.',
  days: [
    ['Теория — «раньше было так»', ['Прочитать раздел «Теория»: used to как старая фотография', 'Сравнить: <i>I used to smoke</i> vs <i>I smoked</i>', 'Написать 5 предложений о своём детстве с used to']],
    ['Used to: формы', ['<i>used to + V</i>, отрицание <i>didn’t use to</i>, вопрос <i>Did you use to…?</i>', 'Произношение [ˈjuːs tə]', 'Сравнить «тогда и сейчас»: 6 пар предложений']],
    ['Who, which, that', ['who — люди, which — вещи, that — и то и другое', '<i>The woman who lives next door is a doctor.</i>', 'Описать 5 членов семьи одним предложением каждого']],
    ['Where и whose', ['where — место, whose — чей', '<i>That’s the café where we met.</i>', 'Игра «Угадай слово»: объяснить 8 слов через who / which / where']],
    ['Диалог и аудирование', ['Разыграть диалог «How has your town changed?» — обе роли', 'Послушать рассказ пожилого человека о детстве (BBC) и найти used to', 'Рассказать, как изменился ваш город']],
    ['Тест + закрепление', ['Пройти тест недели (раздел 🎯) — цель 80%+', 'Написать текст (80–100 слов): <i>When I was a child…</i>', 'Соединить 6 пар коротких предложений через who / which']],
    ['Фейнман-урок недели', ['Запись 2–3 мин: used to и «слова-мостики»', 'Таблица: кто — who, что — which, где — where, чей — whose', 'Список пробелов → план недели 11 (косвенная речь и письмо)']],
  ],
  progress: ['Used to', 'Формы used to', 'Who / which / that', 'Where / whose'],
  theory: `
    <h3>Идея в одной фразе</h3>
    <p><strong>Used to</strong> рассказывает о том, что <strong>было регулярно раньше, а сейчас уже нет</strong>. Относительные слова <strong>who, which, where</strong> склеивают два предложения в одно.</p>
    ${tl([['I used to live in a village', 'раньше, долго', 1], ['now I live in London', 'сейчас — по-другому']])}
    ${ex('I used to play football every day.', 'Раньше я играл в футбол каждый день (теперь нет).')}
    ${ex('The man who lives next door is a pilot.', 'Мужчина, который живёт по соседству, — пилот.')}
    <h3>Аналогия Фейнмана</h3>
    <p><strong>Used to</strong> — это <strong>старая фотография</strong>: «вот так мы жили тогда». На фото привычка или состояние, которых больше нет.</p>
    <p><strong>Who / which / where</strong> — это <strong>клей</strong>. Вместо двух коротких фраз <i>I have a friend. She lives in Spain.</i> мы говорим одну: <i>I have a friend who lives in Spain.</i></p>
    ${note('<strong>Правило-проверка:</strong> по-русски можно сказать «раньше я (обычно)…, а теперь нет»? Нужен used to. В русском «который» — один, а в английском выбираем: для людей who, для вещей which.')}`,
  forms: `
    <h3>Used to + V</h3>
    ${tbl(['', 'Пример', 'Рус.'], [
      ['+', 'I used to have long hair.', 'Раньше у меня были длинные волосы.'],
      ['−', 'I <em>didn’t use to</em> like coffee.', 'Раньше я не любил кофе.'],
      ['?', '<em>Did</em> you <em>use to</em> live here?', 'Ты раньше жил здесь?']])}
    ${note('<strong>Внимание:</strong> после did — <i>use to</i> без -d: <i>didn’t use to</i>, <i>Did you use to…?</i> Произносится одинаково: [ˈjuːs tə].')}
    <h3>Относительные слова</h3>
    ${tbl(['Слово', 'Для чего', 'Пример'], [
      ['who', 'люди', 'the girl <em>who</em> won the prize'],
      ['which', 'вещи, животные', 'the book <em>which</em> I’m reading'],
      ['that', 'люди и вещи (разговорно)', 'the film <em>that</em> we saw'],
      ['where', 'места', 'the hotel <em>where</em> we stayed'],
      ['whose', 'чей', 'the man <em>whose</em> car was stolen']])}`,
  usage: `
    <h3>Used to: тогда и сейчас</h3>
    ${ul(['<i>People used to write letters. Now they send messages.</i>', '<i>This shop used to be a cinema.</i>', '<i>I didn’t use to like vegetables, but now I love them.</i>'])}
    <h3>Определения через who / which / where</h3>
    ${ul(['<i>A dentist is a person who looks after your teeth.</i>', '<i>A fridge is a machine which keeps food cold.</i>', '<i>A library is a place where you can borrow books.</i>'])}
    ${note('<strong>Полезно на экзамене:</strong> если забыли слово, объясните его: <i>It’s a thing which you use to open bottles.</i> Это засчитывается как успешная коммуникация.')}
    <h3>Когда who / which / that можно пропустить</h3>
    ${ex('The film (that) we watched was great.', 'Фильм, который мы смотрели, был отличный (we — новое подлежащее, слово можно опустить).')}
    ${ex('The film that won the Oscar was great.', 'Фильм, который получил «Оскар», был отличный (здесь пропустить нельзя).')}`,
  compare: `
    ${tbl(['', 'used to', 'Past Simple'], [
      ['Пример', 'I used to swim every day.', 'I swam yesterday.'],
      ['Смысл', 'регулярно в прошлом, сейчас нет', 'одно событие или факт'],
      ['Один раз?', 'нельзя: <i>I used to go there once</i>', 'можно'],
      ['Рус.', 'раньше (бывало) плавал', 'плавал / поплавал']])}
    <h3>Used to и usually</h3>
    ${ex('I used to get up at 6.', 'Раньше я вставал в 6 (теперь нет).')}
    ${ex('I usually get up at 6.', 'Я обычно встаю в 6 (сейчас).')}
    ${note('<strong>Частые ошибки русскоговорящих:</strong> использовать used to для настоящего: <i>I use to drink tea</i> → <i>I usually drink tea</i>. И <i>which</i> для людей: <i>the man which</i> → <i>the man <em>who</em></i>.')}`,
  dialog: [
    ['N', 'Grandad, what was this town like when you were young?', 'Дедушка, каким был этот город, когда ты был молодым?'],
    ['G', 'Very different! There used to be a cinema where that supermarket is now.', 'Совсем другим! Там, где сейчас супермаркет, раньше был кинотеатр.'],
    ['N', 'Did you use to go there a lot?', 'Ты часто туда ходил?'],
    ['G', 'Every Saturday. That’s the place where I met your grandma.', 'Каждую субботу. Именно там я познакомился с твоей бабушкой.'],
    ['N', 'Really? And did people use to have cars?', 'Правда? А у людей были машины?'],
    ['G', 'Not many. Most people used to walk or cycle. We didn’t use to have a car until 1975.', 'Немного. Большинство ходили пешком или ездили на велосипеде. У нас не было машины до 1975-го.'],
    ['N', 'Who’s the man in this photo?', 'Кто этот мужчина на фото?'],
    ['G', 'That’s Mr Brown, the teacher who taught me English. His son, whose shop is on the corner, still lives here.', 'Это мистер Браун, учитель, который учил меня английскому. Его сын, чей магазин на углу, до сих пор здесь живёт.'],
  ],
  test: [
    { q: 'I ___ live in a village, but now I live in a city.', o: ['use to', 'used to', 'was used to', 'using to'], a: 1, c: 0, e: 'Прошлое, которого больше нет → used to + V.' },
    { q: 'I ___ like coffee, but now I love it.', o: ['didn’t used to', 'not used to', 'didn’t use to', 'don’t use to'], a: 2, c: 1, e: 'Отрицание: didn’t use to (без -d).' },
    { q: '___ you use to play an instrument?', o: ['Did', 'Were', 'Do', 'Used'], a: 0, c: 1, e: 'Вопрос: Did you use to…?' },
    { q: 'I ___ get up at 7. That’s my routine now.', o: ['used to', 'use to', 'am used', 'usually'], a: 3, c: 0, e: 'Привычка в настоящем → usually, не used to.' },
    { q: 'The woman ___ lives next door is a doctor.', o: ['which', 'who', 'where', 'whose'], a: 1, c: 2, e: 'Человек → who.' },
    { q: 'This is the phone ___ I bought yesterday.', o: ['who', 'where', 'which', 'whose'], a: 2, c: 2, e: 'Вещь → which (или that).' },
    { q: 'That’s the restaurant ___ we had our first date.', o: ['where', 'which', 'who', 'whose'], a: 0, c: 3, e: 'Место → where.' },
    { q: 'He’s the man ___ car was stolen.', o: ['who', 'which', 'that', 'whose'], a: 3, c: 3, e: 'Чей → whose.' },
    { q: 'A dentist is a person ___ looks after your teeth.', o: ['which', 'whose', 'who', 'where'], a: 2, c: 2, e: 'Определение человека → who.' },
    { q: 'This shop ___ be a cinema.', o: ['used to', 'use to', 'was use to', 'used'], a: 0, c: 0, e: 'Было раньше, сейчас нет → used to be.' },
  ],
  feynman: {
    task: 'Объясните used to («старая фотография») и who / which / where («клей») так, чтобы понял 10-летний ребёнок.',
    prompts: ['Почему нельзя сказать <i>I use to drink tea every day</i> о настоящем?', 'Почему <i>didn’t use to</i>, а не <i>didn’t used to</i>?', 'Как выбрать между who, which, where и whose?', 'Объясните 3 слова через who / which / where, не называя их.'],
  },
});
