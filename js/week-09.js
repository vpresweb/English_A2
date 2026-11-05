/* ===== WEEK 9 — Verb patterns: -ing or to ===== */
COURSE.weeks.push({
  n: 9,
  title: 'Глагол + -ing или to',
  tag: 'enjoy doing · want to do · good at doing · to для цели',
  goal: 'Правильно соединять два глагола: после одних глаголов идёт -ing, после других — to + глагол. Ставить -ing после предлогов, выражать цель через to. Говорить о вкусах, планах и решениях без ошибок в связках.',
  days: [
    ['Теория — два «моста» между глаголами', ['Прочитать раздел «Теория»: -ing — процесс, to — направление', 'Аналогия Фейнмана: фото и стрелка', 'Выписать 10 глаголов, которые вы часто используете, и проверить их связку']],
    ['Глагол + -ing', ['enjoy, finish, mind, avoid, practise, suggest, keep', '<i>like / love / hate + -ing</i> для общего вкуса', 'Рассказать о 5 вещах, которые вы любите и ненавидите делать']],
    ['Глагол + to', ['want, need, decide, hope, plan, promise, learn, forget, would like', '<i>I’d like to…</i> vs <i>I like …ing</i>', 'Записать 5 решений и планов: <i>I’ve decided to…</i>']],
    ['Предлог + -ing', ['<i>good at / interested in / afraid of / thinking about + -ing</i>', '<i>before / after + -ing</i>: <i>after having lunch</i>', 'Составить 6 предложений о себе с предлогами']],
    ['To для цели', ['<i>I went to the shop to buy milk.</i> — «чтобы»', 'Не <i>for buy</i>! <i>for</i> + существительное: <i>for milk</i>', 'Объяснить 5 своих действий: <i>I learn English to…</i>']],
    ['Тест + закрепление', ['Пройти тест недели (раздел 🎯) — цель 80%+', 'Разыграть диалог недели — обе роли', 'Написать текст (80–100 слов): <i>My free time</i>']],
    ['Фейнман-урок недели', ['Запись 2–3 мин: как угадать -ing или to', 'Карточки: 15 глаголов с правильной связкой', 'Список пробелов → план недели 10 (used to и относительные)']],
  ],
  progress: ['Глагол + -ing', 'Глагол + to', 'Предлог + -ing', 'Цель: to'],
  theory: `
    <h3>Идея в одной фразе</h3>
    <p>Когда два глагола стоят рядом, второй принимает форму <strong>-ing</strong> или <strong>to + глагол</strong>. Какую — решает первый глагол.</p>
    ${ex('I enjoy cooking.', 'Мне нравится готовить (сам процесс).')}
    ${ex('I want to cook tonight.', 'Я хочу приготовить что-нибудь сегодня (направление, план).')}
    <h3>Аналогия Фейнмана</h3>
    <p><strong>-ing</strong> — это <strong>фотография</strong> процесса: вы смотрите на действие как на занятие (<i>enjoy swimming, finish working</i>). <strong>to</strong> — это <strong>стрелка в будущее</strong>: к действию ещё нужно прийти (<i>want to swim, decide to go, hope to see</i>).</p>
    <p>Подсказка работает не всегда, поэтому самые частые глаголы лучше выучить списком, как слова с предлогами.</p>
    ${note('<strong>Правило-проверка:</strong> после предлога — всегда -ing. <i>I’m interested in learning</i>, не <i>in learn</i> и не <i>in to learn</i>.')}`,
  forms: `
    <h3>Глаголы + -ing</h3>
    ${tbl(['Глагол', 'Пример'], [
      ['enjoy', 'I enjoy <em>reading</em>.'],
      ['finish', 'Have you finished <em>eating</em>?'],
      ['mind', 'Do you mind <em>waiting</em>?'],
      ['avoid', 'Try to avoid <em>driving</em> at rush hour.'],
      ['practise', 'You should practise <em>speaking</em>.'],
      ['suggest', 'She suggested <em>going</em> by train.'],
      ['like / love / hate', 'I hate <em>getting up</em> early.']])}
    <h3>Глаголы + to</h3>
    ${tbl(['Глагол', 'Пример'], [
      ['want / need', 'I need <em>to go</em> now.'],
      ['decide', 'We decided <em>to stay</em>.'],
      ['hope / plan', 'I hope <em>to see</em> you soon.'],
      ['promise', 'He promised <em>to call</em>.'],
      ['learn', 'She’s learning <em>to drive</em>.'],
      ['forget', 'Don’t forget <em>to lock</em> the door.'],
      ['would like / would love', 'I’d like <em>to book</em> a table.']])}
    ${note('<strong>Внимание:</strong> <i>I like swimming</i> — я люблю плавать (вообще). <i>I’d like to swim</i> — я бы хотел поплавать (сейчас).')}`,
  usage: `
    <h3>Предлог + -ing</h3>
    ${tbl(['Сочетание', 'Пример'], [
      ['good at', 'She’s good at <em>drawing</em>.'],
      ['interested in', 'I’m interested in <em>learning</em> Spanish.'],
      ['afraid of', 'He’s afraid of <em>flying</em>.'],
      ['thinking about', 'We’re thinking about <em>moving</em>.'],
      ['before / after', 'Wash your hands before <em>eating</em>.'],
      ['look forward to', 'I look forward to <em>hearing</em> from you.']])}
    ${note('<strong>Ловушка:</strong> в <i>look forward to</i> слово <i>to</i> — предлог, поэтому дальше -ing: <i>I look forward to <em>seeing</em> you.</i> Это классическая фраза в конце письма.')}
    <h3>To для цели — «чтобы»</h3>
    ${ex('I went to the bank to get some money.', 'Я пошёл в банк, чтобы снять деньги.')}
    ${ex('I’m learning English to get a better job.', 'Я учу английский, чтобы найти работу получше.')}`,
  compare: `
    ${tbl(['', '-ing', 'to + V'], [
      ['Образ', 'процесс, занятие', 'план, цель, направление'],
      ['Глаголы', 'enjoy, finish, mind, avoid', 'want, decide, hope, promise'],
      ['После предлога', 'всегда', 'никогда'],
      ['Цель', '—', 'I came here to study.']])}
    <h3>Like doing и would like to do</h3>
    ${ex('I like going to the cinema.', 'Я люблю ходить в кино (вообще).')}
    ${ex('I’d like to go to the cinema tonight.', 'Я бы хотел сходить в кино сегодня.')}
    ${note('<strong>Частые ошибки русскоговорящих:</strong> <i>for</i> вместо <i>to</i> для цели: <i>I came for study</i> → <i>I came <em>to</em> study</i>. И инфинитив после enjoy: <i>I enjoy to cook</i> → <i>I enjoy <em>cooking</em></i>.')}`,
  dialog: [
    ['A', 'Hi, Leo! Are you still learning to play the guitar?', 'Привет, Лео! Ты всё ещё учишься играть на гитаре?'],
    ['L', 'Yes, I am. I really enjoy playing, but I’m not very good at singing yet.', 'Да. Мне очень нравится играть, но петь у меня пока плохо получается.'],
    ['A', 'Why did you decide to start?', 'Почему ты решил начать?'],
    ['L', 'I wanted to do something creative after finishing work every day.', 'Хотел заниматься чем-то творческим после работы каждый день.'],
    ['A', 'I’m thinking about taking up a hobby too. Maybe painting.', 'Я тоже думаю найти себе хобби. Может, живопись.'],
    ['L', 'Good idea! You could join a class to meet new people.', 'Хорошая идея! Можно записаться в студию, чтобы познакомиться с новыми людьми.'],
    ['A', 'I’d love to, but I’m afraid of looking silly.', 'С удовольствием, но я боюсь выглядеть глупо.'],
    ['L', 'Don’t worry! Everyone starts somewhere. I look forward to seeing your first picture!', 'Не волнуйся! Все с чего-то начинают. Жду не дождусь твоей первой картины!'],
  ],
  test: [
    { q: 'I enjoy ___ to music.', o: ['listening', 'to listen', 'listen', 'listened'], a: 0, c: 0, e: 'enjoy + -ing.' },
    { q: 'We decided ___ a taxi.', o: ['taking', 'take', 'to take', 'took'], a: 2, c: 1, e: 'decide + to.' },
    { q: 'She’s good at ___ maths problems.', o: ['solve', 'to solve', 'solved', 'solving'], a: 3, c: 2, e: 'После предлога (at) → -ing.' },
    { q: 'I went to the shop ___ some bread.', o: ['for buy', 'to buy', 'for buying', 'buying'], a: 1, c: 3, e: 'Цель «чтобы» → to + V.' },
    { q: 'Have you finished ___ the report?', o: ['writing', 'to write', 'write', 'wrote'], a: 0, c: 0, e: 'finish + -ing.' },
    { q: 'I’d like ___ a table for two, please.', o: ['booking', 'book', 'to book', 'booked'], a: 2, c: 1, e: 'would like + to.' },
    { q: 'I look forward to ___ from you.', o: ['hear', 'to hear', 'heard', 'hearing'], a: 3, c: 2, e: 'look forward to + -ing (to — предлог).' },
    { q: 'Don’t forget ___ the door.', o: ['locking', 'to lock', 'lock', 'locked'], a: 1, c: 1, e: 'forget + to: не забыть сделать.' },
    { q: 'Would you mind ___ the window?', o: ['opening', 'to open', 'open', 'opened'], a: 0, c: 0, e: 'mind + -ing.' },
    { q: 'I’m learning English ___ a better job.', o: ['for get', 'for getting', 'getting', 'to get'], a: 3, c: 3, e: 'Цель → to + V.' },
  ],
  feynman: {
    task: 'Объясните, как выбрать между -ing и to после глагола, с помощью «фотографии» и «стрелки», так, чтобы понял 10-летний ребёнок.',
    prompts: ['Почему <i>I look forward to seeing you</i>, а не <i>to see</i>?', 'Чем <i>I like swimming</i> отличается от <i>I’d like to swim</i>?', 'Как сказать «чтобы» по-английски и почему не for?', 'Назовите по 5 глаголов на -ing и на to.'],
  },
});
