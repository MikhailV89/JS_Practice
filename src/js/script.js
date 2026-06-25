//1) динамічно зробить форму, яка створює юзера. у юзера є ід, ім'я, імейл, роль, активність.

//додати гарні стилі.

//  по натисканню на кнопку Ок має відбуватися валідація, що всі поля заповнені коректно. Якщо є помилки,
//  має виділити такі поля червоним і написати текст помилки. Якщо все ок, має створити юзера, вивести його в
//  консолі і очистити форму


// const roles = ['admin', 'manager', 'user']
// const formFields = [
//     {
//         label: 'User name',
//         type: 'text',
//         id: 'username'
//     },
//     {
//         label: 'User email',
//         type: 'email',
//         id: 'user-email'
//     },
//     {
//         label: 'Active',
//         type: 'checkbox',
//         id: 'isActive'
//     }
// ]
//
// const wrap = document.querySelector('.form_wrap')
// const form = document.createElement('form')
// form.classList.add('user-form')
//
// for (let i = 0; i < formFields.length; i++) {
//     const field = formFields[i];
//
//     const label = document.createElement('label')
//     label.textContent = field.label
//     label.htmlFor = field.id
//     label.classList.add('user-form__label')
//
//
//     const input = document.createElement('input')
//     input.id = field.id
//     input.type = field.type
//     input.name = field.label
//     input.classList.add('user-form__input')
//
//     if (i === 2) {
//         const select = document.createElement('select')
//         select.id = 'chooseRole'
//         select.classList.add('user-form__select')
//         select.name = 'Role'
//
//         for (let j = 0; j < roles.length; j++) {
//             const option = document.createElement('option')
//             option.textContent = roles[j]
//             select.append(option)
//         }
//         form.append(select)
//     }
//
//     form.append(label, input)
// }
//
// const subButton = document.createElement('button')
// subButton.textContent = 'ОК';
// subButton.type = 'submit'
// subButton.classList.add('user-form__btn')
// form.append(subButton)
// // wrap.append(form)
//
// const validateEmail = (email) => {
//     return String(email)
//         .toLowerCase()
//         .match(
//             /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//         );
// };
//
// form.addEventListener('submit',(event)=> {
//
//     event.preventDefault()
//
//     const inputs = event.target.querySelectorAll('input, select')
//     const valid =  inputsValidation(inputs)
//     if (!valid) return
//
//     const user = {}
//
//     for (let i = 0; i < inputs.length; i++) {
//         if (inputs[i].type === 'checkbox') {
//             user[inputs[i].name] = inputs[i].checked
//
//         } else {
//             user[inputs[i].name] = inputs[i].value
//         }
//
//     }
//
//     console.log(user)
//     event.target.reset();
//
// })
//
// function inputsValidation (inputs) {
//
//     let valid = true
//     for (let i = 0; i < inputs.length; i++) {
//         inputs[i].classList.remove('Error')
//
//         if (inputs[i].type !== 'checkbox' && inputs[i].value.trim() === '') {
//
//             inputs[i].classList.add('error')
//
//             console.log('Field is empty')
//
//             valid = false
//         }
//
//         if (inputs[i].type === 'email' && !validateEmail(inputs[i].value)) {
//             inputs[i].classList.add('error')
//             console.log('Email is invalid')
//             valid = false
//         }
//
//     }
//     return valid
// }

//2) динамічно створити таблицю і заповнити її даними:

