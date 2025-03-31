(() => {
    const users = [
        {
            id: 1,
            name: 'Alice',
            role: 'admin',
            preferences: {
                theme: 'dark',
                notifications: {
                    email: true,
                    sms: false
                }
            }
        },
        {
            id: 2,
            name: 'Bob',
            role: 'user',
            preferences: {
                theme: 'light',
                notifications: {
                    email: false,
                    sms: true
                }
            }
        },
        {
            id: 3,
            name: 'Charlie',
            role: 'manager',
            preferences: {
                theme: 'dark',
                notifications: {
                    email: true,
                    sms: true
                }
            }
        },
        {
            id: 4,
            name: 'Jane',
            role: 'admin',
            preferences: {
                theme: 'dark',
                notifications: {
                    email: true,
                    sms: true
                }
            }
        },
        {
            id: 5,
            name: 'Joe',
            role: 'user',
            preferences: {
                theme: 'light',
                notifications: {
                    email: false,
                    sms: true
                }
            }
        }
    ];

    const roles = [];
    for (let i = 0; i < users.length; i++) {
        if (!roles.includes(users[i].role)) {
            roles.push(users[i].role); // ? roles ['admin', 'user', 'manager']
        }
    }

    const emails = {};
    for (let i = 0; i < roles.length; i++) {
        if (!emails[roles[i]]) {
            emails[roles[i]] = [];
        }
    }
  // {admin: [], user: [], manager: []}

    for (let i = 0; i < users.length; i++) {
        if (users[i].preferences.notifications.email) {
            emails[users[i].role].push(users[i].name); // ? {admin: [alice, jane], user: [], manager: [charlie]}
        }
    }


    let message = 'Send emails to:\n';
    for (let i = 0; i < roles.length; i++) {
        if (!emails[roles[i]].length) {
            message += 'none of ' + roles[i] + 's\n'; // ?  Send emails to:\n admins - Alice, Jane\n none of users\n
        }
        else {
            message += roles[i]; // ? admin// Send emails to:\n admins - Alice, Jane\n none of users\n manager
            if (emails[roles[i]].length > 1) {
                message += 's'; // ? admins
            }
            message += ' - '; // ? admins - // Send emails to:\n admins - Alice, Jane\n none of users\n manager -
            for (let j = 0; j < emails[roles[i]].length; j++) {
                if (j > 0) {
                    message += ', '; // ? admins - Alice,
                }
                message += emails[roles[i]][j]; // ? admins - Alice// admins - Alice, Jane// Send emails to:\n admins - Alice, Jane\n none of users\n manager - Charlie
            }
            message += '\n'; // ? Send emails to:\n admins - Alice, Jane\n/  Send emails to:\n admins - Alice, Jane\n none of users\n manager - Charlie \n
        }
    }

    console.log(message); // ?
})();

//
(() => {
    const users = [
        {
            id: 1,
            name: 'Alice',
            orders: [
                { orderId: 101, amount: 500, status: 'delivered' },
                { orderId: 102, amount: 200, status: 'pending' }
            ]
        },
        {
            id: 2,
            name: 'Bob',
            orders: [
                { orderId: 103, amount: 150, status: 'delivered' }
            ]
        },
        {
            id: 3,
            name: 'Charlie',
            orders: [
                { orderId: 104, amount: 800, status: 'pending' },
                { orderId: 105, amount: 300, status: 'delivered' }
            ]
        }
    ];

    let totalAmount = 0;
    let deliveredUsers = [];

    for (let i = 0; i < users.length; i++) {
        let userTotal = 0;
        let deliveredCount = 0;

        for (let j = 0; j < users[i].orders.length; j++) {
            userTotal += users[i].orders[j].amount; // ? 0 + 700 + 150 + 800 + 300

            if (users[i].orders[j].status === 'delivered') {
                deliveredCount++; // ? 0 + 1 + 1 + 1 .. (1/ 1/ 1/)
            }
        }

        if (deliveredCount === users[i].orders.length) {
            deliveredUsers.push(users[i].name); // ? [Bob]
        }

        totalAmount += userTotal; // ? 1950

    }

    let deliveredUsersStr = '';
    for (let i = 0; i < deliveredUsers.length; i++) {
        if (i > 0) {
            deliveredUsersStr += ', ';
        }
        deliveredUsersStr += deliveredUsers[i]; // ? Bob
    }

    console.log('Total amount spent by all users: ' + totalAmount); // ? Total amount spent by all users: 1950
    console.log('Users who have received all orders: ' + deliveredUsersStr); // ? Users who have received all orders: Bob '
})();


