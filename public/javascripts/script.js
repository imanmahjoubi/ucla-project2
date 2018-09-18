$(document).ready(function() {
    var user = {
        first_name : '',
        last_name : '',
        gender : '',
        email : '',
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
        console.log('bday', $('#bday').val());
        user.birthday = $('#bday').val();
    });

   // if($('.submit').)

   

});
