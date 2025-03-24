let users = [
    {
        username: "Jeffrey", 
        email: "jlayola@yahoo.com",
        password: "test123",
        subscriptionStatus: "VIP",
        discordID: "Jeffrey Layola#0001",
        lessonsCompleted: [0, 1],
    },
    {
        username: "David", 
        email: "david@yahoo.com",
        password: "david123",
        subscriptionStatus: "VIP",
        discordID: "Jeffrey Layola#0001",
        lessonsCompleted: [0, 1, 2, 3],
    },
];

function login(email, password) {
    for (let i = 0; i < users.length; ++i) {
    if (users[i].email === email) {
        console.log(users[i]);
        if (users[i].password === password) {
            console.log ('log the user in - the details are correct')
        }
        else{
            console.log ('password is incorrect')
        }
      }  
    }
}

login ('jlayola@yahoo.com', 'wrongpassword')



function register (user) {
   users.push(user);
  
}

register ({username: "David", email: 'david@yahoo.com', password: 'david123', subscriptionStatus: 'VIP', discordID: 'Jeffrey Layola#0002', lessonsCompleted: [0, 1]});

console.log (users);