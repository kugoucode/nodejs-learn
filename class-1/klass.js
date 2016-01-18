var student = require('./student')
var teacher = require('./teacher')

//teacher.add('Mark')
//student.add('student 01')

function add(tecName, stuName) {
    teacher.add(tecName)
    console.log('=============================')
    stuName.forEach(function(item, index) {
        //console.log('Add Student the ' + index + ' num is ' + item)
        student.add(item)
    })
}
exports.add = add
