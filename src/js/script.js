
// дано тренінги, їхні модулі, список всіх учасників і інфа про оплати
// людина вважається учасником тренінгу, якщо вона його оплатила

const trainings = [
    {
        id: 'td74hf8',
        title: 'Personal boundaries',
    },
    {
        id: 'tdh5jkv',
        title: 'Effective team communication'
    },
    {
        id: 'td84hv7',
        title: 'EQ'
    }
]

const trainingModules = [
    {
        id: 'md7fbg4',
        title: 'Inner obstacles which prevent from defending personal boundaries',
        trainingId: 'td74hf8',
        price: 300
    },
    {
        id: 'msuft4s',
        title: 'Practice: techniques to defend personal boundaries',
        trainingId: 'td74hf8',
        price: 500
    },
    {
        id: 'm74gf6s',
        title: 'Basic communication skills',
        trainingId: 'tdh5jkv',
        price: 300
    },
    {
        id: 'mj5hg8d',
        title: 'Business emailing',
        trainingId: 'tdh5jkv',
        price: 400
    },
    {
        id: 'mp5dfax',
        title: 'Conflict resolution',
        trainingId: 'tdh5jkv',
        price: 500
    },
    {
        id: 'm2fk89c',
        title: 'Recognizing and managing emotions',
        trainingId: 'td84hv7',
        price: 900
    }
]

const participants = [
{
    id: 'p7fh438',
        name: 'Kate',
},
{
    id: 'pke74kd',
        name: 'John',
},
{
    id: 'p7hekc9',
        name: 'Amy',
},
{
    id: 'p6shr6v',
        name: 'Oleh',
},
{
    id: 'pi37v7s',
        name: 'Jane',
}
]

const payments = [
    {
        id: 'p1',
        participantId: 'p7fh438',
        moduleId: 'md7fbg4'
    },
    {
        id: 'p2',
        participantId: 'p7fh438',
        moduleId: 'msuft4s'
    },

    {
        id: 'p3',
        participantId: 'pke74kd',
        moduleId: 'md7fbg4'
    },
    {
        id: 'p4',
        participantId: 'pke74kd',
        moduleId: 'msuft4s'
    },
    {
        id: 'p5',
        participantId: 'pke74kd',
        moduleId: 'm74gf6s'
    },
    {
        id: 'p6',
        participantId: 'pke74kd',
        moduleId: 'mj5hg8d'
    },
    {
        id: 'p7',
        participantId: 'pke74kd',
        moduleId: 'mp5dfax'
    },
    {
        id: 'p8',
        participantId: 'pke74kd',
        moduleId: 'm2fk89c'
    },

    {
        id: 'p9',
        participantId: 'p7hekc9',
        moduleId: 'md7fbg4'
    },
    {
        id: 'p10',
        participantId: 'p7hekc9',
        moduleId: 'msuft4s'
    },
    {
        id: 'p11',
        participantId: 'p7hekc9',
        moduleId: 'm74gf6s'
    },
    {
        id: 'p12',
        participantId: 'p7hekc9',
        moduleId: 'mj5hg8d'
    },
    {
        id: 'p13',
        participantId: 'p7hekc9',
        moduleId: 'mp5dfax'
    },
    {
        id: 'p14',
        participantId: 'p7hekc9',
        moduleId: 'm2fk89c'
    },

    {
        id: 'p15',
        participantId: 'p6shr6v',
        moduleId: 'm2fk89c'
    },

    {
        id: 'p11',
        participantId: 'pi37v7s',
        moduleId: 'm74gf6s'
    },
    {
        id: 'p12',
        participantId: 'pi37v7s',
        moduleId: 'mj5hg8d'
    },
    {
        id: 'p13',
        participantId: 'pi37v7s',
        moduleId: 'mp5dfax'
    },
]

//1) порахувати інформацію по кожному тренінгу і вивести на сторінку у вигляді списку карток. Картка містить:
 //   Title: [назва тренінгу]
//Price: [повна ціна тренінгу]
//Participants: [через кому імена учасників]
//X modules >
//додати стилі в css по класу, щоб виглядало як картка (бордер, фоновий колір, відступи всередині картки, тд)

//2) по натисканню на кількість модулів показати/заховати під ним список назв модулів і оновити стрілочку (V або >).
// від самого початку цей список не показується

//3) по натисканню на ім'я учасника показати/заховати список тренінгів, де він бере участь щонайменше в одному модулі,
// у форматі "[ім'я] participates in trainings: [список тренінгів через кому]". наприклад
//Oleh participates in trainings: EQ

//4) використати делегування. клік має бути тільки один і у контейнера, який містить картки тренінгів

//5) написати функції:
 //   - getTrainingPrice очікує id тренінга, для якого треба порахувати вартість, і масив модулів, рахує
//   і повертає вартість тренінгу
//- getTrainingModuleTitles очікує id тренінга, для якого треба порахувати список назв модулів,
// і масив модулів, повертає масив назв модулів
//- getTrainingParticipants очікує id тренінга, для якого треба порахувати список учасників,
// масиви модулів, учасників і оплат, повертає масив учасників цього тренінгу

//6) використати реалізовані функції в основному коді


//у 5 ще:
   // - getParticipantTrainings очікує id учасника, для якого треба обчислить список
// тренінгів, масиви тренінгів, модулів і оплат, повертає список назв тренінгів,
  //  в яких бере участь цей учасник


/*
[
  {
    id: 'td74hf8',
    title: 'Personal boundaries',
    price: 800, // 300 + 500
    modulesCount: 2,
    participants: ['Kate', 'John', 'Amy']
  },
  {
    id: 'tdh5jkv',
    title: 'Effective team communication',
    price: 1200, // 300 + 400 + 500
    modulesCount: 3,
    participants: ['John', 'Amy', 'Jane']
  },
  {
    id: 'td84hv7',
    title: 'EQ',
    price: 900,
    modulesCount: 1,
    participants: ['John', 'Amy', 'Oleh']
  }
]
 */


