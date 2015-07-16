/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  var seq = sequelize.define('pre_common_kv', { 
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    data: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    edittime: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '0'
    },
    editby: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: ''
    },
    desc: {
      type: DataTypes.TEXT,
      allowNull: true,
    }
  },{tableName:'pre_common_kv',timestamps:false});

seq.removeAttribute('id');
 return seq;
};