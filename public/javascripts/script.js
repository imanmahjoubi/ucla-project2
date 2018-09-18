$(document).ready(function() {
    var user = {
        first_name : '',
        last_name : '',
        gender : '',
        email : '',
        username : '',
        weight: '',
        height: '',
        age: '',
        body_fat : '',
        is_smoker : false,
        is_drinker: false,
        hrs_work : '',
        workout_hrs: '',
        hrs_sleep: '',
        poop_week: '',
        diet : ''
    };
    var count = 1;
    $('#first_name').blur(function () {
        console.log('first', $('#first_name').val());
        var first = $('#first_name').val();
        user.first_name = first;
    });
    $('#username').blur(function () {
        console.log('username', $('#username').val());
        var username = $('#username').val();
        user.username = username;
    });
    $('#last_name').blur(function () {
        console.log('last', $('#last_name').val());
        var  last = $('#last_name').val();
        user.last_name = last;
    });
    $('#female').click(function () {
        console.log('female');
        $('#male').hide();
        $('.m').hide();
        user.gender = 'female;'
    });
    $('#male').click(function () {
        console.log('male');
        $('#female').hide();
        $('.f').hide();
        user.gender = 'male;'
    });
    $('#bday').blur(function () {
        console.log('age', $('#bday').val());
        user.age = $('#bday').val();
    });
    $('#weight').blur(function () {
        console.log('weight', $('#weight').val());
        user.weight = $('#weight').val();
    });
    $('#height').blur(function () {
        console.log('height', $('#height').val());
        user.height = $('#height').val();
    });
    $('#hrs_work').blur(function () {
        console.log('hrs_work', $('#hrs_work').val());
        user.hrs_work = $('#hrs_work').val();
    });
    $('#hrs_sleep').blur(function () {
        console.log('hrs_sleep', $('#hrs_sleep').val());
        user.hrs_sleep = $('#hrs_sleep').val();
    });
    $('#diet').blur(function () {
        console.log('diet', $('#diet').val());
        user.diet = $('#diet').val();
    });
    $('#poop_week').blur(function () {
        console.log('poop_week', $('#poop_week').val());
        user.poop_week = $('#poop_week').val();
    });
    $('#drink').blur(function () {
        console.log('drink', $('#drink').val());
        if($('#drink').val() == 'yes' || $('#drink').val() == 'Yes'){
            user.is_drinker = true ;
        } else {
            user.is_drinker = false ;
        }
    });
    $('#smoke').blur(function () {
        console.log('smoke', $('#smoke').val());
        if($('#smoke').val() == 'yes' || $('#smoke').val() == 'Yes'){
            user.is_smoker = true ;
        } else {
            user.is_smoker = false ;
        }
    });

    if(user.diet){
        // this means we fill in the last thing and we gonna send to dara base :)
    }

   // if($('.submit').)


});
