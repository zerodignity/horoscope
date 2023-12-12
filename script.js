const horoscope = {
    'cancer': [
        {today: 'Сосредоточьтесь на текущих задачах. Возможны неожиданные повороты, но они могут принести интересные возможности.'},
        {tomorrow: 'Будьте готовы к новым идеям. Они могут привести к важным изменениям в работе или личной жизни.'},
        {dayafter: 'Время отдыха и восстановления. Займитесь тем, что приносит вам удовольствие.'},
    ],
    'scorpio': [
        {today: 'Обратите внимание на детали. Важные моменты могут ускользнуть, если вы не будете внимательны.'},
        {tomorrow: 'День благоприятен для новых знакомств. Возможно, вы найдете вдохновение в общении с новыми людьми.'},
        {dayafter: 'Заботьтесь о своем физическом здоровье. Постарайтесь провести активный день.'},
    ],
    'pisces': [
        {today: 'Сфокусируйтесь на своих целях. Ваши усилия приведут к положительным результатам.'},
        {tomorrow: 'Развивайте свои творческие способности. Возможно, вы откроете в себе нечто новое.'},
        {dayafter: 'Сделайте паузу в повседневной суете. Медитация или прогулка на свежем воздухе помогут вам расслабиться.'},
    ],
    'gemini': [
        {today: 'Будьте открыты к сотрудничеству. Ваши идеи могут быть лучше восприняты в коллективе.'},
        {tomorrow: 'Возможны неожиданные изменения в планах. Гибкость и адаптация будут ключевыми.'},
        {dayafter: 'Уделите внимание своим близким. Семейные отношения требуют внимания и заботы.'},
    ],
    'libra': [
        {today: 'Проявите лидерские качества. Ваша решительность поможет преодолеть препятствия.'},
        {tomorrow: 'Обратите внимание на свое финансовое положение. Возможны полезные инвестиции или экономические решения.'},
        {dayafter: 'Ваше творческое мышление приносит результаты. Займитесь проектом, который приносит вам удовлетворение.'},
    ],
    'aquarius': [
        {today: 'Сосредоточьтесь на саморазвитии. Обучение и приобретение новых навыков принесут пользу в будущем.'},
        {tomorrow: 'Будьте внимательны к деталям в коммуникации. Недоразумения могут возникнуть из-за недопонимания.'},
        {dayafter: 'Заботьтесь о своем здоровье. Физическая активность и правильное питание играют важную роль.'},
    ],
    'taurus': [
        {today: 'Найдите баланс между работой и личной жизнью. Семейные и дружеские отношения требуют внимания.'},
        {tomorrow: 'Возможны неожиданные повороты в отношениях. Будьте готовы к разговору и компромиссу.'},
        {dayafter: 'осредоточьтесь на карьерных аспектах. Возможны новые возможности для профессионального роста.'},
    ],
    'virgo': [
        {today: 'Будьте открыты к новым идеям. Коллеги могут предложить интересные проекты.'},
        {tomorrow: 'Сосредоточьтесь на своих целях. Утверждайте свои планы, несмотря на возможные сомнения.'},
        {dayafter: 'Позаботьтесь о своем эмоциональном благополучии. Возможны напряженные моменты, но они пройдут.'},
    ],
    'capricorn': [
        {today: 'Будьте открыты к общению. Возможны интересные встречи и обмен идеями.'},
        {tomorrow: 'Финансовая стабильность требует внимания. Планируйте свои расходы и инвестиции.'},
        {dayafter: 'Время для новых идей. Экспериментируйте и не бойтесь выходить за пределы привычного.'},
    ],
    'aries': [
        {today: 'Будьте терпеливыми в профессиональных отношениях. Терпение приведет к положительным результатам.'},
        {tomorrow: 'Обратите внимание на свое здоровье. Профилактические меры помогут избежать неприятностей.'},
        {dayafter: 'Сосредоточьтесь на домашних делах. Возможны перемены в домашней обстановке.'},
    ],
    'leo': [
        {today: 'Возможны неожиданные изменения в планах. Будьте гибкими и адаптируйтесь к обстоятельствам.'},
        {tomorrow: 'Обмен идеями с коллегами принесет положительные результаты. Будьте открыты к сотрудничеству.'},
        {dayafter: 'Время для творчества и самовыражения. Займитесь любимым делом или хобби.'},
    ],
    'sagittarius': [
        {today: 'Важно слушать свое внутреннее чувство. Интуиция будет вашим надежным советником.'},
        {tomorrow: 'Возможны неожиданные встречи. Новые знакомства могут принести интересные перспективы.'},
        {dayafter: 'Уделите внимание своим финансам. Планируйте бюджет и избегайте излишних трат.'},
    ],
}

let input = document.getElementById('main-input');
let todayRadio = document.getElementById('today');
let tomorrowRadio = document.getElementById('tomorrow');
let dayAfterTomorrowRadio = document.getElementById('dayaftertomorrow');
let paragraph = document.getElementById('paragraph');

input.addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
        displayHoroscope();
    }
});

todayRadio.addEventListener('change', displayHoroscope);
tomorrowRadio.addEventListener('change', displayHoroscope);
dayAfterTomorrowRadio.addEventListener('change', displayHoroscope);

function determineZodiacSign(dateString) {

    let dateParts = dateString.split('.');
    let day = parseInt(dateParts[0]);
    let month = parseInt(dateParts[1]);

    if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
        return 'aries';
    } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
        return 'taurus';
    } else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) {
        return 'gemini';
    } else if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) {
        return 'cancer';
    } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
        return 'leo';
    } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
        return 'virgo';
    } else if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) {
        return 'libra';
    } else if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) {
        return 'scorpio';
    } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
        return 'sagittarius';
    } else if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
        return 'capricorn';
    } else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
        return 'aquarius';
    } else {
        return 'pisces';
    }
}

function getHoroscope(sign, day) {
    const horoscopeInfo = horoscope[sign.toLowerCase()];
    if (horoscopeInfo) {
        if (day === 'today') return horoscopeInfo[0].today;
        if (day === 'tomorrow') return horoscopeInfo[1].tomorrow;
        if (day === 'dayaftertomorrow') return horoscopeInfo[2].dayafter;
    }
    return 'Информация отсутсвует';
}

function displayHoroscope() {
    let selectedDate = input.value;
    let selectedSign = determineZodiacSign(selectedDate);
    let selectedDay = 
        todayRadio.checked
        ? 'today'
        : tomorrowRadio.checked
        ? 'tomorrow'
        : dayAfterTomorrowRadio.checked
        ? 'dayaftertomorrow'
        : 'today';

    let horoscopeText = getHoroscope(selectedSign, selectedDay);
    paragraph.textContent = horoscopeText;
}