(() => {
    const users = [
        {
            id: 1,
            name: 'Alice',
            subscriptions: [
                { service: 'Netflix', active: true },
                { service: 'Spotify', active: false }
            ],
            settings: { theme: 'dark', notifications: { email: true, sms: false } }
        },
        {
            id: 2,
            name: 'Bob',
            subscriptions: [
                { service: 'Netflix', active: true },
                { service: 'Amazon Prime', active: true }
            ],
            settings: { theme: 'light', notifications: { email: true, sms: true } }
        },
        {
            id: 3,
            name: 'Charlie',
            subscriptions: [
                { service: 'HBO Max', active: true }
            ],
            settings: { theme: 'dark', notifications: { email: false, sms: true } }
        }
    ];

    const activeUsers = [];
    let totalSubscriptions = 0;

    for (let i = 0; i < users.length; i++) {
        let activeSubscriptions = 0;

        for (let j = 0; j < users[i].subscriptions.length; j++) {
            if (users[i].subscriptions[j].active) {
                activeSubscriptions++; // ? 1 2 1
            }
        }

        if (activeSubscriptions > 1 && users[i].settings.notifications.email) {
            activeUsers.push(users[i].name); // ? [Bob]
        }

        totalSubscriptions += activeSubscriptions; // ? 4
    }

    let activeUsersStr = '';
    for (let i = 0; i < activeUsers.length; i++) {
        if (i > 0) {
            activeUsersStr += ', ';
        }
        activeUsersStr += activeUsers[i]; // ? Bob
    }
     console.log('Active users with more than one active subscription and email notifications: ' + activeUsersStr); // ? Active users with more than one active subscription and email notifications: Bob
     console.log('Total active subscriptions: ' + totalSubscriptions); // ?Total active subscriptions:  4
})();

//

(() => {
    const users = [
        {
            id: 1,
            name: 'Alice',
            orders: [
                { orderId: 201, amount: 600, delivery: { address: '123 Main St', status: 'shipped' } },
                { orderId: 202, amount: 100, delivery: { address: '123 Main St', status: 'pending' } }
            ]
        },
        {
            id: 2,
            name: 'Bob',
            orders: [
                { orderId: 203, amount: 350, delivery: { address: '456 Oak Rd', status: 'shipped' } }
            ]
        },
        {
            id: 3,
            name: 'Charlie',
            orders: [
                { orderId: 204, amount: 700, delivery: { address: '789 Pine Ln', status: 'pending' } },
                { orderId: 205, amount: 200, delivery: { address: '789 Pine Ln', status: 'shipped' } }
            ]
        }
    ];

    let shippedOrders = [];
    let usersWithPendingOrders = [];

    for (let i = 0; i < users.length; i++) {
        let userShippedOrders = 0;
        let userPendingOrders = 0;

        for (let j = 0; j < users[i].orders.length; j++) {
            if (users[i].orders[j].delivery.status === 'shipped') {
                userShippedOrders++; // ? 1 1 1
                shippedOrders.push(users[i].name + ' - Order ID: ' + users[i].orders[j].orderId); // ? [Alice - Order ID: 201, Bob - Order ID: 203, Charlie - Order ID: 205]

            } else {
                userPendingOrders++; // ? 1 1
            }
        }

        if (userPendingOrders > 0) {
            usersWithPendingOrders.push(users[i].name); // ? [Alice, Charlie]
        }
    }

    let shippedOrdersStr = '';
    for (let i = 0; i < shippedOrders.length; i++) {
        if (i > 0) {
            shippedOrdersStr += ', ';
        }
        shippedOrdersStr += shippedOrders[i]; // ? Alice - Order ID: 201, Bob - Order ID: 203, Charlie - Order ID: 205

    }

    let usersWithPendingOrdersStr = '';
    for (let i = 0; i < usersWithPendingOrders.length; i++) {
        if (i > 0) {
            usersWithPendingOrdersStr += ', ';
        }
        usersWithPendingOrdersStr += usersWithPendingOrders[i]; // ? Alice, Charlie
    }

     console.log('Shipped orders: ' + shippedOrdersStr); // ? Shipped orders: Alice - Order ID: 201, Bob - Order ID: 203, Charlie - Order ID: 205
     console.log('Users with pending orders: ' + usersWithPendingOrdersStr); // ? Users with pending orders: Alice, Charlie
})();

