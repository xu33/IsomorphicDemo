/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  var seq = sequelize.define('pre_common_setting', { 
    skey: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    svalue: {
      type: DataTypes.TEXT,
      allowNull: false,
    }
  },{tableName:'pre_common_setting',timestamps:false});

seq.removeAttribute('id');
 return seq;
};