/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  var seq = sequelize.define('pre_common_device', { 
    deviceid: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
    },
    brand: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    device: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    }
  },{tableName:'pre_common_device',timestamps:false});

seq.removeAttribute('id');
 return seq;
};