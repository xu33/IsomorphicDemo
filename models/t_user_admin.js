/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  var seq = sequelize.define('t_user_admin', { 
    uid: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    adminid: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    }
  },{tableName:'t_user_admin',timestamps:false});

seq.removeAttribute('id');
 return seq;
};