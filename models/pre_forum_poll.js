/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  var seq = sequelize.define('pre_forum_poll', { 
    tid: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      defaultValue: '0'
    },
    overt: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    multiple: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    visible: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    maxchoices: {
      type: DataTypes.INTEGER(3),
      allowNull: false,
      defaultValue: '0'
    },
    isimage: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    expiration: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '0'
    },
    pollpreview: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    voters: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      defaultValue: '0'
    }
  },{tableName:'pre_forum_poll',timestamps:false});

seq.removeAttribute('id');
 return seq;
};