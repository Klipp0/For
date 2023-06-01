
let filter = function () {
  let input = document.getElementById('search');
  input.addEventListener('keyup', function () {
    let filter = input.value.toLowerCase(),
    filterItems = document.querySelectorAll('#list #printers');
    filterItems.forEach(item => {
      if (item.innerHTML.toLowerCase().indexOf(filter) > -1) {
        item.style.display = '';
    } else {
        item.style.display = 'none';
    }
            })
        })
    };
    filter();

    var divs = ["MoreInfo", "MoreInfoTwo", "MoreInfoThree"];
    var visibleDivId = null;
    function myFunction(divId) {
      if(visibleDivId === divId) {
        visibleDivId = null;
      } else {
        visibleDivId = divId;
      }
      hideNonVisibleDivs();
    }
    function hideNonVisibleDivs() {
      var i, divId, div;
      for(i = 0; i < divs.length; i++) {
        divId = divs[i];
        div = document.getElementById(divId);
        if(visibleDivId === divId) {
          div.style.display = "flex";
        } else {
          div.style.display = "none";
        }
      }
    }






    filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("printers");
  if (c == "all") c = "";
  // Добавить класс "show" (display:block) к отфильтрованным элементам и удалите класс "show" из элементов, которые не выбраны
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

// Показать отфильтрованные элементы
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Скрыть элементы, которые не выбраны
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Добавить активный класс к текущей кнопке управления (выделите ее)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
 










    
  //   var li_elements = document.querySelectorAll(".list ul li");
  //   var item_elements = document.querySelectorAll(".moreinfo");
  //   for (var i = 0; i < li_elements.length; i++) {
  //     li_elements[i].addEventListener("click", function() {
  //       li_elements.forEach(function(li) {
  //         li.classList.remove("active");
  //       });
  //       this.classList.add("active");
  //       var li_value = this.getAttribute("data-li");
  //       item_elements.forEach(function(item) {
  //         item.style.display = "none";
  //       });
  //       if (li_value == "first") {
  //         document.querySelector("." + li_value).style.display = "flex";
  //       } else if (li_value == "two") {
  //         document.querySelector("." + li_value).style.display = "flex";
  //       } else if (li_value == "three") {
  //         document.querySelector("." + li_value).style.display = "flex";
  //       } else if (li_value == "thour") {
  //         document.querySelector("." + li_value).style.display = "flex";
  //       } else {
  //         console.log("");
  //       }
  //     });
  //   }


  // function myFunction1() {

  //    document.getElementById("MoreInfo").style.display = "flex";

  //    document.getElementById("MoreInfoTwo").style.display = "none";

  //    document.getElementById("MoreInfoThree").style.display = "none";


  // }

  // function myFunction2() {

  //   document.getElementById("MoreInfo").style.display = "none";

  //   document.getElementById("MoreInfoTwo").style.display = "flex";

  //   document.getElementById("MoreInfoThree").style.display = "none";


  // }

  // function myFunction3() {

  //   document.getElementById("MoreInfo").style.display = "none";

  //   document.getElementById("MoreInfoTwo").style.display = "none";

  //   document.getElementById("MoreInfoThree").style.display = "flex";

  // }
