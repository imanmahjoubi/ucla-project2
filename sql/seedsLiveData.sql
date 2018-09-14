/* SEED THE CATEGORIES TABLE */
INSERT INTO categories (value)
VALUES ('None');
INSERT INTO categories (value)
VALUES ('Diet');
INSERT INTO categories (value)
VALUES ('Diet, Energy');
INSERT INTO categories (value)
VALUES ('Energy, Habit');
INSERT INTO categories (value)
VALUES ('Diet, Energy, Habit');
INSERT INTO categories (value)
VALUES ('Diet, Habit');
INSERT INTO categories (value)
VALUES ('Energy');
INSERT INTO categories (value)
VALUES ('Habit');

/* SEED THE QUESTIONS TABLE */
INSERT INTO questions (text, CategoryId)
VALUES ('Enter your username:', 1);
INSERT INTO questions (text, CategoryId) 
VALUES ('Enter your password:', 1);
INSERT INTO questions (text, CategoryId)
VALUES ('What is your first name?', 1);
INSERT INTO questions (text, CategoryId)
VALUES ('What is your last name?', 1);
INSERT INTO questions (text, CategoryId)
VALUES ('How old are you?', 5);
INSERT INTO questions (text, CategoryId)
VALUES ('Gender', 1);
INSERT INTO questions (text, CategoryId)
VALUES ('How much do you weigh?', 5);
INSERT INTO questions (text, CategoryId)
VALUES ('How tall are you?', 1);
INSERT INTO questions (text, CategoryId)
VALUES ('What is your body fat percentage?', 5);
INSERT INTO questions (text, CategoryId)
VALUES ('Do you smoke?', 8);
INSERT INTO questions (text, CategoryId)
VALUES ('How many hours per week do you work out?', 7);
INSERT INTO questions (text, CategoryId)
VALUES ('Are you following a diet?', 2);
INSERT INTO questions (text, CategoryId)
VALUES ('How many hours do you sleep per dary?', 7);
INSERT INTO questions (text, CategoryId)
VALUES ('Do you have digestive problems?', 2);
INSERT INTO questions (text, CategoryId)
VALUES ('How many drinks do you have per week?', 8);
INSERT INTO questions (text, CategoryId)
VALUES ('How many hours per day do you work?', 7);
INSERT INTO questions (text, CategoryId)
VALUES ('Do you have low energy?', 7);
INSERT INTO questions (text, CategoryId)
VALUES ('What is your stress level?', 5);

/*FOODS TABLE*/
INSERT INTO FOOD (name)
VALUES ('Eggs');
INSERT INTO FOOD (name)
VALUES ('Salmon');
INSERT INTO FOOD (name)
VALUES ('Tuna');
INSERT INTO FOOD (name)
VALUES ('Chicken Breast');
INSERT INTO FOOD (name)
VALUES ('Spinach');
INSERT INTO FOOD (name)
VALUES ("Brocoli");
INSERT INTO FOOD (name)
VALUES ('Boiled Potatoes');
INSERT INTO FOOD (name)
VALUES ('Protein Smoothie');
INSERT INTO FOOD (name)
VALUES ('Milk');
INSERT INTO FOOD (name)
VALUES ('Rice');
INSERT INTO FOOD (name)
VALUES ('Nuts/Nut Butter');
INSERT INTO FOOD (name)
VALUES ('Red Meat');
INSERT INTO FOOD (name)
VALUES ('Mashed Potatoes');
INSERT INTO FOOD (name)
VALUES ('Greek Yogurt');
INSERT INTO FOOD (name)
VALUES ('Turkey');
INSERT INTO FOOD (name)
VALUES ('Chicken');
INSERT INTO FOOD (name)
VALUES ('Avocado');
INSERT INTO FOOD (name)
VALUES ('Lentil/Seeds');
INSERT INTO FOOD (name)
VALUES ('Kale');
INSERT INTO FOOD (name)
VALUES ('Veggies');
INSERT INTO FOOD (name)
VALUES ('Apple');
INSERT INTO FOOD (name)
VALUES ('Coffee/Tea');
INSERT INTO FOOD (name)
VALUES ('Chocolate');
INSERT INTO FOOD (name)
VALUES ('Banana/Fruit');
INSERT INTO FOOD (name)
VALUES ('Smoothie');
INSERT INTO FOOD (name) 
VALUES ('Healthy Cereal');

/*Recommendations*/
INSERT INTO RECOMMENDATIONS (text, min_score, max_score, CategoryId)
VALUES ('Lose Weight', 20, 100, 2);
INSERT INTO RECOMMENDATIONS (text, min_score, max_score, CategoryId)
VALUES ('Gain Weight', 20, 100, 2);
INSERT INTO RECOMMENDATIONS (text, min_score, max_score, CategoryId)
VALUES ('Easy to Digest', 20, 100, 2);
INSERT INTO RECOMMENDATIONS (text, min_score, max_score, CategoryId)
VALUES ('Gain Energy', 20, 100, 3);

/*FoodRecommendations*/
INSERT INTO FOODRECOMMENDATIONS (FoodId, RecommendationId)
VALUES (1, 2);
INSERT INTO FOODRECOMMENDATIONS (FoodId, RecommendationId)
VALUES (2, 2);
INSERT INTO FOODRECOMMENDATIONS (FoodId, RecommendationId)
VALUES (3, 2);
INSERT INTO FOODRECOMMENDATIONS (FoodId, RecommendationId)
VALUES (4, 2);
INSERT INTO FOODRECOMMENDATIONS (FoodId, RecommendationId)
VALUES (5, 2);
INSERT INTO FOODRECOMMENDATIONS (FoodId, RecommendationId)
VALUES (6, 2);
INSERT INTO FOODRECOMMENDATIONS (FoodId, RecommendationId)
VALUES (7. 2);
INSERT INTO FOODRECOMMENDATIONS (FoodId, RecommendationId)
VALUES (8, 2);
INSERT INTO FOODRECOMMENDATIONS (FoodId, RecommendationId)
VALUES (9, 2);