/* ===== WEEK 5 — Modal verbs ===== */
COURSE.weeks.push({
  n: 5,
  title: 'Модальные глаголы',
  tag: 'can / could · might · should · must / have to / don’t have to',
  goal: 'Говорить об умениях в настоящем и прошлом, о возможном будущем, давать советы, правильно выражать обязанность и запрет. Различать mustn’t (нельзя) и don’t have to (не обязательно).',
  days: [
    ['Теория — «настроение» глагола', ['Прочитать раздел «Теория»: модальный глагол как ручка громкости', 'Правило: после модального — глагол без to и без -s', 'Выписать 5 правил вашей работы или дома']],
    ['Can, could, be able to', ['<i>can</i> — умею сейчас, <i>could</i> — умел в прошлом', '<i>will be able to</i> — смогу в будущем', 'Рассказать: что умели в 10 лет и что умеете сейчас']],
    ['Might и may', ['Возможность: <i>I might go to the party.</i> (50/50)', '<i>may</i> — так же, чуть формальнее; <i>May I…?</i> — вежливая просьба', 'Написать 5 предложений о возможных планах']],
    ['Should — совет', ['<i>You should…</i>, <i>You shouldn’t…</i>, <i>Should I…?</i>', 'Дать 5 советов человеку, который учит английский', 'Сравнить с <i>You must…</i> — сила совета']],
    ['Must, have to, mustn’t, don’t have to', ['must — правило от себя, have to — правило снаружи', 'mustn’t — нельзя! don’t have to — не нужно', 'Таблица правил: школа, работа, аэропорт']],
    ['Тест + закрепление', ['Пройти тест недели (раздел 🎯) — цель 80%+', 'Разыграть диалог недели — обе роли', 'Написать памятку (60–80 слов) «Правила нашего дома»']],
    ['Фейнман-урок недели', ['Запись 2–3 мин: «шкала силы» от might до must', 'Объяснить разницу mustn’t и don’t have to на примере', 'Список пробелов → план недели 6 (условия)']],
  ],
  progress: ['Умение', 'Возможность', 'Совет', 'Обязанность и запрет'],
  theory: `
    <h3>Идея в одной фразе</h3>
    <p>Модальный глагол не называет действие — он добавляет к нему <strong>отношение</strong>: умею, может быть, советую, обязан, нельзя.</p>
    ${tl([['might', 'может быть'], ['should', 'советую'], ['have to', 'обязан'], ['must', 'должен!', 1]])}
    ${ex('You should see a doctor.', 'Тебе стоит сходить к врачу (совет).')}
    ${ex('You must wear a seatbelt.', 'Ты обязан пристегнуться (правило, обязательно).')}
    <h3>Аналогия Фейнмана</h3>
    <p>Представьте <strong>ручку громкости</strong> у фразы <i>go home</i>. <i>You might go home</i> — тихо, вариант. <i>You should go home</i> — громче, совет. <i>You must go home</i> — на максимуме, без вариантов.</p>
    ${note('<strong>Три железных правила:</strong> 1) после модального — голый глагол: <i>can swim</i>, не <i>can to swim</i>; 2) нет -s: <i>she can</i>, не <i>she cans</i>; 3) вопрос и отрицание без do: <i>Can you…? I can’t.</i> (кроме have to — это обычный глагол).')}`,
  forms: `
    <h3>Формы в настоящем, прошлом и будущем</h3>
    ${tbl(['Значение', 'Сейчас', 'Прошлое', 'Будущее'], [
      ['умение', 'can / can’t', '<em>could</em> / couldn’t', '<em>will be able to</em>'],
      ['обязанность', 'must / have to', '<em>had to</em>', '<em>will have to</em>'],
      ['отсутствие необходимости', 'don’t have to', '<em>didn’t have to</em>', 'won’t have to'],
      ['совет', 'should / shouldn’t', '—', '—']])}
    <h3>Have to — обычный глагол</h3>
    ${tbl(['', 'I / you / we / they', 'he / she / it'], [
      ['+', 'I have to work.', 'She <em>has to</em> work.'],
      ['−', 'I don’t have to work.', 'She <em>doesn’t</em> have to work.'],
      ['?', 'Do you have to work?', 'Does she have to work?']])}
    ${note('<strong>Произношение:</strong> <i>have to</i> часто звучит как [ˈhæf tə], <i>has to</i> — [ˈhæs tə]. <i>Can’t</i> в британском — [kɑːnt], с длинным «а».')}`,
  usage: `
    <h3>Mustn’t и don’t have to — не одно и то же!</h3>
    ${ex('You mustn’t smoke here.', 'Здесь нельзя курить (запрет).')}
    ${ex('You don’t have to come tomorrow.', 'Тебе не обязательно приходить завтра (можно, но не нужно).')}
    <h3>Must или have to</h3>
    ${ul(['<i>I must call Mum.</i> — я сам так решил, это важно для меня.', '<i>I have to wear a uniform at work.</i> — так требует компания.', 'На письменных знаках и в правилах: <i>Passengers must show their tickets.</i>'])}
    <h3>Вежливые просьбы</h3>
    ${ul(['<i>Can I open the window?</i> — нейтрально', '<i>Could you help me, please?</i> — вежливее', '<i>May I come in?</i> — официально'])}`,
  compare: `
    ${tbl(['', 'Значение', 'Пример', 'Рус.'], [
      ['must', 'обязательно (я считаю)', 'I must study harder.', 'Я должен больше заниматься.'],
      ['have to', 'обязательно (правило)', 'I have to start at 8.', 'Мне нужно начинать в 8.'],
      ['should', 'совет', 'You should rest.', 'Тебе стоит отдохнуть.'],
      ['mustn’t', 'запрещено', 'You mustn’t park here.', 'Здесь нельзя парковаться.'],
      ['don’t have to', 'не обязательно', 'You don’t have to pay.', 'Платить не нужно.'],
      ['might', 'возможно', 'It might snow.', 'Может пойти снег.']])}
    ${note('<strong>Частая ошибка русскоговорящих:</strong> переводить «не должен» как <i>mustn’t</i>. «Ты не должен приходить» = «не обязан» → <i>you don’t have to come</i>. А <i>you mustn’t come</i> — «тебе нельзя приходить».')}`,
  dialog: [
    ['D', 'So, what seems to be the problem?', 'Итак, на что жалуетесь?'],
    ['P', 'I can’t sleep at night, and I’m always tired. I couldn’t work yesterday.', 'Я не могу спать по ночам и всё время устаю. Вчера я не смог работать.'],
    ['D', 'I see. You should drink less coffee, especially in the evening.', 'Понятно. Вам стоит пить меньше кофе, особенно вечером.'],
    ['P', 'But I have to drink coffee. I start work at six!', 'Но мне приходится пить кофе. Я начинаю работу в шесть!'],
    ['D', 'Then you mustn’t drink it after lunch. And you should go to bed earlier.', 'Тогда вам нельзя пить его после обеда. И стоит ложиться раньше.'],
    ['P', 'Do I have to take any pills?', 'Мне нужно принимать какие-нибудь таблетки?'],
    ['D', 'No, you don’t have to take anything yet. It might get better in a week.', 'Нет, пока ничего принимать не нужно. Через неделю может стать лучше.'],
    ['P', 'Thank you, doctor. I’ll be able to work normally again, I hope!', 'Спасибо, доктор. Надеюсь, я снова смогу нормально работать!'],
  ],
  test: [
    { q: 'When I was five, I ___ swim.', o: ['can', 'could', 'can to', 'am able'], a: 1, c: 0, e: 'Умение в прошлом → could.' },
    { q: 'She ___ speak three languages.', o: ['cans', 'can to', 'can', 'is can'], a: 2, c: 0, e: 'После модального нет -s и to: she can speak.' },
    { q: 'Take an umbrella. It ___ rain later.', o: ['must', 'might', 'should to', 'has to'], a: 1, c: 1, e: 'Возможность (может быть) → might.' },
    { q: 'You look tired. You ___ go to bed early.', o: ['should', 'mustn’t', 'don’t have to', 'might'], a: 0, c: 2, e: 'Совет → should.' },
    { q: 'You ___ smoke in the hospital. It’s forbidden.', o: ['don’t have to', 'shouldn’t to', 'mustn’t', 'not must'], a: 2, c: 3, e: 'Запрет → mustn’t.' },
    { q: 'It’s Sunday, so I ___ get up early.', o: ['mustn’t', 'must', 'can’t', 'don’t have to'], a: 3, c: 3, e: 'Не обязательно (можно поспать) → don’t have to.' },
    { q: 'Yesterday I ___ work until 9 pm.', o: ['must', 'had to', 'have to', 'musted'], a: 1, c: 3, e: 'Обязанность в прошлом → had to (у must нет прошедшей формы).' },
    { q: '___ she have to wear a uniform?', o: ['Does', 'Has', 'Must', 'Is'], a: 0, c: 3, e: 'have to — обычный глагол, вопрос через does.' },
    { q: 'Next year I ___ drive. I’m taking lessons now.', o: ['can', 'could', 'might to', 'will be able to'], a: 3, c: 0, e: 'Умение в будущем → will be able to.' },
    { q: '___ I come in? (официально, вежливо)', o: ['Must', 'May', 'Should', 'Have'], a: 1, c: 1, e: 'Вежливая формальная просьба → May I…?' },
  ],
  feynman: {
    task: 'Объясните «ручку громкости» модальных глаголов (might → should → must) так, чтобы понял 10-летний ребёнок.',
    prompts: ['Чем mustn’t отличается от don’t have to? Приведите пример из школы.', 'Почему нельзя сказать <i>I must to go</i> или <i>she cans</i>?', 'Как сказать «я должен был» и «я смогу»?', 'Дайте другу три совета на should и одно правило на must.'],
  },
});
