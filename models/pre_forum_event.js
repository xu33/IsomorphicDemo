/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  var seq = sequelize.define('pre_forum_event', { 
    id: {
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
    }
  },{tableName:'pre_forum_event',timestamps:false});

seq.removeAttribute('id');
 return seq;
};