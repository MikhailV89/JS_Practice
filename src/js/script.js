import { getCompanyById, getJobTags, getJobApplications, getApplicationsSummary, getJobCandidates, getTopCandidates, } from "./functions.js";

// Дано: вакансії, компанії, теги, кандидати і їх подачі на вакансії
// людина вважається кандидатом вакансії, якщо подалася на цю вакансію
// треба дообчислити дані, показати список зліва і деталі справа, використати делегування і допоміжні функції

const companies = [
    { id: 'co1', name: 'TechNova', size: '200-500', city: 'Kyiv' },
    { id: 'co2', name: 'CloudBrick', size: '50-100', city: 'Lviv' },
    { id: 'co3', name: 'DataForge', size: '10-50', city: 'Dnipro' }
];

const jobs = [
    { id: 'j1', title: 'Junior Frontend', companyId: 'co1', level: 'junior', salaryFrom: 800, salaryTo: 1200 },
    { id: 'j2', title: 'Middle Frontend', companyId: 'co1', level: 'middle', salaryFrom: 2000, salaryTo: 2800 },
    { id: 'j3', title: 'QA Engineer', companyId: 'co2', level: 'middle', salaryFrom: 1500, salaryTo: 2200 },
    { id: 'j4', title: 'Node.js Developer', companyId: 'co3', level: 'middle', salaryFrom: 2200, salaryTo: 3200 }
];

const tags = [
    { id: 't1', title: 'JavaScript' },
    { id: 't2', title: 'React' },
    { id: 't3', title: 'TypeScript' },
    { id: 't4', title: 'Node.js' },
    { id: 't5', title: 'Testing' }
];

const jobTags = [
    { jobId: 'j1', tagId: 't1' },
    { jobId: 'j1', tagId: 't2' },

    { jobId: 'j2', tagId: 't1' },
    { jobId: 'j2', tagId: 't2' },
    { jobId: 'j2', tagId: 't3' },

    { jobId: 'j3', tagId: 't5' },

    { jobId: 'j4', tagId: 't4' },
    { jobId: 'j4', tagId: 't1' }
];

const candidates = [
    { id: 'u1', name: 'Anna', experienceMonths: 10 },
    { id: 'u2', name: 'John', experienceMonths: 30 },
    { id: 'u3', name: 'Ira', experienceMonths: 6 },
    { id: 'u4', name: 'Oleh', experienceMonths: 48 },
    { id: 'u5', name: 'Sofia', experienceMonths: 18 }
];

const applications = [
    { id: 'a1', jobId: 'j1', candidateId: 'u1', status: 'new' },
    { id: 'a2', jobId: 'j1', candidateId: 'u3', status: 'rejected' },
    { id: 'a3', jobId: 'j2', candidateId: 'u2', status: 'interview' },
    { id: 'a4', jobId: 'j2', candidateId: 'u5', status: 'new' },
    { id: 'a5', jobId: 'j3', candidateId: 'u1', status: 'interview' },
    { id: 'a6', jobId: 'j4', candidateId: 'u4', status: 'offer' },
    { id: 'a7', jobId: 'j4', candidateId: 'u2', status: 'rejected' }
];

//1. зробити сторінку як в дизайні

//* ліворуч вертикальний список вакансій
//* праворуч великий скруглений блок з деталями вибраної вакансії
//* при старті сторінки справа написати "Select a job to see details"

//2. з коду згенерити список вакансій в лівій колонці
//кожен елемент списку має показувати:
 //   [Job title]
  //      [Company name] • [level] • $[salaryFrom]-$[salaryTo]
//Tags: [tags через кому]
//Candidates: [кількість кандидатів] (кількість подач на цю вакансію)

//3. по натисканню на вакансію (клік по sidebar через делегування) справа показати детальну інфу по вакансії у великому блоці:
  //  Title: ...
//Company: ...
//Location: ...
//Company size: ...
//Salary: ...
//Tags: ...
//Candidates: ...
//Applications summary: new - X, interview - Y, offer - Z, rejected - W
//Top candidates (top 3): ім'я + досвід в місяцях (відсортувати по досвіду спадання)
//якщо кандидатів менше 3 — показати скільки є

