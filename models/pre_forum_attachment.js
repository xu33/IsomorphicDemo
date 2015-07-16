/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  var seq = sequelize.define('pre_forum_attachment', { 
    aid: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
    },
    tid: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      defaultValue: '0'
    },
    pid: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '0'
    },
    uid: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      defaultValue: '0'
    },
    tableid: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    },
    downloads: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      defaultValue: '0'
    }
  },{tableName:'pre_forum_attachment',timestamps:false});

seq.removeAttribute('id');
 return seq;
};