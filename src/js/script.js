// 3//) Платформа відео: шоу → сезони → епізоди
//
// //Побудувати масив шоу, де:
//
// //* seasons: масив { id, title, episodesCount, totalMinutes, longestEpisode } (longestEpisode — назва найдовшого епізоду сезону)
// //* totalMinutes: загальна тривалість шоу (сума по всіх сезонах)
// //* avgEpisode: середня тривалість епізоду по шоу (до одного знака)
// // topSeason: назва сезону з найбільшою totalMinutes
//
const shows = [
    { id: 'sh1', title: 'Frontend Show' },
    { id: 'sh2', title: 'Backend Show' }
];

const seasons = [
    { id: 's1', showId: 'sh1', title: 'Season 1' },
    { id: 's2', showId: 'sh1', title: 'Season 2' },
    { id: 's3', showId: 'sh2', title: 'Season 1' }
];

const episodes = [
    { seasonId: 's1', title: 'HTML', minutes: 25 },
    { seasonId: 's1', title: 'CSS', minutes: 30 },
    { seasonId: 's2', title: 'JS', minutes: 45 },
    { seasonId: 's2', title: 'React', minutes: 50 },
    { seasonId: 's3', title: 'Node', minutes: 40 },
    { seasonId: 's3', title: 'DB', minutes: 35 }
];

for(let i = 0; i < shows.length; i++) {
    shows[i].seasons = []
    for (let j = 0; j < seasons.length; j++) {
        if (shows[i].id === seasons[j].showId) {
            shows[i].seasons.push(seasons[j])
        }
    }
}

for (let i = 0 ;i < seasons.length; i++) {
    seasons[i].episodesCount = 0
    seasons[i].totalMinutes = 0
    let startEl = null
    for (let j = 0; j < episodes.length; j++) {

        if (seasons[i].id === episodes[j].seasonId) {
            seasons[i].episodesCount++
            seasons[i].totalMinutes += episodes[j].minutes
            if (startEl === null || episodes[j].minutes > startEl.minutes) {
                startEl = episodes[j]
            }
        }

    }
    seasons[i].longestEpisode = startEl.title
}

for (let i = 0; i < shows.length; i++) {
    shows[i].totalMinutes = 0
    let num = 0
    let top = null
    for (let j = 0; j < shows[i].seasons.length; j++) {
        shows[i].totalMinutes += shows[i].seasons[j].totalMinutes
        num += shows[i].seasons[j].episodesCount

        if (top === null || shows[i].seasons[j].totalMinutes > top.totalMinutes) {
            top = shows[i].seasons[j]
        }
    }
    shows[i].avgEpisode =  shows[i].totalMinutes / num
    shows[i].topSeason = top.title
}
console.log(shows)

// /*
// [
// {
// id: 'sh1',
// title: 'Frontend Show',
// seasons: [
// { id: 's1', title: 'Season 1', episodesCount: 2, totalMinutes: 55, longestEpisode: 'CSS' },
// { id: 's2', title: 'Season 2', episodesCount: 2, totalMinutes: 95, longestEpisode: 'React' }
// ],
// totalMinutes: 150,
// avgEpisode: 37.5,
// topSeason: 'Season 2'
// },
// {
// id: 'sh2',
// title: 'Backend Show',
// seasons: [
// { id: 's3', title: 'Season 1', episodesCount: 2, totalMinutes: 75, longestEpisode: 'Node' }
// ],
// totalMinutes: 75,
// avgEpisode: 37.5,
// topSeason: 'Season 1'
// }
// ]
// */

//-------------------------------------------------------------------


