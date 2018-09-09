module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define('User', {
        id: {type: DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true},
        username: {type: DataTypes.STRING, allowNull: false},
        first_name: {type: DataTypes.STRING, allowNull: false},
        last_name: {type: DataTypes.STRING, allowNull: false},
        age: {type: DataTypes.TINYINT, allowNull: false},
        gender: {
            type: DataTypes.CHAR, 
            allowNull: false,
            validate: {
                max: 1,
                min: 1,
                isIn: [['m', 'f']]
            }
        },
        height: {type: DataTypes.FLOAT, allowNull: false},
        weight: {type: DataTypes.FLOAT, allowNull: false},
        body_fat: {type: DataTypes.FLOAT, allowNull: false},
        smoker: {type: DataTypes.BOOLEAN, allowNull: false},
        workout_hours: {type: DataTypes.FLOAT, allowNull: false},
        diet: {type: DataTypes.BOOLEAN, allowNull: false},
        work_hours: {type: DataTypes.FLOAT, allowNull: false},
        stress_level: {type: DataTypes.TINYINT, allowNull: false},
        score_diet: {type: DataTypes.FLOAT, allowNull: false},
        score_habit: {type: DataTypes.FLOAT, allowNull: false},
        score_sleep: {type: DataTypes.FLOAT, allowNull: false}
    });
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