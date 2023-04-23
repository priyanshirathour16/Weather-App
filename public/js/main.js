const cityname = document.getElementById("cityName");
const submitbtn = document.getElementById("submitbutton");
const city_name = document.getElementById("city_name");
const  temp = document.getElementById("temp");
const temp_status = document.getElementById("temp_status");
const datahide = document.querySelector(".bottom_layer");
const today_date = document.getElementById('today-date');



const getInfo = async(event)=>{
    event.preventDefault();
    
    let cityval = cityname.value;
    if(cityval == ""){
    city_name.innerText= `Plz Firstly Write The City Name You Want To Search!!  `;
    datahide.classList.add('data-hidden');
    }
    else{
        try{
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityval}&units=metric&appid=06045c490e5989c113566392e450eb3e`;
        const response = await fetch(url);
        const data = await response.json();
        const arraydata = [data];
        city_name.innerText = `${arraydata[0].name} , ${arraydata[0].sys.country}   (${arraydata[0].weather[0].description})`;
        temp .innerHTML = `${arraydata[0].main.temp}&#8451`;
        const tempmod = arraydata[0].weather[0].main;
        if(tempmod =="Clear"){
            temp_status.innerHTML = "<i class='fa-regular fa-sun' style = 'color:#eccc67'></i>"
        }
        else if(tempmod=="Clouds"){
            temp_status.innerHTML = "<i class='fa-regular fa-cloud' style = 'color:#f1f2f6'></i>"
        }
        else if(tempmod=="Rain"){
            temp_status.innerHTML = "<i class='fa-regular fa-cloud-rain' style = 'color:#a4b0be'></i>"
        }
        else {
            temp_status.innerHTML = "<i class='fa-regular fa-sun' style = 'color:#eccc67'></i>"
        }
        datahide.classList.remove('data-hidden');
        }
        catch{
            city_name.innerText= `Plz Enter The City Name Properly !`; 
            datahide.classList.add('data-hidden'); 
        }

    }
}
submitbtn.addEventListener('click',getInfo);


const getcurrentTime = () =>{
    var months = ["JAN" , "FEB" , "MAR" , "APR" , "MAY" , "JUN" , "JUL" , "AUG" , "SEP" , "OCT" , "NOV" , "DEC"];
    var currTime = new Date();
    var day = currTime.getDate();
    var month = months[currTime.getMonth()];
    let time = `${day}  ${month}`;
    today_date.innerHTML = time;

}
getcurrentTime(); 