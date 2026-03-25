
// дано івенти, їхні сесії, список всіх спікерів і реєстрації
// людина вважається учасником івенту, якщо вона зареєструвалась хоча б на одну сесію цього івенту

const events = [
    { id: 'e1', title: 'Frontend Meetup' },
    { id: 'e2', title: 'Backend Conf' },
    { id: 'e3', title: 'Soft skills day' }
];

const sessions = [
    { id: 's1', title: 'CSS architecture', eventId: 'e1', price: 300 },
    { id: 's2', title: 'Async patterns', eventId: 'e1', price: 500 },

    { id: 's3', title: 'Databases basics', eventId: 'e2', price: 400 },
    { id: 's4', title: 'Caching strategies', eventId: 'e2', price: 600 },
    { id: 's5', title: 'Observability', eventId: 'e2', price: 500 },

    { id: 's6', title: 'Assertive communication', eventId: 'e3', price: 700 }
];

const speakers = [
    { id: 'sp1', name: 'Kate' },
    { id: 'sp2', name: 'John' },
    { id: 'sp3', name: 'Amy' },
    { id: 'sp4', name: 'Oleh' }
];

const sessionSpeakers = [
    { sessionId: 's1', speakerId: 'sp1' },
    { sessionId: 's1', speakerId: 'sp2' },
    { sessionId: 's2', speakerId: 'sp3' },

    { sessionId: 's3', speakerId: 'sp2' },
    { sessionId: 's4', speakerId: 'sp4' },
    { sessionId: 's5', speakerId: 'sp1' },

    { sessionId: 's6', speakerId: 'sp3' }
];

const participants = [
    { id: 'p1', name: 'Ira' },
    { id: 'p2', name: 'Dmytro' },
    { id: 'p3', name: 'Sofia' },
    { id: 'p4', name: 'Jane' },
    { id: 'p5', name: 'Mark' }
];

const registrations = [
    { id: 'r1', participantId: 'p1', sessionId: 's1' },
    { id: 'r2', participantId: 'p1', sessionId: 's2' },

    { id: 'r3', participantId: 'p2', sessionId: 's1' },
    { id: 'r4', participantId: 'p2', sessionId: 's3' },
    { id: 'r5', participantId: 'p2', sessionId: 's4' },

    { id: 'r6', participantId: 'p3', sessionId: 's3' },
    { id: 'r7', participantId: 'p3', sessionId: 's4' },
    { id: 'r8', participantId: 'p3', sessionId: 's5' },

    { id: 'r9', participantId: 'p4', sessionId: 's6' },

    { id: 'r10', participantId: 'p5', sessionId: 's2' },
    { id: 'r11', participantId: 'p5', sessionId: 's5' }
];

for (let i = 0; i < events.length; i++) {

    events[i].price = getEventPrice(events[i].id, sessions)
    events[i].sessionsCount = getEventSessionTitles(events[i].id, sessions).length
    events[i].speakers = getEventSpeakers(events[i].id, sessions, speakers, sessionSpeakers)
    events[i].participants = getEventParticipants(events[i].id, sessions, participants, registrations)
}

console.log(events)
/*
/[
  {
    id: 'e1',
    title: 'Frontend Meetup',
    price: 800,
    participants: ['Ira', 'Dmytro', 'Mark'],
    speakers: ['Kate', 'John', 'Amy'],
    sessionsCount: 2
},
{
    id: 'e2',
    title: 'Backend Conf',
    price: 1500,
    participants: ['Dmytro', 'Sofia', 'Mark'],
    speakers: ['John', 'Oleh', 'Kate'],
    sessionsCount: 3
},
{
    id: 'e3',
    title: 'Soft skills day',
    price: 700,
    participants: ['Jane'],
    speakers: ['Amy'],
    sessionsCount: 1
}
]




/*

// 1. порахувати інформацію по кожному івенту і вивести на сторінку у вигляді списку карток. Картка містить:
//     Title: [назва івенту]
// Price: [повна ціна івенту] (сума цін всіх його сесій)
// Participants: [через кому імена учасників цього івенту] (хто зареєструвався хоча б на одну сесію)
// Speakers: [через кому імена спікерів цього івенту] (хто виступає хоча б в одній сесії)
// X sessions >
// додати стилі в css по класу, щоб виглядало як картка (бордер, фоновий колір, відступи всередині картки, тд)


// 2. по натисканню на кількість сесій показати/заховати під ним список сесій і оновити стрілочку (V або >).
// від самого початку цей список не показується
// формат елемента списку:
//     [назва сесії] - [ціна] - [спікери через кому]


// 3. по натисканню на ім'я учасника показати/заховати список івентів, де він зареєстрований хоча б на одну сесію, у форматі:
// "[ім'я] participates in events: [список івентів через кому]"
// приклад:
//     Jane participates in events: Soft skills day


// 4. біля списка спікерів додати кнопку "show more". по натисканню на неї рядок про спікерів змінюється на розгорнутий формат і кнопка стає show less:
//     Speakers:
//         [ім'я спікера] - [список сесій цього івенту, в яких він виступає, через кому]
//             show less
//             при повторному натисканні на кнопку рядок про спікерів повертається до початкового короткого формату і кнопка
 //стає show more:

// Speakers: [через кому імена спікерів цього івенту]


// 5. використати делегування. клік має бути тільки один і у контейнера, який містить картки івентів


// 6. написати функції:
//     * getEventPrice очікує id івенту і масив сесій, рахує і повертає повну ціну івенту
// * getEventSessionTitles очікує id івенту і масив сесій, повертає масив назв сесій
// * getEventParticipants очікує id івенту, масиви сесій, учасників і реєстрацій, повертає масив учасників цього івенту
// * getEventSpeakers очікує id івенту, масиви сесій, спікерів і зв’язків sessionSpeakers, повертає масив спікерів цього івенту
// * getParticipantEvents очікує id учасника, масиви івентів, сесій і реєстрацій, повертає список назв івентів, у яких він бере участь
// * getEventSessionTitlesBySpeaker очікує id івенту, id спікера, масив сесій і масив зв’язків sessionSpeakers, повертає масив назв сесій цього спікера в цьому івенті

// 7. використати реалізовані функції в основному коді


 */



