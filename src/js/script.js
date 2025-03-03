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

// const permissionsByRoles = {
//     admin: {
//         home: true,
//         dashboard: true,
//         settings: true
//     }
// };
//
// const defaultPermissions = {
//     home: true,
//     dashboard: false,
//     settings: false
// };
//
// for (let i = 0; i < users.length; i ++) {
//     // if (users[i].role === 'admin') {
//     //     users[i].permissions = permissionsByRoles[users[i].role];
//     // } else {
//     //     users[i].permissions = defaultPermissions;
//     // }
//     console.log(users[3].role);// 'user'
//     users[i].permissions = permissionsByRoles[users[i].role] || defaultPermissions;
// }
//
// console.log(users);
// //
// let roleArray = [];
//
// for (let i = 0; i < users.length; i++) {
//     const data = users[i].role;
//     if (!roleArray.includes(data)) {
//         roleArray.push(data);
//     }
// }
//
// console.log(roleArray);
// //
// let result = {};
//
// for (let i = 0; i < users.length; i++) {
//     const data = users[i].role;
//     const name = users[i].name;
//
//     if (result[data] === undefined) {
//         result[data] = 0;
//     }
//     result[data] = result[name];
// }
//
// console.log(result);
//

let result3 = {};
for (let i = 0; i < users.length; i++) {
    const data = users[i].role;
    if (result3[data] === undefined) {
        result3[data] = 0;
    }
    result3[data] = (result3[data]) + 1;
}

console.log(JSON.stringify(result3).replace(/[{}"]/g, ""));
// // result3 = {admin: 3; manager: 2; user: 1}
let rolesString = ''

const roles = Object.keys(result3);// ['user', 'manager', 'admin']
for (let i = 0; i < roles.length; i++) {
    const data = roles[i]
     rolesString += data + ' - ' + result3[data] + ' ';
}
console.log(rolesString);


//

// const users = [{
//     name: 'Alex',
//     role: 'admin',
//     permissions: {
//         home: true,
//         dashboard: true,
//         settings: true
//     }
// },
//     {
//         name: 'Jane',
//         role: 'admin',
//         permissions: {
//             home: true,
//             dashboard: true,
//             settings: true
//         }
//     },
//     {
//         name: 'Joe',
//         role: 'manager',
//         permissions: {
//             home: true,
//             dashboard: false,
//             settings: false
//         }
//     },
//     {
//         name: 'Bob',
//         role: 'user',
//         permissions: {
//             home: true,
//             dashboard: false,
//             settings: false
//         }
//     },
//     {
//         name: 'Lily',
//         role: 'manager',
//         permissions: {
//             home: true,
//             dashboard: false,
//             settings: false
//         }
//     },
//     {
//         name: 'Kate',
//         role: 'admin',
//         permissions: {
//             home: true,
//             dashboard: true,
//             settings: true
//         }
//     }];

// console.log(users[1].name); // ? Jane
// console.log(users[3].permissions['home']); // ? true
// console.log(users[3].permissions.home); // ? true
// console.log(users[3].permissions[0]); // ? undefined
// // console.log(users[3].permission.home); // ? true// не обратил внимание что не permissions, а permission
// console.log(users[0].permissions.settings.home); // ? undefined
// console.log(users[0].permissions.settings || users[1].permissions.settings); // ? true первое
// console.log(users[0].permissions.settings && users[2].permissions.settings); // ? false
// const { settings } = users[0].permissions
// console.log(settings || users[1].permissions.settings); // ? первое true
// console.log(settings && users[2].permissions.settings); // ? false
// console.log(settings - users[1].permissions.settings); // ? 0
// console.log(users[0].permissions.settings + users[1].permissions.settings); // ? 2
//
//  for(let i = 1; i < users.length; i++) {
//     console.log(users[i].permissions.home); // ? 5 true
//  }
// //
// for(let i = 1; i < users.length; i++) {
//     console.log(users[2].permissions.settings); // ? 5 false
// }
// //
// for(let i = users.length - 1; i > 0; i--) {
//     console.log(users[i].name); // ? Lily bob joe jane alex
// }

