/* ===== WEEK 11 — Reported speech, linking words and writing ===== */
COURSE.weeks.push({
  n: 11,
  title: 'Косвенная речь, связки и письмо',
  tag: 'said / told · сдвиг времён · because, so, although · e-mail и история',
  goal: 'Пересказывать чужие слова (he said that…, she told me…), соединять мысли связками, писать короткий e-mail (25+ слов) и историю по картинкам (35+ слов) — как в письменной части A2 Key.',
  days: [
    ['Теория — пересказ', ['Прочитать раздел «Теория»: сдвиг на шаг назад', 'said или told: кому сказали', 'Пересказать 5 фраз из вчерашних разговоров']],
    ['Сдвиг времён', ['am / is → was, will → would, can → could, Present Simple → Past Simple', 'Меняются и слова: <i>today → that day, here → there</i>', 'Перевести 6 прямых фраз в косвенные']],
    ['Связки', ['and, but, so, because, although, then, after that, finally', 'Соединить 10 пар коротких предложений', 'Порядок истории: first → then → after that → finally']],
    ['E-mail (Writing Part 6)', ['Структура: приветствие → 3 пункта задания → прощание', 'Фразы: <i>Thanks for your email. / Can’t wait to see you. / Love, …</i>', 'Написать 2 e-mail по 30–40 слов']],
    ['История по картинкам (Writing Part 7)', ['3 картинки → 3 части истории', 'Past Simple + Past Continuous + связки', 'Написать 2 истории по 40–50 слов']],
    ['Тест + закрепление', ['Пройти тест недели (раздел 🎯) — цель 80%+', 'Разыграть диалог недели — обе роли', 'Проверить свои тексты по чек-листу из «Употребления»']],
    ['Фейнман-урок недели', ['Запись 2–3 мин: как пересказать чужие слова', 'Шпаргалка «связки» на одну страницу', 'Список пробелов → план недели 12 (экзамен A2 Key)']],
  ],
  progress: ['Said / told', 'Сдвиг времён', 'Связки', 'E-mail и история'],
  theory: `
    <h3>Идея в одной фразе</h3>
    <p>Когда мы пересказываем чужие слова в прошлом, время в них обычно <strong>сдвигается на шаг назад</strong>: «я устал» → «он сказал, что устал» → <i>He said (that) he <em>was</em> tired.</i></p>
    ${tl([['"I am tired."', 'прямая речь'], ['He said he was tired.', 'косвенная речь', 1]])}
    ${ex('"I’ll call you," she said. → She said she would call me.', '«Я тебе позвоню», — сказала она. → Она сказала, что позвонит мне.')}
    <h3>Аналогия Фейнмана</h3>
    <p>Представьте, что слова — это <strong>письмо, которое долго шло</strong>. Когда вы его пересказываете, всё уже немного в прошлом, поэтому каждое время делает <strong>шаг назад</strong>: am → was, will → would, can → could.</p>
    <p>В русском времена не сдвигаются: «он сказал, что устал / что устаёт». Поэтому англичанину кажется естественным то, что нам кажется лишним.</p>
    ${note('<strong>Said или told:</strong> <i>said</i> — без «кому»: <i>He said that…</i> <i>told</i> — всегда с «кому»: <i>He told <em>me</em> that…</i> Нельзя <i>He said me</i>.')}`,
  forms: `
    <h3>Шаг назад</h3>
    ${tbl(['Прямая речь', 'Косвенная речь'], [
      ['"I <em>am</em> tired."', 'He said he <em>was</em> tired.'],
      ['"I <em>like</em> jazz."', 'She said she <em>liked</em> jazz.'],
      ['"I’<em>m working</em>."', 'He said he <em>was working</em>.'],
      ['"I <em>will</em> help."', 'She said she <em>would</em> help.'],
      ['"I <em>can</em> swim."', 'He said he <em>could</em> swim.'],
      ['"I <em>saw</em> it."', 'She said she <em>had seen</em> it. / she saw it.']])}
    <h3>Меняются и другие слова</h3>
    ${tbl(['Прямая речь', 'Косвенная речь'], [
      ['I / my', 'he, she / his, her'],
      ['today / tonight', 'that day / that night'],
      ['tomorrow', 'the next day'],
      ['yesterday', 'the day before'],
      ['here', 'there']])}
    <h3>Просьбы и приказы: told / asked + to</h3>
    ${ex('"Please wait here." → She asked me to wait there.', '«Подождите здесь, пожалуйста». → Она попросила меня подождать там.')}
    ${ex('"Don’t be late!" → He told us not to be late.', '«Не опаздывайте!» → Он велел нам не опаздывать.')}`,
  usage: `
    <h3>Связки</h3>
    ${tbl(['Связка', 'Значение', 'Пример'], [
      ['because', 'потому что', 'I stayed at home because I was ill.'],
      ['so', 'поэтому', 'I was ill, so I stayed at home.'],
      ['but', 'но', 'It was cold, but we went out.'],
      ['although', 'хотя', 'Although it was cold, we went out.'],
      ['first / then / after that / finally', 'порядок событий', 'First we had lunch. Then we went to the park.']])}
    <h3>E-mail: чек-лист (Writing Part 6, 25+ слов)</h3>
    ${ul(['Приветствие: <i>Hi Sam, / Dear Mrs Green,</i>', 'Ответ на <b>все три</b> пункта задания — по одному-два предложения', 'Связки: and, but, because, so', 'Прощание: <i>See you soon! / Best wishes, / Love,</i> + имя'])}
    ${ex('Hi Tom, I’d love to come to the beach on Saturday! I can bring some sandwiches and a ball. Shall we meet at the station at 10? See you soon, Anna', 'Пример e-mail на 30 слов: согласие, что принесу, где и когда встретимся.')}
    <h3>История по картинкам (Writing Part 7, 35+ слов)</h3>
    ${ul(['Опишите <b>все три</b> картинки — пропущенная картинка снижает оценку', 'Past Simple для событий, Past Continuous для фона', 'Связки порядка: first, then, after that, finally', 'Короткий финал: что почувствовал герой'])}`,
  compare: `
    ${tbl(['', 'say', 'tell'], [
      ['Кому?', 'не нужно', 'нужно: tell me / tell her'],
      ['Пример', 'She said (that) she was busy.', 'She told me (that) she was busy.'],
      ['Ошибка', '<i>She said me…</i>', '<i>She told that…</i>'],
      ['Устойчиво', 'say hello, say sorry', 'tell the truth, tell a story, tell a lie']])}
    <h3>Because или so</h3>
    ${ex('I was hungry, so I made a sandwich.', 'Я проголодался, поэтому сделал бутерброд (so → следствие).')}
    ${ex('I made a sandwich because I was hungry.', 'Я сделал бутерброд, потому что проголодался (because → причина).')}
    ${note('<strong>Частые ошибки русскоговорящих:</strong> <i>He said me</i> → <i>He told me</i>. Не сдвигать время: <i>She said she is tired</i> → <i>she <em>was</em> tired</i>. Писать <i>although … but</i>, как «хотя … но»: в английском нужно что-то одно.')}`,
  dialog: [
    ['A', 'Did you talk to Jack about the weekend?', 'Ты поговорил с Джеком насчёт выходных?'],
    ['B', 'Yes. He said he was very busy at work.', 'Да. Он сказал, что очень занят на работе.'],
    ['A', 'So isn’t he coming to the barbecue?', 'Так он не придёт на барбекю?'],
    ['B', 'He told me he would come, but he said he couldn’t stay long.', 'Он сказал мне, что придёт, но долго остаться не сможет.'],
    ['A', 'And what about Emma?', 'А Эмма?'],
    ['B', 'She said she was feeling ill, so she might stay at home.', 'Она сказала, что плохо себя чувствует, поэтому может остаться дома.'],
    ['A', 'Oh no. Although it’s a small party, I want everyone to be there!', 'Ну вот. Хотя вечеринка небольшая, я хочу, чтобы пришли все!'],
    ['B', 'Don’t worry. She asked me to tell you that she’d bring a salad if she felt better.', 'Не волнуйся. Она попросила передать тебе, что принесёт салат, если ей станет лучше.'],
  ],
  test: [
    { q: '"I am hungry." → He said he ___ hungry.', o: ['is', 'was', 'were', 'has been'], a: 1, c: 1, e: 'am → was (шаг назад).' },
    { q: 'She ___ me that she was busy.', o: ['said', 'told', 'spoke', 'talked'], a: 1, c: 0, e: 'С «кому» (me) → told.' },
    { q: 'He ___ that he liked the film.', o: ['told', 'told to', 'said', 'said me'], a: 2, c: 0, e: 'Без «кому» → said.' },
    { q: '"I will help you." → She said she ___ help me.', o: ['will', 'would', 'can', 'was'], a: 1, c: 1, e: 'will → would.' },
    { q: '"Please sit down." → The teacher asked us ___ down.', o: ['sit', 'sitting', 'that we sit', 'to sit'], a: 3, c: 1, e: 'Просьба → asked + кому + to + V.' },
    { q: 'I was tired, ___ I went to bed early.', o: ['so', 'because', 'although', 'but'], a: 0, c: 2, e: 'Следствие → so.' },
    { q: '___ it was raining, we went for a walk.', o: ['Because', 'So', 'Although', 'Then'], a: 2, c: 2, e: 'Противопоставление «хотя» → although.' },
    { q: 'First we had breakfast. ___ we went to the museum.', o: ['Before', 'Although', 'Because', 'Then'], a: 3, c: 2, e: 'Следующий шаг истории → then / after that.' },
    { q: 'In the A2 Key e-mail (Part 6), you must…', o: ['answer all three points', 'write 200 words', 'use only Present Simple', 'write about yourself only'], a: 0, c: 3, e: 'Главное — ответить на все три пункта задания (25+ слов).' },
    { q: 'In the story (Part 7), how many pictures should you write about?', o: ['one', 'two', 'all three', 'the last one'], a: 2, c: 3, e: 'Нужно описать все три картинки (35+ слов).' },
  ],
  feynman: {
    task: 'Объясните «шаг назад» в косвенной речи и разницу said / told так, чтобы понял 10-летний ребёнок.',
    prompts: ['Почему <i>He said me</i> — ошибка?', 'Как меняются am, will, can в пересказе?', 'Чем because отличается от so? Приведите пару примеров на одну ситуацию.', 'Что обязательно должно быть в e-mail и в истории по картинкам?'],
  },
});
