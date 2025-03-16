function showCourse()
{
    fetch("http://localhost:8080/courses") //API End Point
    .then((response) => response.json())
    .then((courses) => {
        const dataTable = document.getElementById("coursetable")

        courses.forEach(course => {
            var row = `<tr>
                <td>${course.courseID}</td>
                <td>${course.courseName}</td>
                <td>${course.trainer}</td>
                <td>${course.durationInWeeks}</td>
            </tr>` 
        
            dataTable.innerHTML+=row;
            
        });

    });

}

function enroll_data()
{
    fetch("http://localhost:8080/enroll_details") //API End Point 
    .then((response) => response.json())
    .then((enroll) => {
        const dataTable = document.getElementById("enrolltable")

        enroll.forEach(data => {
            var row = `<tr>
             <td>${data.id}</td>
            <td>${data.name}</td>
            <td>${data.emailId}</td>
            <td>${data.courseName}</td>

            </tr>`

         dataTable.innerHTML+=row;
        });
    });
}