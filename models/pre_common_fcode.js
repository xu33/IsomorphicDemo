/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  var seq = sequelize.define('pre_common_fcode', { 
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    code: {
      type: 'CHAR(18)',
      allowNull: false,
      defaultValue: ''
    },
    uid: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    action: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    expire_time: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '0000-00-00 00:00:00'
    },
    create_time: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: 'CURRENT_TIMESTAMP'
    },
    redeem_time: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '0000-00-00 00:00:00'
    },
    create_user: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    type: {
      type: DataTypes.INTEGER(3),
      allowNull: false,
      defaultValue: '0'
    }
  },{tableName:'pre_common_fcode',timestamps:false});

seq.removeAttribute('id');
 return seq;
};