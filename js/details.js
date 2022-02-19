$(document).ready(function () {
    $("#pic-2").click(function () {
        $("#pic-11").attr("src" ,"imgs/pr1.png");
    });
});
$(document).ready(function () {
    $("#pic-3").click(function () {
        $("#pic-11").attr("src" ,"imgs/pr2.png");
    });
});
$(document).ready(function () {
    $("#pic-4").click(function () {
        $("#pic-11").attr("src" ,"imgs/pr.png");
    });
});


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

function getUrlVars() {
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for (var i = 0; i < hashes.length; i++) {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}

var products = [];
$(document).ready(function () {
    var id = getUrlVars().id;
    $.ajax({
        type: "GET",
        url: "dataJSon/homeproducts.json",
        dataType: "json",
        success: function (data) {
            products = data;
            $.each(products, function (index, item) {
                if (id == item.id) {
                    var product = item;
                    $("#pic-11").attr("src", product.imgSrc);
                    $("#product-name").html(product.name);
                    $("#product-price").html("price: " + product.price + " usd");
                    $("#product-info").html(product.info);
                    $("#product-size").html(product.size);
                    return false;
                }
            });
        }
    });
});