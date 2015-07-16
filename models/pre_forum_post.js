/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  var seq = sequelize.define('pre_forum_post', { 
    pid: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
    },
    fid: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      defaultValue: '0'
    },
    tid: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      defaultValue: '0'
    },
    first: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    authorid: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      defaultValue: '0'
    },
    subject: {
      type: 'VARBINARY(320)',
      allowNull: true,
    },
    dateline: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '0'
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    useip: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    invisible: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    anonymous: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    usesig: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    htmlon: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    bbcodeoff: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    smileyoff: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    parseurloff: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    attachment: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    rate: {
      type: DataTypes.INTEGER(6),
      allowNull: false,
      defaultValue: '0'
    },
    ratetimes: {
      type: DataTypes.INTEGER(3),
      allowNull: false,
      defaultValue: '0'
    },
    status: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '0'
    },
    tags: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '0'
    },
    comment: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    replycredit: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '0'
    },
    position: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
    },
    ua: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    titleid: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    guid: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    qua: {
      type: DataTypes.STRING,
      allowNull: true,
    }
  },{tableName:'pre_forum_post',timestamps:false});

seq.removeAttribute('id');
 return seq;
};