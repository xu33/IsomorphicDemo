/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  var seq = sequelize.define('pre_forum_threadmod', { 
    tid: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      defaultValue: '0'
    },
    uid: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      defaultValue: '0'
    },
    username: {
      type: 'CHAR(15)',
      allowNull: false,
      defaultValue: ''
    },
    dateline: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '0'
    },
    expiration: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '0'
    },
    action: {
      type: 'CHAR(5)',
      allowNull: false,
      defaultValue: ''
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    magicid: {
      type: DataTypes.INTEGER(6),
      allowNull: false,
    },
    stamp: {
      type: DataTypes.INTEGER(3),
      allowNull: false,
    },
    reason: {
      type: 'CHAR(40)',
      allowNull: false,
      defaultValue: ''
    }
  },{tableName:'pre_forum_threadmod',timestamps:false});

seq.removeAttribute('id');
 return seq;
};