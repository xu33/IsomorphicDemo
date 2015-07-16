/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  var seq = sequelize.define('pre_common_usergroup', { 
    groupid: {
      type: DataTypes.INTEGER(6),
      allowNull: false,
    },
    grouptitle: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    credit: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
    },
    access: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '1'
    },
    read: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '1'
    },
    thread: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '1'
    },
    reply: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '1'
    },
    search: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '1'
    },
    poll: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '1'
    },
    vote: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '1'
    },
    reward: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '1'
    },
    attach: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '0'
    },
    download: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '1'
    },
    picture: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '1'
    },
    activity: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '1'
    },
    test: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '1'
    },
    radminid: {
      type: DataTypes.INTEGER(3),
      allowNull: false,
      defaultValue: '0'
    },
    type: {
      type: DataTypes.ENUM('SYSTEM','SPECIAL','MEMBER'),
      allowNull: false,
      defaultValue: 'member'
    }
  },{tableName:'pre_common_usergroup',timestamps:false});

seq.removeAttribute('id');
 return seq;
};