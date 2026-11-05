/* ===== WEEK 3 — Present Perfect vs Past Simple, for / since ===== */
COURSE.weeks.push({
  n: 3,
  title: 'Present Perfect или Past Simple · for / since',
  tag: 'Когда — неважно или важно · How long…? · for / since',
  goal: 'Без ошибок выбирать между Present Perfect и Past Simple, говорить, как долго что-то длится до сих пор (for / since, How long…?), переходить от опыта к подробностям: <i>Have you ever…? — When did you…?</i>',
  days: [
    ['Теория — открытое и закрытое время', ['Прочитать раздел «Теория»: «открытое окно» и «закрытая дверь»', 'Разделить 20 маркеров времени на две колонки', 'Аналогия Фейнмана: фото в альбоме и подпись под фото']],
    ['Опыт → подробности', ['Схема: <i>Have you ever…?</i> → <i>When / Where did you…?</i>', 'Разыграть 5 мини-диалогов по схеме', 'Записать 3 своих истории по схеме']],
    ['For и since', ['<i>for</i> + период (two years), <i>since</i> + точка начала (2020, Monday)', '<i>How long have you lived here?</i>', 'Составить 8 предложений о себе с for / since']],
    ['This week, today, recently', ['Незаконченный период → Present Perfect: <i>I’ve drunk three coffees today.</i>', 'Законченный период → Past Simple: <i>I drank three coffees yesterday.</i>', 'Упражнение: выбрать время в 10 предложениях']],
    ['Диалог и аудирование', ['Разыграть диалог «How long have you…?» — обе роли', 'Послушать интервью и выписать вопросы How long…?', 'Ответить на вопросы интервью о себе']],
    ['Тест + закрепление', ['Пройти тест недели (раздел 🎯) — цель 80%+', 'Написать текст «About me» (80–100 слов): где живёте, работаете, что видели', 'Проверить: у каждого yesterday / ago — Past Simple']],
    ['Фейнман-урок недели', ['Запись 2–3 мин: как выбрать время за 3 секунды', 'Нарисовать схему-решение «есть точное время?»', 'Список пробелов → план недели 4 (будущее)']],
  ],
  progress: ['Выбор времени', 'Маркеры времени', 'For / since', 'How long…?'],
  theory: `
    <h3>Идея в одной фразе</h3>
    <p>Если событие привязано к <strong>законченному моменту в прошлом</strong> — Past Simple. Если период <strong>ещё открыт</strong> или время неважно — Present Perfect.</p>
    ${tl([['2019', 'I moved to London', 1], ['now', 'I’ve lived here for 6 years']])}
    ${ex('I moved to London in 2019. I’ve lived here since then.', 'Я переехал в Лондон в 2019-м. С тех пор живу здесь (и сейчас тоже).')}
    <h3>Аналогия Фейнмана</h3>
    <p>Present Perfect — это <strong>открытое окно</strong>: из прошлого дует ветер в сегодняшнюю комнату. Past Simple — <strong>закрытая дверь</strong>: событие осталось там, с подписью «вчера», «в 2019 году».</p>
    <p>Или фотоальбом: <i>I’ve been to Rome</i> — «у меня есть фото из Рима». А как только вы читаете подпись под фото — <i>I went there in 2018</i> — вы переходите в Past Simple.</p>
    ${note('<strong>Правило-проверка:</strong> можно ли спросить «когда?» и получить точный ответ из прошлого (<i>yesterday, ago, last…, in 2010</i>)? Если ответ уже есть в предложении — Past Simple.')}
    <h3>Русская ловушка: «живу пять лет»</h3>
    <p>По-русски мы говорим в настоящем: «я живу здесь пять лет». В английском это <strong>Present Perfect</strong>: <i>I’ve lived here for five years.</i> Фраза <i>I live here for five years</i> — ошибка.</p>`,
  forms: `
    <h3>For и since</h3>
    ${tbl(['', 'for (период)', 'since (точка начала)'], [
      ['Время', 'for ten minutes', 'since 9 o’clock'],
      ['Дни', 'for three days', 'since Monday'],
      ['Годы', 'for two years', 'since 2020'],
      ['Жизнь', 'for ages', 'since I was a child']])}
    <h3>How long…?</h3>
    ${tbl(['Вопрос', 'Ответ'], [
      ['How long have you lived here?', 'I’ve lived here <em>for</em> six years.'],
      ['How long has she worked at the bank?', 'She’s worked there <em>since</em> 2021.'],
      ['How long have you known each other?', 'We’ve known each other <em>since</em> school.']])}
    <h3>Маркеры времени</h3>
    ${tbl(['Past Simple', 'Present Perfect'], [
      ['yesterday', 'ever, never'],
      ['… ago', 'just, already, yet'],
      ['last week / month / year', 'so far, recently'],
      ['in 2015, in May', 'this week (ещё идёт), today'],
      ['When…?', 'How long…? (for / since)']])}`,
  usage: `
    <h3>Схема разговора: опыт → подробности</h3>
    ${ex('Have you ever been to Japan? — Yes, I have.', 'Ты бывал в Японии? — Да.')}
    ${ex('When did you go there? — I went there two years ago.', 'Когда ты туда ездил? — Два года назад.')}
    <p>Первый вопрос — про опыт (Present Perfect). Как только речь о конкретной поездке — Past Simple.</p>
    <h3>Открытый и закрытый период</h3>
    ${ul(['<i>I’ve had two coffees this morning.</i> — утро ещё не кончилось.', '<i>I had two coffees this morning.</i> — говорим днём, утро прошло.', '<i>She’s written three books.</i> — она жива и может написать ещё.', '<i>Shakespeare wrote many plays.</i> — период закрыт.'])}
    <h3>Типичные ситуации</h3>
    ${ul(['Знакомство: <i>How long have you lived in Manchester?</i>', 'Собеседование: <i>I’ve worked as a nurse for ten years.</i>', 'Новости: <i>The Prime Minister has arrived in Paris. He arrived at 10 am.</i>'])}`,
  compare: `
    ${tbl(['', 'Present Perfect', 'Past Simple'], [
      ['Пример', 'I’ve lost my phone.', 'I lost my phone yesterday.'],
      ['Период', 'открыт / не указан', 'закрыт / указан'],
      ['Вопрос-слово', 'How long…? Have you ever…?', 'When…? What time…?'],
      ['Нельзя', '<i>I’ve lost it yesterday.</i>', '—']])}
    <h3>Одна жизнь — два времени</h3>
    ${ex('I’ve known Sam for ten years.', 'Я знаю Сэма десять лет (и знаю сейчас).')}
    ${ex('I knew Sam for ten years.', 'Я знал Сэма десять лет (больше не знаю, например, связь потерялась).')}
    ${note('<strong>Частая ошибка русскоговорящих:</strong> <i>I am here since Monday</i> или <i>I live here for two years</i>. Если действие началось в прошлом и продолжается сейчас — Present Perfect: <i>I’ve been here since Monday.</i>')}`,
  dialog: [
    ['K', 'So, Ivan, how long have you lived in Manchester?', 'Итак, Иван, как давно ты живёшь в Манчестере?'],
    ['I', 'I’ve lived here for three years. I moved here in 2022.', 'Я живу здесь три года. Я переехал сюда в 2022-м.'],
    ['K', 'And have you always worked at the hospital?', 'А ты всё время работал в больнице?'],
    ['I', 'No, I’ve only worked there since January. Before that I worked in a pharmacy.', 'Нет, я работаю там только с января. До этого я работал в аптеке.'],
    ['K', 'Have you ever been to a Manchester United match?', 'Ты когда-нибудь был на матче «Манчестер Юнайтед»?'],
    ['I', 'Yes, I have! I went to one last month with my brother.', 'Да! Я ходил на один в прошлом месяце с братом.'],
    ['K', 'Did they win?', 'Они выиграли?'],
    ['I', 'No, they lost. But I’ve bought tickets for the next match already!', 'Нет, проиграли. Но я уже купил билеты на следующий матч!'],
  ],
  test: [
    { q: 'I ___ him yesterday.', o: ['have seen', 'saw', 'see', 'have saw'], a: 1, c: 1, e: 'yesterday — закрытое время → Past Simple.' },
    { q: 'We ___ here since 2020.', o: ['live', 'lived', 'have lived', 'are living'], a: 2, c: 2, e: 'С 2020 и до сих пор → Present Perfect.' },
    { q: 'She has worked here ___ five years.', o: ['since', 'for', 'during', 'ago'], a: 1, c: 2, e: 'Период (five years) → for.' },
    { q: 'I’ve known Kate ___ we were at school.', o: ['since', 'for', 'from', 'ago'], a: 0, c: 2, e: 'Точка начала → since.' },
    { q: '___ have you had this car?', o: ['When', 'How long', 'How much', 'What time'], a: 1, c: 3, e: 'Длительность до сих пор → How long + Present Perfect.' },
    { q: 'Have you ever been to India? — Yes. I ___ there in 2019.', o: ['have gone', 'have been', 'was going', 'went'], a: 3, c: 0, e: 'Конкретная поездка, указан год → Past Simple.' },
    { q: 'Which word goes with Present Perfect?', o: ['ago', 'last year', 'so far', 'yesterday'], a: 2, c: 1, e: 'so far — «пока что, до сих пор» → Present Perfect.' },
    { q: 'Shakespeare ___ many plays.', o: ['wrote', 'has written', 'have written', 'writes'], a: 0, c: 0, e: 'Жизнь автора закончена → Past Simple.' },
    { q: 'How long have you been a teacher? — ___', o: ['For 2015.', 'Since ten years.', 'Ten years ago.', 'Since 2015.'], a: 3, c: 3, e: 'since + год начала.' },
    { q: 'I ___ three coffees today and it’s only 11 am!', o: ['drank', 'drink', 'have drunk', 'had drunk'], a: 2, c: 0, e: 'Сегодня ещё не закончилось → Present Perfect.' },
  ],
  feynman: {
    task: 'Объясните, как за 3 секунды выбрать между <i>I’ve done</i> и <i>I did</i>, так, чтобы понял 10-летний ребёнок.',
    prompts: ['Что такое «открытое окно» и «закрытая дверь»?', 'Почему по-русски «живу пять лет», а по-английски <i>I’ve lived</i>?', 'Чем for отличается от since? Придумайте по 3 примера.', 'Задайте себе вопрос об опыте, а потом вопрос о подробностях.'],
  },
});
