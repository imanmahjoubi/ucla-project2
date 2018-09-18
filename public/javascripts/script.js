$(document).ready(function() {
    var user = {
        first_name : '',
        last_name : '',
        gender : '',
        email : '',
        username : '',
        weight: '',
        height: '',
        age: ''

    };
    var count = 1;
   /* var  getInputVal = function (input , val){
        var input = '#'+input;
            console.log( $('input').val());
            var  val = $('input').val();
            console.log(val);
    };*/
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

   // if($('.submit').)


});
