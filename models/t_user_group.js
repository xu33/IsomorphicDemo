/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  var seq = sequelize.define('t_user_group', { 
    uid: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    groupid: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    }
  },{tableName:'t_user_group',timestamps:false});

seq.removeAttribute('id');
 return seq;
};