const employees = [
    {
        id: 'e1',
        name: 'Anna',
        department: 'Engineering',
        team: 'Frontend',
        position: 'Frontend Developer',
        level: 'Middle',
        city: 'Kyiv',
        salary: 2500,
        status: 'active'
    },
    {
        id: 'e2',
        name: 'John',
        department: 'Engineering',
        team: 'Frontend',
        position: 'Frontend Developer',
        level: 'Senior',
        city: 'Kyiv',
        salary: 4200,
        status: 'active'
    },
    {
        id: 'e3',
        name: 'Ira',
        department: 'Engineering',
        team: 'Backend',
        position: 'Backend Developer',
        level: 'Middle',
        city: 'Lviv',
        salary: 2800,
        status: 'vacation'
    },
    {
        id: 'e4',
        name: 'Oleh',
        department: 'Engineering',
        team: 'Backend',
        position: 'Backend Developer',
        level: 'Senior',
        city: 'Dnipro',
        salary: 4500,
        status: 'active'
    },
    {
        id: 'e5',
        name: 'Kate',
        department: 'Engineering',
        team: 'QA',
        position: 'QA Engineer',
        level: 'Junior',
        city: 'Kyiv',
        salary: 1200,
        status: 'active'
    },
    {
        id: 'e6',
        name: 'Mike',
        department: 'Engineering',
        team: 'QA',
        position: 'QA Engineer',
        level: 'Middle',
        city: 'Lviv',
        salary: 2100,
        status: 'inactive'
    },
    {
        id: 'e7',
        name: 'Sofia',
        department: 'Design',
        team: 'UX',
        position: 'UX Designer',
        level: 'Middle',
        city: 'Kyiv',
        salary: 2300,
        status: 'active'
    },
    {
        id: 'e8',
        name: 'Max',
        department: 'Design',
        team: 'UI',
        position: 'UI Designer',
        level: 'Junior',
        city: 'Odessa',
        salary: 1400,
        status: 'active'
    },
    {
        id: 'e9',
        name: 'Jane',
        department: 'Product',
        team: 'Product',
        position: 'Product Manager',
        level: 'Senior',
        city: 'Kyiv',
        salary: 5000,
        status: 'active'
    },
    {
        id: 'e10',
        name: 'Dmytro',
        department: 'Product',
        team: 'Analytics',
        position: 'Business Analyst',
        level: 'Middle',
        city: 'Lviv',
        salary: 2600,
        status: 'active'
    },
    {
        id: 'e11',
        name: 'Olga',
        department: 'Sales',
        team: 'B2B',
        position: 'Sales Manager',
        level: 'Middle',
        city: 'Kyiv',
        salary: 2400,
        status: 'active'
    },
    {
        id: 'e12',
        name: 'Nick',
        department: 'Sales',
        team: 'B2C',
        position: 'Sales Manager',
        level: 'Junior',
        city: 'Dnipro',
        salary: 1600,
        status: 'probation'
    },
    {
        id: 'e13',
        name: 'Marta',
        department: 'HR',
        team: 'Recruitment',
        position: 'Recruiter',
        level: 'Middle',
        city: 'Kyiv',
        salary: 2200,
        status: 'active'
    },
    {
        id: 'e14',
        name: 'Pavlo',
        department: 'HR',
        team: 'People Partners',
        position: 'HR Manager',
        level: 'Senior',
        city: 'Lviv',
        salary: 3800,
        status: 'vacation'
    },
    {
        id: 'e15',
        name: 'Lena',
        department: 'Marketing',
        team: 'Content',
        position: 'Content Manager',
        level: 'Middle',
        city: 'Kyiv',
        salary: 2100,
        status: 'active'
    }
];

const filters = document.querySelector('.filters')
let currentPage = 1
let perPage = 5

// Title

const titleWrap = document.querySelector('.title-wrap')

const title = document.createElement('h2')
const employeeCount = document.createElement('span')

title.textContent = 'Employees'
employeeCount.textContent = `Total: ${employees.length} employees`

titleWrap.append(title, employeeCount)


// Filters


const formFilters = document.createElement('form')


//  Make filters
function filterRender (arr, id, key ) {
    const div = document.createElement('div')
    const select = document.createElement('select')
    const label = document.createElement('label')

    div.classList.add('select-wrap')

    select.id = id
    select.name = key
    select.classList.add(`select-${key}`)

    label.htmlFor = id
    label.textContent = key

    let dataValue = []

    for (let i = 0; i < arr.length; i++) {
        if (!dataValue.includes(arr[i][key])) {
            dataValue.push((arr[i][key]))
        }
    }

    const option = document.createElement('option')
    option.textContent = `All ${key}`
    option.value = ''
   select.append(option)

    for (let j = 0; j < dataValue.length; j++) {
        const option = document.createElement('option')
        option.textContent = dataValue[j]
        option.value = dataValue[j]
        select.append(option)
    }
    div.append(label, select)
    return div
}

formFilters.append(filterRender(employees,'chooseDepartment', 'department' ))
formFilters.append(filterRender(employees,'chooseTeam', 'team' ))
formFilters.append(filterRender(employees,'choosePosition', 'position' ))
formFilters.append(filterRender(employees,'chooseLevel', 'level' ))
formFilters.append(filterRender(employees,'chooseStatus', 'status' ))
formFilters.append(filterRender(employees,'chooseCity', 'city' ))


const salaryWrap = document.createElement('div')
salaryWrap.classList.add('select-wrap')

const salaryLabel = document.createElement('label')
salaryLabel.textContent = 'Salary range'

const salaryRange = document.createElement('div')
salaryRange.classList.add('salary-range')

const minSalary = document.createElement('input')
minSalary.type = 'number'
minSalary.placeholder = 'Min'
minSalary.classList.add('salary-min')

const maxSalary = document.createElement('input')
maxSalary.type = 'number'
maxSalary.placeholder = 'Max'
maxSalary.classList.add('salary-max')

salaryRange.append(minSalary, maxSalary)
salaryWrap.append(salaryLabel, salaryRange)

formFilters.append(salaryWrap)


const btnWrap = document.createElement('div')
btnWrap.classList.add('btn-wrap')
const btnReset = document.createElement('button')
const btnApply = document.createElement('button')

btnReset.textContent = 'Reset'
btnApply.textContent = 'Apply Filters'

