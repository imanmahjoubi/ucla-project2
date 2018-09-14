module.exports = function(sequelize, DataTypes) {
    var Recommendation = sequelize.define("Recommendation", {
        id: {type: DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true},
        text: {type: DataTypes.TEXT, allowNull: false},
        min_score: {type: DataTypes.FLOAT, allowNull: false},
        max_score: {type: DataTypes.FLOAT, allowNull: false}
    },
    {
        timestamps: false
    });
    Recommendation.associate = function(models) {
        Recommendation.hasMany(models.UserRecommendation, {
            onDelete: 'cascade',
            foreignKey: {
                allowNull: false
            }
        });
        Recommendation.hasMany(models.Article, {
            onDelete: 'cascade',
            foreignKey: {
                allowNull: false
            }
        });
        Recommendation.hasMany(models.Food, {
            foreignKey: {
                allowNull: false
            }
        });
    };
    return Recommendation;
};