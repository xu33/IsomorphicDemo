/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  var seq = sequelize.define('pre_forum_forumforbidden', { 
    cid: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
    },
    tid: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      defaultValue: '0'
    }
  },{tableName:'pre_forum_forumforbidden',timestamps:false});

seq.removeAttribute('id');
 return seq;
};