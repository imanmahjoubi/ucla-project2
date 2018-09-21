module.exports = function(sequelize, DataTypes) {
    var Food = sequelize.define('Food', {
        id: {type: DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true},
        name: {type: DataTypes.STRING, allowNull: false}, 
        image: {type: DataTypes.STRING, allowNull: true}
    },
    {
        timestamps: false
    });
    Food.associate = function(models) {
        Food.belongsTo(models.Recommendation, {
            foreignKey: {
                allowNull: false
            }
        });
    };
    return Food;
}