// //5) Ресторани: меню → замовлення → аналітика
//
// //Побудувати масив ресторанів, де:
//
// //* orders: масив { id, customer, total, items } (items — масив назв, total — сума price * qty)
// //* revenue: загальна виручка
// //* topItem: назва страви з найбільшою кількістю замовлених одиниць у ресторані
// //* categories: { category: totalQty }
//
// const restaurants = [
//     { id: 'r1', name: 'La Pasta' },
//     { id: 'r2', name: 'Sushi Go' }
// ];
//
// const menu = [
//     { id: 'm1', restaurantId: 'r1', title: 'Carbonara', price: 12, category: 'pasta' },
//     { id: 'm2', restaurantId: 'r1', title: 'Bolognese', price: 11, category: 'pasta' },
//     { id: 'm3', restaurantId: 'r2', title: 'Nigiri',     price: 8,  category: 'sushi' },
//     { id: 'm4', restaurantId: 'r2', title: 'Udon',       price: 10, category: 'noodles' }
// ];
//
// const orders = [
//     { id: 'o1', restaurantId: 'r1', customer: 'Anna' },
//     { id: 'o2', restaurantId: 'r1', customer: 'John' },
//     { id: 'o3', restaurantId: 'r2', customer: 'Ira' }
// ];
//
// const orderItems = [
//     { orderId: 'o1', menuId: 'm1', qty: 2 },
//     { orderId: 'o1', menuId: 'm2', qty: 1 },
//     { orderId: 'o2', menuId: 'm1', qty: 1 },
//     { orderId: 'o3', menuId: 'm3', qty: 3 },
//     { orderId: 'o3', menuId: 'm4', qty: 1 }
// ];
//
// // ?
//
// console.log(result);
// /*
// [
// {
// id: 'r1',
// name: 'La Pasta',
// orders: [
// { id: 'o1', customer: 'Anna', total: 35, items: ['Carbonara','Carbonara','Bolognese'] },
// { id: 'o2', customer: 'John', total: 12, items: ['Carbonara'] }
// ],
// revenue: 47,
// topItem: 'Carbonara',
// categories: { pasta: 3 }
// },
// {
// id: 'r2',
// name: 'Sushi Go',
// orders: [
// { id: 'o3', customer: 'Ira', total: 34, items: ['Nigiri','Nigiri','Nigiri','Udon'] }
// ],
// revenue: 34,
// categories: { sushi: 3, noodles: 1 },
// topItem: 'Nigiri'
// }
// ]
// */
//


// // //5) Побудувати масив курсів, де в кожного:
// // //- students: масив студентів цього курсу у форматі { id, name, avgScore, attempts },
// // де avgScore — середнє по grades за курсом/студентом, attempts — кількість оцінок.
// // //- avgCourseScore: середній бал курсу (середнє з усіх оцінок курсу).
// // //- topStudent: ім’я студента з найбільшим avgScore (якщо нічиї — будь-хто з топів).
// //
const courses = [
    { id: 'c1', title: 'JS Basics' },
    { id: 'c2', title: 'React' }
];

const enrollments = [
    { courseId: 'c1', studentId: 'u1' },
    { courseId: 'c1', studentId: 'u2' },
    { courseId: 'c2', studentId: 'u1' }
];

const students = [
    { id: 'u1', name: 'Anna' },
    { id: 'u2', name: 'John' }
];

const grades = [
    { courseId: 'c1', studentId: 'u1', score: 10 },
    { courseId: 'c1', studentId: 'u1', score: 8 },
    { courseId: 'c1', studentId: 'u2', score: 7 },
    { courseId: 'c2', studentId: 'u1', score: 9 }
];


for (let k = 0; k < students.length; k++) {
    let sum = 0
    let count = 0
    for (let i = 0; i < enrollments.length; i++) {
        if (enrollments[i].studentId !== students[k].id) continue;
        for (let j = 0; j < grades.length; j++) {
            if (  grades[j].courseId === enrollments[i].courseId && grades[j].studentId === students[k].id) {
                count++
                sum+= grades[j].score
            }
        }
    }
    students[k].avgScore = sum / count
    students[k].attempts = count

}
console.log(students)
console.log(courses)
// // /*
// // [
// //   {
// //     id: 'c1',
// //     title: 'JS Basics',
// //     students: [
// //       { id: 'u1', name: 'Anna', avgScore: 9, attempts: 2 },
// //       { id: 'u2', name: 'John', avgScore: 7, attempts: 1 }
// //     ],
// //     avgCourseScore: 8.5,
// //     topStudent: 'Anna'
// //   },
// //   {
// //     id: 'c2',
// //     title: 'React',
// //     students: [
// //       { id: 'u1', name: 'Anna', avgScore: 9, attempts: 1 }
// //     ],
// //     avgCourseScore: 9,
// //     topStudent: 'Anna'
// //   }
// // ]
// // */
//

//---------------------------


//1)
/*Побудувати масив подкастів, де в кожного:
episodes: масив його випусків { title, duration }
episodesCount: кількість випусків
totalDuration: загальна тривалість
avgDuration: середня тривалість випуску (до 1 знака)
longestEpisode: назва найдовшого випуску*/

const podcasts = [
    { id: 'p1', title: 'Frontend Talks' },
    { id: 'p2', title: 'Backend Weekly' }
];