const wrapper = document.getElementById('wrap');
const cardList = document.createElement('ul')
cardList.classList.add('card')


cardList.onclick = (e)=>{
    if (e.target.className === 'sessions-button') {
        toggleList(e)
    }
    if (e.target.className === 'participant') {
        toggleParticipantEvents(e)
    }

    if (e.target.className === 'speakers_info') {
        toggleListSpeakers(e)
    }
}

const toggleList = (e)=> {
    const listToUpdate = e.target.nextElementSibling
    const sessionsCount = e.target.textContent.split(' ')[0]
    if (listToUpdate.style.display === '') {
        listToUpdate.style.display = 'none'
        e.target.textContent = `${sessionsCount} sessions >`
    } else {
        listToUpdate.style.display = ''
        e.target.textContent = `${sessionsCount} sessions V`
    }
}
// "[ім'я] participates in events: [список івентів через кому]"
const toggleParticipantEvents = (e) => {

    const participantName = e.target
    const participantInfoString = e.target.parentElement.nextElementSibling

    const participantId = participantName.dataset.id
    participantInfoString.textContent = `${participantName.innerText} participates in events: ${getParticipantEvents(participantId, events, sessions, registrations).join(', ')} `
    if (participantInfoString.style.display === '') {
        participantInfoString.style.display = 'none'
    } else {
        participantInfoString.style.display = ''
    }
}

const toggleListSpeakers = (e) => {

    const speakerBlock = e.target.parentElement
    const speakers = speakerBlock.querySelectorAll('p')
    const speakersNamesSpan = speakerBlock.querySelectorAll('span')
// debugger
    for (let i = 0; i < speakers.length; i++) {

        if (speakers[i].style.display === 'none') {
            speakers[i].style.display = ''
            speakersNamesSpan[i].style.display = 'none'
            e.target.textContent = 'show less'
        } else {
            speakers[i].style.display = 'none'
            speakersNamesSpan[i].style.display = ''
            e.target.textContent = 'show more'
        }

    }

}


for (let i = 0; i < events.length; i++) {
    const li = document.createElement('li')

    const cardTitle = document.createElement('h2');
    cardTitle.textContent = `Title: ${events[i].title};`

    const price = document.createElement('p')
    price.textContent = `Price: ${events[i].price}`

    const participants = document.createElement('p')
    participants.textContent = `Participants: `

    for (let j = 0; j < events[i].participants.length; j++) {
        const participantsName = document.createElement('span')
        participantsName.textContent = events[i].participants[j].name
        participantsName.classList.add('participant');
        participantsName.dataset.id = events[i].participants[j].id
        if (j < events[i].participants.length - 1) {
            participantsName.textContent += `, `
        }
        participants.append(participantsName)
    }

    const participantsEvents = document.createElement('p')
    participantsEvents.style.display = 'none'


    const speaker = document.createElement('p')
    speaker.textContent = `Speakers: `

    const speakerButtonInfo = document.createElement('button')
    speakerButtonInfo.textContent = `show more`
    speakerButtonInfo.classList.add('speakers_info')

    for (let k = 0; k < events[i].speakers.length; k++) {
        const speakersName = document.createElement('span')
        speakersName.textContent = events[i].speakers[k].name
        if (k < events[i].speakers.length - 1) {
            speakersName.textContent += ', '

        }
        speaker.append(speakersName)
    }

    for (let f = 0; f < events[i].speakers.length; f++) {
        const updateSpeakersName = document.createElement('p')
        updateSpeakersName.textContent = `${events[i].speakers[f].name} - ${getEventSessionTitlesBySpeaker(events[i].id, events[i].speakers[f].id, sessions, sessionSpeakers)}`
        updateSpeakersName.style.display = 'none'
        speaker.append(updateSpeakersName)
    }
    speaker.append(speakerButtonInfo)

    const buttonList = document.createElement('button')
    buttonList.classList.add('sessions-button')
    buttonList.textContent = `${events[i].sessionsCount} sessions >`
    li.append(cardTitle, price, participants, participantsEvents, speaker, buttonList)

    const innerUl = document.createElement('ul')
    innerUl.style.display = 'none'
    for (let j = 0; j < sessions.length; j++) {
        if (sessions[j].eventId === events[i].id) {
            const innerLi = document.createElement('li')
            innerLi.textContent = `${sessions[j].title} ${sessions[j].price} ${getSpeakersNames(sessions[j].id, speakers, sessionSpeakers).join(', ')}`
            innerUl.append(innerLi)
        }
    }
    li.append(innerUl)

    cardList.append(li)

}
wrapper.append(cardList)



