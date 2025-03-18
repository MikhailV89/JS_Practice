Maria 👩🏼‍💻 HumanScript developer, [03.03.2025 16:43]
1) знову ті самі юзери) читання коду: проставити правильні відповіді після знаків питань у коментарях. якщо це в циклі, то прописати відповідь для кожної ітерації
   const users = [{
   name: 'Alex',
   role: 'admin'
   },
   {
   name: 'Jane',
   role: 'admin'
   },
   {
   name: 'Joe',
   role: 'manager'
   },
   {
   name: 'Bob',
   role: 'user'
   },
   {
   name: 'Lily',
   role: 'manager'
   },
   {
   name: 'Kate',
   role: 'admin'
   }];

const permissionsByRoles = {
admin: {
home: true,
dashboard: true,
settings: true
}
}

const defaultPermissions = {
home: true,
dashboard: false,
settings: false
}

// твій код, який проставляє правильні permissions кожному юзеру

console.log(users);

const pages = Object.keys(defaultPermissions); // ?
let permissionsMessage = '';
for (let i = 0; i < pages.length; i++) {
const allowedUsers = [];
for (let j = 0; j < users.length; j++) {
const isAllowed = users[j].permissions[pages[i]];
/*
?
*/
if (isAllowed) {
allowedUsers.push(users[j].name);
/*
?
*/
}
}

if (i > 0) {
permissionsMessage += ';\n';
/*
?
*/
}

permissionsMessage += pages[i] + ' is allowed to open by ';
/*
?
*/
for (let j = 0; j < allowedUsers.length; j++) {
if (j > 0) {
permissionsMessage += ', ';
/*
?
*/
}
permissionsMessage += allowedUsers[j];
/*
?
*/
}
}

console.log(permissionsMessage); // ?

Maria 👩🏼‍💻 HumanScript developer, [03.03.2025 16:49]
2) на основі задачки про вивести кількості людей рядком: зробити альтернативне рішення з використанням Object.entries.
   замінити рядок
   const roles = Object.keys(result3)
   на такий
   const pairs = Object.entries(result3)
   і оновити код в циклі, щоб потрібні дані підставлялися з pairs

Maria 👩🏼‍💻 HumanScript developer, [03.03.2025 16:50]
3) на основі задачки про вивести кількості людей рядком: прибрати/не додавати кому в кінці виразу