//

(() => {
    const users = [
        {
            id: 1,
            name: 'Alice',
            transactions: [
                { transactionId: 301, amount: 200, active: true },
                { transactionId: 302, amount: 100, active: false }
            ]
        },
        {
            id: 2,
            name: 'Bob',
            transactions: [
                { transactionId: 303, amount: 300, active: true }
            ]
        },
        {
            id: 3,
            name: 'Charlie',
            transactions: [
                { transactionId: 304, amount: 150, active: true },
                { transactionId: 305, amount: 450, active: false }
            ]
        }
    ];

    let totalAmount = 0;
    let activeUsers = [];

    for (let i = 0; i < users.length; i++) {
        let userAmount = 0;
        let activeTransactions = 0;

        for (let j = 0; j < users[i].transactions.length; j++) {
            userAmount += users[i].transactions[j].amount; // ? 200 100 300 150 450
            if (users[i].transactions[j].active) {
                activeTransactions++; // ? 1 1 1
            }
        }

        if (activeTransactions > 0) {
            activeUsers.push(users[i].name); // ? [Alice, Bob, Charlie]
        }

        totalAmount += userAmount; // ? 1200
    }

    let activeUsersStr = '';
    for (let i = 0; i < activeUsers.length; i++) {
        if (i > 0) {
            activeUsersStr += ', ';
        }
        activeUsersStr += activeUsers[i]; // ? Alice, Bob, Charlie
    }

    console.log('Total spent by all users: ' + totalAmount); // ? Total spent by all users: 1200
    console.log('Active users with at least one active transaction: ' + activeUsersStr); // ? Active users with at least one active transaction: Alice, Bob, Charlie
})();

/////////////

(() => {
    const products = [
        {
            id: 1,
            name: 'Laptop',
            categories: [
                { categoryId: 101, name: 'Electronics', active: true },
                { categoryId: 102, name: 'Computers', active: true }
            ]
        },
        {
            id: 2,
            name: 'Phone',
            categories: [
                { categoryId: 101, name: 'Electronics', active: true },
                { categoryId: 103, name: 'Mobiles', active: false }
            ]
        },
        {
            id: 3,
            name: 'Shirt',
            categories: [
                { categoryId: 104, name: 'Clothing', active: true }
            ]
        }
    ];

    let activeCategories = [];
    let totalProducts = 0;

    for (let i = 0; i < products.length; i++) {
        for (let j = 0; j < products[i].categories.length; j++) {
            if (products[i].categories[j].active) {
                if (!activeCategories.includes(products[i].categories[j].name)) {
                    activeCategories.push(products[i].categories[j].name); // ? [Electronics, Computers, Clothing]
                }
            }

        }
        totalProducts++; // 1 1 1
    }

    let activeCategoriesStr = '';
    for (let i = 0; i < activeCategories.length; i++) {
        if (i > 0) {
            activeCategoriesStr += ', '; // Electronics ,Computers ,
        }
        activeCategoriesStr += activeCategories[i]; // ? Electronics//Electronics ,Computers// Electronics ,Computers ,Clothing
    }

    console.log('Total products: ' + totalProducts); // має вивести 'Total products: 3'
    console.log('Active categories: ' + activeCategoriesStr); // має вивести 'Active categories: Electronics, Computers, Clothing'
})();

//

(() => {
    const students = [
        {
            id: 1,
            name: 'Alice',
            subjects: [
                { subjectId: 201, name: 'Math', grade: 90 },
                { subjectId: 202, name: 'Physics', grade: 80 }
            ]
        },
        {
            id: 2,
            name: 'Bob',
            subjects: [
                { subjectId: 203, name: 'Chemistry', grade: 85 },
                { subjectId: 201, name: 'Math', grade: 88 }
            ]
        },
        {
            id: 3,
            name: 'Charlie',
            subjects: [
                { subjectId: 202, name: 'Physics', grade: 75 },
                { subjectId: 204, name: 'Biology', grade: 90 }
            ]
        }
    ];

    let totalGrade = 0;
    let studentsAbove80 = [];

    for (let i = 0; i < students.length; i++) {
        let studentGrade = 0;
        let studentAbove80 = false;

        for (let j = 0; j < students[i].subjects.length; j++) { // не 1, а 0 ///< а не <=
            studentGrade += students[i].subjects[j].grade; // ? 90 80.. 85 88..75 90
            if (students[i].subjects[j].grade > 80) {
                studentAbove80 = true; // ?
            }
        }
        if (studentAbove80) {
            studentsAbove80.push(students[i].name); // ? [alice] [alice, bob] [alice, bob, charlie]
        }
        totalGrade += studentGrade; // ? 170 + 173 +165 = 508
    }

    let studentsAbove80Str = '';
    for (let i = 0; i < studentsAbove80.length; i++) {
        studentsAbove80Str += studentsAbove80[i]; // ? alice, bob, charlie
    }

     console.log('Total grade points: ' + totalGrade); // має вивести 'Total grade points: 508'
     console.log('Students with at least one subject grade above 80: ' + studentsAbove80Str); // має вивести 'Students with at least one subject grade above 80: Alice, Bob, Charlie'
})();

