/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  var seq = sequelize.define('pre_forum_replycredit', { 
    tid: {
      type: DataTypes.INTEGER(6),
      allowNull: false,
    },
    extcredits: {
      type: DataTypes.INTEGER(6),
      allowNull: false,
      defaultValue: '0'
    },
    extcreditstype: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    times: {
      type: DataTypes.INTEGER(6),
      allowNull: false,
      defaultValue: '0'
    },
    membertimes: {
      type: DataTypes.INTEGER(6),
      allowNull: false,
      defaultValue: '0'
    },
    random: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    }
  },{tableName:'pre_forum_replycredit',timestamps:false});

seq.removeAttribute('id');
 return seq;
};