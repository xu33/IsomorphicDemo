/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  var seq = sequelize.define('pre_forum_report', { 
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    uid: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    dateline: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '0'
    },
    reportuid: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '0'
    },
    reportname: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    tid: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '0'
    },
    pid: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '0'
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    handler: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    handletime: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '0'
    },
    handleresult: {
      type: DataTypes.TEXT,
      allowNull: true,
    }
  },{tableName:'pre_forum_report',timestamps:false});

seq.removeAttribute('id');
 return seq;
};