/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  var seq = sequelize.define('pre_home_notification', { 
    id: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
    },
    uid: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      defaultValue: '0'
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    new: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    authorid: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      defaultValue: '0'
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    note: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    dateline: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '0'
    },
    from_id: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      defaultValue: '0'
    },
    from_idtype: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    from_num: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      defaultValue: '0'
    },
    reason: {
      type: DataTypes.TEXT,
      allowNull: false,
    }
  },{tableName:'pre_home_notification',timestamps:false});

seq.removeAttribute('id');
 return seq;
};