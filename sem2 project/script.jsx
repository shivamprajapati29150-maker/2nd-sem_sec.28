let totalClasses = 0;
let presentClasses = 0;

// Current Day and Date
let today = new Date();

document.getElementById("currentDate").innerHTML =
today.toLocaleDateString('en-US',{
    weekday:'long',
    year:'numeric',
    month:'long',
    day:'numeric'
});

function markAttendance(status){

    totalClasses++;

    if(status === "present"){
        presentClasses++;
    }

    updateAttendance();
}

function updateAttendance(){

    let percentage = 0;

    if(totalClasses > 0){
        percentage =
        (presentClasses / totalClasses) * 100;
    }

    document.getElementById("percentage")
    .innerHTML =
    percentage.toFixed(2) + "%";
}

function predictPresent(){

    let days =
    parseInt(document.getElementById("futureDays").value);

    if(isNaN(days) || days <= 0){
        alert("Enter valid number");
        return;
    }

    let futurePresent =
    presentClasses + days;

    let futureTotal =
    totalClasses + days;

    let futurePercentage =
    (futurePresent / futureTotal) * 100;

    document.getElementById("predictionResult")
    .innerHTML =
    "Future Attendance: " +
    futurePercentage.toFixed(2) + "%";
}

function predictAbsent(){

    let days =
    parseInt(document.getElementById("futureDays").value);

    if(isNaN(days) || days <= 0){
        alert("Enter valid number");
        return;
    }

    let futureTotal =
    totalClasses + days;

    let futurePercentage =
    (presentClasses / futureTotal) * 100;

    document.getElementById("predictionResult")
    .innerHTML =
    "Future Attendance: " +
    futurePercentage.toFixed(2) + "%";
}