btnWrap.append(btnReset, btnApply)
formFilters.append(btnWrap)
filters.append(formFilters)


// form reset
btnReset.onclick =(e) => {
    e.preventDefault()
    formFilters.reset()
    tableRender(arrNew)
}

// form filters apply

btnApply.onclick = (e) => {

    e.preventDefault()
    const filterResult = tableFilters(employees)
    cutArr(filterResult)
}


// Filter apply function
function tableFilters (arrEmployees) {

    const optionValue = document.querySelector('.select-department').value
    const optionTeam = document.querySelector('.select-team').value
    const optionPosition = document.querySelector('.select-position').value
    const optionLevel = document.querySelector('.select-level').value
    const optionStatus = document.querySelector('.select-status').value
    const optionCity= document.querySelector('.select-city').value

    const minSalary = document.querySelector('.salary-min').value
    const maxSalary = document.querySelector('.salary-max').value

    let arr = []

    for (let i = 0; i < arrEmployees.length; i++) {
        if ((!optionValue || optionValue === arrEmployees[i].department) &&
        (!optionTeam || optionTeam === arrEmployees[i].team) &&
            (!optionPosition || optionPosition === arrEmployees[i].position) &&
            (!optionLevel || optionLevel === arrEmployees[i].level) &&
            (!optionStatus || optionStatus === arrEmployees[i].status) &&
            (!optionCity || optionCity === arrEmployees[i].city) &&
            (!minSalary || arrEmployees[i].salary >= Number(minSalary)) &&
            (!maxSalary || arrEmployees[i].salary <= Number(maxSalary))
        ){
            arr.push(arrEmployees[i])
        }
    }

return arr
}
function tableRender (arr) {
    const tableWrap = document.querySelector('.table-wrap');
    tableWrap.innerHTML = ''

     const objForKeys = arr[0];
     const keys = Object.keys(objForKeys);

    const table = document.createElement('table')
    const tableRow = document.createElement('tr')

    for (let i = 0; i < keys.length; i++) {
    const tableHeader = document.createElement('th')
    tableHeader.textContent = keys[i]
    tableRow.append(tableHeader)
  }
    table.append(tableRow)
    for (let j = 0; j < arr.length; j++) {
    const data = arr[j]
    const dataValue = Object.values(data)

    const row = document.createElement('tr');
for (let k = 0; k < dataValue.length; k++) {
    const tableData = document.createElement('td')
    tableData.textContent = `${dataValue[k]}`
    row.append(tableData)
}
table.append(row)
}

tableWrap.append(table)

}

let start = 0
let end = perPage + start
let arrNew = employees.slice(start, end)


tableRender(arrNew)


// Footer

const footer = document.querySelector('.footer')

const leftPart = document.createElement('div')
leftPart.classList.add('footer-left')

const showText = document.createElement('span')
showText.textContent = 'Show'

const perPageSelect = document.createElement('select')

let peopleCount = [5, 10, 15]
for (let i = 0; i < peopleCount.length; i++) {
    const option = document.createElement('option')
    option.value = peopleCount[i]
    option.textContent = peopleCount[i]

    perPageSelect.append(option)
}
const perPageText = document.createElement('span')
perPageText.textContent = 'per page'

leftPart.append(showText, perPageSelect, perPageText)

const pagination = document.createElement('div')
pagination.classList.add('pagination')

const prevBtn = document.createElement('button')
prevBtn.textContent = '<'

const pageInfo = document.createElement('span')
pageInfo.textContent = '1'

const nextBtn = document.createElement('button')
nextBtn.textContent = '>'

pagination.append(prevBtn, pageInfo, nextBtn)


footer.append(leftPart, pagination)


perPageSelect.onchange = (e) => {
    perPage = Number(e.target.value)
    currentPage = 1
     let arr = [];

        for (let i = 0; i < employees.length; i++) {
            if (i < perPage){
                arr.push(employees[i])
            }
        }

    tableRender(arr)
}

function cutArr (newArr) {
    const start = (currentPage - 1) * perPage
    const end = start + perPage

    const arrNew = newArr.slice(start, end)

    pageInfo.textContent = currentPage

    tableRender(arrNew)
}
nextBtn.onclick = (e) => {
    const filterArray = tableFilters(employees)
    const totalPages = Math.ceil(filterArray.length / perPage)

    if (currentPage < totalPages) {
        currentPage++
      cutArr(filterArray)
    }
}

prevBtn.onclick = (e) => {
    const filterArray = tableFilters(employees)
    if (currentPage > 1) {
        currentPage--
        cutArr(filterArray)
    }
}

// додати пагінацію з можливістю вибору кількості елементів на сторінці (5, 10, 15)

// додати панель фільтрів, яка дозволяє фільтрувати список за вказаними властивостями.
// кожен випадаючий список має заповнюватися відповідно до наявних даних у списку працівників
