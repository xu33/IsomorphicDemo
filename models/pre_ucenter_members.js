/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  var seq = sequelize.define('pre_ucenter_members', { 
    uid: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
    },
    username: {
      type: 'CHAR(15)',
      allowNull: false,
      defaultValue: ''
    },
    password: {
      type: 'CHAR(32)',
      allowNull: false,
      defaultValue: ''
    },
    email: {
      type: 'CHAR(32)',
      allowNull: false,
      defaultValue: ''
    },
    myid: {
      type: 'CHAR(30)',
      allowNull: false,
      defaultValue: ''
    },
    myidkey: {
      type: 'CHAR(16)',
      allowNull: false,
      defaultValue: ''
    },
    regip: {
      type: 'CHAR(15)',
      allowNull: false,
      defaultValue: ''
    },
    regdate: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '0'
    },
    lastloginip: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '0'
    },
    lastlogintime: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '0'
    },
    salt: {
      type: 'CHAR(6)',
      allowNull: false,
    },
    secques: {
      type: 'CHAR(8)',
      allowNull: false,
      defaultValue: ''
    }
  },{tableName:'pre_ucenter_members',timestamps:false});

seq.removeAttribute('id');
 return seq;
};