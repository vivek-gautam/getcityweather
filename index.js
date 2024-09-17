document.addEventListener("DOMContentLoaded",function(){
    document.getElementById("report").style.display='none';
    document.querySelector('#submit').onclick=function(){
        var temp;

        const name=document.querySelector('#inputdata').value;
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=bcd494762dab6c3d1bfc3b63302dbced`)
        .then(response=>{ if(response.status==404){
            alert("Enter the valid Location");
             }    
            return response.json()})
        .then(data=>{
            temp=data['main']['temp'];
            document.querySelector('#temp').innerHTML=`${(temp-273).toFixed(2)} &#176;C` ;
            document.querySelector('#name').innerHTML=`Weather in ${name}`;
            document.querySelector('#desc').innerHTML=`${data['weather'][0]['main']}` ;
            // document.querySelector('.background').style.backgroundImage= `url('https://source.unsplash.com/1480x768/?${name}'`;
            // document.querySelector('.background').style.filter = 'blur(5px)';
            document.querySelector('#feels').innerHTML=`Feels like ${(data['main']['feels_like']-273).toFixed(2)}&#176;C`;
            document.querySelector("#min-max").innerHTML=`${(data['main']['temp_min']-273).toFixed(1)}&#176;C / ${(data['main']['temp_max']-273).toFixed(1)}&#176;C`;
            document.querySelector('img').src=`https://openweathermap.org/img/wn/${data['weather'][0]['icon']}@2x.png`;
            document.getElementById("report").style.display='inline';
            console.log(data);
        });
        
        document.querySelector("#inputdata").onclick=function(){
        
            document.querySelector('#inputdata').value=null;
        }
        

       return false;
    }    
}) ;
