const _ = require('lodash')

const users = [
    {
        id: 1,
        firstName: "John",
        lastName: "Doe",
        age: 24,
        gender: "male"
    },
    {
        id: 2,
        firstName: "Jane",
        lastName: "Doe",
        age: 5,
        gender: "female"
    },
    {
        id: 3,
        firstName: "Jim",
        lastName: "Carrey",
        age: 54,
        gender: "male"
    },
    {
        id: 4,
        firstName: "Kate",
        lastName: "Winslet",
        age: 40,
        gender: "female"
    }
]

    function getUsers() {
        var output = ""

        users.forEach(user => {
            output =user.id + " - " + user.firstName + " " + user.lastName + " " + " is " + user.age + ", " + user.gender
            console.log(output)
           })
 

        return output

    }
    console.log()

    function findUserById(lastName, gender) {
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
    findUserById()

    module.exports = findUserById;