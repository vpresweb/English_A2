/* ===== WEEK 4 — Future forms ===== */
COURSE.weeks.push({
  n: 4,
  title: 'Будущее: will, going to, Present Continuous',
  tag: 'Решения · планы · договорённости · прогнозы',
  goal: 'Говорить о будущем тремя способами и понимать разницу: спонтанное решение и обещание (will), план и прогноз по признакам (going to), договорённость с датой (Present Continuous). Понимать расписания в Present Simple.',
  days: [
    ['Теория — у будущего три лица', ['Прочитать раздел «Теория»: решение, план, договорённость', 'Аналогия Фейнмана: мысль, блокнот и календарь', 'Записать 3 своих плана на выходные']],
    ['Will', ['Спонтанное решение: <i>I’ll get it!</i>', 'Обещание, предложение, прогноз-мнение: <i>I think it’ll rain.</i>', 'Формы: <i>’ll, won’t, Will you…?</i>']],
    ['Going to', ['Решение, принятое заранее: <i>I’m going to learn to drive.</i>', 'Прогноз по признакам: <i>Look at those clouds! It’s going to rain.</i>', 'Рассказать о 5 планах на год']],
    ['Present Continuous для будущего', ['Договорённость с другими людьми, дата и время: <i>I’m meeting Jo on Friday.</i>', 'Заполнить свой ежедневник на неделю по-английски', 'Present Simple для расписаний: <i>The train leaves at 6.</i>']],
    ['Диалог и аудирование', ['Разыграть диалог «Are you free on Saturday?» — обе роли', 'Послушать прогноз погоды на BBC и выписать формы будущего', 'Пригласить друга и договориться о времени (письменно)']],
    ['Тест + закрепление', ['Пройти тест недели (раздел 🎯) — цель 80%+', 'Написать сообщение (50–60 слов) о планах на отпуск', 'Отметить в тексте: решение, план, договорённость']],
    ['Фейнман-урок недели', ['Запись 2–3 мин: «как выбрать будущее» без терминов', 'Нарисовать три значка: молния (will), блокнот (going to), календарь (Continuous)', 'Список пробелов → план недели 5 (модальные глаголы)']],
  ],
  progress: ['Will', 'Going to', 'Договорённости', 'Выбор формы'],
  theory: `
    <h3>Идея в одной фразе</h3>
    <p>В английском будущее выбирают по тому, <strong>когда родилось решение</strong> и <strong>насколько всё уже устроено</strong>.</p>
    ${tl([['will', 'решаю сейчас'], ['going to', 'уже решил'], ['Present Continuous', 'уже договорился', 1]])}
    ${ex('The phone’s ringing. — I’ll answer it!', 'Телефон звонит. — Я отвечу! (решил прямо сейчас)')}
    ${ex('I’m going to study medicine.', 'Я собираюсь учиться на врача (решение уже есть).')}
    ${ex('I’m seeing the dentist at 4 tomorrow.', 'Завтра в 4 я иду к стоматологу (записан, время назначено).')}
    <h3>Аналогия Фейнмана</h3>
    <p><strong>Will</strong> — мысль, которая пришла в голову только что, молния. <strong>Going to</strong> — запись в блокноте: решение принято, но ни с кем не согласовано. <strong>Present Continuous</strong> — запись в общем календаре: есть время, место и другие люди.</p>
    ${note('<strong>Правило-проверка:</strong> можно ли показать это в ежедневнике с временем и другим человеком? Да — Present Continuous. Решили раньше — going to. Решаете сейчас — will.')}`,
  forms: `
    <h3>Will</h3>
    ${tbl(['+', '−', '?'], [
      ['I’ll help you.', 'I <em>won’t</em> (will not) tell anyone.', 'Will you help me?'],
      ['It’ll be sunny.', 'It won’t be cold.', 'Will it be sunny?']])}
    <h3>Going to</h3>
    ${tbl(['Лицо', '+', '−', '?'], [
      ['I', 'I’m going to travel', 'I’m not going to travel', 'Am I going to travel?'],
      ['you / we / they', 'you’re going to travel', 'you aren’t going to travel', 'Are you going to travel?'],
      ['he / she / it', 'she’s going to travel', 'she isn’t going to travel', 'Is she going to travel?']])}
    <h3>Present Continuous и Present Simple для будущего</h3>
    ${tbl(['Форма', 'Когда', 'Пример'], [
      ['am / is / are + -ing', 'личная договорённость', 'We’re flying to Rome on Monday.'],
      ['Present Simple', 'расписание, программа', 'The film starts at 8.'],
      ['when / after / before + Present', 'в придаточном времени', 'I’ll call you when I <em>arrive</em>.']])}
    ${note('<strong>Внимание:</strong> после <i>when, after, before, as soon as</i> будущее не ставится: <i>when I arrive</i>, а не <i>when I will arrive</i>.')}`,
  usage: `
    <h3>Will: четыре работы</h3>
    ${ul(['Спонтанное решение: <i>I’m cold. — I’ll close the window.</i>', 'Обещание: <i>I’ll never forget you.</i>', 'Предложение помощи: <i>Shall I carry your bag? / I’ll carry it.</i>', 'Прогноз-мнение: <i>I think England will win.</i>'])}
    <h3>Going to: два значения</h3>
    ${ul(['Намерение: <i>I’m going to start running next week.</i>', 'Прогноз по признакам «вижу сейчас»: <i>Be careful! You’re going to fall!</i>'])}
    <h3>Полезные фразы</h3>
    ${ul(['<i>What are you doing this weekend?</i> — вопрос о планах', '<i>Shall we go to the cinema?</i> — предложение', '<i>I’m afraid I can’t. I’m working on Saturday.</i> — вежливый отказ'])}`,
  compare: `
    ${tbl(['', 'will', 'going to', 'Present Continuous'], [
      ['Решение', 'сейчас', 'раньше', 'раньше + договорились'],
      ['Прогноз', 'мнение (I think)', 'по признакам', '—'],
      ['Пример', 'I’ll have the fish.', 'I’m going to have a party.', 'I’m having a party on Saturday.'],
      ['Рус.', 'Я возьму рыбу.', 'Я собираюсь устроить вечеринку.', 'У меня в субботу вечеринка.']])}
    <h3>Одна ситуация — три формы</h3>
    ${ex('We’re out of milk. — Oh, I’ll buy some.', 'Молоко кончилось. — О, я куплю (решил сейчас).')}
    ${ex('I’m going to buy milk after work.', 'Я собираюсь купить молоко после работы (решил заранее).')}
    ${ex('I’m meeting Liz at the supermarket at 6.', 'В 6 я встречаюсь с Лиз в супермаркете (договорились).')}
    ${note('<strong>Частая ошибка русскоговорящих:</strong> везде ставить will, как русское «буду». Для планов и встреч англичане почти всегда говорят <i>going to</i> или <i>I’m doing</i>.')}`,
  dialog: [
    ['E', 'Hi, Max! Are you free on Saturday?', 'Привет, Макс! Ты свободен в субботу?'],
    ['M', 'In the morning I’m playing tennis with Dan, but I’m free after that.', 'Утром я играю в теннис с Дэном, но потом свободен.'],
    ['E', 'Great. I’m going to have a small party for my birthday. Will you come?', 'Отлично. Я собираюсь устроить небольшую вечеринку на день рождения. Придёшь?'],
    ['M', 'Of course I’ll come! What time does it start?', 'Конечно приду! Во сколько начало?'],
    ['E', 'At seven. I’m going to cook a big dinner.', 'В семь. Я собираюсь приготовить большой ужин.'],
    ['M', 'That’s a lot of work. I’ll bring a cake, then.', 'Это много работы. Тогда я принесу торт.'],
    ['E', 'Thanks! Oh, look at the sky. I think it’s going to rain.', 'Спасибо! Ой, посмотри на небо. Кажется, будет дождь.'],
    ['M', 'Don’t worry, I’ll give you a lift home. My car’s just over there.', 'Не волнуйся, я подвезу тебя домой. Моя машина прямо там.'],
  ],
  test: [
    { q: 'It’s cold in here. — OK, I ___ the window.', o: ['’ll close', '’m going to close', '’m closing', 'close'], a: 0, c: 0, e: 'Решение принято прямо сейчас → will.' },
    { q: 'I ___ a new car next year. I’ve saved the money.', o: ['will buy', 'buy', 'am going to buy', 'buying'], a: 2, c: 1, e: 'Решение принято заранее → going to.' },
    { q: 'Look at those black clouds! It ___.', o: ['will rain', 'is going to rain', 'rains', 'is raining tomorrow'], a: 1, c: 1, e: 'Прогноз по признакам (вижу тучи) → going to.' },
    { q: 'I ___ Sarah for lunch on Friday at 1.', o: ['meet', 'will meet', 'met', 'am meeting'], a: 3, c: 2, e: 'Договорённость, есть время → Present Continuous.' },
    { q: 'The train ___ at 6.15 tomorrow morning.', o: ['leaves', 'is leave', 'will leaving', 'going to leave'], a: 0, c: 2, e: 'Расписание → Present Simple.' },
    { q: 'I’ll call you when I ___ home.', o: ['will get', 'get', 'am going to get', 'got'], a: 1, c: 3, e: 'После when — Present Simple, а не will.' },
    { q: 'Don’t worry. I ___ tell anyone your secret.', o: ['won’t', 'don’t', 'am not', 'not will'], a: 0, c: 0, e: 'Обещание → won’t (will not).' },
    { q: 'I think Spain ___ the match.', o: ['is winning', 'are going win', 'will win', 'wins'], a: 2, c: 0, e: 'Прогноз-мнение с I think → will.' },
    { q: 'What ___ this weekend? (о планах)', o: ['will you do', 'you do', 'do you doing', 'are you doing'], a: 3, c: 3, e: 'Обычный вопрос о планах → Present Continuous.' },
    { q: 'She’s going to ___ a doctor.', o: ['becoming', 'become', 'becomes', 'will become'], a: 1, c: 1, e: 'going to + инфинитив без to.' },
  ],
  feynman: {
    task: 'Объясните, как выбрать между will, going to и Present Continuous, так, чтобы понял 10-летний ребёнок.',
    prompts: ['Что такое «молния», «блокнот» и «календарь»?', 'Почему в ответ на «Телефон звонит!» говорят <i>I’ll get it</i>, а не <i>I’m going to get it</i>?', 'Почему <i>when I will arrive</i> — ошибка?', 'Расскажите о своих планах на неделю, используя все три формы.'],
  },
});