//

(() => {
    const projects = [
        {
            id: 1,
            name: 'Website Redesign',
            teamMembers: [
                { memberId: 301, name: 'Alice', role: 'Designer' },
                { memberId: 302, name: 'Bob', role: 'Developer' }
            ]
        },
        {
            id: 2,
            name: 'Mobile App',
            teamMembers: [
                { memberId: 303, name: 'Charlie', role: 'Developer' },
                { memberId: 304, name: 'Dave', role: 'Project Manager' }
            ]
        },
        {
            id: 3,
            name: 'E-commerce Platform',
            teamMembers: [
                { memberId: 305, name: 'Eve', role: 'Designer' },
                { memberId: 306, name: 'Frank', role: 'Developer' }
            ]
        }
    ];

    let projectNames = [];
    let totalTeamMembers = 0;

    for (let i = 0; i < projects.length; i++) {
        let projectMembers = projects[i].teamMembers.length;
         totalTeamMembers += projectMembers; // ? не = а +=// 2 + 2 + 2
         projectNames.push(projects[i].name); // ? добавим .name//[Website Redesign] [Website Redesign, Mobile App] [Website Redesign, Mobile App, E-commerce Platform]
    }

    let projectNamesStr = '';
    for (let i = 0; i < projectNames.length; i++) {
        if (i > 0) {
            projectNamesStr += ', '; // if должно быть выше  projectNamesStr
        }
        projectNamesStr += projectNames[i]; // ? Website Redesign// Website Redesign, Mobile App// Website Redesign, Mobile App, E-commerce Platform
    }

    console.log('Total team members across all projects: ' + totalTeamMembers); // має вивести 'Total team members across all projects: 6'
    console.log('All project names: ' + projectNamesStr); // має вивести 'All project names: Website Redesign, Mobile App, E-commerce Platform'
})();

// //

(() => {
    const events = [
        {
            id: 1,
            name: 'Conference',
            attendees: [
                { attendeeId: 401, name: 'Alice', registered: true },
                { attendeeId: 402, name: 'Bob', registered: false }
            ]
        },
        {
            id: 2,
            name: 'Workshop',
            attendees: [
                { attendeeId: 403, name: 'Charlie', registered: true },
                { attendeeId: 404, name: 'Dave', registered: true }
            ]
        },
        {
            id: 3,
            name: 'Seminar',
            attendees: [
                { attendeeId: 405, name: 'Eve', registered: false },
                { attendeeId: 406, name: 'Frank', registered: true }
            ]
        }
    ];

    let totalAttendees = 0;
    let registeredUsers = [];

    for (let i = 0; i < events.length; i++) {
        let eventAttendees = events[i].attendees.length;
        totalAttendees += eventAttendees; // ? 2 2 2

        for (let j = 0; j < events[i].attendees.length; j++) {
            if (events[i].attendees[j].registered) {
                registeredUsers.push(events[i].attendees[j].name); // ? [alice] [alice, charlie] [alice, charlie, dave] [alice, charlie, dave, frank]
            }
        }
    }

    let registeredUsersStr = '';
    for (let i = 0; i < registeredUsers.length; i++) {
        registeredUsersStr += registeredUsers[i]; // ?
    }

    console.log('Total attendees across all events: ' + totalAttendees); // має вивести 'Total attendees across all events: 6'
    console.log('Users who have registered for events: ' + registeredUsersStr); // має вивести 'Users who have registered for events: Alice, Charlie, Dave, Frank'
})();

