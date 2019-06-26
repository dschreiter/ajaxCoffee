
//http://rest.learncode.academy/

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

    //Add
    $('#add-order').on('click', function () {
        fetch('http://rest.learncode.academy/api/dsTest/coffee', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: "david",
                    drink: "mocha"
                }),
            })
            .then(response => response.json()) // response.json() returns a promise
            .then((response) => {
                console.log("You saved this item", response); //returns the new item along with its ID
            })

    });
/*
    //update
    $('#update-order').on('click', function () {
        ;
        fetch('http://rest.learncode.academy/api/johnbob/friends/5ac29306272a180100ebc760', {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: "Batman",
                    age: 36
                }),
            })
            .then((response) => {
                console.log("Update success!", response.status); //returns 200 ok
            })
    });

    //delete
    $('#delete-order').on('click', function () {
        ;
        fetch('http://rest.learncode.academy/api/johnbob/friends/5ac29306272a180100ebc760', {
                method: "DELETE",
            })
            .then((response) => {
                console.log("Deleted!", response.status); //returns 200 ok
            })
    });



    //read current 
    $(function () {
        fetch('http://rest.learncode.academy/api/johnbob/friends/5ac29306272a180100ebc760')
            .then(response => response.json()) // response.json() returns a promise
            .then((response) => {
                console.log("I got a friend!", response); //returns all of johnbob's friends
            })
    });
*/

});