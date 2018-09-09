module.exports = function(sequelize, DataTypes) {
    var User_Recommendation = sequelize.define("User_Recommendation", {
        id: {type: DataTypes.INTEGER, primaryKey: true, allowNull: false, autoIncrement: true},
    });
    User_Recommendation.associate = function(models) {
        User_Recommendation.belongsTo(models.User, {
            foreigKey: {
                allowNull: false
            }
        });
        User_Recommendation.belongsTo(models.Recommendation, {
            foreigKey: {
                allowNull: false
            }
        });
    };

    return User_Recommendation
};