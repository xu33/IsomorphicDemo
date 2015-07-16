/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  var seq = sequelize.define('pre_forum_threadmod_new', { 
    tid: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      defaultValue: '0'
    },
    pid: {
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
    adminid: {
      type: DataTypes.INTEGER(3),
      allowNull: false,
    },
    dateline: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '0'
    },
    action: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    param: {
      type: DataTypes.INTEGER(3),
      allowNull: false,
    },
    reason: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    }
  },{tableName:'pre_forum_threadmod_new',timestamps:false});

seq.removeAttribute('id');
 return seq;
};