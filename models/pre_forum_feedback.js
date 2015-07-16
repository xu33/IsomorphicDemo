/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  var seq = sequelize.define('pre_forum_feedback', { 
    id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
    },
    detail: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: ''
    },
    time: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: 'CURRENT_TIMESTAMP'
    }
  },{tableName:'pre_forum_feedback',timestamps:false});

seq.removeAttribute('id');
 return seq;
};