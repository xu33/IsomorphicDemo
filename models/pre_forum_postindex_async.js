/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  var seq = sequelize.define('pre_forum_postindex_async', { 
    id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
    },
    pid: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
    },
    tid: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
    },
    uid: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
    },
    last_time: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: 'CURRENT_TIMESTAMP'
    }
  },{tableName:'pre_forum_postindex_async',timestamps:false});

seq.removeAttribute('id');
 return seq;
};