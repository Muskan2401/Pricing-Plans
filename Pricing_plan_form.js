var urlParams = new URLSearchParams(window.location.search);
var planName = urlParams.get('plan');

if (planName && planName.contains("Pro Plan")) {
    planName = 'Pro Plan';
  }

var detailsHeading = document.getElementById('detailsHeading');
if (detailsHeading && planName) {
  detailsHeading.textContent = 'Details for ' + planName;
}

// Resets the form
  function reset(){
    document.getElementById("myForm").reset();
  var errorMesg = document.getElementById('error');
  errorMesg.style.display = 'none';
  
  var errormsg2=document.getElementById('error2')
  errormsg2.style.display='none'

  
  }
     
 // Perform validation and submits the form 
function submitForm() {
    var nameInput = document.getElementById('Name').value;
    var creditNoInput = document.getElementById('Credit_no').value;

    var errormsg=document.getElementById("error")
    var error2=document.getElementById("error2")
    

    if (nameInput.length===0 || creditNoInput.length===0){
      error2.style.display="none"
      errormsg.style.display="block"
      return;

    }
    var creditCardRegex = /^[1-9][0-9]{3}-[0-9]{4}-[0-9]{4}$/;
    if (!creditCardRegex.test(creditNoInput)){
      errormsg.style.display="none"
      error2.style.display="block"
      return;
    }
  
  
  var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    var raw = JSON.stringify({
      Name: nameInput,
      Credit_Number:creditNoInput,
      plan: planName,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
   
    fetch("https://prod-23.centralindia.logic.azure.com:443/workflows/61c113bad79f41f9bae1f91357325432/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=5KbazWY8R23xTw_AHqqKaTdh20p_I68P3BhRJ6WV3-c", requestOptions)
    .then((response) => response.json())
      .then((result) => {
        console.log(result.status);
        if (result.status === 200) {
            reset();
          alert("Record entered successfully!")
          
        } 
        else {
          alert("Can't be entered")  
        
        
        }
      })
      .catch((error) => console.log("error", error));
    
    }