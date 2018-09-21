module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define('User', {
        id: {type: DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true},
        username: {type: DataTypes.STRING, allowNull: false, unique: true},
        password: {type: DataTypes.STRING, allowNull: false},
        first_name: {type: DataTypes.STRING, allowNull: true},
        last_name: {type: DataTypes.STRING, allowNull: true},
        age: {type: DataTypes.TINYINT, allowNull: true},
        gender: {
            type: DataTypes.CHAR, 
            allowNull: true,
            validate: {
                max: 1,
                min: 1,
                isIn: [['m', 'f']]
            }
        },
        height: {type: DataTypes.FLOAT, allowNull: true},
        weight: {type: DataTypes.FLOAT, allowNull: true},
        body_fat: {type: DataTypes.FLOAT, allowNull: true},
        smoker: {type: DataTypes.BOOLEAN, allowNull: true},
        workout_hours: {type: DataTypes.FLOAT, allowNull: true},
        diet: {type: DataTypes.BOOLEAN, allowNull: true},
        sleep: {type: DataTypes.FLOAT, allowNull: true},
        digestion: {type: DataTypes.BOOLEAN, allowNull: true},
        num_drinks: {type: DataTypes.INTEGER, allowNull: true},
        work_hours: {type: DataTypes.FLOAT, allowNull: true},
        low_energy: {type: DataTypes.BOOLEAN, allowNull: true},
        stress_level: {type: DataTypes.TINYINT, allowNull: true},
        score_diet: {type: DataTypes.FLOAT, allowNull: true},
        score_habit: {type: DataTypes.FLOAT, allowNull: true},
        score_energy: {type: DataTypes.FLOAT, allowNull: true}
    },
    {
        timestamps: false
    });

    User.authenticate = function(username, password, done) {
        console.log('hi from authenticate');
        console.log(username, password);
    
        User.findOne({ where: {username: username} }).then(function(user) {
          if (!user) { return done(null, false); }
          if (user.password !== password) { return done(null, false); }
          console.log('we found a user, ', user);
          return done(null, user);
        }).catch(function(err) {
          return done(err);
        });
      };

    User.serializeUser = function(user, done) {
        console.log('hi from serializeUser');
        done(null, user.id);
    };
    
    User.deserializeUser = function(id, done) {
        console.log('hi from deserializeUser');
        User.findOne({ where: {id: id} }).then(function(user){
          console.log('found user in deserializeUser');
          done(null, user);
        }).catch(function(err) {
          done(err);
        });
      };
    
    

    User.associate = function(models) {
        User.hasMany(models.UserRecommendation, {
            onDelete: 'cascade',
            foreignKey: {
                allowNull: false
            }
        });
    };
    return User;
};