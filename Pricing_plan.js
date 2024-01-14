// Redirects the user to pricing form along with plan name info 
function redirectUser() {
    var selectedPlan = document.querySelector('input[name="plan-selector"]:checked');
  
    if (selectedPlan) {
      var parentTable = selectedPlan.closest('table');
  
      if (parentTable) {
        var planName = parentTable.querySelector('caption').textContent.trim();
        var planPrice = parentTable.querySelector('td:last-child').textContent.trim();
  
        const pricingPageUrl = 'http://127.0.0.1:5500/Pricing_plan/Pricing_plan_form.html?plan=' + encodeURIComponent(planName) + '&price=' + encodeURIComponent(planPrice);
        window.location.href = pricingPageUrl;
      } else {
        alert('Error retrieving plan information. Parent table not found.');
      }
    } else {
      alert('Please select a plan before signing up.');
    }
  }
  