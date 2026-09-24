 export const eventsData = {}

 document.onclick = (e) => {
    const element = e.target.closest('[data-event]');

    if (!element) return;

     const eventName = element.dataset.event;

     if (!eventsData[eventName]) {
         eventsData[eventName] = 0
     }
     eventsData[eventName]++
 }

 export function renderEvents (events) {
    const list = document.createElement('ul')
     list.classList.add('events-list')

     for (const key in events) {
         const li = document.createElement('li')

         li.textContent = `${key}: ${events[key]}`

         list.append(li)

     }
     return list
 }
