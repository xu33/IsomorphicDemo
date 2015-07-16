/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  var seq = sequelize.define('pre_forum_medal', { 
    medalid: {
      type: DataTypes.INTEGER(6),
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    available: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    type: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    displayorder: {
      type: DataTypes.INTEGER(3),
      allowNull: false,
      defaultValue: '0'
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    expiration: {
      type: DataTypes.INTEGER(6),
      allowNull: false,
      defaultValue: '0'
    },
    permission: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    credit: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    },
    price: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      defaultValue: '0'
    }
  },{tableName:'pre_forum_medal',timestamps:false});

seq.removeAttribute('id');
 return seq;
};