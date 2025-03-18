// const numbers = [1, 2, 3, 4, 5];
//
// let sum = 0;
// for (let i = 2; i < numbers.length; i++) {
//     sum += numbers[i];// 0 + 3// 3 + 4// 7 + 5
//     console.log(sum); // ? 3// 7// 12
// }
//
// console.log(sum); // ? 12
//
// //
//
// let product = 1;
// for (let i = 1; i < numbers.length - 1; i++) {
//     product *= numbers[i]; // 1 * 2// 2 * 3// 6 * 4//
//     console.log(product); // ? 2// 6 // 24
// }
//
// console.log(product); // ? 24
//
// //
//
//
// let x = 10;
// let y = 20;
//
// if (x < y) {
//     x = x * 2;
//     y = y - 5;
//     console.log(x); // ? 20
//     console.log(y); // ? 15
// } else {
//     x = x / 2;
//     y = y + 5;
//     console.log(x); // ? if true, в это условие не попадаем
//     console.log(y); // ?
// }
//
// console.log(x); // ? 20
// console.log(y); // ? 15
//
// //
//
// const n = 3;
// const m = 4;
//
// let counter = 0;
// for (let i = 0; i < n; i++) {
//     for (let j = 0; j < m; j++) {
//         counter++;
//     }
// }
//
// console.log(counter); // ? 12
//
// //
//
// const people = [
//     { name: 'Alice', age: 30 },
//     { name: 'Bob', age: 40 },
//     { name: 'Charlie', age: 25 },
// ];
//
// let message = '';
// for (let i = 1; i < people.length; i++) {
//     message += `${people[i].name} is ${people[i].age} years old. `;
//     console.log(message); // ? Bob is 40 years old.// Bob is 40 years old. Charlie is 25 years old.
// }
//
// console.log(message); // ? Bob is 40 years old. Charlie is 25 years old.
//
// //
// let z = 5;
// for (let i = 1; i <= 3; i++) {
//     if (i === 2) {
//         z += 2;
//         console.log(z); // ? 6/
//     }
//     z--;
//     console.log(z); // ? 4/ 5 // еще 4 допустил ошибку
// }
//
// //
//
// let result = 0;
// let i = 0;
//
// while (i < 5) {
//     if (i === 2) {
//         result += 10;//20
//     } else {
//         result += 5;// 5 // 10// 25// 30
//     }
//     i++;
// }
//
// console.log(result); // ? 30

//

// const users = [
//     {
//         id: 1,
//         name: 'Alice',
//         role: 'admin',
//         preferences: {
//             theme: 'dark',
//             notifications: {
//                 email: true,
//                 sms: false
//             }
//         }
//     },
//     {
//         id: 2,
//         name: 'Bob',
//         role: 'user',
//         preferences: {
//             theme: 'light',
//             notifications: {
//                 email: false,
//                 sms: true
//             }
//         }
//     },
//     {
//         id: 3,
//         name: 'Charlie',
//         role: 'manager',
//         preferences: {
//             theme: 'dark',
//             notifications: {
//                 email: true,
//                 sms: true
//             }
//         }
//     }
// ];
//
// const notificationsSources = Object.keys(users[0].preferences.notifications); // ? email sms
// const messages = [];
//
// for (let i = 0; i < notificationsSources.length; i++) {
//     let message = 'Send via ' + notificationsSources[i] + ': Hello '; // send via email: hello// send via sms: hello
//     const allowedUsers = [];
//     for (let j = 0; j < users.length; j++) {
//         const isAllowed = users[j].preferences.notifications[notificationsSources[i]];
//         /*
//           ? j = 0  isAllowed = true j = 1 isAllowed = false j = 2 isAllowed = true
//             j = 0 isAllowed = false j = 1 isAllowed = true j =2 isAllowed = true
//         */
//         if (isAllowed) {
//             allowedUsers.push(users[j].name);
//             /*
//               ?[Alice, Charlie]
//               [Bob,Charlie]
//             */
//         }
//     }
//
//     for (let j = 0; j < allowedUsers.length; j++) {
//         if (j > 0) {
//             message += ', '
//             /*
//               ? send via email: hello Alice,
//                 send via sms: hello Bob,
//             */
//         }
//
//         message += allowedUsers[j];
//         /*
//           ? send via email: hello Alice //  send via email: hello Alice, Charlie
//           send via sms: hello Bob// send via sms: hello Bob, Charlie
//         */
//     }
//
//     message += '. How are you?';
//     /*
//       ? send via email: hello Alice, Charlie. How are you?
//       send via sms: hello Bob, Charlie. How are you?
//     */
//     messages.push(message);
//     /*
//       ? ['send via email: hello Alice, Charlie. How are you?' , 'send via sms: hello Bob, Charlie. How are you?']
//     */
// }
//
// console.log(messages); // ? ['send via email: hello Alice, Charlie. How are you?' , 'send via sms: hello Bob, Charlie. How are you?']








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

