var num = 0
var change = true
const main = document.getElementById("div")
const form = document.querySelector("form")
let grades = ["A+","A","A-","B+","B","B-","C+","C","C-","D+","D","E","F"]
let amount = 0

var gpa = 0
var gpa_list = []
var gra = []

const range = document.getElementById("range")
range.title = range.value
document.getElementById("want").innerHTML = "Wanted GPA: "+range.value

range.addEventListener("input", e => {
    range.title = range.value;

    document.getElementById("want").innerHTML = "Wanted GPA: "+range.value
    console.log("SUBBBBBBBBBBBBBBBBBBBBBBBBBBB")
})





function sub(){
    amount = 0


}

function del(e){
    var m = String(e.target.id).replace("btn","")
    console.log(m)

    const element = document.getElementById("input"+m)
    element.remove()
    const ele = document.getElementById("btn"+m)
    ele.remove()
    num -= 1
    

    for ( var i = 0; i <= num; i +=1 ){
        
        form.getElementsByTagName("input").id = "input"+i
        form.getElementsByTagName("button").id = "btn"+i

    }

}

form.addEventListener('submit', e => {
    e.preventDefault()

    const formData = new FormData(form)
    const grades = []
    amount = 0
    gpa = 0
    
    

    formData.forEach((value,key) => {

        if (key === "grade"){
            grades.push(value)
            console.log(key,value)

            if (value === "A+" || value === "A"){

                gpa += 4.0
                gpa_list.push(4.0)
            }

            if (value === "A-"){

                gpa += 3.7
                gpa_list.push(3.7)
            }

            
            if (value === "B+"){

                gpa += 3.3
                gpa_list.push(3.3)
                
            }

            if (value === "B"){

                gpa += 3.0
                gpa_list.push(3.0)
                
            }

            if (value === "B-"){

                gpa += 2.7
                gpa_list.push(2.7)
                
            }

            if (value === "C+"){

                gpa += 2.3
                gpa_list.push(2.3)
                
            }

            if (value === "C"){

                gpa += 2.0
                gpa_list.push(2.0)
                
            }

            if (value === "C-"){

                gpa += 1.7
                gpa_list.push(1.7)
                
            }

            if (value === "D+"){

                gpa += 1.3
                gpa_list.push(1.3)
                
            }

            if (value === "D"){

                gpa += 1.0
                gpa_list.push(1.0)
                
            }

            if (value === "E" || value === "F"){

                gpa += 0.0
                gpa_list.push(0.0)
                
            }    
        }
    })

    console.log("Added: " + gpa)
    var save_gpa = gpa
    gpa /= num

    document.getElementById("gpa").innerHTML = "GPA: "+gpa

    console.log(gpa,num)

    console.log(grades)
    console.log(formData)

    var val = range.value * num

    var save_val = val
    console.log("This is : "+val)
    gra = [ ]
    for (var i = 0; i<num; i++){
        if (val > 4.0){
            val -= 4.0;
            gra.push("A");
          } else if (val > 3.7) {
            val -= 3.7;
            gra.push("A-");  
          } else if (val > 3.3) {
            val -= 3.3;
            gra.push("B+");
          } else if (val > 3.0) {
            val -= 3.0;
            gra.push("B"); 
          } else if (val > 2.7) {
            val -= 2.7;
            gra.push("B-");
          } else if (val > 2.3) {
            val -= 2.3;
            gra.push("C+");
          } else if (val > 2.0) {
            val -= 2.0;
            gra.push("C");  
          } else if (val > 1.7) {
            val -= 1.7;
            gra.push("C-");
          } else if (val > 1.3) {
            val -= 1.3;
            gra.push("D+");
          } else if (val > 1.0) {
            val -= 1.0;
            gra.push("D");
          } else {
            gra.push("F")
          }

    }

    document.getElementById("letters").innerHTML = "Grades Needed: " + gra

    console.log("This is :" + gra)

    console.log("IMPORTANT INFO")
    console.log(" ")
    console.log((gpa*num)-range.value)
    console.log(-(gpa*num)+range.value)
    console.log(" ")


    const multi = Math.pow(10,2)

    save_val = (Math.round(save_val * multi))/multi

    console.log(save_val)
    console.log(save_gpa)
    var j = (Math.round(Math.abs(save_gpa-save_val) * multi))/multi
    console.log(" ")

    console.log(j)
    console.log(gpa_list)
    console.log(gra)

    



})





function add(){
    const br = document.createElement("br")
    document.getElementById("div").appendChild(br)

    const input = document.createElement("input")
    input.id="input" + num
    input.setAttribute('maxlength',2)
    input.required="required"

    input.pattern = "[A-F\-\+]+"
    input.name = "grade"
    document.getElementById("div").appendChild(input)

    const btn = document.createElement("button")
    btn.id = "btn" + num
    btn.innerHTML="deleate"
    btn.onclick = del
    document.getElementById("div").appendChild(btn)
    num+=1


}