//4. використати делегування: тільки один addEventListener на .sidebar

//* при кліку визначати jobId через dataset
//* підсвітити активний елемент (додати/прибрати клас active)

//5. написати функції і використати їх в коді

//* getCompanyById(companyId, companies) -> company object або null
//* getJobTags(jobId, tags, jobTags) -> масив назв тегів
//* getJobApplications(jobId, applications) -> масив аплікацій цієї вакансії
//* getJobCandidates(jobId, candidates, applications) -> масив кандидатів цієї вакансії (унікальні по id)
//* getApplicationsSummary(jobId, applications) -> об’єкт { new, interview, offer, rejected }
//* getTopCandidates(jobId, candidates, applications, limit) -> масив кандидатів відсортований по experienceMonths desc, обрізаний до limit

//6. додатково

//* якщо вакансія не має кандидатів, у деталях написати "No applications yet"
//* у списку вакансій теж показати "Candidates: 0"
let jobsView = []
for (let i = 0; i < jobs.length; i++) {
    let applicationsCount = 0
    for (let j = 0; j < companies.length; j++) {
        if (jobs[i].companyId === companies[j].id) {
            jobs[i].companyName = companies[j].name
            jobs[i].city = companies[j].city
            jobs[i].companySize = companies[j].size

        }
    }
    for (let k = 0; k < applications.length; k++) {
        if (jobs[i].id === applications[k].jobId) {
            applicationsCount++
        }
    }
    jobs[i].candidatesCount = getJobCandidates(jobs[i].id,candidates, applications).length
    jobs[i].applicationsCount = applicationsCount
    jobs[i].topCandidates = getTopCandidates(jobs[i].id,candidates, applications, 3)
    jobs[i].tags = getJobTags(jobs[i].id, tags, jobTags)
    jobs[i].applicationsSummary = getApplicationsSummary(jobs[i].id, applications)

    delete jobs[i].companyId
    jobsView.push(jobs[i])
}
console.log(jobsView)


// Список карточек по левой стороне

const wrap = document.getElementById('jobs-wrap')
const leftSide = document.createElement('div')
leftSide.classList.add('left-wrap')
const listJobs = document.createElement('ul')
listJobs.classList.add('job-list')

// Текст с правой стороны
const rightSide = document.createElement('div')
rightSide.classList.add('right-wrap')
rightSide.textContent = 'Select a job to see details'


listJobs.onclick = (e) => {

    const activeElement = listJobs.querySelector('.active')
    const li = e.target.closest('.job-element');

    if (activeElement) {
        activeElement.classList.remove('active')
    }

    if (li) {
        li.classList.add('active')
    }

    const cardJobId = li.dataset.jobId
    let dataCard

    for (let i = 0; i < jobsView.length; i++) {
         if (cardJobId === jobsView[i].id) {
             dataCard = jobsView[i]
             break
         }
    }

    renderCardDetails (dataCard)
}

function renderCardDetails (dataList) {

    rightSide.textContent = ''
    const title = document.createElement('h2')
    title.textContent = `${dataList.title}`

    const company = document.createElement('p')
    company.textContent = `Company: ${dataList.companyName}`

    const location = document.createElement('p')
    location.textContent = `Location: ${dataList.city}`

    const companySize = document.createElement('p')
    companySize.textContent = `Company size: ${dataList.companySize}`

    const salary = document.createElement('p')
    salary.textContent = `Salary: ${dataList.salaryFrom}$ - ${dataList.salaryTo}$`

    const tags = document.createElement('p');
    tags.textContent = `Tags: ${dataList.tags.join(', ')}`

    const candidates = document.createElement('p')
    candidates.textContent = `Candidates: ${dataList.candidatesCount}`

    const applicationTitle = document.createElement('h3')
    applicationTitle.textContent = `Applications summary: `

    const summary = dataList.applicationsSummary
    const applicationSum = document.createElement('p')
    applicationSum.textContent = `new - ${summary.new}, interview - ${summary.interview}, offer - ${summary.offer}, rejected - ${summary.rejected}`

    const topTitle = document.createElement('h3')
    topTitle.textContent = 'Top candidates: '

    const ol = document.createElement('ol');


    for (let i = 0; i < dataList.topCandidates.length; i++) {
        const li = document.createElement('li')
        const item = dataList.topCandidates[i]

        li.textContent = `${item.name}, ${item.experienceMonths} months exp`
        ol.append(li)
    }

    rightSide.append(title, company, location, companySize, salary, tags, candidates, applicationTitle, applicationSum, topTitle, ol)
}


