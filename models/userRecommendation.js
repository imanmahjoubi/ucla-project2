module.exports = function(sequelize, DataTypes) {
    var UserRecommendation = sequelize.define("UserRecommendation", {
        id: {type: DataTypes.INTEGER, primaryKey: true, allowNull: false, autoIncrement: true},
    },
    {
        timestamps: false
    });
    UserRecommendation.associate = function(models) {
        UserRecommendation.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
        UserRecommendation.belongsTo(models.Recommendation, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return UserRecommendation;
};