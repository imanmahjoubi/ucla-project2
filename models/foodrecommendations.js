module.exports = function(sequelize, DataTypes) {
    var FoodRecommendation = sequelize.define("FoodRecommendation", {
        id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false}
    },
    {
        timestamps: false
    });
    FoodRecommendation.associate = function(models) {
        FoodRecommendation.belongsTo(models.Food, {
            foreignKey: {
                allowNull: false
            }
        });
        FoodRecommendation.belongsTo(models.Recommendation, {
            foreignKey: {
                allowNull: false
            }
        });
    }
    return FoodRecommendation;
}