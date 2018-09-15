module.exports = function(sequelize, DataTypes) {
    var Article = sequelize.define("Article", {
        id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false},
        title: {type: DataTypes.STRING, allowNull: false},
        description: {type: DataTypes.TEXT, allowNull: false},
        image: {type: DataTypes.STRING, allowNull: true},
    },
    {
        timestamps: false
    });
    Article.associate = function(models) {
        Article.belongsTo(models.Recommendation, {
            foreignKey: {
                allowNull: false
            }
        });
        Article.belongsTo(models.Category, {
            foreignKey: {
                allowNull: false
            }
        });
    };
    return Article;
}