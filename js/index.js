
// When the user scrolls down 20px from the top of the document, show the button
// window.onscroll = function() {scrollFunction()};
//
// function scrollFunction() {
//     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//         document.getElementById("mybutton").style.display = "block";
//     } else {
//        document.getElementById("mybutton").style.display = "none";
//     }
// }
$(document).ready(function(){

    $(function(){

        $(document).on( 'scroll', function(){

            if ($(window).scrollTop() > 100) {
                $('.scroll-top-wrapper').addClass('show');
            } else {
                $('.scroll-top-wrapper').removeClass('show');
            }
        });

        $('.scroll-top-wrapper').on('click', scrollToTop);
    });

    function scrollToTop() {
        verticalOffset = typeof(verticalOffset) != 'undefined' ? verticalOffset : 0;
        element = $('body');
        offset = element.offset();
        offsetTop = offset.top;
        $('html, body').animate({scrollTop: offsetTop}, 500, 'linear');
    }

});


// // When the user clicks on the button, scroll to the top of the document
// function topfunction() {
//     document.body.scrollTop = 0;
//     document.documentElement.scrollTop = 0;
// }
    // PARSE DATA JSON

$(document).ready(function () {
    $.ajax({
        type: "GET",
        url: "dataJSon/homeproducts.json",
        dataType: "json",
        success: function (data) {
            var Products = loadProducts(data);
            $("#divProducts").html(Products);
        },
    });
});
$(document).ready(function () {
    $.ajax({
        type: "GET",
        url: "dataJSon/homeproducts1.json",
        dataType: "json",
        success: function (data) {
            var Products = loadProducts(data);
            $("#divProducts1").html(Products);
            cartAction();
        },
    });
});
$(document).ready(function () {
    $.ajax({
        type: "GET",
        url: "dataJson/productsLV.json",
        dataType: "json",
        success: function (data) {
            var Products = loadProducts(data);
            $("#divproductsLV").html(Products);
        },
    });
});

$(document).ready(function () {
    $.ajax({
        type: "GET",
        url: "dataJson/productsLVmen.json",
        dataType: "json",
        success: function (data) {
            var Products = loadProducts(data);
            $("#divproductsLVmen").html(Products);
        },
    });
});

$(document).ready(function () {
    $.ajax({
        type: "GET",
        url: "dataJson/productsGC.json",
        dataType: "json",
        success: function (data) {
            var Products = loadProducts(data);
            $("#divproductsGC").html(Products);
        },
    });
});

$(document).ready(function () {
    $.ajax({
        type: "GET",
        url: "dataJson/productsGCmen.json",
        dataType: "json",
        success: function (data) {
            var Products = loadProducts(data);
            $("#divproductsGCmen").html(Products);
        },
    });
});

$(document).ready(function () {
    $.ajax({
        type: "GET",
        url: "dataJson/productsDior.json",
        dataType: "json",
        success: function (data) {
            var Products = loadProducts(data);
            $("#divproductsDior").html(Products);
        },
    });
});

$(document).ready(function () {
    $.ajax({
        type: "GET",
        url: "dataJson/productsDiormen.json",
        dataType: "json",
        success: function (data) {
            var Products = loadProducts(data);
            $("#divproductsDiormen").html(Products);
        },
    });
});

$(document).ready(function () {
    $.ajax({
        type: "GET",
        url: "dataJson/productsHM.json",
        dataType: "json",
        success: function (data) {
            var Products = loadProducts(data);
            $("#divproductsHM").html(Products);
        },
    });
});

$(document).ready(function () {
    $.ajax({
        type: "GET",
        url: "dataJson/productsHMmen.json",
        dataType: "json",
        success: function (data) {
            var Products = loadProducts(data);
            $("#divproductsHMmen").html(Products);
        },
    });
});

