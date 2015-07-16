/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  var seq = sequelize.define('pre_forum_threadext', { 
    column_name: {
      type: 'CHAR(8)',
      allowNull: false,
      defaultValue: ''
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    type: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: '0'
    },
    fids: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    setting: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    displayorder: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: '0'
    },
    hide: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: '0'
    }
  },{tableName:'pre_forum_threadext',timestamps:false});

seq.removeAttribute('id');
 return seq;
};