/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  var seq = sequelize.define('pre_special_appointment2', { 
    id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
    },
    qq: {
      type: 'CHAR(40)',
      allowNull: false,
      defaultValue: ''
    },
    email: {
      type: 'CHAR(40)',
      allowNull: false,
      defaultValue: ''
    },
    phone: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '0'
    },
    uid: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '0'
    },
    vip: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '0'
    },
    level: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '0'
    },
    time: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '0'
    },
    other: {
      type: 'CHAR(40)',
      allowNull: false,
      defaultValue: ''
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    }
  },{tableName:'pre_special_appointment2',timestamps:false});

seq.removeAttribute('id');
 return seq;
};