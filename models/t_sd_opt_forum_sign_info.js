/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  var seq = sequelize.define('t_sd_opt_forum_sign_info', { 
    ip: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    access_time: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    line: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    action: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    uid: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    qq: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    timecost: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    ds: {
      type: DataTypes.INTEGER(10),
      allowNull: true,
    },
    status: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '0'
    }
  },{tableName:'t_sd_opt_forum_sign_info',timestamps:false});

seq.removeAttribute('id');
 return seq;
};