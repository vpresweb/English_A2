/* ===== WEEK 1 — Past Simple vs Past Continuous ===== */
COURSE.weeks.push({
  n: 1,
  title: 'Past Simple и Past Continuous',
  tag: 'Рассказ о прошлом · was/were + -ing · when / while',
  goal: 'Рассказывать историю в прошлом: что происходило (фон) и что случилось (событие). Образовывать Past Continuous, различать его с Past Simple, связывать действия словами when и while.',
  days: [
    ['Повторение Past Simple', ['Правильные глаголы: <i>-ed</i> и три варианта произношения [t] [d] [ɪd]', 'Повторить 30 неправильных глаголов A1 (went, saw, made…)', 'Написать 5 предложений о вчерашнем дне']],
    ['Теория — «процесс в прошлом»', ['Прочитать раздел «Теория»: фон и событие на временной шкале', 'Аналогия Фейнмана: кадр фильма и «стоп-кадр»', 'Ответить на вопрос: <i>What were you doing at 8 pm yesterday?</i>']],
    ['Формы Past Continuous', ['was / were + глагол -ing во всех лицах', 'Отрицание <i>wasn’t / weren’t</i> и вопросы <i>Were you…?</i>', 'Правила -ing: <i>make → making, run → running, lie → lying</i>']],
    ['When и while', ['<i>When</i> + короткое событие, <i>while</i> + длительный процесс', 'Два процесса одновременно: <i>While I was cooking, he was reading.</i>', 'Составить 6 предложений с when и while']],
    ['Диалог и аудирование', ['Разыграть диалог «What happened?» — обе роли', 'Послушать короткую историю (BBC Learning English) и выписать формы', 'Пересказать историю вслух за 1 минуту']],
    ['Тест + закрепление', ['Пройти тест недели (раздел 🎯) — цель 80%+', 'Написать историю (80–100 слов): <i>A day when everything went wrong</i>', 'Подчеркнуть в истории фон и события разными цветами']],
    ['Фейнман-урок недели', ['Запись 2–3 мин: объяснить разницу двух времён «как ребёнку»', 'Нарисовать шкалу: длинная линия (Continuous) и точка (Simple)', 'Список пробелов → план недели 2 (Present Perfect)']],
  ],
  progress: ['Формы Past Continuous', 'Фон и событие', 'When / while', 'Past Simple'],
  theory: `
    <h3>Идея в одной фразе</h3>
    <p>Past Continuous — это <strong>процесс в прошлом</strong>, который уже шёл, когда случилось что-то ещё. Past Simple — <strong>законченное событие</strong>, точка на шкале.</p>
    ${tl([['was reading', 'процесс (фон)', 1], ['the phone rang', 'событие'], ['now', 'сейчас']])}
    ${ex('I was reading when the phone rang.', 'Я читал, когда зазвонил телефон (чтение шло, звонок его прервал).')}
    <h3>Аналогия Фейнмана</h3>
    <p>Представьте фильм. Past Continuous — это <strong>декорации и то, что уже движется в кадре</strong>: идёт дождь, люди разговаривают. Past Simple — это <strong>событие сюжета</strong>: дверь открылась, вошёл герой.</p>
    <p>В русском мы различаем это видом глагола: «читал» (процесс) и «прочитал» (результат). В английском похожую работу делают два времени.</p>
    ${note('<strong>Правило-проверка:</strong> если по-русски можно сказать «в тот момент шёл процесс…» — скорее всего нужен Past Continuous.')}
    <h3>Что ещё умеет Past Continuous</h3>
    ${ul(['Действие в конкретный момент прошлого: <i>At 7 o’clock I was having breakfast.</i>', 'Два процесса одновременно: <i>While she was working, I was cooking.</i>', 'Фон в начале истории: <i>It was raining and the wind was blowing.</i>'])}`,
  forms: `
    <h3>Past Continuous: was / were + -ing</h3>
    ${tbl(['Лицо', '+', '−', '?'], [
      ['I', 'I was working', 'I <em>wasn’t</em> working', 'Was I working?'],
      ['you', 'you were working', 'you <em>weren’t</em> working', 'Were you working?'],
      ['he / she / it', 'she was working', 'she wasn’t working', 'Was she working?'],
      ['we', 'we were working', 'we weren’t working', 'Were we working?'],
      ['they', 'they were working', 'they weren’t working', 'Were they working?']])}
    <h3>Правописание -ing</h3>
    ${tbl(['Правило', 'Пример'], [
      ['обычно + ing', 'read → reading, play → playing'],
      ['немая -e уходит', 'make → <em>making</em>, write → <em>writing</em>'],
      ['гласная + согласная под ударением → удвоение', 'run → <em>running</em>, stop → <em>stopping</em>'],
      ['-ie → -y', 'lie → <em>lying</em>, die → <em>dying</em>']])}
    <h3>Неправильные глаголы (Past Simple), которые нужны для историй</h3>
    ${tbl(['Глагол', 'Past', 'Глагол', 'Past'], [
      ['break', '<em>broke</em>', 'fall', '<em>fell</em>'],
      ['hear', '<em>heard</em>', 'lose', '<em>lost</em>'],
      ['ring', '<em>rang</em>', 'find', '<em>found</em>'],
      ['leave', '<em>left</em>', 'catch', '<em>caught</em>'],
      ['meet', '<em>met</em>', 'forget', '<em>forgot</em>']])}
    ${note('<strong>Внимание:</strong> глаголы состояния (know, like, want, believe) почти не бывают в Continuous: <i>I knew the answer</i>, а не <i>I was knowing</i>.')}`,
  usage: `
    <h3>When и while</h3>
    ${tbl(['Слово', 'Обычно с чем', 'Пример'], [
      ['when', 'короткое событие (Past Simple)', '<i>I was cooking when the lights went out.</i>'],
      ['while', 'длительный процесс (Past Continuous)', '<i>While I was cooking, the lights went out.</i>'],
      ['while … while', 'два процесса параллельно', '<i>While I was cooking, my son was doing his homework.</i>']])}
    ${ex('When the film started, we were still buying popcorn.', 'Когда фильм начался, мы ещё покупали попкорн.')}
    <h3>Цепочка событий — только Past Simple</h3>
    ${ex('He got up, had a shower and left the house.', 'Он встал, принял душ и вышел из дома (одно за другим).')}
    <h3>Типичные ситуации</h3>
    ${ul(['Рассказ о происшествии: <i>I was crossing the road when I saw the accident.</i>', 'Алиби: <i>At 10 pm I was watching TV with my wife.</i>', 'Начало истории: <i>The sun was shining and the birds were singing.</i>'])}`,
  compare: `
    ${tbl(['', 'Past Simple', 'Past Continuous'], [
      ['Пример', 'I cooked dinner.', 'I was cooking dinner.'],
      ['Вопрос', 'Что случилось?', 'Что происходило в тот момент?'],
      ['На шкале', 'точка', 'отрезок'],
      ['Рус.', 'приготовил', 'готовил (в тот момент)']])}
    <h3>Одно событие — три оптики</h3>
    ${ex('I cooked dinner at 7.', 'Я приготовил ужин в 7 (факт).')}
    ${ex('At 7 I was cooking dinner.', 'В 7 я готовил ужин (процесс в тот момент).')}
    ${ex('I was cooking dinner when you called.', 'Я готовил ужин, когда ты позвонил (процесс + событие).')}
    ${note('<strong>Частая ошибка русскоговорящих:</strong> ставить Past Simple в фон: <i>When you called, I cooked dinner</i> значит «когда ты позвонил, я (начал и) приготовил ужин». Для «я как раз готовил» нужно <i>I was cooking</i>.')}`,
  dialog: [
    ['A', 'Hi, Tom! Why were you late for work this morning?', 'Привет, Том! Почему ты сегодня утром опоздал на работу?'],
    ['T', 'You won’t believe it. I was waiting for the bus when it started to rain.', 'Не поверишь. Я ждал автобус, и тут начался дождь.'],
    ['A', 'Oh no. Didn’t you have an umbrella?', 'О нет. У тебя не было зонта?'],
    ['T', 'No, I left it at home. While I was running to a café, I dropped my phone.', 'Нет, я оставил его дома. Пока я бежал в кафе, я уронил телефон.'],
    ['A', 'Did it break?', 'Он разбился?'],
    ['T', 'The screen broke. And when I finally got to the station, the train was leaving.', 'Экран разбился. А когда я наконец добрался до станции, поезд уже отходил.'],
    ['A', 'What a morning! What were you doing at nine, then?', 'Ну и утро! А что ты делал в девять?'],
    ['T', 'I was sitting in a café, drinking coffee and waiting for the next train!', 'Сидел в кафе, пил кофе и ждал следующий поезд!'],
  ],
  test: [
    { q: 'I ___ TV when the lights went out.', o: ['watched', 'was watching', 'am watching', 'were watching'], a: 1, c: 1, e: 'Процесс, который прервало событие → was watching.' },
    { q: 'They ___ football at 5 pm yesterday.', o: ['were playing', 'was playing', 'played', 'are playing'], a: 0, c: 0, e: 'They → were + -ing; конкретный момент в прошлом.' },
    { q: '___ you sleeping when I called?', o: ['Did', 'Was', 'Were', 'Are'], a: 2, c: 0, e: 'Вопрос в Past Continuous: Were you + -ing?' },
    { q: 'Spelling: run → ___', o: ['runing', 'runned', 'ruing', 'running'], a: 3, c: 0, e: 'Короткий глагол «гласная + согласная» → удвоение: running.' },
    { q: '___ I was cooking, my son was doing his homework.', o: ['When', 'While', 'During', 'Then'], a: 1, c: 2, e: 'Два параллельных процесса → while.' },
    { q: 'She was crossing the street ___ she saw an old friend.', o: ['while', 'during', 'when', 'until'], a: 2, c: 2, e: 'Короткое событие (saw) → when.' },
    { q: 'He got up, ___ a shower and left.', o: ['was having', 'has', 'is having', 'had'], a: 3, c: 3, e: 'Цепочка событий одно за другим → Past Simple.' },
    { q: 'Past Simple of «catch»:', o: ['caught', 'catched', 'cought', 'catching'], a: 0, c: 3, e: 'catch – caught – caught.' },
    { q: 'It ___ and the wind was blowing. (начало истории)', o: ['rained', 'was raining', 'rains', 'has rained'], a: 1, c: 1, e: 'Фон в начале истории → Past Continuous.' },
    { q: 'I ___ the answer, so I put my hand up.', o: ['was knowing', 'knowed', 'know', 'knew'], a: 3, c: 3, e: 'know — глагол состояния, не бывает в Continuous: knew.' },
  ],
  feynman: {
    task: 'Объясните разницу между <i>I was cooking</i> и <i>I cooked</i> так, чтобы понял 10-летний ребёнок, без слова «время».',
    prompts: ['Нарисуйте шкалу: где точка, а где отрезок? Приведите пример из своей жизни.', 'Почему нельзя сказать <i>I was knowing</i>?', 'Когда ставим when, а когда while?', 'Расскажите вслух историю из 5 предложений: 2 фона и 3 события.'],
  },
});
