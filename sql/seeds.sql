/* SEED THE CATEGORY TABLE */
INSERT INTO Categories (value)
VALUES ('Weight');
INSERT INTO Categories (value)
VALUES ('Digestion');
INSERT INTO Categories (value)
VALUES ('Antioxidents');
INSERT INTO Categories (value)
VALUES ('Energy');

/* SEED THE Questions TABLE */
INSERT INTO Questions (text)
VALUES ('What is your first name?');
INSERT INTO Questions (text)
VALUES ('What is your last name?');
INSERT INTO Questions (text)
VALUES ('How old are you?');
INSERT INTO Questions (text)
VALUES ('Gender');
INSERT INTO Questions (text)
VALUES ('How much do you weigh?');
INSERT INTO Questions (text)
VALUES ('How tall are you?');
INSERT INTO Questions (text)
VALUES ('What is your body fat percentage?');
INSERT INTO Questions (text)
VALUES ('Do you smoke?');
INSERT INTO Questions (text)
VALUES ('How many hours per week do you work out?');
INSERT INTO Questions (text)
VALUES ('Are you following a diet?');
INSERT INTO Questions (text)
VALUES ('How many hours do you sleep per dary?');
INSERT INTO Questions (text)
VALUES ('Do you have digestive problems?');
INSERT INTO Questions (text)
VALUES ('How many drinks do you have per week?');
INSERT INTO Questions (text)
VALUES ('How many hours per day do you work?');
INSERT INTO Questions (text)
VALUES ('Do you have low energy?');
INSERT INTO Questions (text)
VALUES ('What is your stress level?');

/*Recommendations TABLE*/
INSERT INTO Recommendations (text, min_score, max_score, CategoryId)
VALUES ('Weight', 0, 50, 1);
INSERT INTO Recommendations (text, min_score, max_score, CategoryId)
VALUES ('Weight', 51, 75, 1);
INSERT INTO Recommendations (text, min_score, max_score, CategoryId)
VALUES ('Weight', 76, 100, 1);
INSERT INTO Recommendations (text, min_score, max_score, CategoryId)
VALUES ('Digestion', 0, 50, 2);
INSERT INTO Recommendations (text, min_score, max_score, CategoryId)
VALUES ('Digestion', 51, 75, 2);
INSERT INTO Recommendations (text, min_score, max_score, CategoryId)
VALUES ('Digestion', 76, 100, 2);
INSERT INTO Recommendations (text, min_score, max_score, CategoryId)
VALUES ('Antioxidants', 0, 50, 3);
INSERT INTO Recommendations (text, min_score, max_score, CategoryId)
VALUES ('Antioxidants', 51, 75, 3);
INSERT INTO Recommendations (text, min_score, max_score, CategoryId)
VALUES ('Antioxidants', 76, 100, 3);
INSERT INTO Recommendations (text, min_score, max_score, CategoryId)
VALUES ('Energy', 0, 50, 4);
INSERT INTO Recommendations (text, min_score, max_score, CategoryId)
VALUES ('Energy', 51, 75, 4);
INSERT INTO Recommendations (text, min_score, max_score, CategoryId)
VALUES ('Energy', 76, 100, 4);

/*Food TABLE*/
INSERT INTO Food (name, RecommendationId)
VALUES ('Eggs', 1);
INSERT INTO Food (name, RecommendationId)
VALUES ('Salmon', 2);
INSERT INTO Food (name, RecommendationId)
VALUES ('Tuna', 3);
INSERT INTO Food (name, RecommendationId)
VALUES ('Chicken Breast', 4);
INSERT INTO Food (name, RecommendationId)
VALUES ('Spinach', 5);
INSERT INTO Food (name, RecommendationId)
VALUES ("Brocoli", 6);
INSERT INTO Food (name, RecommendationId)
VALUES ('Boiled Potatoes', 7);
INSERT INTO Food (name, RecommendationId)
VALUES ('Protein Smoothie', 8);
INSERT INTO Food (name, RecommendationId)
VALUES ('Milk', 9);
INSERT INTO Food (name, RecommendationId)
VALUES ('Rice', 10);
INSERT INTO Food (name, RecommendationId)
VALUES ('Nuts/Nut Butter', 11);
INSERT INTO Food (name, RecommendationId)
VALUES ('Red Meat', 12);
INSERT INTO Food (name, RecommendationId)
VALUES ('Mashed Potatoes', 1);
INSERT INTO Food (name, RecommendationId)
VALUES ('Greek Yogurt', 2);
INSERT INTO Food (name, RecommendationId)
VALUES ('Turkey', 3);
INSERT INTO Food (name, RecommendationId)
VALUES ('Chicken', 4);
INSERT INTO Food (name, RecommendationId)
VALUES ('Avocado', 5);
INSERT INTO Food (name, RecommendationId)
VALUES ('Lentil/Seeds', 6);
INSERT INTO Food (name, RecommendationId)
VALUES ('Kale', 7);
INSERT INTO Food (name, RecommendationId)
VALUES ('Veggies', 8);
INSERT INTO Food (name, RecommendationId)
VALUES ('Apple', 9);
INSERT INTO Food (name, RecommendationId)
VALUES ('Coffee/Tea', 10);
INSERT INTO Food (name, RecommendationId)
VALUES ('Chocolate', 11);
INSERT INTO Food (name, RecommendationId)
VALUES ('Banana/Fruit', 12);
INSERT INTO Food (name, RecommendationId)
VALUES ('Smoothie', 1);
INSERT INTO Food (name, RecommendationId) 
VALUES ('Healthy Cereal', 2);