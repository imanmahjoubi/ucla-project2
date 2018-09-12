/* SEED THE USERS TABLE */
INSERT INTO users (username, password, first_name, last_name, age, gender, height, weight, body_fat, smoker, workout_hours, diet, sleep, digestion, num_drinks, work_hours, low_energy, stress_level, score_diet, score_habit, score_energy)
VALUES ('test1', 'abc123', 'Stephen', 'Pellegrini', 28, 'm', 74, 185, 25, true, 5, false, 8, false, 0, 40, false, 5, 45, 60, 80);
INSERT INTO users (username, password, first_name, last_name, age, gender, height, weight, body_fat, smoker, workout_hours, diet, sleep, digestion, num_drinks, work_hours, low_energy, stress_level, score_diet, score_habit, score_energy)
VALUES ('test2', 'abc123', 'Eric', 'Pellegrini', 26, 'm', 68, 145, 10, false, 15, false, 7, false, 8, 60, false, 5, 90, 80, 85);
INSERT INTO users (username, password, first_name, last_name, age, gender, height, weight, body_fat, smoker, workout_hours, diet, sleep, digestion, num_drinks, work_hours, low_energy, stress_level, score_diet, score_habit, score_energy)
VALUES ('test3', 'abc123', 'Sarah', 'Smith', 29, 'f', 64, 145, 20, false, 10, false, 6, false, 8, 60, false, 8, 75, 85, 75);

/* SEED THE RECOMMENDATIONS TABLE */
INSERT INTO recommendations (text, min_score, max_score, CategoryId) 
VALUES ('test', 50, 100, 8);
INSERT INTO recommendations (text, min_score, max_score, CategoryId) 
VALUES ('test2', 40, 60, 7);

/* SEED THE USERRECOMMENDATIONS TABLE */
INSERT INTO userrecommendations (RecommendationId, UserId) 
Values (1, 2);
INSERT INTO userrecommendations (RecommendationId, UserId) 
Values (1, 1);
INSERT INTO userrecommendations (RecommendationId, UserId) 
Values (2, 2);
INSERT INTO userrecommendations (RecommendationId, UserId) 
Values (2, 1);