const episodes1 = [
    { podcastId: 'p1', title: 'JS Basics', duration: 30 },
    { podcastId: 'p1', title: 'Closures', duration: 45 },
    { podcastId: 'p1', title: 'Async', duration: 40 },
    { podcastId: 'p2', title: 'Databases', duration: 50 },
    { podcastId: 'p2', title: 'Caching', duration: 35 }
];

for (let i = 0; i < podcasts.length; i++) {

    podcasts[i].episodes = []
    let num = 0
    let top = null
    for (let j = 0; j < episodes1.length; j++) {
        if (podcasts[i].id === episodes1[j].podcastId) {
            podcasts[i].episodes.push(episodes1[j])
            num += episodes1[j].duration
        }
    }
    podcasts[i].episodesCount = podcasts[i].episodes.length
    podcasts[i].totalDuration = num
    podcasts[i].avgDuration = num / podcasts[i].episodes.length
    for (let j = 0; j < podcasts[i].episodes.length; j++) {
        if (top === null || podcasts[i].episodes[j].duration > top.duration) {
            top = podcasts[i].episodes[j]
        }
        podcasts[i].longestEpisode = top.title
    }
}

console.log(podcasts);

const div = document.getElementById('podcasts')
const ul = document.createElement('ul')
  for (let i = 0; i < podcasts.length; i++) {
    const li = document.createElement('li')
      const nextUl = document.createElement('ul')
      li.textContent = podcasts[i].title
      li.append(nextUl)
      ul.append(li)
      for (let j = 0; j < podcasts[i].episodes.length; j++) {
        const childLi = document.createElement('li')
          childLi.textContent = podcasts[i].episodes[j].title
          nextUl.append(childLi)
      }
  }
div.append(ul)
/*
[
  {
    id: 'p1',
    title: 'Frontend Talks',
    episodes: [
      { title: 'JS Basics', duration: 30 },
      { title: 'Closures', duration: 45 },
      { title: 'Async', duration: 40 }
    ],
    episodesCount: 3,
    totalDuration: 115,
    avgDuration: 38.3,
    longestEpisode: 'Closures'
  },
  {
    id: 'p2',
    title: 'Backend Weekly',
    episodes: [
      { title: 'Databases', duration: 50 },
      { title: 'Caching', duration: 35 }
    ],
    episodesCount: 2,
    totalDuration: 85,
    avgDuration: 42.5,
    longestEpisode: 'Databases'
  }
]
*/

//2)
/*
Побудувати масив курсів, де в кожного:
modules: масив модулів { title, lessonsCount, totalMinutes }
totalLessons: загальна кількість уроків
totalMinutes: загальна тривалість курсу
longestLesson: назва найдовшого уроку курсу
largestModule: назва модуля з найбільшою totalMinutes
*/

const courses1 = [
    { id: 'c1', title: 'JavaScript' },
    { id: 'c2', title: 'CSS' }
];

const modules = [
    { id: 'm1', courseId: 'c1', title: 'Basics' },
    { id: 'm2', courseId: 'c1', title: 'Advanced' },
    { id: 'm3', courseId: 'c2', title: 'Layout' }
];

const lessons = [
    { moduleId: 'm1', title: 'Variables', minutes: 20 },
    { moduleId: 'm1', title: 'Functions', minutes: 30 },
    { moduleId: 'm2', title: 'Closures', minutes: 40 },
    { moduleId: 'm2', title: 'Async', minutes: 50 },
    { moduleId: 'm3', title: 'Flexbox', minutes: 25 }
];

for(let i = 0; i < courses1.length; i++) {
    courses1[i].modules = []
    for (let j = 0; j < modules.length; j++) {
        if (courses1[i].id === modules[j].courseId) {
            courses1[i].modules.push(modules[j])
        }
    }
}

for (let i = 0; i < modules.length; i++) {
    let count = 0
    let total = 0
    for (let j = 0; j < lessons.length; j++){
        if (modules[i].id === lessons[j].moduleId) {
            count++
            total += lessons[j].minutes
        }
    }
    modules[i].lessonsCount = count
    modules[i].totalMinutes = total
}

for (let i = 0; i < courses1.length; i++) {
    let total = 0
    let count = 0
    let top = null
    let longest = null;
    for (let j = 0; j < courses1[i].modules.length; j++) {
        total += courses1[i].modules[j].totalMinutes
        count += courses1[i].modules[j].lessonsCount

        if (top === null || courses1[i].modules[j].totalMinutes > top.totalMinutes) {
            top = courses1[i].modules[j]
        }
    }
    courses1[i].totalMinutes = total
    courses1[i].totalLessons = count
    courses1[i].largestModule = top.title
    for (let j = 0; j < lessons.length; j++) {
        for (let k = 0; k < courses1[i].modules.length; k++) {
            if (lessons[j].moduleId === courses1[i].modules[k].id) {
                if (longest === null || lessons[j].minutes > longest.minutes) {
                    longest = lessons[j];
                }
            }
        }
    }

    courses1[i].longestLesson = longest.title;
}

