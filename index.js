var num = 0

const main = document.getElementById("div")


function del(e){
    var m = String(e.target.id).replace("btn","")


    const element = document.getElementById("div"+m)
    element.remove()
    num -= 1

    var divs = main.getElementsByTagName("div")
    

    for ( var i = 0; i <= num; i +=1 ){
        
        divs[i].id = "div"+i
        divs[i].getElementsByTagName("input")[0].id = "input"+i
        divs[i].getElementsByTagName("input")[0].value = i
        divs[i].getElementsByTagName("button")[0].id = "btn"+i

    }

}



function add(){
    
    const div = document.createElement("div")
    div.id="div"+num
    main.appendChild(div)
    const input = document.createElement("input")
    input.id="input" + num
    input.value = num
    document.getElementById("div"+num).appendChild(input)
    const btn = document.createElement("button")
    btn.id = "btn" + num
    btn.innerHTML="deleate"
    btn.onclick = del
    document.getElementById("div"+num).appendChild(btn)
    num+=1


}