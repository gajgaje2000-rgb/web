
    function getS() {
    var sid = document.getElementById("sid").value;

    var xhr = new XMLHttpRequest();

    xhr.open("GET", "student.json", true);


xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
        var data = JSON.parse(xhr.responseText);

        var student = data.student;
        var output = "Student Not Found";

        for (var i = 0 ; i < student.length ; i++) {
            if (student[i].id == sid) {
                output = `
                Name : ${student[i].name} <br>
                Course: ${student[i].course}<br> 
                Marks: ${student[i].marks}
                `;
            }
        }
        document.getElementById("result").innerHTML = output;
    }
};

xhr.send();
}