/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  var seq = sequelize.define('pre_forum_post_tableid', { 
    pid: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
    }
  },{tableName:'pre_forum_post_tableid',timestamps:false});

seq.removeAttribute('id');
 return seq;
};