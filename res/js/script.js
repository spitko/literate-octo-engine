$(function () {
    let courses = [
        new Course("Agile software development", 1, 82),
        new Course("System modeling", 1, 85),
        new Course("Object-oriented programming", 2, 99),
        new Course("Estonian language level A2", 2, 65)
    ];

    let user = new User("John", "Doe", new Date("1990-10-13"), "CS", recalculateGPA());
    $("#name").text(user.firstName + " " + user.lastName);
    $("#birthdate").text(user.birthDate.toLocaleDateString("et-EE"));
    $("#faculty").text(user.faculty);
    $('#gpa > strong').text(user.gpa);

    let $courseTableBody = $("#courses > tbody");
    for (let i = 0; i < courses.length; i++) {
        $courseTableBody.append(
            "<tr>" +
            "<td>" + (i + 1) +
            "</td>" +
            "<td>" + (courses[i].title) +
            "</td>" +
            "<td>" + (courses[i].semester) +
            "</td>" +
            "<td>" + (courses[i].grade) +
            "</td>" +
            "</tr>")
    }

    $('#courses-button').click(function (event) {

        $('#courses-container')
            .addClass("active");
        $('#profile-container')
            .removeClass("active");
        $(event.target)
            .addClass("active");
        $('#profile-button')
            .removeClass("active")
    });

    $('#profile-button').click(function (event) {

        $('#courses-container')
            .removeClass("active");
        $('#profile-container')
            .addClass("active");
        $(event.target)
            .addClass("active");
        $('#courses-button')
            .removeClass("active")
    });

    $('#add-course-button').click(function () {
        $('#add-course').toggleClass("active");
    });

    $('#cancel-course').click(function () {
        $('#add-course :input').val('');
        $('#add-course').removeClass('active');
    });

    $('#save-course').click(function () {
        let newCourse = new Course($('#title').val(), $('#semester').val(), $('#grade').val());
        courses.push(newCourse);
        $('#courses > tbody').append("<tr>" +
            "<td>" + (courses.length) +
            "</td>" +
            "<td>" + (newCourse.title) +
            "</td>" +
            "<td>" + (newCourse.semester) +
            "</td>" +
            "<td>" + (newCourse.grade) +
            "</td>" +
            "</tr>");
        user.gpa = recalculateGPA();
        $('#gpa > strong').text(user.gpa);
        $('#add-course :input').val('');
        $('#add-course').removeClass('active');
    });

    function recalculateGPA() {
        let sum = 0;
        for (let i = 0; i < courses.length; i++) {
            let grade = courses[i].grade;
            switch (true) {
                case grade > 90:
                    sum += 4;
                    break;
                case grade > 80:
                    sum += 3;
                    break;
                case grade > 70:
                    sum += 2;
                    break;
                case grade > 60:
                    sum += 1;
                    break;
                case grade > 50:
                    sum += 0.5;
                    break;
            }
        }
        return Math.round(sum / courses.length * 100) / 100;

    }

});