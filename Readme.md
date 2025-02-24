на основі задачки про юзерів
1) зробить, щоб результат виводився рядком, а не об'єктом. тобто згенерувать рядок
   console.log(result); // "admin - 3, manager - 2, user - 1"
2) вивести список людей, згрупувавши по ролях
   console.log(result); // "admin - Alex, Jane, Kate; manager - Joe, Lily; user - Bob"
3) вивести список всіх ролей
   console.log(result); // ["admin", "manager", "user"]
4) залежно від ролі, додати кожному юзеру відповідні налаштування. якщо для такої ролі налаштування відсутні, додати дефолтні:
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

// твій код

console.log(users);
/*
[{
name: 'Alex',
role: 'admin',
permissions: {
home: true,
dashboard: true,
settings: true
}
},
{
name: 'Jane',
role: 'admin',
permissions: {
home: true,
dashboard: true,
settings: true
}
},
{
name: 'Joe',
role: 'manager',
permissions: {
home: true,
dashboard: false,
settings: false
}
},
{
name: 'Bob',
role: 'user',
permissions: {
home: true,
dashboard: false,
settings: false
}
},
{
name: 'Lily',
role: 'manager',
permissions: {
home: true,
dashboard: false,
settings: false
}
},
{
name: 'Kate',
role: 'admin',
permissions: {
home: true,
dashboard: true,
settings: true
}
}];
*/


