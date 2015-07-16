/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  var seq = sequelize.define('pre_forum_attachment_new', { 
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
    downloads: {
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
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER(6),
      allowNull: false,
      defaultValue: '0'
    },
    picid: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      defaultValue: '0'
    },
    tempurl: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    cdnurl: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    image: {
      type: DataTypes.INTEGER(2),
      allowNull: true,
      defaultValue: '0'
    },
    height: {
      type: DataTypes.INTEGER(10),
      allowNull: true,
      defaultValue: '0'
    },
    width: {
      type: DataTypes.INTEGER(10),
      allowNull: true,
      defaultValue: '0'
    },
    cfsurl: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    filetype: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    readperm: {
      type: DataTypes.INTEGER(3),
      allowNull: true,
    }
  },{tableName:'pre_forum_attachment_new',timestamps:false});

seq.removeAttribute('id');
 return seq;
};