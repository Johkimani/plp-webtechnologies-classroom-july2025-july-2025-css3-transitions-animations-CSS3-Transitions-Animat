 
    /* ---------- Part 2: JavaScript Functions ---------- */

    // Global scope variable
    let globalCount = 0;

    // Function with parameters & return value
    function addNumbers(a, b) {
      return a + b;
    }

    // Function demonstrating local scope
    function increaseGlobal(byAmount) {
      let localMessage = "Increasing global count!";
      console.log(localMessage); // only accessible here
      globalCount += byAmount;
      return globalCount;
    }

    // Testing functions in console
    console.log("5 + 7 =", addNumbers(5, 7));
    console.log("Increase global:", increaseGlobal(3));
    console.log("Increase global again:", increaseGlobal(2));

    /* ---------- Part 3: JS controlling CSS animations ---------- */

    const box = document.getElementById("box");
    const animateBtn = document.getElementById("animateBtn");

    animateBtn.addEventListener("click", () => {
      box.classList.toggle("animate");
    });
  