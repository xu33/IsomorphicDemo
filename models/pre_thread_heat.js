/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  var seq = sequelize.define('pre_thread_heat', { 
    htid: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
    },
    uid: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      defaultValue: '0'
    },
    id: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      defaultValue: '0'
    },
    idtype: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    dateline: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '0'
    }
  },{tableName:'pre_thread_heat',timestamps:false});

seq.removeAttribute('id');
 return seq;
};