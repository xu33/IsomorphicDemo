/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  var seq = sequelize.define('pre_forum_poststick', { 
    tid: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
    },
    pid: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
    },
    position: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
    },
    dateline: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
    }
  },{tableName:'pre_forum_poststick',timestamps:false});

seq.removeAttribute('id');
 return seq;
};