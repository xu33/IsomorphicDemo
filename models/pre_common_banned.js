/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  var seq = sequelize.define('pre_common_banned', { 
    id: {
      type: DataTypes.INTEGER(6),
      allowNull: false,
    },
    ip1: {
      type: DataTypes.INTEGER(3),
      allowNull: false,
      defaultValue: '0'
    },
    ip2: {
      type: DataTypes.INTEGER(3),
      allowNull: false,
      defaultValue: '0'
    },
    ip3: {
      type: DataTypes.INTEGER(3),
      allowNull: false,
      defaultValue: '0'
    },
    ip4: {
      type: DataTypes.INTEGER(3),
      allowNull: false,
      defaultValue: '0'
    },
    admin: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    dateline: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '0'
    },
    expiration: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '0'
    }
  },{tableName:'pre_common_banned',timestamps:false});

seq.removeAttribute('id');
 return seq;
};