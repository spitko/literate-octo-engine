$(function () {
    let user = new User("John", "Doe", new Date("1990-10-13"), "CS");
    $("#name").text(user.firstName + " " + user.lastName);
    $("#birthdate").text(user.birthDate.toLocaleDateString("et-EE"));
    $("#faculty").text(user.faculty);

    let courses = [
        new Course("Agile software development", 1, 82),
        new Course("System modeling", 1, 85),
        new Course("Object-oriented programming", 2, 99),
        new Course("Estonian language level A2", 2, 65)
    ];

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

});