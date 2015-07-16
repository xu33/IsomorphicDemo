/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  var seq = sequelize.define('pre_common_member_icon', { 
    iconid: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
    },
    uid: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
    },
    contenttype: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: 'MEDIUMBLOB',
      allowNull: false,
    },
    dateline: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '0'
    },
    url: {
      type: DataTypes.STRING,
      allowNull: true,
    }
  },{tableName:'pre_common_member_icon',timestamps:false});

seq.removeAttribute('id');
 return seq;
};