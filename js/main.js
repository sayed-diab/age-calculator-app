let dayError = document.querySelector(".day")
let monthError = document.querySelector(".month")
let yearError = document.querySelector(".year")

let spanYear = document.getElementById("y")
let spanMonth = document.getElementById("m")
let spanDay = document.getElementById("d")

let year = document.getElementById("year")
let month = document.getElementById("month")
let day = document.getElementById("day")

let input = document.querySelectorAll('.input-filled input')
let inputFilled = document.querySelectorAll('.input-filled')

let btn = document.getElementById("svg")

input.forEach((element) => {
    element.onfocus = (e)=>{
        e.target.parentElement.children[0].style.color = "hsl(259, 100%, 65%)"
        e.target.parentElement.dataset.err = "false"
        
        if(e.target === day){
            spanDay.style.color = "hsl(0, 1%, 44%)"
        }
        if(e.target === month){
            spanMonth.style.color = "hsl(0, 1%, 44%)"
        }
        if(e.target === year){
            spanYear.style.color = "hsl(0, 1%, 44%) "
        }
    }
    element.onblur = (e)=>{
        e.target.parentElement.children[0].style.color = "hsl(0, 1%, 44%)"
        if(e.target === day){
            spanDay.style.color = "hsl(259, 100%, 65%)"
        }
        if(e.target === month){
            spanMonth.style.color = "hsl(259, 100%, 65%)"
        }
        if(e.target === year){
            spanYear.style.color = "hsl(259, 100%, 65%)"
        }
    }
    
});



btn.onclick =()=>{
    
    day,month,year
    let today = new Date()

    if(year.value === "" ){
        year.parentElement.dataset.err = "true"
        spanYear.style.color = "hsl(0, 100%, 67%)"
        
    }else if(year.value > today.getFullYear() ){
        year.parentElement.dataset.err = "true"
        yearError.textContent="*Must be in the past"
        spanYear.style.color = "hsl(0, 100%, 67%)"
    }else if(isNaN(year.value)){
        year.parentElement.dataset.err = "true"
        yearError.textContent="*Must be a number"
        spanYear.style.color = "hsl(0, 100%, 67%)"
    }
    if(month.value === ""){
        month.parentElement.dataset.err = "true"
        spanMonth.style.color = "hsl(0, 100%, 67%)"
        
    }else if(month.value > 12 || isNaN(month.value)){
        month.parentElement.dataset.err = "true"
        monthError.textContent="*Must be a valid month"
        spanMonth.style.color = "hsl(0, 100%, 67%)"
    }
    if(day.value === "" ){
        day.parentElement.dataset.err = "true"
        spanDay.style.color = "hsl(0, 100%, 67%)"
        
    }else if(day.value > 31 || isNaN(day.value)){
        day.parentElement.dataset.err = "true"
        dayError.textContent="*Must be a valid day"
        spanDay.style.color = "hsl(0, 100%, 67%)"
    }

    if(year.value && month.value && day.value !== "" && !isNaN(year.value) && !isNaN(month.value) && !isNaN(day.value)){
        let time = new Date(`${year.value}-${month.value}-${day.value}`)

        let diff = Date.now() - time

        let getYear = today.getFullYear() - time.getFullYear()
        let getMonth = today.getMonth() - time.getMonth()
        if(getMonth < 0 || (getMonth === 0 && today.getDate() < time.getDate())){
            getYear--;
        }
        if(getMonth < 0){
            getMonth+=12;
        }else if (today.getDate() < time.getDate()){
            getMonth--;
        }
        let getDay = ~~(diff % (1000 * 60 * 60 * 24 * 365.25 / 12) /1000/60/60/24) 

        
        if(day.value <= time.getDate()){
            spanYear.textContent = getYear
            spanMonth.textContent = getMonth

                spanDay.textContent = getDay
            }
            if(day.value > time.getDate()){
                day.parentElement.dataset.err = "true"
                month.parentElement.dataset.err = "true"
                year.parentElement.dataset.err = "true"
                dayError.textContent="Must be a valid date"
                spanDay.style.color = "hsl(0, 100%, 67%)"
                monthError.style.visibility= "hidden";
                yearError.style.visibility= "hidden";
                
            }
    }
    
}
