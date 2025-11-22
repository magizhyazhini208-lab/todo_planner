function bmiCal() {
        const main=document.getElementById("main");
        const x=document.createElement("label");//create element using DOM
        const textNode=document.createTextNode("Enter the values first");
        x.append(textNode);
        x.className="alert";  //we can add class names also 
        main.append(x);
        let gender;
        let gen = document.querySelector('input[name="gender"]:checked');
        if(gen) 
        gender=gen.value;
        const height=document.getElementById("height").value;
        const weight=document.getElementById("weight").value;
        result=weight/((height/100)*(height/100));
        if(result<16)
            x.innerHTML="Severe Thinness";	
        else if(result>16 && result<17)
            x.innerHTML="Moderate Thinness";	
        else if(result>17 && result<18.5)
            x.innerHTML="Mild Thinness";
        else if(result>18.5 && result<25)
            x.innerHTML="Normal";
        else if(result>25 && result<30)
            x.innerHTML="Overweight";
        else if(result>30 && result<35)
            x.innerHTML="Obese Class I";
        else if(result>35 && result<40)
            x.innerHTML="Obese Class II";
        else if(result> 40)
            x.innerHTML="Obese Class III";	
        else
            x.innerHTML="Your Not Human!!!";
        if(x.innerText.length!==0)
        {
            setTimeout(() => {

                x.innerText="";
                document.getElementById("age").value="";
                document.getElementById("height").value="";
                document.getElementById("weight").value="";
                gen.checked=false;
            }, 5000);
        }
        //another method
        //x=document.getElementById("active");
        //x.style.visibility = "visible";
        /*if(x.style.visibility =="visible")
        {
            setTimeout(() => {
                x.style.visibility = "hidden";
            }, 3000);
        }*/  
    }
