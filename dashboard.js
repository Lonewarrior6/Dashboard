document.addEventListener("DOMContentLoaded", function() {
   // JavaScript function to filter based on the selected practice name
   document.getElementById("practicename").addEventListener("change", function() {
       const selectedPractice = this.value;
       document.getElementById("dataDisplay").innerText =
           selectedPractice ? `Filtered by: ${selectedPractice}` : "Showing all practices";
   });
});