function loadProducts(data) {
    var html = "";
    $.each(data, function (index, item) {
        var s = "";
        s += "<div class='col-md-4 top_brand_left agile_top_brands_grids '  >";
        s +=    "<div class='hover14 column'>";
        s +=        "<div class='agile_top_brand_left_grid '>";
        s +=            "<div class=\"agile_top_brand_left_grid_pos\">";
        s +=              '<img src="imgs/offer.png">';
        s +=            "</div>";
        s +=            "<div class='agile_top_brand_left_grid1'>";
        s +=             "<figure>";
        s +=                "<div class= 'snipcart-item block'>";
        s +=                    "<div class= 'snipcart-thumb'>";
        s +=                    "<a href='details.html?id=" + item.id + "'><img style='height: 150px; width: 150px' src='" + item.imgSrc + "'></a> ";
        s +=                        "<p>" + item.name + "</p>";
        s +=                         "<div class='stars'>";
        s +=                                "<i class='fa fa-star blue-star'></i> ";
        s +=                                "<i class='fa fa-star blue-star'></i> ";
        s +=                                "<i class='fa fa-star blue-star'></i> ";
        s +=                                "<i class='fa fa-star blue-star'></i> ";
        s +=                                "<i class='fa fa-star gray-star'></i> ";
        s +=                            "<h4>" + item.priceSale + "<span>" + item.price + "</span></h4>" ;
        s +=                        "</div>";
        s +=                        "<div class='snipcart-details top_brand_home_details'>";
        s +=                            "<form action='#' method='post'>";
        s +=                                "<fieldset >";
        s +=                                    '<input type="button" name="submit" data-id="' + item.id + '" data-name="' + item.name + '" data-price="' + item.price + '" data-imgSrc="' + item.imgSrc + '" value="Add to cart" class="button"/>';
        s +=                                "</fieldset>";
        s +=                            "</form>";
        s +=                        "</div>";
        s +=                    "</div>";
        s +=                "</div>";
        s +=              "</figure>";
        s +=            "</div>";
        s +=        "</div>";
        s +=    "</div>";
        s += "</div>";
        html += s;
    });

    return html;
}

