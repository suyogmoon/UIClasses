var readStudentData = function() {
	var data = {};
	data.name = document.querySelector("#s_name").value;
	data.age = document.querySelector("#s_age").value;
	data.class = document.querySelector("#s_class").value;
	data.gender = document.querySelector("input[name=gender]:checked").value;
	data.marks = [];
	var id;
	for (var i = 0 ; i < 5; i++) {
		id = '#m' + (i +1);
		data.marks[i] = document.querySelector(id).value;
		data.marks[i] = parseInt(data.marks[i]);
	}
	var result = getTotalAndAvg(data.marks);
	data.total = result.tot;
	data.avg = result.avg;
	data.grade = getGrade(data.avg);
	generateProgressCard(data);
}
function getTotalAndAvg(marks) {
	var total = 0;
	var avg;
	for (var i = 0 ; i < marks.length; i++) {
		total += marks[i];
	}
	avg = total / marks.length;
	var result = {
		tot: total,
		avg: avg
	}
	return result;
}
var getGrade = function(avg) {
	var grade = '';
	if (avg >= 40) {
		if (avg >= 60) {
			grade = "1st Class";
		} else {
			grade = '2nd Class';
		}
	} else {
		grade = "Surprise";
	}
	return grade;
}

function generateProgressCard(data) {
	/*console.log("Student Details");
	console.log("name " + data.name);
	console.log("Age " + data.age);
	console.log("Total mars " + data.total);
	console.log("AVg is  " + data.avg);
	console.log("Grade is " + data.grade); */

	document.querySelector("#sname").innerHTML = '<b>' + data.name + '</b>';
	document.querySelector("#sage").innerText = '<b>' + data.age + '</b>';
	document.querySelector("#sgender").innerText =  data.gender;
	document.querySelector("#stotal").innerText = data.total;
	document.querySelector("#savg").innerText = data.avg;
	document.querySelector("#sgrade").innerText = data.grade;
	document.querySelector("#sclass").innerText = data.class;


} 