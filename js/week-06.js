/* ===== WEEK 6 — Zero and First Conditional ===== */
COURSE.weeks.push({
  n: 6,
  title: 'Условия: zero и first conditional',
  tag: 'If + Present · will · unless · when или if',
  goal: 'Говорить о фактах «если — то всегда» (zero conditional) и о реальных условиях в будущем (first conditional). Не ставить will после if, использовать unless, различать if и when.',
  days: [
    ['Теория — реальные условия', ['Прочитать раздел «Теория»: правило природы и реальный план', 'Аналогия Фейнмана: инструкция к стиральной машине и прогноз', 'Найти 3 надписи-инструкции с if (на упаковке, в приложении)']],
    ['Zero conditional', ['If + Present Simple, Present Simple', 'Факты и законы: <i>If you heat ice, it melts.</i>', 'Написать 6 «законов» своей жизни: <i>If I drink coffee late, I can’t sleep.</i>']],
    ['First conditional', ['If + Present Simple, will + глагол', 'Порядок частей и запятая', 'Составить цепочку «если — то»: <i>If I get up early, I’ll…</i>']],
    ['Unless и when', ['<i>unless</i> = if … not: <i>I’ll go unless it rains.</i>', '<i>when</i> — точно будет; <i>if</i> — может быть', 'Переписать 5 предложений с if not через unless']],
    ['Диалог и аудирование', ['Разыграть диалог «If we miss the train…» — обе роли', 'Послушать рекламу или инструкцию и найти условия', 'Сделать 3 предупреждения: <i>If you touch that, you’ll…</i>']],
    ['Тест + закрепление', ['Пройти тест недели (раздел 🎯) — цель 80%+', 'Написать сообщение (60–80 слов): планы на выходные с условиями', 'Проверить: после if нет will']],
    ['Фейнман-урок недели', ['Запись 2–3 мин: два вида реальных условий', 'Схема: if-часть (Present) → результат (Present / will)', 'Список пробелов → план недели 7 (second conditional)']],
  ],
  progress: ['Zero conditional', 'First conditional', 'Unless', 'If или when'],
  theory: `
    <h3>Идея в одной фразе</h3>
    <p>Условные предложения из двух частей: <strong>условие</strong> (if…) и <strong>результат</strong>. Если результат наступает всегда — zero conditional. Если это реальное будущее — first conditional.</p>
    ${tl([['If it rains', 'условие (Present)'], ['we’ll stay at home', 'результат (will)', 1]])}
    ${ex('If you heat water to 100 degrees, it boils.', 'Если нагреть воду до 100 градусов, она кипит (всегда).')}
    ${ex('If it rains tomorrow, we’ll stay at home.', 'Если завтра будет дождь, мы останемся дома (реально может быть).')}
    <h3>Аналогия Фейнмана</h3>
    <p>Zero conditional — это <strong>инструкция к прибору</strong>: нажал кнопку — загорелась лампочка. Всегда, без исключений. First conditional — это <strong>прогноз</strong>: «если завтра будет солнце, пойдём на пляж». Может случиться, может нет, но вполне реально.</p>
    ${note('<strong>Главное правило:</strong> в части с if — Present Simple, даже если речь о будущем. По-русски «если <em>будет</em> дождь», а по-английски <i>if it <em>rains</em></i>.')}`,
  forms: `
    <h3>Две схемы</h3>
    ${tbl(['Тип', 'Условие', 'Результат', 'Пример'], [
      ['Zero', 'If + Present Simple', 'Present Simple', 'If you mix red and white, you get pink.'],
      ['First', 'If + Present Simple', 'will / won’t + V', 'If you study, you’ll pass the exam.']])}
    <h3>Порядок частей</h3>
    ${tbl(['Порядок', 'Пример', 'Запятая'], [
      ['If-часть первой', 'If I see Tom, I’ll tell him.', 'да'],
      ['If-часть второй', 'I’ll tell Tom if I see him.', 'нет']])}
    <h3>В результате бывает не только will</h3>
    ${tbl(['Форма', 'Пример'], [
      ['can / might', 'If you’re free tomorrow, we <em>can</em> go swimming.'],
      ['повелительное', 'If you see Anna, <em>tell</em> her to call me.'],
      ['going to', 'If it’s sunny, we’re <em>going to</em> have a picnic.']])}`,
  usage: `
    <h3>Unless = if … not</h3>
    ${ex('I’ll go to the beach unless it rains.', 'Я пойду на пляж, если не будет дождя.')}
    ${ex('You won’t pass unless you study.', 'Ты не сдашь, если не будешь заниматься.')}
    ${note('<strong>Внимание:</strong> после unless не ставят второе отрицание: <i>unless it rains</i>, а не <i>unless it doesn’t rain</i>.')}
    <h3>If или when</h3>
    ${ul(['<i>When I get home, I’ll call you.</i> — я точно приду домой.', '<i>If I get home early, I’ll call you.</i> — может быть, приду рано.'])}
    <h3>Типичные ситуации</h3>
    ${ul(['Предупреждение: <i>If you touch that, you’ll burn yourself!</i>', 'Обещание: <i>If you help me, I’ll buy you lunch.</i>', 'Переговоры: <i>If you order two, we’ll give you a discount.</i>', 'Инструкция: <i>If the light is red, press the button.</i>'])}`,
  compare: `
    ${tbl(['', 'Zero conditional', 'First conditional'], [
      ['Пример', 'If I’m late, my boss gets angry.', 'If I’m late tomorrow, my boss will get angry.'],
      ['Смысл', 'всегда так бывает', 'конкретная ситуация в будущем'],
      ['Результат', 'Present Simple', 'will + V'],
      ['Рус.', 'Если я опаздываю, начальник злится.', 'Если я завтра опоздаю, начальник разозлится.']])}
    <h3>Одна идея — три формы</h3>
    ${ex('If I drink coffee at night, I don’t sleep.', 'Если я пью кофе на ночь, я не сплю (всегда так).')}
    ${ex('If I drink this coffee now, I won’t sleep tonight.', 'Если я выпью этот кофе сейчас, я не усну этой ночью.')}
    ${ex('When I finish this coffee, I’ll go to bed.', 'Когда допью этот кофе, пойду спать (точно допью).')}
    ${note('<strong>Частая ошибка русскоговорящих:</strong> <i>If it will rain, we will stay</i>. Will в части с if не ставится: <i>If it rains, we will stay.</i>')}`,
  dialog: [
    ['L', 'Hurry up, Ben! If we don’t leave now, we’ll miss the train.', 'Поторопись, Бен! Если мы не выйдем сейчас, опоздаем на поезд.'],
    ['B', 'Relax. If we miss it, we’ll get the next one.', 'Расслабься. Если опоздаем, сядем на следующий.'],
    ['L', 'There isn’t a next one! Unless we catch the 8.15, we’ll be late for the wedding.', 'Следующего нет! Если не успеем на 8:15, опоздаем на свадьбу.'],
    ['B', 'OK, OK. Have you got the tickets?', 'Ладно, ладно. Билеты у тебя?'],
    ['L', 'They’re on my phone. If the battery dies, we’ll have a problem.', 'В телефоне. Если батарея сядет, у нас будут проблемы.'],
    ['B', 'Don’t worry. If you need it, you can use my charger.', 'Не волнуйся. Если понадобится, можешь взять мою зарядку.'],
    ['L', 'Thanks. When we arrive, I’ll call my mum.', 'Спасибо. Когда приедем, я позвоню маме.'],
    ['B', 'And if you smile, you’ll feel better. I always do!', 'А если улыбнёшься, тебе станет лучше. У меня всегда так!'],
  ],
  test: [
    { q: 'If you heat ice, it ___.', o: ['melt', 'melts', 'will melts', 'melted'], a: 1, c: 0, e: 'Закон природы → zero conditional: Present Simple.' },
    { q: 'If it ___ tomorrow, we’ll stay at home.', o: ['will rain', 'rained', 'rains', 'is going rain'], a: 2, c: 1, e: 'В части с if — Present Simple.' },
    { q: 'If you study hard, you ___ the exam.', o: ['will pass', 'pass', 'passed', 'passing'], a: 0, c: 1, e: 'Реальное будущее → will + V.' },
    { q: 'I’ll go to the party ___ I’m too tired.', o: ['if', 'when', 'so', 'unless'], a: 3, c: 2, e: 'unless = если не (если я не слишком устану).' },
    { q: 'You won’t get fit unless you ___.', o: ['don’t exercise', 'won’t exercise', 'exercise', 'exercised'], a: 2, c: 2, e: 'После unless — без второго отрицания.' },
    { q: '___ I get home, I’ll make dinner. (точно приду)', o: ['When', 'If', 'Unless', 'So'], a: 0, c: 3, e: 'Событие точно случится → when.' },
    { q: '___ I win the lottery, I’ll buy a house. (может быть)', o: ['When', 'Unless', 'If', 'While'], a: 2, c: 3, e: 'Событие под вопросом → if.' },
    { q: 'If you see Anna, ___ her to call me.', o: ['tells', 'will tell', 'told', 'tell'], a: 3, c: 1, e: 'В результате может быть повелительное наклонение.' },
    { q: 'If I eat too much, I usually ___ ill.', o: ['feel', 'will feel', 'felt', 'am feel'], a: 0, c: 0, e: 'Привычный результат (usually) → zero conditional.' },
    { q: 'Which sentence is correct?', o: ['If it will snow, we’ll ski.', 'If it snows, we’ll ski.', 'If it snows, we skied.', 'If it snow, we’ll ski.'], a: 1, c: 1, e: 'If + Present Simple (snows), will + V.' },
  ],
  feynman: {
    task: 'Объясните разницу между «инструкцией к прибору» (zero) и «прогнозом» (first conditional) так, чтобы понял 10-летний ребёнок.',
    prompts: ['Почему по-русски «если будет дождь», а по-английски <i>if it rains</i>?', 'Как сказать то же самое через unless?', 'Когда вы скажете when, а когда if?', 'Придумайте 3 «закона» вашей жизни и 3 условия на завтра.'],
  },
});
