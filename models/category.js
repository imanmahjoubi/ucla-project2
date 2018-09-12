module.exports = function (sequelize, DataTypes) {
    var Category = sequelize.define("Category", {
      id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false},
      value: {type: DataTypes.STRING, allowNull: false}
    },
    {
      timestamps: false
    });
    Category.associate = function(models) {
      Category.hasOne(models.Question, {
        onDelete: 'cascade',
        foreignKey: {
          allowNull: false
        }
      });
      Category.hasOne(models.Recommendation, {
        onDelete: 'cascade',
        foreignKey: {
          allowNull: false
        }
      });
      Category.hasOne(models.Article, {
        onDelete: 'cascade', 
        foreignKey: {
          allowNull: false
        }
      });
    };
    return Category;
  };