for(let i = 0; i < users.length; i++) {
    if (users[i].role === 'admin') {
        // users[i] = permissionsByRoles// role: admin {permissionsByRoles}
        users[i].permissions = permissionsByRoles.admin;
    } else {
        users[i].permissions = defaultPermissions;
    }
}

console.log(users);

const pages = Object.keys(defaultPermissions); // ? [home, dashboard, settings]
let permissionsMessage = '';
for (let i = 0; i < pages.length; i++) {
    const allowedUsers = [];
    for (let j = 0; j < users.length; j++) {
        const isAllowed = users[j].permissions[pages[i]];
        /*
          ? alex.home = true jane.home = true  Joe.manager = true
            alex.dashboard = true jane.dashboard = true joe.dashboard = false
        */
        if (isAllowed) {
            allowedUsers.push(users[j].name);
            /*
              ? allowedUsers = [Alex, Jane, Joe, Bob, Lily, Kate]
               allowedUsers = [Alex, jane, Kate]
                allowedUsers = [Alex, jane, Kate]
            */
        }
    }

    if (i > 0) {
        permissionsMessage += ';\n';
        /*
          ? 'home is allowed to open by Alex, jane, Bob, Lily, kate;
           '
            'home is allowed to open by Alex, jane, Bob, Lily, kate;
            dashboard is allowed to open by Alex, Jane, Kate;
            '
        */
    }

    permissionsMessage += pages[i] + ' is allowed to open by ';
    /*
      ? 'home is allowed to open by '
        'home is allowed to open by Alex, jane, Bob, Lily, kate;
         dashboard is allowed to open by
          'home is allowed to open by Alex, jane, Bob, Lily, kate;
            dashboard is allowed to open by Alex, Jane, Kate;
            settings is allowed to open by'
      '
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
          ? 'home is allowed to open by Alex'
          'home is allowed to open by Alex, jane'
          'home is allowed to open by Alex, jane, joe'
          'home is allowed to open by Alex, jane, Bob'
          'home is allowed to open by Alex, jane, Bob, Lily'
          'home is allowed to open by Alex, jane, Bob, Lily, kate'

          'home is allowed to open by Alex, jane, Bob, Lily, kate;
           dashboard is allowed to open by Alex'
           'home is allowed to open by Alex, jane, Bob, Lily, kate;
            dashboard is allowed to open by Alex, Jane'
            'home is allowed to open by Alex, jane, Bob, Lily, kate;
            dashboard is allowed to open by Alex, Jane, Kate'

            'home is allowed to open by Alex, jane, Bob, Lily, kate;
            dashboard is allowed to open by Alex, Jane, Kate;
            settings is allowed to open by Alex'

            'home is allowed to open by Alex, jane, Bob, Lily, kate;
            dashboard is allowed to open by Alex, Jane, Kate;
            settings is allowed to open by Alex, Jane'

            'home is allowed to open by Alex, jane, Bob, Lily, kate;
            dashboard is allowed to open by Alex, Jane, Kate;
            settings is allowed to open by Alex, Jane, Kate'
        */
    }
}

console.log(permissionsMessage); // ?
/*
 'home is allowed to open by Alex, jane, Bob, Lily, kate;
            dashboard is allowed to open by Alex, Jane, Kate;
            settings is allowed to open by Alex, Jane, Kate'
 */
