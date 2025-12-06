 
   
   
   // Savings Calculator
    function calcSavings() {
      let m = document.getElementById("monthly").value;
      let mo = document.getElementById("months").value;

      if (m === "" || mo === "") {
        alert("Fill all fields");
        return;
      }

      let total = m * mo;
      document.getElementById("result").innerText = "Total Savings: ₹" + total;
    }

    // Quiz
    function checkQuiz() {
      let score = 0;

      let q1 = document.querySelector('input[name="q1"]:checked');
      let q2 = document.querySelector('input[name="q2"]:checked');

      if (q1 && q1.value === "correct") score++;
      if (q2 && q2.value === "correct") score++;

      document.getElementById("quizResult").innerText = "Your Score: " + score + "/2";
    }

function secondPage(){
  window.location.href = "index2.html";
}
