/* ===== WEEK 12 — A2 Key exam ===== */
COURSE.weeks.push({
  n: 12,
  title: 'A2 Key — подготовка к экзамену',
  tag: 'Итоговое повторение · формат · симуляция · стратегия',
  goal: 'Знать формат экзамена Cambridge A2 Key, пройти полную симуляцию, повторить всю грамматику курса и составить личную стратегию на день экзамена.',
  days: [
    ['Формат экзамена', ['Изучить структуру A2 Key (раздел «Теория»)', 'Скачать бесплатные образцы заданий на сайте Cambridge English', 'Засечь время: Reading and Writing — 60 минут']],
    ['Reading and Writing', ['Решить образец Reading (части 1–5)', 'Написать e-mail (Part 6) и историю (Part 7)', 'Проверить тексты по чек-листу недели 11']],
    ['Listening', ['Образец Listening (≈30 мин, 5 частей)', 'Слушать BBC Learning English по 20 мин', 'Разобрать ошибки: что помешало понять?']],
    ['Speaking', ['Part 1: рассказ о себе (имя, дом, учёба, хобби)', 'Part 2: обсуждение картинок с партнёром', 'Записать себя на видео и пересмотреть']],
    ['Грамматическое повторение', ['Времена: Past Continuous, Present Perfect, будущее', 'Структуры: модальные, условия, пассив, -ing / to, used to', 'Итоговый тест (раздел 🎯)']],
    ['Полная симуляция', ['Все части подряд с таймером', 'Самооценка по критериям', 'Список «последних пробелов»']],
    ['Фейнман-урок курса', ['Объяснить всю грамматику A2 за 10 минут', 'Одна страница-шпаргалка', 'План на уровень B1 (B1 Preliminary)']],
  ],
  progress: ['Формат', 'Грамматика: времена', 'Грамматика: структуры', 'Стратегия'],
  theory: `
    <h3>Что такое A2 Key</h3>
    <p><b>A2 Key</b> (раньше — KET, Key English Test) — экзамен Cambridge English уровня <b>A2</b>. Подтверждает, что вы справляетесь с простыми повседневными ситуациями: понимаете объявления, пишете короткие сообщения, общаетесь на бытовые темы.</p>
    ${tbl(['Часть', 'Что проверяют', 'Время (ориентир.)'], [
      ['Reading and Writing', '7 частей: 5 на чтение, e-mail (25+ слов), история по 3 картинкам (35+ слов)', '≈ 60 мин'],
      ['Listening', '5 частей: короткие диалоги, объявления, разговоры', '≈ 30 мин'],
      ['Speaking', 'Беседа в паре с другим кандидатом и экзаменатором: о себе и по картинкам', '≈ 8–10 мин']])}
    ${tbl(['Балл (Cambridge English Scale)', 'Результат'], [
      ['140–150', 'Grade A — уровень B1'],
      ['133–139', 'Grade B — уровень A2'],
      ['120–132', 'Grade C — уровень A2'],
      ['100–119', 'сертификат уровня A1']])}
    ${note('<strong>Проверьте актуальные данные</strong> (время, части, баллы, цены и даты) на официальном сайте Cambridge English и в местном экзаменационном центре — формат может обновляться.')}
    ${note('<strong>Если нужен экзамен для визы в Великобританию:</strong> для некоторых виз требуется тест A2 по говорению и аудированию у одобренного провайдера (SELT). A2 Key в этот список обычно не входит — проверьте актуальный список на gov.uk.')}
    <h3>Аналогия Фейнмана</h3>
    <p>Экзамен — это не проверка «всего, что вы знаете», а проверка <strong>того, что вы умеете сделать с языком</strong>: понять объявление на вокзале, ответить на письмо друга, договориться о встрече. Тренируйте задачи, а не правила.</p>`,
  forms: `
    <h3>Шпаргалка по всей грамматике курса</h3>
    ${tbl(['Тема', 'Формула', 'Пример'], [
      ['Past Continuous', 'was / were + -ing', 'I was cooking when you called.'],
      ['Present Perfect', 'have / has + V3', 'I’ve never been to Wales.'],
      ['for / since', 'for + период, since + начало', 'I’ve lived here since 2020.'],
      ['Будущее', 'will / going to / am + -ing', 'I’m meeting Jo at 6.'],
      ['Модальные', 'can, might, should, must, have to + V', 'You don’t have to pay.'],
      ['First conditional', 'If + Present, will + V', 'If it rains, I’ll stay in.'],
      ['Second conditional', 'If + Past, would + V', 'If I were you, I’d go.'],
      ['Passive', 'be + V3', 'It was built in 1890.'],
      ['-ing / to', 'enjoy -ing, want to', 'I enjoy swimming.'],
      ['used to', 'used to + V', 'I used to live in Kazan.'],
      ['Relative clauses', 'who / which / where / whose', 'the man who lives here'],
      ['Reported speech', 'шаг назад', 'He said he was tired.']])}`,
  usage: `
    <h3>Стратегия на экзамене</h3>
    ${ul(['<b>Reading:</b> сначала вопросы, потом текст; ищите синонимы, а не одинаковые слова.', '<b>Writing:</b> ответьте на все три пункта e-mail и опишите все три картинки истории. Следите за минимальным числом слов.', '<b>Listening:</b> каждая запись звучит дважды; в первый раз — общий смысл, во второй — детали.', '<b>Speaking:</b> отвечайте развёрнуто (2–3 предложения), задавайте вопросы партнёру, переспрашивайте: <i>Sorry, could you repeat that, please?</i>'])}
    <h3>Полезные фразы для Speaking</h3>
    ${ul(['<i>My name’s… I’m from Russia and I live in…</i>', '<i>I think… because… / In my opinion…</i>', '<i>What about you? Do you agree?</i>', '<i>I prefer… because… / I’d like to… if I had time.</i>'])}
    <h3>Полезные фразы для Writing</h3>
    ${ul(['<i>Thanks for your email. / It was great to hear from you.</i>', '<i>Would you like to…? / Shall we meet at…?</i>', '<i>I can’t wait to see you! / See you soon!</i>', '<i>One day… First… Then… In the end…</i>'])}`,
  compare: `
    <h3>Топ-10 ошибок русскоговорящих на A2</h3>
    ${tbl(['Ошибка', 'Правильно'], [
      ['I live here for five years.', 'I’<em>ve lived</em> here for five years.'],
      ['I have seen him yesterday.', 'I <em>saw</em> him yesterday.'],
      ['I am agree.', 'I <em>agree</em>.'],
      ['If it will rain, we will stay.', 'If it <em>rains</em>, we will stay.'],
      ['If I would have money, I would buy it.', 'If I <em>had</em> money, I would buy it.'],
      ['You mustn’t come (= не обязательно).', 'You <em>don’t have to</em> come.'],
      ['The house built in 1990.', 'The house <em>was</em> built in 1990.'],
      ['I enjoy to swim.', 'I enjoy <em>swimming</em>.'],
      ['I came here for study.', 'I came here <em>to</em> study.'],
      ['He said me that he is tired.', 'He <em>told</em> me that he <em>was</em> tired.']])}`,
  dialog: [
    ['E', 'Good morning. What’s your name?', 'Доброе утро. Как вас зовут?'],
    ['C', 'Good morning. My name’s Olga Petrova.', 'Доброе утро. Меня зовут Ольга Петрова.'],
    ['E', 'Where do you live, Olga?', 'Где вы живёте, Ольга?'],
    ['C', 'I live in Manchester. I’ve lived here for two years. Before that I used to live in Moscow.', 'Я живу в Манчестере. Живу здесь два года. До этого я жила в Москве.'],
    ['E', 'Tell me about something you enjoy doing at the weekend.', 'Расскажите, чем вы любите заниматься в выходные.'],
    ['C', 'I really enjoy cooking for my friends. Last Saturday I made a Russian dinner, and everyone loved it.', 'Я очень люблю готовить для друзей. В прошлую субботу я приготовила русский ужин, и всем понравилось.'],
    ['E', 'What are you going to do after the exam?', 'Что вы собираетесь делать после экзамена?'],
    ['C', 'I’m going to start a B1 course. If I pass, I’ll celebrate! Sorry, could you repeat the last question?', 'Я собираюсь пойти на курс B1. Если сдам, отпраздную! Извините, можете повторить последний вопрос?'],
  ],
  test: [
    { q: 'How many parts does A2 Key have?', o: ['two', 'three', 'four', 'five'], a: 1, c: 0, e: 'Reading and Writing, Listening, Speaking.' },
    { q: 'I was walking home ___ it started to rain.', o: ['when', 'while', 'during', 'since'], a: 0, c: 1, e: 'Past Continuous + when + короткое событие (неделя 1).' },
    { q: 'She ___ in this company since 2019.', o: ['works', 'worked', 'is working', 'has worked'], a: 3, c: 1, e: 'since + до сих пор → Present Perfect (неделя 3).' },
    { q: 'I ___ my aunt on Sunday. We’ve arranged it.', o: ['visit', 'will visit', 'am visiting', 'visited'], a: 2, c: 1, e: 'Договорённость → Present Continuous (неделя 4).' },
    { q: 'You ___ pay. The museum is free.', o: ['mustn’t', 'don’t have to', 'can’t', 'shouldn’t to'], a: 1, c: 2, e: 'Не обязательно → don’t have to (неделя 5).' },
    { q: 'If I ___ a car, I would drive to work.', o: ['had', 'have', 'would have', 'will have'], a: 0, c: 2, e: 'Second conditional (неделя 7).' },
    { q: 'This bridge ___ in 1890.', o: ['built', 'is built', 'has built', 'was built'], a: 3, c: 2, e: 'Past Passive (неделя 8).' },
    { q: 'I’m interested in ___ a new language.', o: ['learn', 'learning', 'to learn', 'learned'], a: 1, c: 2, e: 'Предлог + -ing (неделя 9).' },
    { q: 'In Speaking, if you don’t understand the question, you should…', o: ['stay silent', 'answer in Russian', 'say «Sorry, could you repeat that?»', 'change the topic'], a: 2, c: 3, e: 'Переспросить — это часть общения, а не ошибка.' },
    { q: 'In Writing Part 7 (story), you should…', o: ['write about all three pictures', 'write about one picture', 'write 200 words', 'copy the instructions'], a: 0, c: 3, e: 'Опишите все три картинки, 35+ слов.' },
  ],
  feynman: {
    task: 'Итоговый урок: объясните всю грамматику A2 за 10 минут.',
    prompts: ['Как выбрать между Past Simple, Past Continuous и Present Perfect?', 'Как не перепутать <i>If it rains</i> и <i>If it rained</i>?', 'Какие три ошибки вы делали чаще всего за курс и как их больше не делать?', 'Что вы будете делать в первые 5 минут экзамена?'],
  },
});