function getSpeakersNames (sessionId, speakers, sessionSpeakers) {
    let result = []
    for (let i = 0; i < sessionSpeakers.length; i++) {
        if (sessionSpeakers[i].sessionId === sessionId) {
            for (let j = 0; j < speakers.length; j++) {
                if (sessionSpeakers[i].speakerId === speakers[j].id) {
                    result.push(speakers[j].name)
                }
            }

        }
    }
    return result
}

//     * getEventPrice очікує id івенту і масив сесій, рахує і повертає повну ціну івенту

function getEventPrice (eventId, sessionsArr) {
    let eventTotalPrice = 0;

    for (let i = 0; i < sessionsArr.length; i++) {
        if (eventId === sessionsArr[i].eventId) {
            eventTotalPrice += sessionsArr[i].price
        }
    }
    return eventTotalPrice
}


// * getEventSessionTitles очікує id івенту і масив сесій, повертає масив назв сесій

function getEventSessionTitles (eventId, sessionsArr) {
    let titleArr = [];

    for (let i = 0; i < sessionsArr.length; i++) {
        if (eventId === sessionsArr[i].eventId) {
            titleArr.push(sessionsArr[i].title)
        }
    }
    return titleArr
}

// * getEventParticipants очікує id івенту, масиви сесій, учасників і реєстрацій, повертає
// масив учасників цього івенту

function getEventParticipants (eventId, sessionsArr, participants, registration) {
    let participantsName = [];
    for (let i = 0; i < sessionsArr.length; i++) {
        if (sessionsArr[i].eventId === eventId) {

            for (let j = 0; j < registration.length; j++) {
                if (registration[j].sessionId === sessionsArr[i].id) {

                    for (let k = 0; k < participants.length; k++) {
                        if (participants[k].id === registration[j].participantId) {

                            if (!participantsName.includes(participants[k])) {
                                participantsName.push(participants[k]);
                            }

                        }
                    }
                }
            }

        }
    }

    return participantsName;
}


// * getEventSpeakers очікує id івенту, масиви сесій, спікерів і зв’язків sessionSpeakers, повертає
// масив спікерів цього івенту

function getEventSpeakers(eventId, sessions, speakers, sessionSpeakers) {
    let speakersNames = [];

    for (let i = 0; i < sessions.length; i++) {
        if (sessions[i].eventId === eventId) {

            for (let j = 0; j < sessionSpeakers.length; j++) {
                if (sessionSpeakers[j].sessionId === sessions[i].id) {

                    for (let k = 0; k < speakers.length; k++) {
                        if (speakers[k].id === sessionSpeakers[j].speakerId) {

                            if (!speakersNames.includes(speakers[k])) {
                                speakersNames.push(speakers[k]);
                            }

                        }
                    }
                }
            }

        }
    }

    return speakersNames;
}


// * getParticipantEvents очікує id учасника, масиви івентів, сесій і реєстрацій, повертає список назв івентів,
// у яких він бере участь

function getParticipantEvents (idParticipant, events, sessions, registrations) {
    const result = [];

    for (let i = 0; i < registrations.length; i++) {

        if (registrations[i].participantId === idParticipant) {

            for (let j = 0; j < sessions.length; j++) {
                if (sessions[j].id === registrations[i].sessionId) {

                    for (let k = 0; k < events.length; k++) {
                        if (events[k].id === sessions[j].eventId) {

                            if (!result.includes(events[k].title)) {
                                result.push(events[k].title);
                            }
                        }
                    }
                }
            }
        }
    }

    return result;
}


// * getEventSessionTitlesBySpeaker очікує id івенту, id спікера, масив сесій і масив зв’язків sessionSpeakers,
// повертає масив назв сесій цього спікера в цьому івенті


function getEventSessionTitlesBySpeaker (eventId, speakerId, sessions, sessionSpeakers ) {
    let sessionTitles = [];

    for (let i = 0; i < sessions.length; i++) {
        if (sessions[i].eventId === eventId) {
            for (let j = 0; j < sessionSpeakers.length; j++) {
                if (  sessionSpeakers[j].sessionId === sessions[i].id && sessionSpeakers[j].speakerId === speakerId) {
                    sessionTitles.push(sessions[i].title)
                }
            }
        }
    }
    return sessionTitles
}

