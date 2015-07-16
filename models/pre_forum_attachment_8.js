/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  var seq = sequelize.define('pre_forum_attachment_8', { 
    aid: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
    },
    tid: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      defaultValue: '0'
    },
    pid: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '0'
    },
    uid: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      defaultValue: '0'
    },
    dateline: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '0'
    },
    filename: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    filesize: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '0'
    },
    attachment: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    remote: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    readperm: {
      type: DataTypes.INTEGER(3),
      allowNull: false,
      defaultValue: '0'
    },
    price: {
      type: DataTypes.INTEGER(6),
      allowNull: false,
      defaultValue: '0'
    },
    isimage: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    width: {
      type: DataTypes.INTEGER(6),
      allowNull: false,
      defaultValue: '0'
    },
    thumb: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    },
    picid: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      defaultValue: '0'
    }
  },{tableName:'pre_forum_attachment_8',timestamps:false});

seq.removeAttribute('id');
 return seq;
};