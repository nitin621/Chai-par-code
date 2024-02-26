
document.write("<div align='center' style='margin-top:100px;'><input type='text' id='no' placeholder='Enter your wish number'> <button onClick='Guess()'>Guess Button</button></div> ");


function Guess() 
{
 
let guessCount = 0  

const number = parseInt(document.getElementById("no").value); 

    if(number > 100)
    {
              
        alert(`Tumse na ho payega`)
        document.getElementById("no").value = ''
    }
    else 
    {        
        guessCount += 1;

        const randomNumber = Math. floor(Math. random() * 100) + 1;
        if(randomNumber === number && guessCount<3)
        {
            alert(`Mubarak ho app karore pati ban chuke hai ${guessCount}`)
            document.getElementById("no").value = ''
        }
        else if (guessCount >= 3 || randomNumber != number)
        {
            console.log(guessCount)
            document.getElementById("no").value = ''
        }
    }


}
