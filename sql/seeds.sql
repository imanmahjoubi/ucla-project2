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
INSERT INTO Food (name, image, RecommendationId)
VALUES ('Whole Eggs', 'https://nomnompaleo.com/wp-content/uploads/2018/01/800InstantPotLazyDevilsPCEggs11.jpg', 1);
INSERT INTO Food (name, image, RecommendationId)
VALUES ('Leafy Greens', 'https://www.thedrswolfson.com/wp-content/uploads/53308721_s-800x400.jpg', 2);
INSERT INTO Food (name, image, RecommendationId)
VALUES ('Cruciferous Vegetables', 'https://draxe.com/wp-content/uploads/2014/04/CruciferousVegetables_THUMBNAIL.jpg', 3);
INSERT INTO Food (name, image, RecommendationId)
VALUES ('Lean Beef', 'https://thewoksoflife.com/wp-content/uploads/2018/05/dry-fried-sichuan-beef-8.jpg', 1);
INSERT INTO Food (name, image, RecommendationId)
VALUES ('Boiled Potatoes', 'https://images-na.ssl-images-amazon.com/images/I/81TJK4QAa2L._SY355_.jpg', 2);
INSERT INTO Food (name, image, RecommendationId)
VALUES ('Salmon', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7kOwalB7aAtfKDDZM6oIYZCLFBE6ZqT7FKHdvp9OCr78WP12IMQ', 3);
INSERT INTO Food (name, image, RecommendationId)
VALUES ('Beans and Legumes', 'https://cdn.eatplant-based.com/wp-content/uploads/2015/04/Beans-EatPlantBased.jpg', 1);
INSERT INTO Food (name, image, RecommendationId)
VALUES ('Tuna', 'https://sparkpeo.hs.llnwd.net/e2/guid/Grilled-Mediteranean-Ahi-Tuna/d404abed-3a15-4e28-b5d0-52aefd221507.jpg', 2);
INSERT INTO Food (name, image, RecommendationId)
VALUES ('Chicken Breast', 'https://www.recipetineats.com/wp-content/uploads/2018/03/Oven-Baked-Chicken-Breast_8-1.jpg', 3);
INSERT INTO Food (name, image, RecommendationId)
VALUES ('Cottage Cheese', 'http://cdn.shopify.com/s/files/1/2836/2982/products/cottage-cheese-1_grande.jpg?v=1529434175', 1);
INSERT INTO Food (name, image, RecommendationId)
VALUES ('Avocados', 'https://images-na.ssl-images-amazon.com/images/I/81LKLCmdAQL._SY355_.jpg', 2);
INSERT INTO Food (name, image, RecommendationId)
VALUES ('Nuts', 'https://article.images.consumerreports.org/prod/content/dam/CRO%20Images%202018/Cars/July/CR-Health-InlineHero-Are-Nuts-Good-For-You-11-17', 3);
INSERT INTO Food (name, image, RecommendationId)
VALUES ('Whole Grains', 'https://www.caloriesecrets.net/wp-content/uploads/2017/08/whole-grains-vs-refined-grains.jpg', 1);
INSERT INTO Food (name, image, RecommendationId)
VALUES ('Fruit', 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Culinary_fruits_front_view.jpg', 2);
INSERT INTO Food (name, image, RecommendationId)
VALUES ('Yogurt', 'http://cdn.shopify.com/s/files/1/1610/8399/products/Yogurt_600x.jpg?v=1527211255', 3);
INSERT INTO Food (name, image, RecommendationId)
VALUES ('Smoothie', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu2Hw90IdWpoY7P7fKNyMhgXHC2an2EeeWBGOedRkhVpn2nC3BXQ', 1);
INSERT INTO Food (name, image, RecommendationId)
VALUES ('Milk', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0fQKNPfCL1o2rBU8kgjymcs5jd_TO42K3zt_rTN3u6qsU63SAzQ', 2);
INSERT INTO Food (name, image, RecommendationId)
VALUES ('Turkey', 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/11/7/0/0170831_Alton-Roast-Turkey_s4x3.jpg.rend.hgtvcom.406.305.suffix/1382540635076.jpeg', 3);
INSERT INTO Food (name, image, RecommendationId)
VALUES ('Yogurt', 'https://atmedia.imgix.net/7abab10d4cba41c6de8a031c6e00f9a25117e630?auto=format&q=45&w=600.0&h=750.0&fit=max&cs=strip', 4);
INSERT INTO Food (name, image, RecommendationId)
VALUES ('Apples', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7wAfxhmvOjaVZKXSTipTnUf4xSCgTSnT_ZTpDgFNEm5_dlwS9', 5);
INSERT INTO Food (name, image, RecommendationId)
VALUES ('Fennel', 'https://keviniscooking.com/wp-content/uploads/2014/04/Asparagus-and-Fennel-Orzo6-768x1024.jpg', 6);
INSERT INTO Food (name, image, RecommendationId)
VALUES ('Chia Seeds', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkE4IczWclxxM6710szI8tg_pXPBLgH1iMe-aWSlyIVNHNPaAC', 4);
INSERT INTO Food (name, image, RecommendationId)
VALUES ('Kombucha', 'https://www.healthline.com/hlcmsresource/images/topic_centers/Food-Nutrition/1296x728_-The_Health_Benefits_of_Kombucha.jpg', 5);
INSERT INTO Food (name, image, RecommendationId)
VALUES ('Papaya', 'https://media.mercola.com/assets/images/foodfacts/papaya-nutrition-facts.jpg', 6);
INSERT INTO Food (name, image, RecommendationId)
VALUES ('Whole Grains', 'https://i2.wp.com/foodandnutrition.org/wp-content/uploads/potpourri-whole-grains-917202960.jpg?fit=780%2C520&ssl=1', 4);
INSERT INTO Food (name, image, RecommendationId)
VALUES ('Beets', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ47MG9PSotz7nPDkXo8D6wG2PkjfoHemammMaN9nL7tG4bFCGXFg', 5);
INSERT INTO Food (name, image, RecommendationId)
VALUES ('Miso', 'https://atmedia.imgix.net/92259190c89638bcbb38fcb9eb610fec1c01be08?w=720&h=480&fit=crop', 6);
INSERT INTO Food (name, image, RecommendationId)
VALUES ('Chia seeds', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXnFZKHMVApd2MjOszaTDqglWoynKib3Pdptfe-2PN7CfPxtGX', 4);
INSERT INTO Food (name, image, RecommendationId)
VALUES ("Brocoli", 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFoJsPLrlsBDQEfKhZqwfFTr2Ez62IzOZiqv86B05aZARMUayJ', 5);
INSERT INTO Food (name, image, RecommendationId)
VALUES ('Ginger', 'https://www.healthline.com/hlcmsresource/images/AN_images/AN26-Ginger-Root-Powder-732x549-thumb.jpg', 6);
INSERT INTO Food (name, image, RecommendationId)
VALUES ('Kimchi', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPff7N5rtfBYN3hsDFbco6RxLs2dW5pHAohXea0faRtngHL8deTg', 4);
INSERT INTO Food (name, image, RecommendationId)
VALUES ('Dark Green Vegetables', 'http://www.grandforksherald.com/sites/default/files/styles/16x9_620/public/fieldimages/12/0116/0320.f.gfh.nutrition.jpg?itok=-GAE2VPO', 5);
INSERT INTO Food (name, image, RecommendationId)
VALUES ('Salmon', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeP7aAVEcEmGiroP4errZmHYkRH0YWmoUMokecsla9KPxUri6C', 6);
INSERT INTO Food (name, image, RecommendationId)
VALUES ('Red Beans', 'https://cdn.diabetesselfmanagement.com/2009/03/recipe_spicy_rbar_440x250.jpg', 7);
INSERT INTO Food (name, image, RecommendationId)
VALUES ('Blueberries', 'https://www.medicalnewstoday.com/content/images/headlines/287/287710/blueberries.jpg', 8);
INSERT INTO Food (name, image, RecommendationId)
VALUES ('Kidney Beans', 'https://cdn.shopify.com/s/files/1/2918/4630/products/Image_2_fcead0f0-7f38-41d8-bf73-0ae5a7070898.jpg?v=1527363340', 9);
INSERT INTO Food (name, image, RecommendationId)
VALUES ('Pinto Beans', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNOxwqpGt21nk4QiTSnjARekol6T4l4OsTch7lZAfdZ4x2qe5Lvw', 7);
INSERT INTO Food (name, image, RecommendationId)
VALUES ('Artichoke', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRVqL7K9wjVGKmNF1sVPli3IST4KcdcuTfn50AHonnRxsjFu0XQw', 8);
INSERT INTO Food (name, image, RecommendationId)
VALUES ('Prune', 'http://www.yourdictionary.com/images/definitions/lg/12903.prune.jpg', 9);
INSERT INTO Food (name, image, RecommendationId)
VALUES ('Raspberry', 'https://upload.wikimedia.org/wikipedia/commons/6/69/Raspberries05.jpg', 7);
INSERT INTO Food (name, image, RecommendationId)
VALUES ('Strawberry', 'https://www.naturalfoodseries.com/wp-content/uploads/2017/11/strawberries.jpg', 8);
INSERT INTO Food (name, image, RecommendationId)
VALUES ('Red Apple', 'https://www.vaporfi.com/media/catalog/product/cache/9/thumbnail/600x600/9df78eab33525d08d6e5fb8d27136e95/v/z/vz_eliquid_juicy_red_apple.jpg', 9);
INSERT INTO Food (name, image, RecommendationId)
VALUES ('Granny Smith Apple', 'https://upload.wikimedia.org/wikipedia/commons/d/d7/Granny_smith_and_cross_section.jpg', 7);
INSERT INTO Food (name, image, RecommendationId)
VALUES ('Pecan', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9TjsPCTWF-EECpjNJY0L_K1aV347HFy4ZsvZ8dUApIsVbGEkZgg', 8);
INSERT INTO Food (name, image, RecommendationId)
VALUES ('Cherries', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi9lG5k7es-wnIGqoFOntku9Pex-5wgyX78WQASQaAvQ31GpGm', 9);
INSERT INTO Food (name, image, RecommendationId)
VALUES ('Black Plum', 'https://steemitimages.com/DQmQaXHbrTbM4PrRB6gRGQNs59ieB6fppJs9jbqi3Z7Yucu/jamun.jpg', 7);
INSERT INTO Food (name, image, RecommendationId)
VALUES ('Russet Potato', 'https://images-na.ssl-images-amazon.com/images/I/41SnI3JpZKL._SX355_.jpg', 8);
INSERT INTO Food (name, image, RecommendationId)
VALUES ('Black Beans', 'https://www.kitchentreaty.com/wp-content/uploads/2015/09/supremely-delicious-black-beans-from-scratchsq-660x430.jpg', 9);
INSERT INTO Food (name, image, RecommendationId)
VALUES ('Quinoa', 'https://d3hwhh1jt895es.cloudfront.net/recipes/original/ensalada_de_quinoa_tomate_y_cebolla_roja.jpg', 10);
INSERT INTO Food (name, image, RecommendationId)
VALUES ('Lentil/Seeds', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWmWW6hUQ2BNp6EZfObWlnnRdHeSGX-tWmUtcqTAlSUiud2Y80-Q', 11);
INSERT INTO Food (name, image, RecommendationId)
VALUES ('Whole Grain Cereal', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq8ygEdweIpY_jKUIHB5hcvtfOzzi-nTngrQD81M2BrnySJZB1', 12);
INSERT INTO Food (name, image, RecommendationId)
VALUES ('Green Tea', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq8ygEdweIpY_jKUIHB5hcvtfOzzi-nTngrQD81M2BrnySJZB1', 10);
INSERT INTO Food (name, image, RecommendationId)
VALUES ('Oranges', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcTvVpX0-UN6MFGPyAzjAkZUOKdGZlDKLyAZpUqx2QTjB7SRjFyw', 11);
INSERT INTO Food (name, image, RecommendationId)
VALUES ('Salmon', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1QVqCDPci2Ron6uZdwBiVuwcdmkSNvmpFmyc-Fgm2CQhE1SFw', 12);
INSERT INTO Food (name, image, RecommendationId)
VALUES ('Tuna', 'https://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_900x675/public/maple-mustard-seared-tuna-steaks-ck.jpg?itok=B3inBQ6R', 10);
INSERT INTO Food (name, image, RecommendationId)
VALUES ('Beans', 'http://demandware.edgesuite.net/sits_pod32/dw/image/v2/BBBW_PRD/on/demandware.static/-/Sites-jss-master/default/dw07ab65d9/images/products/vegetables/03286_01_dulcina.jpg?sw=387&cx=302&cy=0&cw=1196&ch=1196', 11);
INSERT INTO Food (name, image, RecommendationId)
VALUES ('Eggs', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR57WAjXsB0pqp6WDZ4h1zDwLjqL2whoiemYecwrp4HAgX0gNvaiw', 12);
INSERT INTO Food (name, image, RecommendationId)
VALUES ('Chia Seeds', 'https://cdn1.sph.harvard.edu/wp-content/uploads/sites/30/2018/03/chia-2119771_1920-1200x821.jpg', 10);
INSERT INTO Food (name, image, RecommendationId)
VALUES ('Yogurt', 'http://a57.foxnews.com/images.foxnews.com/content/fox-news/food-drink/2018/09/19/yogurt-contributing-to-obesity-epidemic-study-claims/_jcr_content/par/featured_image/media-0.img.jpg/931/524/1537381038383.jpg?ve=1&tl=1', 11);
INSERT INTO Food (name, image, RecommendationId)
VALUES ('Nuts', 'https://nuts.com/images/auto/801x534/assets/e897e6ddc2621543.png', 12);
INSERT INTO Food (name, image, RecommendationId)
VALUES ('Pumpkin Seeds', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReKxhbtf7IQlwv2NzOVE9UdX1CtmXmJYRDTTehBTUko9hnikdX', 10);
INSERT INTO Food (name, image, RecommendationId)
VALUES ('Apples', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7wAfxhmvOjaVZKXSTipTnUf4xSCgTSnT_ZTpDgFNEm5_dlwS9', 11);
INSERT INTO Food (name, image, RecommendationId)
VALUES ('Bananas', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9vzciORyMKvBHm6X9lv0vq25JXy05s9EnNR1R0HLeOn0aMMWQ', 12);
INSERT INTO Food (name, image, RecommendationId)
VALUES ('Spinach', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStrcpEYgP_GK-FMZJkJoMNvGb7wwn0e9oOCST7UWJKJeYqpV-Q', 10);
INSERT INTO Food (name, image, RecommendationId)
VALUES ('Blueberries', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDuYiUdAglfAMr_H8cbnpKgc67V5tliHCOlbxePh_Q34RQRhXF', 11);
INSERT INTO Food (name, image, RecommendationId)
VALUES ('Dark Chocolate', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiceSD79oZ1W0ks_lK6nst_fSE7lW9AcmF3umfoH66PucpSbC2', 12);
INSERT INTO Food (name, image, RecommendationId)
VALUES ('Trail Mix', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUyPeeDpz8isTbdPAr1AK3P8fSEERi8pcSI4-BviKxVnyPmn-M', 10);
INSERT INTO Food (name, image, RecommendationId)
VALUES ('Coffee', 'https://images.mentalfloss.com/sites/default/files/styles/mf_image_16x9/public/iStock-157528129.jpg?itok=4c0IDJjH&resize=1100x1100', 11);
INSERT INTO Food (name, image, RecommendationId)
VALUES ('Lean Beef', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5hkL0y_CB5N-jBSRp6C_um2HwlACNoR__hjLMorhlH_Z3H4SffQ', 12); 
INSERT INTO Food (name, image, RecommendationId)
VALUES ('Rice', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt3dhPdegAC0bjgR-UEtvB0afxPKuawMrbCoDDw-MirrcDWqJq', 10);
INSERT INTO Food (name, image, RecommendationId)
VALUES ('Nut Butters', 'https://i2.wp.com/superfoodsrx.com/wp-content/uploads/2016/09/Nut-Butters.png?fit=660%2C372&ssl=1', 11);