for (let i = 0; i < trainings.length;i ++) {
    trainings[i].price = getTrainingPrice(trainings[i].id, trainingModules)
    trainings[i].participants = getTrainingParticipants(trainings[i].id, trainingModules, participants, payments)
    trainings[i].modulesCount = getTrainingModuleTitles(trainings[i].id, trainingModules).length
}

console.log(trainings)



const wrap = document.getElementById(`wrapper`);
const listWrap = document.createElement('ul')
listWrap.classList.add('training-list')

listWrap.onclick = (e)=>{
    if (e.target.tagName === 'BUTTON') {
        toggleList(e)
    }
    if (e.target.tagName === 'SPAN') {
        showTrainingList(e)
    }
}

const toggleList = (e)=> {
    const listToUpdate = e.target.nextElementSibling
    const moduleCount = e.target.textContent.split(' ')[0]
    if (listToUpdate.style.display === '') {
        listToUpdate.style.display = 'none'
        e.target.textContent = `${moduleCount} modules >`
    } else {
        listToUpdate.style.display = ''
        e.target.textContent = `${moduleCount} modules V`
    }
}

const showTrainingList = (e) => {
 const el = e.target.parentElement
    const nextSiblingEl = el.nextElementSibling

    if (nextSiblingEl.style.display === '') {
        nextSiblingEl.style.display = 'none'
        nextSiblingEl.textContent = `${getParticipantTrainings(participants, trainings, trainingModules, payments)}`
    } else {
        nextSiblingEl.style.display = ''
    }
}


for (let i = 0; i < trainings.length; i++) {
    const li = document.createElement('li');
    li.classList.add('card')

    const title = document.createElement('h2')
    title.textContent = `Title: ${trainings[i].title}`

    const price = document.createElement('p');
    price.textContent = `Price: ${trainings[i].price}`

    const participants = document.createElement('p')
    participants.textContent = `Participants: `

    for ( let k = 0; k < trainings[i].participants.length; k++) {
        const span = document.createElement('span')
        if (k < trainings[i].participants.length - 1) {
            span.textContent = `${trainings[i].participants[k]}, `
            span.dataset.nameId = `${trainings[i].participants[k]}`
            participants.append(span)
        } else {
            span.textContent = `${trainings[i].participants[k]} `
            participants.append(span)
        }
    }

    const participatesInTrainings = document.createElement('p')
    participatesInTrainings.style.display = ' none'

    const buttonList = document.createElement('button')
    buttonList.textContent = `${trainings[i].modulesCount} modules >`



    li.append(title, price, participants, participatesInTrainings, buttonList)

    const innerUl = document.createElement('ul')
    innerUl.style.display = 'none'
    for (let j = 0; j < trainingModules.length; j++) {
        if (trainings[i].id === trainingModules[j].trainingId) {
            const innerLi = document.createElement('li')
            innerLi.textContent = `${trainingModules[j].title}`
            innerUl.append(innerLi)
        }
    }
    li.append(innerUl)

    listWrap.append(li)
}

wrap.append(listWrap)


//   - getTrainingPrice очікує id тренінга, для якого треба порахувати вартість, і масив модулів, рахує
//   і повертає вартість тренінгу

function getTrainingPrice (id, trainingModules) {
    let price = 0

    for (let i = 0; i < trainingModules.length; i++) {
        if (id === trainingModules[i].trainingId) {
            price += trainingModules[i].price
        }
    }

    return price
}

//- getTrainingModuleTitles очікує id тренінга, для якого треба порахувати список назв модулів,
// і масив модулів, повертає масив назв модулів

function getTrainingModuleTitles (idTraining, modules) {
    let result = [];

    for (let i = 0; i < modules.length; i++) {
        if (idTraining === modules[i].trainingId) {
            result.push(modules[i].title)
        }
    }
    return result
}

console.log(getTrainingModuleTitles('td74hf8', trainingModules ))
console.log(getTrainingModuleTitles('tdh5jkv', trainingModules))
console.log(getTrainingModuleTitles('td84hv7', trainingModules))


//- getTrainingParticipants очікує id тренінга, для якого треба порахувати список учасників,
// масиви модулів, учасників і оплат, повертає масив учасників цього тренінгу
function getTrainingParticipants(idTraining, modules, participants, payments) {
    const participantsList = []

    for (let i = 0; i < modules.length; i++) {
        if (modules[i].trainingId === idTraining) {

            for (let j = 0; j < payments.length; j++) {
                if (payments[j].moduleId === modules[i].id) {

                    for (let k = 0; k < participants.length; k++) {
                        if (participants[k].id === payments[j].participantId) {
                            if (!participantsList.includes(participants[k].name)) {
                                participantsList.push(participants[k].name)
                            }
                        }
                    }
                }
            }
        }
    }

    return participantsList
}

// - getParticipantTrainings очікує id учасника, для якого треба обчислить список
// тренінгів, масиви тренінгів, модулів і оплат, повертає список назв тренінгів,
//  в яких бере участь цей учасник

function getParticipantTrainings (idParticipant, training, modules, payments) {
    let result = []
    for (let i = 0; i < payments.length; i++) {
        if (idParticipant === payments[i].participantId) {
            for (let j = 0; j < modules.length; j++) {
                if (payments[i].moduleId === modules[j].id) {
                    for (let k = 0; k < training.length; k++) {
                        if (modules[j].trainingId === training[k].id) {
                            if (!result.includes(training[k].title)) {
                                result.push(training[k].title)
                            }
                        }
                    }
                }
            }
        }
    }
    return result
}