for (let i = 0; i < jobsView.length; i++) {
    const li = document.createElement('li')
     li.classList.add('job-element')
    li.dataset.jobId = jobsView[i].id

    const title = document.createElement('h2')
    title.textContent = jobsView[i].title;

    const companyInfo = document.createElement('p')
    companyInfo.textContent = `${jobsView[i].companyName} * ${jobsView[i].level} * ${jobsView[i].companySize}`

    const tags = document.createElement('p')
    tags.textContent = `Tags: ${jobsView[i].tags.join(', ')}`

    const candidates = document.createElement('p')
    candidates.textContent = `Candidates: ${jobsView[i].candidatesCount} (${jobsView[i].applicationsCount} applications)`

    li.append(title, companyInfo, tags, candidates)
    listJobs.append(li)
    leftSide.append(listJobs)
}


wrap.append(leftSide, rightSide)
/*
const jobsView = [
  {
    id: 'j1',
    title: 'Junior Frontend',
    level: 'junior',
    salaryFrom: 800,
    salaryTo: 1200,

    companyName: 'TechNova',
    companySize: '200-500',
    city: 'Kyiv',

    tags: ['JavaScript', 'React'],

    candidatesCount: 2,
    applicationsCount: 2,

    applicationsSummary: {
      new: 1,
      interview: 0,
      offer: 0,
      rejected: 1
    },

    topCandidates: [
      { name: 'Anna', experienceMonths: 10 },
      { name: 'Ira', experienceMonths: 6 }
    ]
  },

  {
    id: 'j2',
    title: 'Middle Frontend',
    level: 'middle',
    salaryFrom: 2000,
    salaryTo: 2800,

    companyName: 'TechNova',
    companySize: '200-500',
    city: 'Kyiv',

    tags: ['JavaScript', 'React', 'TypeScript'],

    candidatesCount: 2,
    applicationsCount: 2,

    applicationsSummary: {
      new: 1,
      interview: 1,
      offer: 0,
      rejected: 0
    },

    topCandidates: [
      { name: 'John', experienceMonths: 30 },
      { name: 'Sofia', experienceMonths: 18 }
    ]
  },

  {
    id: 'j3',
    title: 'QA Engineer',
    level: 'middle',
    salaryFrom: 1500,
    salaryTo: 2200,

    companyName: 'CloudBrick',
    companySize: '50-100',
    city: 'Lviv',

    tags: ['Testing'],

    candidatesCount: 1,
    applicationsCount: 1,

    applicationsSummary: {
      new: 0,
      interview: 1,
      offer: 0,
      rejected: 0
    },

    topCandidates: [
      { name: 'Anna', experienceMonths: 10 }
    ]
  },

  {
    id: 'j4',
    title: 'Node.js Developer',
    level: 'middle',
    salaryFrom: 2200,
    salaryTo: 3200,

    companyName: 'DataForge',
    companySize: '10-50',
    city: 'Dnipro',

    tags: ['Node.js', 'JavaScript'],

    candidatesCount: 2,
    applicationsCount: 2,

    applicationsSummary: {
      new: 0,
      interview: 0,
      offer: 1,
      rejected: 1
    },

    topCandidates: [
      { name: 'Oleh', experienceMonths: 48 },
      { name: 'John', experienceMonths: 30 }
    ]
  }
];
];
 */

