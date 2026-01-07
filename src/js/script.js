//1)
/*Побудувати масив подкастів, де в кожного:
episodes: масив його випусків { title, duration }
episodesCount: кількість випусків
totalDuration: загальна тривалість
avgDuration: середня тривалість випуску (до 1 знака)
longestEpisode: назва найдовшого випуску*/

const podcasts = [
    {id: 'p1', title: 'Frontend Talks'},
    {id: 'p2', title: 'Backend Weekly'}
];

const episodes1 = [
    {podcastId: 'p1', title: 'JS Basics', duration: 30},
    {podcastId: 'p1', title: 'Closures', duration: 45},
    {podcastId: 'p1', title: 'Async', duration: 40},
    {podcastId: 'p2', title: 'Databases', duration: 50},
    {podcastId: 'p2', title: 'Caching', duration: 35}
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

const main = document.getElementById('card-container')

for (let i = 0; i < podcasts.length; i++) {
    const div = document.createElement('div');
    div.classList.add('box')

    div.innerHTML = `
      <h2>${podcasts[i].title}</h2>
    <p>Episodes: ${podcasts[i].episodesCount}</p>
    <p>Duration: ${podcasts[i].totalDuration}</p>
    <p>Average episode: ${podcasts[i].avgDuration.toFixed(1)}</p>
    <p>Longest episode: ${podcasts[i].longestEpisode}</p>
    `
    main.append(div)
}


const courses1 = [
    {id: 'c1', title: 'JavaScript'},
    {id: 'c2', title: 'CSS'}
];

const modules = [
    {id: 'm1', courseId: 'c1', title: 'Basics'},
    {id: 'm2', courseId: 'c1', title: 'Advanced'},
    {id: 'm3', courseId: 'c2', title: 'Layout'}
];

const lessons = [
    {moduleId: 'm1', title: 'Variables', minutes: 20},
    {moduleId: 'm1', title: 'Functions', minutes: 30},
    {moduleId: 'm2', title: 'Closures', minutes: 40},
    {moduleId: 'm2', title: 'Async', minutes: 50},
    {moduleId: 'm3', title: 'Flexbox', minutes: 25}
];

for (let i = 0; i < courses1.length; i++) {
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
    for (let j = 0; j < lessons.length; j++) {
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



function hours(value) {
    let result = 0
    let minutes = 0
    result = Math.floor(value / 60)
    minutes = value - (result * 60)

    if (minutes > 0 && result > 0) {
        return `${result}h  ${minutes}min`
    } else if (minutes > 0 && result < 1) {
        return `${minutes}min`
    } else if (result > 0 && minutes < 1) {
        return `${result}h`
    }

}

// const wrap = document.getElementById('newDiv');
// const list = document.createElement('ul')
//
// for (let i = 0; i < courses1.length; i++) {
//     let les = courses1[i].totalLessons > 1 ? 'lessons' : 'lesson'
//     const li = document.createElement('li');
//     li.textContent = `${courses1[i].title}: `
//
//     const span = document.createElement('span')
//     span.textContent = `${courses1[i].totalLessons}  ${les},  ${hours(courses1[i].totalMinutes)}`
//
//     li.append(span);
//     list.append(li)
// }
// wrap.append(list)


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

/*
<ul>
    <li>
        JavaScript: <span>4 lessons, 2h 20min</span>
        <ul>
            <li>Basics: <span>2 lessons, 50min</span></li>
            <li>Advanced: <span>2 lessons, 1h 30min</span></li>
        </ul>
    </li>
    <li>
        CSS: <span>1 lesson, 25min</span>
        <ul>
            <li>Layout: <span>1 lesson, 25min</span></li>
        </ul>
    </li>
</ul>
 */


const wrapper = document.getElementById('newDiv2');
const wrapList = document.createElement('ul')

for (let i = 0; i < courses1.length; i++) {
    let les = courses1[i].totalLessons > 1 ? 'lessons' : 'lesson'
    const li = document.createElement('li');
    li.textContent = `${courses1[i].title}: `

    const span = document.createElement('span')
    span.textContent = `${courses1[i].totalLessons}  ${les},  ${hours(courses1[i].totalMinutes)}`

    li.append(span);
     wrapList.append(li)

    const innerUl = document.createElement('ul');

     for (let j = 0; j < courses1[i].modules.length; j++) {

         let lesson = courses1[i].modules[j].lessonsCount > 1 ? 'lessons' : 'lesson';
         const innerLi = document.createElement('li')
         innerLi.textContent = `${courses1[i].modules[j].title}: `

         const innerSpan = document.createElement('span')
         innerSpan.textContent = `${courses1[i].modules[j].lessonsCount}  ${lesson},  ${hours(courses1[i].modules[j].totalMinutes)}`

         innerLi.append(innerSpan)
         innerUl.append(innerLi)
     }
     li.append(innerUl)
}
wrapper.append(wrapList)




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

console.log(artists)

// <!--    <div class="box">-->
//     <!--        <h2 class="box-title">The Coders</h2>-->
//     <!--        <ol class="box-list">-->
//     <!--            <li>Hello World – 2 tracks, 6h 30 min</li>-->
//     <!--            <li>Clean Code – 1 track, 4h</li>-->
//     <!--        </ol>-->
//     <!--    </div>-->
//     <!--    <div class="box">-->
//     <!--        <h2 class="box-title">Async Band</h2>-->
//     <!--        <ol class="box-list">-->
//     <!--            <li>Event Loop – 2 tracks, 7h 40 min</li>-->
//     <!--        </ol>-->
//     <!--    </div>-->


const container = document.getElementById('main-container')
container.classList.add('container')

for (let i = 0; i < artists.length; i++) {
        const div = document.createElement('div')
        div.classList.add('box')

    const title = document.createElement('h2')
    title.textContent = artists[i].name
    title.classList.add('box-title')
    div.append(title)

    const ol = document.createElement('ol')
     ol.classList.add('box-list')

    for (let j = 0; j < artists[i].albums.length; j++) {
        let track = artists[i].albums[j].tracksCount > 1 ? 'tracks' : 'track';

        const li = document.createElement('li')
        li.textContent = `${artists[i].albums[j].title} - ${artists[i].albums[j].tracksCount} ${track}, ${hours(artists[i].albums[j].totalDuration)}`
        ol.append(li)
    }
    div.append(ol)
     container.append(div)
}
//
// for (let i = 0; i < data.length; i++) {
//     const div = document.createElement('div')
//     div.classList.add('box')
//
//     const title = document.createElement('h2')
//     title.textContent = data[i].name
//     title.classList.add('box-title')
//
//     const ol = document.createElement('ol')
//     ol.classList.add('box-list')
//
//     div.append(title)
//
//     for (let j = 0; j < data[i].items.length; j++) {
//         const li = document.createElement('li')
//         li.textContent = data[i].items[j]
//         ol.append(li)
//     }
//     div.append(ol)
//     container.append(div)
// }



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


