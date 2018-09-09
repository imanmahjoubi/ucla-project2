INSERT INTO recommendations (text, link, min_score, max_score)
VALUES ('test1', 'http://#', 0, 40);
INSERT INTO recommendations (text, link, min_score, max_score) 
VALUES ('test2', 'http://#', 40, 60);
INSERT INTO recommendations (text, link, min_score, max_score) 
VALUES ('test3', 'http://#', 60, 80);

INSERT INTO users (username, first_name, last_name, age, gender, height, weight, body_fat, smoker, workout_hours, diet, work_hours, stress_level, score_diet, score_habit, score_sleep)
VALUES ('test', 'testFirst', 'testLast', 25, 'm', 74, 185, 25, true, 5, false, 40, 50, 60, 75, 80);
INSERT INTO users (username, first_name, last_name, age, gender, height, weight, body_fat, smoker, workout_hours, diet, work_hours, stress_level, score_diet, score_habit, score_sleep)
VALUES ('test1', 'testFirst1', 'testLast1', 25, 'f', 64, 125, 25, false, 5, false, 45, 50, 60, 75, 80);
INSERT INTO users (username, first_name, last_name, age, gender, height, weight, body_fat, smoker, workout_hours, diet, work_hours, stress_level, score_diet, score_habit, score_sleep)
VALUES ('test2', 'testFirst2', 'testLast2', 40, 'f', 63, 135, 30, true, 10, true, 50, 70, 65, 70, 50);

INSERT INTO userrecommendations (RecommendationId, UserId)
VALUES(2, 1);
INSERT INTO userrecommendations (RecommendationId, UserId)
VALUES(3, 1);
INSERT INTO userrecommendations (RecommendationId, UserId)
VALUES(4, 2);
INSERT INTO userrecommendations (RecommendationId, UserId)
VALUES(3, 3);