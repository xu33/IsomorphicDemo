/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  var seq = sequelize.define('pre_forum_threadclass', { 
    typeid: {
      type: DataTypes.INTEGER(8),
      allowNull: true,
    },
    fid: {
      type: DataTypes.INTEGER(8),
      allowNull: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    displayorder: {
      type: DataTypes.INTEGER(9),
      allowNull: true,
    },
    icon: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    moderators: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: '0'
    }
  },{tableName:'pre_forum_threadclass',timestamps:false});

seq.removeAttribute('id');
 return seq;
};