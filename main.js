

// API: http://rest.learncode.academy/
// this example: http://rest.learncode.academy/api/dsTest/coffee

$(function () {
    /*
        var $orders =$('#orders');
        var $name =$('#name');
        var $drink =$('#drink');
        $.ajax({
            type: 'GET',                    // default you don't have to add but good practice
            url: '/ds/orders',              //api/orders
            success: function(orders){
                $.each(orders, function(i, order){
                    $orders.append('<li>name: '+ order.name +', drink: '+ order.drink + '</li>');
                });
            },
            error: function(){
                alert("error loading orders");
            }
        });
    */

    //Add -- send to API
    $("#add-order").on("click", function() {
        console.log("Click!!!");
        var name = $("#name").val();
        var drink = $("#drink").val();
        fetch("http://rest.learncode.academy/api/dsTest/coffee", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            name: name,
            drink: drink
          })
        })
          .then(response => response.json()) // response.json() returns a promise
          .then(response => {
            console.log("You saved this item", response); //returns the new item along with its ID
          });
      });


    //retrieve info from API
    var orders;
    $("#update-order").on("click", function() {
        fetch("http://rest.learncode.academy/api/dsTest/coffee")
          .then(response => response.json()) // response.json() returns a promise
          .then(response => {
            console.log("I have drink orders!", response); //returns all of johnbob's friends
            orders = response;
            orders.forEach(element => {
              console.log(element);
            });
          });
      });



});