module.exports = function(sequelize, DataTypes) {
    var Question = sequelize.define("Question", {
        id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false},
        text: {type: DataTypes.TEXT, allowNull: false},
    },
    {
        timestamps: false
    });
    Question.associate = function(models) {
        Question.belongsTo(models.Category, {
            foreignKey: {
                allowNull: false
            }
        });
    }
    return Question;
};