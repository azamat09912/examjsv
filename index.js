//1
    let school = {
        name: "Amjilt Cyber School",
        phoneNumber: "+7 771 997 4516",
        students: [
            {
                studentName: "Azamat",
                top: "24/6",
                progress: 85,
                lessons: 5
            },
            {
                studentName: "Azamat",
                top: "24/6",
                progress: 100,
                lessons: 6
            },
            {
                studentName: "Nurislam",
                top: "24/5",
                progress: 78,
                lessons: 4
            },
            {
                studentName: "Abduraxamn",
                top: "24/6",
                progress: 82,
                lessons: 5
            },
            {
                studentName: "Erasyl",
                top: "24/7",
                progress: 88,
                lessons: 7
            }
        ]
    };
    
    console.log(school);



//2
function ChangeschoolName(){
    const newName = prompt("Oku ortalyginin atyn ozgert")
    if(newName){
        school.name = newName;
        console.log(`Оқу орталығының жаңа атауы${school.name}`);
    }else{
        console.log("Қате енгіздіңіз");
    }
}

//3
function ChangePhoneNumber() {
    const newPhoneNumber = prompt("Жаңа телефон номерін енгізіңіз:")
    if (newPhoneNumber){
        school.phoneNumber = newPhoneNumber;
        console.log(`Жаңа телефон номері: ${school.phoneNumber}`)
    }else{
        console.log("Қате тердіңіз");
    }
    
}

//4
function listStudentNames(){
    const names = school.students.map((students) => students.studentName).join("\n")
    alert(`BArlikstudentataui \n${school.name}`);
}

//5
function addStudent() {
    const newStudent = prompt("Student Atauin Zahz")
    if(newStudent){
        school.addStudent = newStudent;
        let newStudent = {
            name: prompt("Oqushynyn aty:"),
            top: +(prompt("Oqushynyn toby :")),
            lessons: +(prompt("Oqushynyn oku sany:")),
            progress: prompt("Oqushynyn progressi (verguler men bolin):").split(",")

        };
        course.oqushylar.push(newStudent);
        console.log(students);
    } else {
        console.log("Belgisiz areket.");
    }
}
    


//6

let onpaiz = students.map(student => {
    return { ...student, ball: student.ball * 1.1}
});
console.log("upaii 10 paiz ga artkan studenter:")

console.log(onpaiz);









