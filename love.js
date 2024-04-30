function calculateLove(){
    const name1 = document.getElementById('yourName').value.trim();//trim() is used to remove the white spaces in the code
    const name2 = document.getElementById('partnerName').value.trim();

    if(!name1 && !name2){
        alert("Please enter both the names ......!!!")
    }

    const lovePercentage = Math.floor(Math.random() * 101);

    const result = document.getElementById("result");

    result.innerHTML = `${name1} and ${name2} 's Love Percentage: ${lovePercentage}%`;

    if(lovePercentage < 30){
        result.innerHTML +=  "<br> Not a Great match. Keep Looking!";
    }
    else if(lovePercentage >=30 && lovePercentage < 70){
        result.innerHTML += "<br>There is a Potential. Give it a try";
    }
    else{
        result.innerHTML += "<br> Great Match! Love is in the air..... ";
    }


    
    
}