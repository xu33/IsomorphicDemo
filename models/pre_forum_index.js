/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  var seq = sequelize.define('pre_forum_index', { 
    indexid: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    tid: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    picture: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    displayorder: {
      type: DataTypes.INTEGER(3),
      allowNull: false,
      defaultValue: '0'
    },
    pid: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    }
  },{tableName:'pre_forum_index',timestamps:false});

seq.removeAttribute('id');
 return seq;
};