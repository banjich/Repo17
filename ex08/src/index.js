const _ = require('lodash')

const users = [
    {
        firstName: "John",
        lastName: "Doe",
        age: 24,
        gender: "male"
    },
    {
        firstName: "Jane",
        lastName: "Doe",
        age: 5,
        gender: "female"
    },
    {
        firstName: "Jim",
        lastName: "Carrey",
        age: 54,
        gender: "male"
    },
    {
        firstName: "Kate",
        lastName: "Winslet",
        age: 40,
        gender: "female"
    }
]

    function getUsers() {
        var output = ""

     users.forEach(user => {
         output = user.firstName + " " + user.lastName + " " + " is " + user.age + ", " + user.gender
         console.log(output)
        })
 

        return output

    }

    function findUser(lastName, gender) {
        try {
            var iFindUser = ''
            var user = __.forEach(users, function(user){
                if (user.lastName === lastName && user.gender === gender) {
                    return user;
                }
            })
            iFindUser = user.firstName + " " + user.lastName + " " + " is " + user.age + ", " + user.gender
            return iFindUser
        } catch (error) {
            console.log("Cannot read property of " + lastName + " undefined" )
            return
        }
    }



    getUsers()
    findUser()

    module.exports = findUser;