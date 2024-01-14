 // Generates and Returns the plan details for each person
 function generateListingHTML(plans) { 
        
    return `
    <tr>
      <td>${plans.Name}</td>
      <td>${plans.Credit_Number}</td>
      <td> ${plans.Plan}</td>
      </tr>`
    } 
  
    // Fetches the data and write it in table

  Price_plans = async () => {

const response = await fetch("https://prod-08.centralindia.logic.azure.com:443/workflows/92c9e9b6d85e4870a77b91c22fd71953/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=dVcCYbVeL_m9vMJy9wLrRpAXl7JW7Slu4oGYaOtynmw");
myJson = await response.json();
console.log(myJson);
for (var i = 0; i < myJson.payload.length; i++) {
var plans = myJson.payload[i];
var plansHTML = generateListingHTML(plans);
document.getElementById("data").innerHTML += plansHTML;
}
};
Price_plans();