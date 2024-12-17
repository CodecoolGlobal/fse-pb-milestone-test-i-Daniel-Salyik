/*
Work only in the solution/*.js file, don't touch the other files.
Fill the function adultsAverageAge(), which gets an array of users as parameter.

A user object in the received array will look like this:

{
  "id": 123,
  "name": "Alex Smith",
  "age": 20,
}

Calculate the average age of those users who are adults (above or equal 18). Return the result (as a number).
You do not have to deal with the case, when there are only underage users in the list.

*/

function averageAgeOfAdults(users) {

  let age = [];

  for (let i = 0; i < users.length; i++) {
    const element = users[i].age;
      if (users[i].age >= 18) {
        age.push(users[i].age)
      }
  }
  let ageSum = 0;
    for (let i = 0; i < age.length; i++) {
      ageSum += age[i];  
    }

  return ageSum / age.length;


}

module.exports = averageAgeOfAdults;
