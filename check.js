var data = require('./data/grades.json');
var gradeParser = require('./src/grade_parser');
var counter = 0;

for (var key in data) {
    if (gradeParser.inDecline(data[key])) {
        counter++;
    }
}

console.log('There are ' + counter + ' students in decline.');
