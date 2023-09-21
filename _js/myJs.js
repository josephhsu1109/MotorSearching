//頁面切換
function menuSwitch() {
    $(document).ready(function() {
        $('#firstNews').css("top", "110px");
        $('#firstNewsDate').hide();
        $("p").hide();
        $("img").css("width", "300px");
        $('.TPic').filter('.' + 'Option').hide();
        $('.TPic').filter('.' + 'Contact').hide();
        $('.TPic').filter('.' + 'Buymotor').hide();
        $('.Titlelist').click(function() {
            const value = $(this).attr('data-filter');
            if (value == 'Home') {
                $('#firstNews').css("top", "110px");
                // $('#firstNewsDate').hide();
                $("p").hide()
                $('.TPic').css("width", "300px");
                $('.TPic').css("height", "300px");
                $("img").css("width", "300px");
                $('.TPic').show('1000');
                $('.TPic').filter('.' + 'Buymotor').hide();
                $('.TPic').filter('.' + 'Option').hide();
                $('.TPic').filter('.' + 'Contact').hide();

            }
            if (value == 'Buymotor') {
                $('.TPic').css("width", "400px");
                $('.TPic').css("height", "400px")
                $("img").css("width", "380px");
                $("p").show();
                $('.TPic').not('.' + value).hide('1000');
                $('.TPic').filter('.' + value).show('1000');
            }
            if (value == 'Garage') {
                $("p").show();
                $('.TPic').css("width", "400px");
                $('.TPic').css("height", "400px");
                $("img").css("width", "380px");
                $('.TPic').not('.' + value).hide('1000');
                $('.TPic').filter('.' + value).show('1000');
            }
            if (value == 'News') {
                $('#firstNewsDate').show();
                $('#firstNews').css("top", "150px");
                $('.TPic').css("width", "400px");
                $('.TPic').css("height", "400px");
                $("img").css("width", "400px");
                $('.TPic').not('.' + value).hide('1000');
                $('.TPic').filter('.' + value).show('1000');
            }
            if (value == 'Option') {

                $('.TPic').css("width", "300px");
                $('.TPic').css("height", "300px");
                $('.TPic').not('.' + value).hide('1000');
                $('.TPic').filter('.' + value).show('1000');
            }
            if (value == 'Contact') {
                $("p").show();
                $('.TPic').css("width", "400px");
                $('.TPic').css("height", "400px");
                $("img").css("width", "400px");
                $('.TPic').not('.' + value).hide('1000');
                $('.TPic').filter('.' + value).show('1000');
            }
        });
        $('.Titlelist').click(function() {
            $(this).addClass('active').siblings().removeClass('active');
        })
    });
}
//比較
function _compare() {
    $(document).ready(function() {
        $('#call_compare').click(function() {
            $('#compare').fadeIn(500);
        });
        $(document).on("click", "#compare_close", function() {
            $('#compare').fadeOut(500);
        });
        $(document).on("click", "#compare_reset", function() {
            $('#compare').html("<div id='compare_close'>X</div><div id='compare_reset'>重設</div>");
        });
        $('#GarageR3').click(function() {
            $('#compare').css('display', 'flex');
            $('#compare').append("<p class='compare_text'>" + $('#R3Text').text().replaceAll(' ', '<br>') + "</p > ");
            console.log($('#R3Text').text());
        });
        $('#CBR1000RR').click(function() {
            $('#compare').css('display', 'flex');
            $('#compare').append("<p class='compare_text'>" + $('#CBR1000RRText').text().replaceAll(' ', '<br>') + "</p > ");
        });
        $('#R1M').click(function() {
            $('#compare').css('display', 'flex');
            $('#compare').append("<p class='compare_text'>" + $('#R1MText').text().replaceAll(' ', '<br>') + "</p > ").after($('#compare'));
        })
        $('#Z1000').click(function() {
            $('#compare').css('display', 'flex');
            $('#compare').append("<p class='compare_text'>" + $('#Z1000Text').text().replaceAll(' ', '<br>') + "</p > ");
        });
        $('#FatBoy').click(function() {
            $('#compare').css('display', 'flex');
            $('#compare').append("<p class='compare_text'>" + $('#FatBoyText').text().replaceAll(' ', '<br>') + "</p > ");
        });
        $('#H2R').click(function() {
            $('#compare').css('display', 'flex');
            $('#compare').append("<p class='compare_text'>" + $('#H2RText').text().replaceAll(' ', '<br>') + "</p > ");
        });
        $('#M1000RR').click(function() {
            $('#compare').css('display', 'flex');
            $('#compare').append("<p class='compare_text'>" + $('#M1000RRText').text().replaceAll(' ', '<br>') + "</p > ");
        });
        $('#V4R').click(function() {
            $('#compare').css('display', 'flex');
            $('#compare').append("<p class='compare_text'>" + $('#PanigaleV4RText').text().replaceAll(' ', '<br>') + "</p > ");
        });
        $('#Hayabusa').click(function() {
            $('#compare').css('display', 'flex');
            $('#compare').append("<p class='compare_text'>" + $('#HayabusaText').text().replaceAll(' ', '<br>') + "</p > ");
        });
    });
}
//選配購物車
function _Option() {
    var buy_list = [];
    $total_money = 0;
    $(document).ready(function() {
        var serial = 0;
        $('.item_cart').click(function() {
            var $ct = $(this).parent();
            var price = $ct.find('.item_price').text();
            var desc = $ct.find('.item_text').text();
            var img = $ct.find('.item_img').attr('src');
            serial++;
            var buy_item = {
                no: serial,
                icon: img,
                show_text: desc,
                money: price
            };
            buy_list.push(buy_item);
            $total_money += Number(buy_item.money.replace('$', ''));
            var $item = $('<div class="cart_item"><img class="cart_img" src="./images/162961.jpg" /><div class="cart_text">超美麗。超漂亮。</div><div class="cart_price">$18000</div><div class="cart_delete">X</div></div>')
            $('#cart').append($item);
            $item.attr('no', buy_item.no);
            $item.find('.cart_img').attr('src', img);
            $item.find('.cart_price').text(price);
            $item.find('.cart_text').text(desc);
            $item.find('.cart_delete').click(function() {
                var idx = $(this).parent().attr('no');
                for (var i = 0; i < buy_list.length; i++) {
                    if (buy_list[i].no == idx) {
                        buy_list.splice(i, 1);
                        serial--;
                    }
                }
                $item.fadeOut(600, function() {
                    $total_money -= Number(buy_item.money.replace('$', ''));
                    $item.remove();
                    $('#item_money').text('總金額 : ' + $total_money + '元');
                    $('#item_num').text('已選擇 : ' + $('.cart_item').length);
                });
            });
            $('#item_money').text('總金額 : ' + $total_money + '元');
            $('#item_num').text('已選擇 : ' + $('.cart_item').length + '個');
            console.log(buy_item.money, $total_money);
            console.log(buy_list);
        });

        $('#call_cart').click(function() {
            $('#cart').fadeIn(500);
        });
        $('#cart_close').click(function() {
            $('#cart').fadeOut(500);
        });
        $('#item_calculate').click(function() {
            $('#cashcounter').fadeIn(500);
            $('#cashTotal').val($total_money);
        })
    });
}


//計算機
function calculate() {
    $(document).ready(function() {
        $('#call_cashcounter').click(function() {
            $('#cashcounter').show(500);
        });
        $('#cashCancel').click(function() {
            $('#cashcounter').hide(500);
        });
        $('#cashStart').click(function() {
            if (Number($('#cashTime').val()) > 64) { alert('狂賀!!! 全額貸' + Number($('#cashTime').val()) + "期 !"); }
            $('#cashcaculate').val(Number($('#cashTotal').val()) / Number($('#cashTime').val()));
        })
        $('#cashreset').click(function() {
            $('#cashTotal').val(' ');
            $('#cashTime').val(' ');
            $('#cashcaculate').val(' ');
        })
    });
}
//聯繫
function send() {
    $(document).ready(function() {
        $('#send').click(function() {
            alert('已成功送出');
        });
        $('.close').click(function() {
            $('#GarageR3Text').hide();
            $('#GarageCbrText').hide();
            $('#GarageR1MText').hide();
            $('#GarageZ1000Text').hide();
        });

    });
}