console.log(courses1)

/*
[
  {
    id: 'c1',
    title: 'JavaScript',
    modules: [
      { title: 'Basics', lessonsCount: 2, totalMinutes: 50 },
      { title: 'Advanced', lessonsCount: 2, totalMinutes: 90 }
    ],
    totalLessons: 4,
    totalMinutes: 140,
    longestLesson: 'Async',
    largestModule: 'Advanced'
  },
  {
    id: 'c2',
    title: 'CSS',
    modules: [
      { title: 'Layout', lessonsCount: 1, totalMinutes: 25 }
    ],
    totalLessons: 1,
    totalMinutes: 25,
    longestLesson: 'Flexbox',
    largestModule: 'Layout'
  }
]
*/

//3)
/*
Побудувати масив виконавців, де в кожного:
albums: масив альбомів { title, tracksCount, totalDuration }
totalTracks: загальна кількість треків
totalDuration: загальна тривалість треків
longestTrack: назва найдовшого треку
topAlbum: назва альбому з найбільшою totalDuration
*/

const artists = [
    { id: 'a1', name: 'The Coders' },
    { id: 'a2', name: 'Async Band' }
];

const albums = [
    { id: 'al1', artistId: 'a1', title: 'Hello World' },
    { id: 'al2', artistId: 'a1', title: 'Clean Code' },
    { id: 'al3', artistId: 'a2', title: 'Event Loop' }
];

const tracks = [
    { albumId: 'al1', title: 'Variables', duration: 180 },
    { albumId: 'al1', title: 'Functions', duration: 210 },
    { albumId: 'al2', title: 'Refactor', duration: 240 },
    { albumId: 'al3', title: 'Promises', duration: 200 },
    { albumId: 'al3', title: 'Async Await', duration: 260 }
];

for (let i = 0; i < albums.length; i++) {
    let total = 0
    let count = 0
    for (let j = 0; j < tracks.length; j++) {

        if (albums[i].id === tracks[j].albumId) {
            count++
            total += tracks[j].duration
        }
    }
    albums[i].tracksCount = count
    albums[i].totalDuration = total
}

for (let i = 0; i < artists.length; i++) {
    artists[i].albums = []

    for (let j = 0; j < albums.length; j++) {
        if (artists[i].id === albums[j].artistId) {
            artists[i].albums.push(albums[j])
        }
    }

}

for (let i = 0; i < artists.length; i++) {
    let total = 0
    let count = 0
    for (let j = 0; j < artists[i].albums.length; j++) {
        count += artists[i].albums[j].tracksCount
        total += artists[i].albums[j].totalDuration
    }
    artists[i].totalTracks = count
    artists[i].totalDuration = total

    let totalCount = null
    let longest = null
    for (let k = 0; k < tracks.length; k++) {
        for ( let j = 0; j < artists[i].albums.length; j++) {
            if (totalCount === null || artists[i].albums[j].totalDuration > totalCount.totalDuration) {
                totalCount = artists[i].albums[j]
            }
            if (tracks[k].albumId ===  artists[i].albums[j].id) {
                if (longest === null || tracks[k].duration > longest.duration) {
                    longest = tracks[k]
                }
            }
        }
    }
    artists[i]. longestTrack = longest.title
    artists[i].topAlbum = totalCount.title
}

// for (let i = 0; i < artists.length; i++) {
//     let totalCount = null
//     let longest = null
//     for (let k = 0; k < tracks.length; k++) {
//         for ( let j = 0; j < artists[i].albums.length; j++) {
//             if (totalCount === null || artists[i].albums[j].totalDuration > totalCount.totalDuration) {
//                 totalCount = artists[i].albums[j]
//             }
//             if (tracks[k].albumId ===  artists[i].albums[j].id) {
//                 if (longest === null || tracks[k].duration > longest.duration) {
//                     longest = tracks[k]
//                 }
//             }
//         }
//     }
//     artists[i]. longestTrack = longest.title
//     artists[i].topAlbum = totalCount.title
// }
console.log(artists)
/*
[
  {
    id: 'a1',
    name: 'The Coders',
    albums: [
      { title: 'Hello World', tracksCount: 2, totalDuration: 390 },
      { title: 'Clean Code', tracksCount: 1, totalDuration: 240 }
    ],
    totalTracks: 3,
    totalDuration: 630,
    longestTrack: 'Refactor',
    topAlbum: 'Hello World'
  },
  {
    id: 'a2',
    name: 'Async Band',
    albums: [
      { title: 'Event Loop', tracksCount: 2, totalDuration: 460 }
    ],
    totalTracks: 2,
    totalDuration: 460,
    longestTrack: 'Async Await',
    topAlbum: 'Event Loop'
  }
]
*/