function cartAction() {
    var shoppingCart = (function () {
        // =============================
        // Private methods and propeties
        // =============================
        var cart = [];

        // Constructor
        function Item(id, name, price, imgSrc, count) {
            this.id = id;
            this.name = name;
            this.price = price;
            this.imgSrc = imgSrc;
            this.count = count;
        }

        // Save cart
        function saveCart() {
            sessionStorage.setItem('shoppingCart', JSON.stringify(cart));
        }

        // Load cart
        function loadCart() {
            cart = JSON.parse(sessionStorage.getItem('shoppingCart'));
        }

        if (sessionStorage.getItem("shoppingCart") != null) {
            loadCart();
        }


        // =============================
        // Public methods and propeties
        // =============================
        var obj = {};

        // Add to cart
        obj.addItemToCart = function (id, name, price, imgSrc, count) {
            for (var item in cart) {
                if (cart[item].id === id) {
                    cart[item].count++;
                    saveCart();
                    return;
                }
            }
            var item = new Item(id, name, price, imgSrc, count);
            cart.push(item);
            saveCart();
        }
        // Set count from item
        obj.setCountForItem = function (id, count) {
            for (var i in cart) {
                if (cart[i].id === id) {
                    cart[i].count = count;
                    break;
                }
            }
        };
        // Remove item from cart
        obj.removeItemFromCart = function (id) {
            for (var item in cart) {
                if (cart[item].id === id) {
                    cart[item].count--;
                    if (cart[item].count === 0) {
                        cart.splice(item, 1);
                    }
                    break;
                }
            }
            saveCart();
        }

        // Remove all items from cart
        obj.removeItemFromCartAll = function (id) {
            for (var item in cart) {
                if (cart[item].id === id) {
                    cart.splice(item, 1);
                    break;
                }
            }
            saveCart();
        }

        // Clear cart
        obj.clearCart = function () {
            cart = [];
            saveCart();
        }

        // Count cart
        obj.totalCount = function () {
            var totalCount = 0;
            for (var item in cart) {
                totalCount += cart[item].count;
            }
            return totalCount;
        }

        // Total cart
        obj.totalCart = function () {
            var totalCart = 0;
            for (var item in cart) {
                totalCart += cart[item].price * cart[item].count;
            }
            return Number(totalCart.toFixed(2));
        }

        // List cart
        obj.listCart = function () {
            var cartCopy = [];
            for (var i in cart) {
                item = cart[i];
                itemCopy = {};
                for (p in item) {
                    itemCopy[p] = item[p];

                }
                itemCopy.total = Number(item.price * item.count).toFixed(2);
                cartCopy.push(itemCopy)
            }
            return cartCopy;
        }

        // cart : Array
        // Item : Object/Class
        // addItemToCart : Function
        // removeItemFromCart : Function
        // removeItemFromCartAll : Function
        // clearCart : Function
        // countCart : Function
        // totalCart : Function
        // listCart : Function
        // saveCart : Function
        // loadCart : Function
        return obj;
    })();


// *****************************************
// Triggers / Events
// *****************************************
// Add item
    $('.button').click(function (event) {
        event.preventDefault();
        console.log("hello");
        var id = $(this).data('id');
        var name = $(this).data('name');
        var imgSrc = $(this).data('imgSrc');
        var price = Number($(this).data('price'));
        shoppingCart.addItemToCart(id, name, price, imgSrc, 1);
        displayCart();
    });

// Clear items
    $('.clear-cart').click(function () {
        shoppingCart.clearCart();
        displayCart();
    });


    function displayCart() {
        var cartArray = shoppingCart.listCart();
        console.log(cartArray);
        var output = "";
        for (var i in cartArray) {
            output += "<tr class='stars'>"
                + "<td>" + cartArray[i].name + "</td>"
                + "<td>(" + cartArray[i].price + ")</td>"
                + "<td><div class='input-group'><button class='minus-item input-group-addon btn btn-primary' data-id=" + cartArray[i].id + ">-</button>"
                + "<input type='number' class='item-count form-control ' data-id='" + cartArray[i].id + "' value='" + cartArray[i].count + "'>"
                + "<button class='plus-item btn btn-primary input-group-addon' data-id=" + cartArray[i].id + ">+</button></div></td>"
                + "<td><button class='delete-item btn btn-danger' data-id=" + cartArray[i].id + ">X</button></td>"
                + " = "
                + "<td>" + cartArray[i].total + "</td>"
                + "</tr>";
        }
        $('.show-cart').html(output);
        $('.total-cart').html(shoppingCart.totalCart());
        $('.total-count').html(shoppingCart.totalCount());
    }

// Delete item button

    $('.show-cart').on("click", ".delete-item", function (event) {
        var id = $(this).data('id')
        shoppingCart.removeItemFromCartAll(id);
        displayCart();
    })


// -1
    $('.show-cart').on("click", ".minus-item", function (event) {
        var id = $(this).data('id')
        shoppingCart.removeItemFromCart(id);
        displayCart();
    })
// +1
    $('.show-cart').on("click", ".plus-item", function (event) {
        var id = $(this).data('id')
        shoppingCart.addItemToCart(id);
        displayCart();
    })

// Item count input
    $('.show-cart').on("change", ".item-count", function (event) {
        var id = $(this).data('id');
        var count = Number($(this).val());
        shoppingCart.setCountForItem(id, count);
        displayCart();
    });

    displayCart();
}

<!--script for scroll to top-->

$(document).ready(function(){

    $(function(){

        $(document).on( 'scroll', function(){

            if ($(window).scrollTop() > 100) {
                $('.scroll-top-wrapper').addClass('show');
            } else {
                $('.scroll-top-wrapper').removeClass('show');
            }
        });

        $('.scroll-top-wrapper').on('click', scrollToTop);
    });

    function scrollToTop() {
        verticalOffset = typeof(verticalOffset) != 'undefined' ? verticalOffset : 0;
        element = $('body');
        offset = element.offset();
        offsetTop = offset.top;
        $('html, body').animate({scrollTop: offsetTop}, 500, 'linear');
    }

});