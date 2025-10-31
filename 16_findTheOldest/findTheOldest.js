const findTheOldest = function(people) {
    return people.reduce((oldest, person) => {
        const deathYear = person.yearOfDeath || new Date().getFullYear();
        const age = deathYear - person.yearOfBirth;

        const oldestDeathYear = oldest.yearOfDeath || new Date().getFullYear();
        const oldestAge = oldestDeathYear - oldest.yearOfBirth;

        return age > oldestAge ? person : oldest;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