//4)
/*
Побудувати масив шоу, де в кожного:
seasons: масив сезонів { id, title, episodesCount, totalMinutes, avgEpisodeMinutes, topEpisodeTitle }
episodesCount: кількість епізодів у сезоні
totalMinutes: сума minutes усіх епізодів сезону
avgEpisodeMinutes: середня тривалість епізоду в сезоні (до 1 знака після коми)
topEpisodeTitle: назва епізоду з найбільшою кількістю переглядів (якщо рівність — той, у кого більше лайків)
totalMinutes: загальна тривалість шоу (сума totalMinutes по всіх сезонах)
totalViews: загальна кількість переглядів по шоу (сума views по всіх епізодах)
likesByUser: об’єкт формату { userId: countLikes } (скільки лайків поставив кожен юзер цьому шоу)
bestSeason: назва сезону з найбільшим totalViews (якщо рівність — з більшим totalMinutes)
*/

// const shows = [
//     { id: 'sh1', title: 'Frontend Show' },
//     { id: 'sh2', title: 'Backend Show' }
// ];
//
// const seasons = [
//     { id: 'se1', showId: 'sh1', title: 'Season 1' },
//     { id: 'se2', showId: 'sh1', title: 'Season 2' },
//     { id: 'se3', showId: 'sh2', title: 'Season 1' }
// ];
//
// const episodes = [
//     { id: 'e1', seasonId: 'se1', title: 'HTML', minutes: 25 },
//     { id: 'e2', seasonId: 'se1', title: 'CSS', minutes: 30 },
//     { id: 'e3', seasonId: 'se2', title: 'JS', minutes: 45 },
//     { id: 'e4', seasonId: 'se2', title: 'React', minutes: 50 },
//     { id: 'e5', seasonId: 'se3', title: 'Node', minutes: 40 },
//     { id: 'e6', seasonId: 'se3', title: 'DB', minutes: 35 }
// ];
//
// const views = [
//     { episodeId: 'e1', count: 1200 },
//     { episodeId: 'e2', count: 900 },
//     { episodeId: 'e3', count: 2000 },
//     { episodeId: 'e4', count: 2100 },
//     { episodeId: 'e5', count: 1700 },
//     { episodeId: 'e6', count: 1600 }
// ];
//
// const likes = [
//     { userId: 'u1', episodeId: 'e1' },
//     { userId: 'u2', episodeId: 'e1' },
//     { userId: 'u1', episodeId: 'e3' },
//     { userId: 'u3', episodeId: 'e4' },
//     { userId: 'u1', episodeId: 'e4' },
//     { userId: 'u2', episodeId: 'e4' },
//     { userId: 'u2', episodeId: 'e5' },
//     { userId: 'u3', episodeId: 'e6' }
// ];
//
// // ?
//
// console.log(result);
/*
[
  {
    id: 'sh1',
    title: 'Frontend Show',
    seasons: [
      {
        id: 'se1',
        title: 'Season 1',
        episodesCount: 2,
        totalMinutes: 55,
        avgEpisodeMinutes: 27.5,
        topEpisodeTitle: 'HTML'
      },
      {
        id: 'se2',
        title: 'Season 2',
        episodesCount: 2,
        totalMinutes: 95,
        avgEpisodeMinutes: 47.5,
        topEpisodeTitle: 'React'
      }
    ],
    totalMinutes: 150,
    totalViews: 6200,
    likesByUser: { u1: 3, u2: 2, u3: 1 },
    bestSeason: 'Season 2'
  },
  {
    id: 'sh2',
    title: 'Backend Show',
    seasons: [
      {
        id: 'se3',
        title: 'Season 1',
        episodesCount: 2,
        totalMinutes: 75,
        avgEpisodeMinutes: 37.5,
        topEpisodeTitle: 'Node'
      }
    ],
    totalMinutes: 75,
    totalViews: 3300,
    likesByUser: { u2: 1, u3: 1 },
    bestSeason: 'Season 1'
  }
]
*/
