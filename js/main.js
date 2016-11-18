var tips = [{
    "text": "Add your favorite booze to the eggnog to make your Uncle Bob's vacation stories that much more entertaining.",
    "imageUrl": "https://harriedhousewifeblog.files.wordpress.com/2012/12/spiked-eggnog-punch1.jpg"
}, {
    "text": "Don't bring up politics at dinner!",
    "imageUrl": "http://www.rawstory.com/wp-content/uploads/2015/11/SNL-thanksgiving-800x430.jpg"
}, {
    "text": "Bring a hotplate to keep your food warm while everyone passes the food around the table when at big gatherings.",
    "imageUrl": "http://www.asia.ru/images/target/photo/51552699/Electric_Hot_Plate.jpg"
}, {
    "text": "That can of cranberry sauce will help you break the window to your car when you lock your keys in it while out to grab 'one last thing' before dinner.",
    "imageUrl": "http://blogs.wickedlocal.com/massmarkets/files/2011/12/acransauce2.jpg"
}, {
    "text": "Choose different giftwrap for each person so you can easily tell who gets which present.",
    "imageUrl": "https://thumbs.dreamstime.com/x/pile-christmas-gift-12117042.jpg"
}];

function addTip(newTipText) {
    var newTip = {
        "text": newTipText,
        "imageUrl": null
    };
    tips.push(newTip);
}

function getRandomTip() {
    var min = Math.ceil(0);
    var max = Math.floor(tips.length);
    var randomIndex = Math.floor(Math.random() * (max - min)) + min;
    return tips[randomIndex];
}

$(document).ready(function() {
    $('.submit-tip').click(function() {
        addTip($('.input-tip').val());
        console.log(tips);
        $('.input-tip').val('');
    });

    $('.get-tip').click(function() {
        var tip = getRandomTip();
        $('.tip-container').text(tip.text);
        if (tip.imageUrl === null) {
            $('.tip-image').hide();
        } else {
            $('.tip-image').attr("src", tip.imageUrl);
            $('.tip-image').show();
        }
    });
});
