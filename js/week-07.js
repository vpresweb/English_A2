/* ===== WEEK 7 — Second Conditional ===== */
COURSE.weeks.push({
  n: 7,
  title: 'Second conditional и would',
  tag: 'If + Past Simple, would · If I were you · мечты',
  goal: 'Говорить о воображаемых и маловероятных ситуациях («если бы…»), давать советы через <i>If I were you</i>, использовать would для вежливых просьб и желаний. Различать first и second conditional.',
  days: [
    ['Теория — «мир, которого нет»', ['Прочитать раздел «Теория»: прошедшее время для фантазии', 'Аналогия Фейнмана: игра «а что, если…»', 'Написать 3 мечты: <i>If I had more time, I would…</i>']],
    ['Формы', ['If + Past Simple, would + глагол', '<i>were</i> для всех лиц: <i>If I were rich…</i>', 'Сокращения <i>I’d, wouldn’t</i> и вопрос <i>What would you do if…?</i>']],
    ['If I were you', ['Совет через воображение: <i>If I were you, I’d take the job.</i>', 'Дать 5 советов друзьям в трудной ситуации', 'Сравнить с <i>You should…</i>']],
    ['Would для вежливости', ['<i>I’d like…</i>, <i>Would you like…?</i>', '<i>Would you mind opening the window?</i>', 'Разыграть заказ в кафе и в отеле']],
    ['Диалог и аудирование', ['Разыграть диалог «What would you do if…?» — обе роли', 'Послушать песню с if I… (например, «If I Were a Boy») и найти формы', 'Ответить на 5 вопросов «What would you do if…?»']],
    ['Тест + закрепление', ['Пройти тест недели (раздел 🎯) — цель 80%+', 'Написать эссе (80–100 слов): <i>If I could live anywhere…</i>', 'Проверить: после if — Past, в результате — would']],
    ['Фейнман-урок недели', ['Запись 2–3 мин: «реальное» и «воображаемое» будущее', 'Таблица: first vs second на одном примере', 'Список пробелов → план недели 8 (страдательный залог)']],
  ],
  progress: ['Формы were / would', 'Воображаемые ситуации', 'If I were you', 'First или second'],
  theory: `
    <h3>Идея в одной фразе</h3>
    <p>Second conditional — это <strong>фантазия</strong> о настоящем или будущем: ситуация нереальная или маловероятная. Прошедшее время здесь значит не «вчера», а <strong>«далеко от реальности»</strong>.</p>
    ${tl([['If I had a car', 'но машины нет'], ['I would drive to work', 'воображаемый результат', 1]])}
    ${ex('If I had a car, I would drive to work.', 'Если бы у меня была машина, я бы ездил на работу на ней (но машины нет).')}
    <h3>Аналогия Фейнмана</h3>
    <p>Это детская игра <strong>«а что, если…»</strong>. <i>If I were a bird, I would fly to Africa.</i> Мы отходим на шаг от реальности, и английский показывает этот шаг прошедшим временем — как будто ситуация «далеко».</p>
    <p>В русском это делает частица «бы»: «если <em>бы</em> я был птицей, я <em>бы</em> полетел». В английском «бы» — это <i>would</i>, но только в части с результатом.</p>
    ${note('<strong>Правило-проверка:</strong> можно вставить «бы» в русский перевод? Значит, нужен second conditional. «Бы» без if (<i>Я бы хотел…</i>) → <i>I would like…</i>')}`,
  forms: `
    <h3>If + Past Simple, would + V</h3>
    ${tbl(['', 'Условие', 'Результат'], [
      ['+', 'If I had time,', 'I’d (I would) learn Italian.'],
      ['−', 'If I didn’t work,', 'I <em>wouldn’t</em> get up so early.'],
      ['?', 'If you won a million,', 'what <em>would</em> you do?']])}
    <h3>Were для всех лиц</h3>
    ${tbl(['Лицо', 'Пример'], [
      ['I', 'If I <em>were</em> rich, I’d travel.'],
      ['he / she / it', 'If she <em>were</em> here, she’d help us.'],
      ['совет', 'If I <em>were</em> you, I wouldn’t buy it.']])}
    ${note('<strong>Внимание:</strong> в разговоре можно услышать <i>If I was…</i>, но в экзамене и письме надёжнее <i>If I were…</i>, а в <i>If I were you</i> — всегда were.')}
    <h3>Would для вежливости</h3>
    ${tbl(['Фраза', 'Значение'], [
      ['I’d like a coffee, please.', 'Я бы хотел кофе (вежливее, чем I want).'],
      ['Would you like some tea?', 'Хотите чаю?'],
      ['Would you mind closing the door?', 'Вы не против закрыть дверь?']])}`,
  usage: `
    <h3>Мечты и фантазии</h3>
    ${ul(['<i>If I could fly, I’d visit every country.</i>', '<i>If I lived by the sea, I’d swim every day.</i>', '<i>What would you do if you saw a ghost?</i>'])}
    <h3>Совет: If I were you</h3>
    ${ex('If I were you, I’d talk to your boss.', 'На твоём месте я бы поговорил с начальником.')}
    ${ex('If I were you, I wouldn’t eat that.', 'На твоём месте я бы это не ел.')}
    <h3>Отказ и объяснение</h3>
    ${ul(['<i>I’d come to your party if I didn’t have to work.</i> — пришёл бы, но работаю.', '<i>If it weren’t so expensive, I’d buy it.</i> — купил бы, но дорого.'])}`,
  compare: `
    ${tbl(['', 'First conditional', 'Second conditional'], [
      ['Пример', 'If I win, I’ll buy a car.', 'If I won, I’d buy a car.'],
      ['Вероятность', 'реально, может быть', 'маловероятно / нереально'],
      ['Формы', 'If + Present, will', 'If + Past, would'],
      ['Рус.', 'Если выиграю, куплю машину.', 'Если бы выиграл, купил бы машину.']])}
    <h3>Один человек — две ситуации</h3>
    ${ex('If I finish early today, I’ll go to the gym.', 'Если сегодня закончу рано, пойду в спортзал (вполне может быть).')}
    ${ex('If I didn’t have a job, I’d go to the gym every day.', 'Если бы у меня не было работы, я бы ходил в спортзал каждый день (но работа есть).')}
    ${note('<strong>Частая ошибка русскоговорящих:</strong> ставить would в обе части, как «бы» дважды: <i>If I would have money, I would buy…</i> Правильно: <i>If I <em>had</em> money, I <em>would</em> buy…</i>')}`,
  dialog: [
    ['J', 'Ella, what would you do if you won the lottery?', 'Элла, что бы ты сделала, если бы выиграла в лотерею?'],
    ['E', 'Easy! I’d buy a little house by the sea in Cornwall.', 'Легко! Я бы купила домик у моря в Корнуолле.'],
    ['J', 'Would you stop working?', 'Ты бы бросила работу?'],
    ['E', 'No, I wouldn’t. If I didn’t work, I’d get bored. What about you?', 'Нет. Если бы я не работала, мне стало бы скучно. А ты?'],
    ['J', 'If I had that much money, I’d travel round the world.', 'Если бы у меня было столько денег, я бы поехал в кругосветку.'],
    ['E', 'But you hate flying!', 'Но ты же ненавидишь летать!'],
    ['J', 'True. If I were braver, I’d fly. So I’d go by train and ship!', 'Правда. Будь я смелее, летал бы. Так что поехал бы на поезде и корабле!'],
    ['E', 'If I were you, I’d buy a lottery ticket first!', 'На твоём месте я бы сначала купила лотерейный билет!'],
  ],
  test: [
    { q: 'If I ___ more money, I would buy a new laptop.', o: ['have', 'had', 'would have', 'will have'], a: 1, c: 0, e: 'Second conditional: if + Past Simple.' },
    { q: 'If she lived in London, she ___ the theatre every week.', o: ['visits', 'will visit', 'would visit', 'visited'], a: 2, c: 1, e: 'Результат воображаемой ситуации → would + V.' },
    { q: 'If I ___ you, I’d see a doctor.', o: ['am', 'was being', 'be', 'were'], a: 3, c: 2, e: 'Устойчивый совет: If I were you.' },
    { q: 'What ___ you do if you saw a ghost?', o: ['would', 'will', 'did', 'do'], a: 0, c: 1, e: 'Вопрос о воображаемой ситуации → What would you do…?' },
    { q: 'I ___ a cup of tea, please.', o: ['will like', 'like to', 'would like', 'liked'], a: 2, c: 0, e: 'Вежливая просьба → I’d like / I would like.' },
    { q: 'If I won the lottery, I ___ stop working. I love my job!', o: ['won’t', 'wouldn’t', 'don’t', 'didn’t'], a: 1, c: 1, e: 'Отрицание результата → wouldn’t.' },
    { q: 'If it rains tomorrow, we ___ at home. (реально)', o: ['would stay', 'stayed', 'stay would', 'will stay'], a: 3, c: 3, e: 'Реальное будущее → first conditional: will.' },
    { q: 'If dogs ___ talk, what would they say? (фантазия)', o: ['could', 'can', 'will', 'are able'], a: 0, c: 3, e: 'Нереальная ситуация → could (Past от can).' },
    { q: 'If I were you, I ___ buy that car. It’s too old.', o: ['won’t', 'don’t', 'wouldn’t', 'didn’t'], a: 2, c: 2, e: 'Совет-предостережение → I wouldn’t…' },
    { q: 'Which sentence is correct?', o: ['If I would have time, I would help.', 'If I had time, I would help.', 'If I had time, I will help.', 'If I have time, I would help.'], a: 1, c: 0, e: 'If + Past Simple, would + V.' },
  ],
  feynman: {
    task: 'Объясните, почему в second conditional прошедшее время говорит о настоящем, так, чтобы понял 10-летний ребёнок.',
    prompts: ['Чем <i>If I win</i> отличается от <i>If I won</i>?', 'Почему <i>If I were you</i>, а не <i>If I was you</i>?', 'Где в английском стоит «бы» и почему только один раз?', 'Ответьте на вопрос: What would you do if you could speak perfect English tomorrow?'],
  },
});
