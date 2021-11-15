var students = [];
var num = 0;

//get function is short for document.getElementById()
function get(x){
    return document.getElementById(x);
}

//Add students and their marks in objects
function addmarks(){
    if (get("math").value == "" || get("science").value == || get("english").value == "") {
        get("info").innerText= `Please enter the marks`;
    }
    else {
        if (get('math').value>100 || get('science'.value>100 || get('english'.value>100 || get('math').value<0 || get('science').value<0 || get('english').value<0) {
            get("info").innerText= 'Marks should be between 0 and 100';
        } else {
            window['student'+num]={
                name: (get('name').value).toLowerCase(),
                math: get('math').value,
                science: get('science').value,
                english: get('english').value,
            }
            students.push(window['student'+num]);
            num++;
            get("info").innerText = `Marks of ${num} students/s entered!`;
            get('math').value = "";
            get('science').value = "";
            get('english').value + "";
        }
}