//---The javascript functions must be outside of the <script></script> tags--->

//Filter table function beginning --------------------------------------------------------
function myFunction() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}
//Filter table function end --------------------------------------------------------
//Filter Talbe Two Function Beginning
function myFunction_two() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}



//Filter table functions


//Table One Filter
$(document).ready(function(){
  $("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#myTable tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});

//Table Two Filter
$(document).ready(function(){
  $("#myInput2").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#myTable2 tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});

//Table Three Filter
$(document).ready(function(){
  $("#myInput3").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#myTable3 tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});

//Table Four Filter
$(document).ready(function(){
  $("#myInput4").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#myTable4 tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});

//Table Five Filter
$(document).ready(function(){
  $("#myInput5").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#myTable5 tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});

//Table Six Filter
$(document).ready(function(){
  $("#myInput6").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#myTable6 tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});

//Table Seven Filter
$(document).ready(function(){
  $("#myInput7").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#myTable7 tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});

//Table Eight Filter
$(document).ready(function(){
  $("#myInput8").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#myTable8 tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});

//Table Nine Filter
$(document).ready(function(){
  $("#myInput9").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#myTable9 tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});


//Table Ten Filter
$(document).ready(function(){
  $("#myInput10").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#myTable10 tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});


//Table Eleven Filter
$(document).ready(function(){
  $("#myInput11").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#myTable11 tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});

//Table Twelve Filter
$(document).ready(function(){
  $("#myInput12").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#myTable12 tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});


//Table Thirteen Filter
$(document).ready(function(){
  $("#myInput13").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#myTable13 tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});


//Table Fourteen Filter
$(document).ready(function(){
  $("#myInput14").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#myTable14 tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});


//Filter Tables Function End
$( document ).ready(function() {
  var clipboard = new Clipboard('.clipboard');
});


$( document ).ready(function() {
  clipboard.on('success', function(e) {
    $(e.trigger).text("Copied!");
    e.clearSelection();
    setTimeout(function() {
      $(e.trigger).text("Copy");
    }, 2500);
  });

  clipboard.on('error', function(e) {
    $(e.trigger).text("Can't in Safari");
    setTimeout(function() {
      $(e.trigger).text("Copy");
    }, 2500);
  });
});

//Sortable table function beginning -----------------------------------------------------------------------------
function sortTable(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("myTable");
  switching = true;
  //Set the sorting direction to ascending:
  dir = "asc"; 
  /*Make a loop that will continue until
  no switching has been done:*/
  while (switching) {
    //start by saying: no switching is done:
    switching = false;
    rows = table.rows;
    /*Loop through all table rows (except the
    first, which contains table headers):*/
    for (i = 1; i < (rows.length - 1); i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;
      /*Get the two elements you want to compare,
      one from current row and one from the next:*/
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];
      /*check if the two rows should switch place,
      based on the direction, asc or desc:*/
      if (dir == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          //if so, mark as a switch and break the loop:
          shouldSwitch= true;
          break;
        }
      } else if (dir == "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          //if so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      /*If a switch has been marked, make the switch
      and mark that a switch has been done:*/
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      //Each time a switch is done, increase this count by 1:
      switchcount ++;      
    } else {
      /*If no switching has been done AND the direction is "asc",
      set the direction to "desc" and run the while loop again.*/
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}
//Sortable table function end -----------------------------------------------------------------------------

//Sort Student Tables Functions

//Table 20 Filter
$(document).ready(function(){
  $("#myInput20").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#myTable20 tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});

//Table 21 Filter
$(document).ready(function(){
  $("#myInput21").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#myTable21 tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});

//Table 22 Filter
$(document).ready(function(){
  $("#myInput22").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#myTable22 tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});

//Table 23 Filter
$(document).ready(function(){
  $("#myInput23").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#myTable23 tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});

//Table 24 Filter
$(document).ready(function(){
  $("#myInput24").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#myTable24 tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});

//Table 25 Filter
$(document).ready(function(){
  $("#myInput25").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#myTable25 tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});

//Table 26 Filter
$(document).ready(function(){
  $("#myInput26").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#myTable26 tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});

//Table 27 Filter
$(document).ready(function(){
  $("#myInput27").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#myTable27 tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});

//Table 28 Filter
$(document).ready(function(){
  $("#myInput28").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#myTable28 tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});

//Table 29 Filter
$(document).ready(function(){
  $("#myInput29").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#myTable29 tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});

//Table 30 Filter
$(document).ready(function(){
  $("#myInput30").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#myTable30 tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});

//Table 26 Filter
$(document).ready(function(){
  $("#myInput26").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#myTable26 tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});


// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
//---The javascript functions must be outside of the <script></script> tags--->