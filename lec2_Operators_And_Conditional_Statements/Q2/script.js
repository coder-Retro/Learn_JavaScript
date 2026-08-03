const gradeAssign = (marks) => {
    if(marks>100 || marks<0) return "Error";
    else if(marks>=80)       return "A";
    else if(marks>=70)       return "B";
    else if(marks>=60)       return "C";
    else if(marks>=50)       return "D";
    else                     return "F";
}

let marks = prompt("Enter Marks: ");
console.log(gradeAssign(marks));