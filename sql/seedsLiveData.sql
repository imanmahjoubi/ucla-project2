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