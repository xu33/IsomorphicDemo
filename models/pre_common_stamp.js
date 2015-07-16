/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  var seq = sequelize.define('pre_common_stamp', { 
    id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
    },
    label: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    icon: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    stamp: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.INTEGER(3),
      allowNull: false,
      defaultValue: '1'
    }
  },{tableName:'pre_common_stamp',timestamps:false});

seq.removeAttribute('id');
 return seq;
};