/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  var seq = sequelize.define('pre_home_favorite', { 
    favid: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
    },
    uid: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      defaultValue: '0'
    },
    id: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      defaultValue: '0'
    },
    idtype: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    spaceuid: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      defaultValue: '0'
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    dateline: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '0'
    }
  },{tableName:'pre_home_favorite',timestamps:false});

seq.removeAttribute('id');
 return seq;
};