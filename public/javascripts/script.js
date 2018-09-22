$(document).ready(function() {
    function readCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for(var i=0;i < ca.length;i++) {
            var c = ca[i];
            while (c.charAt(0)==' ') c = c.substring(1,c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
        }
        return null;
    }

    const NUM_QUESTIONS = 16;
    var user = {
        first_name: '',
        last_name: '',
        age: '',
        gender: '',
        height: null, 
        weight: null, 
        body_fat: null,
        smoker: null,
        workout_hours: null,
        diet: null,
        sleep: null, 
        digestion: null,
        num_drinks: null,
        work_hours: null,
        low_energy: null,
        stress_level: null,
        score_diet: 100,
        score_habit: 100,
        score_energy: 100
    };
    
    var numericQuestions = [3, 5, 6, 9, 11, 13, 14];
    var boolQuestions = [8, 10, 12, 15];

    var keysArray = Object.keys(user);
    var count = 0;
    $('.submit').on('click', function(event) {
        event.preventDefault();
        var isValid = true;
        var response = $('.answer-input').val().trim();
        //input validation
        if (response) {
            console.log(questionNum);
            console.log(response);
            var questionNum = $('.answer-input').data('id');
            for (var i = 0; i < numericQuestions.length; i++) {
                if (questionNum === numericQuestions[i]) {
                    if (response === '0') {
                        isValid = true;
                    }else if (!parseInt(response)) {
                        isValid = false;
                    } else if (response < 0) {
                        isValid = false;
                    } 
                }
            }
            if (questionNum === 4) {
                var lowerCase = response.toLowerCase();
                if (lowerCase === 'm' || lowerCase === 'f') {
                    response = lowerCase;
                } else {
                    isValid = false;
                }
            } else if (questionNum === 7) {
                if (response < 0 || response > 1) {
                    isValid = false;
                }
            } else if (questionNum === 16) {
                if (response < 0 || response > 10) {
                    isValid = false;
                }
            } else {
                for (var i = 0; i < boolQuestions.length; i++) {
                    if (questionNum === boolQuestions[i]) {
                        console.log('found bool question');
                        if (response !== 'true' && response !== 'false') {
                            isValid = false; 
                        }
                    }
                }
            }
            if (isValid) {
                user[keysArray[count]] = response;
                console.log('----------------------------------------');
                console.log(user[keysArray[count]]);
                if (questionNum < NUM_QUESTIONS) {
                    $.ajax({
                        url: '/quiz',
                        method: 'POST',
                        data: {
                            question: questionNum
                        }
                    }).done(function(data) {
                        console.log(data.id);
                        $('.question-text').html(data.text);
                        $('.answer-input').data('id', data.id);
                        $('.answer-input').val('');
                        console.log(data.id);
                        $('#question-num').html(data.id);
                        count++;
                    });
                } else {
                    var bmi = user.weight / Math.pow(user.height, 2);
                    // calculate the scores for the three categories
                    //             habit
                    if (user.num_drinks >= 21) {
                        user.score_habit -= 75;
                    } else if (user.num_drinks >= 14) {
                        user.score_habit -= 50;
                    } else if (user.num_drinks >= 7) {
                        user.score_habit -= 75;
                    } else if (user.num_drinks > 0) {
                        user.score_habit -= 10;
                    } 
                    if (user.smoker) {
                        user.score_habit -= 75;
                    }
                    if (bmi >= .35) {
                        user.score_habit -= 25;
                    } else if (bmi > .25) {
                        user.score_habit -= 10;
                    }
                    if (user.stress_level === 10) {
                        user.score_habit -= 25;
                    } else if (user.stress_level >= 8) {
                        user.score_habit -= 15 ;
                    }
                    if (user.workout_hours === 0) {
                        user.score_habit -= 25;
                    } else if (user.workout_hours <= 3.5) {
                        user.score_habit -= 10;
                    } 
                    if (user.work_hours >= 80) {
                        user.score_habit -= 15;
                    } 
                    if (user.sleep >= 10) {
                        user.score_habit -= 15;
                    } else if (user.sleep <= 6) {
                        user.score_habit -= 25;
                    } 
        
                    if (user.score_habit < 0) {
                        user.score_habit = 0;
                    }
                    console.log('score habit:', user.score_habit);
        
                    //diet
                    if (bmi >= .35 && !user.diet) {
                        user.score_diet -= 50;
                    } else if (bmi >= .35 && user.diet) {
                        user.score_diet -= 25;
                    } else if (bmi > .25 && !user.diet) {
                        user.score_diet -= -15;
                    } else if (bmi > .25 && user.diet) {
                        user.score_diet -= 10;
                    } 
                    if (user.digestion) {
                        user.score_diet -= 25;
                    }
                    if (user.stress_level >= 9) {
                        user.score_diet -= 10
                    }
                    if (user.num_drinks >= 21) {
                        user.score_diet -= 25;
                    }
                    else if (user.num_drinks >= 14) {
                        user.score_diet -= 15;
                    } 
        
                    if (user.score_diet < 0) {
                        user.score_diet = 0;
                    }
                    console.log('score_diet', user.score_diet);
        
                    //energy
                    if (user.low_energy) {
                        user.score_energy -= 50;
                    }
                    if (user.work_hours >= 100) {
                        user.score_energy -= 25;
                    } else if (user.work_hours >= 80) {
                        user.score_energy -= 15;
                    } 
                    if (user.workout_hours >= 21) {
                        user.score_energy -= 15;
                    } else if (user.workout_hours >= 14) {
                        user.score_energy -= 10;
                    }
                    if (user.sleep <= 6) {
                        user.score_energy -= 25;
                    } else if (user.sleep <= 4) {
                        user.score_energy -= 50;
                    }
                    if (user.num_drinks >= 21) {
                        user.score_energy -=15
                    } else if (user.num_drinks >= 14) {
                        user.score_energy -= 5;
                    }
        
                    console.log('score_energy:', user.score_energy);
                    console.log
                    console.log(user);
                    $.ajax({
                        url: '/api/users',
                        method: 'PUT',
                        data: user
                    }).then(function(result) {
                        console.log(result);
                        window.location.href = '/api/users/username/' + readCookie('username');
                    }).catch(function(error) {
                        console.log(error);
                    });  
                }   
            } else {
                window.alert('Invalid input');
            }
        } else {
            window.alert('cannot leave field blank');
        }
    });
})