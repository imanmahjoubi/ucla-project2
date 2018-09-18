module.exports = function(sequelize, DataTypes){
    var Contact = sequelize.define('Contact',{
        firstname : {type:DataTypes.STRING, allowNull:false},
        lastname:{type:DataTypes.STRING,aloowNull:false},
        email:{type:DataTypes.STRING, aloowNull:false},
        message:{type:DataTypes.STRING}
    });
    return Contact;
 }