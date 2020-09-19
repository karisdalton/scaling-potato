document.querySelector("#button").addEventListener("click", (e) => {
  e.preventDefault();
  
  let checkedSize = $('input[name="size"]:checked').val();


  let results = document.getElementById('results');
  let toppings = document.getElementsByClassName('topping');

  let toppingsArray = Array.from(toppings);


  let sizeCheckBox = document.getElementsByClassName("size");
  let totalToppings = 0;

  toppingsArray.forEach((topping) => {
    if (sizeCheckBox[0].checked) {
      topping.setAttribute('value', 50);
    }else if (sizeCheckBox[1].checked) {
      topping.setAttribute('value', 100);
    }else if (sizeCheckBox[2].checked) {
      topping.setAttribute('value', 150);
    } else {
      return false;
    }
    
    if (topping.checked) {
      let intTopping = parseInt(topping.value);
      totalToppings += intTopping;
    }

    let intSize = parseInt(checkedSize);
    let result = intSize + totalToppings;
    console.log(result);
      
      $('.resultDiv').show();
      
      results.innerHTML = "You Pizza total is Ksh." + result + '.';

  });
  
});

$(document).ready(() => {
  $('.resultDiv').hide();
});


