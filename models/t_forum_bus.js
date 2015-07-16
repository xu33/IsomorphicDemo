/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  var seq = sequelize.define('t_forum_bus', { 
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    bus: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    brief: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    manager: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    db_host: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    db_port: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    db_user: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    db_pass: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    db_name: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    db_charset: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'utf8'
    },
    auto_update_time: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: 'CURRENT_TIMESTAMP'
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    post_module: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    user_module: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    }
  },{tableName:'t_forum_bus',timestamps:false});

seq.removeAttribute('id');
 return seq;
};