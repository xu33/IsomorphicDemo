/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  var seq = sequelize.define('pre_common_credit_log', { 
    logid: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
    },
    uid: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      defaultValue: '0'
    },
    operation: {
      type: 'CHAR(3)',
      allowNull: false,
      defaultValue: ''
    },
    relatedid: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
    },
    dateline: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
    },
    extcredits1: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
    },
    extcredits2: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
    },
    extcredits3: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
    },
    extcredits4: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
    },
    extcredits5: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
    },
    extcredits6: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
    },
    extcredits7: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
    },
    extcredits8: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
    }
  },{tableName:'pre_common_credit_log',timestamps:false});

seq.removeAttribute('id');
 return seq;
};