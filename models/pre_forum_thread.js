/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  var seq = sequelize.define('pre_forum_thread', { 
    tid: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
    },
    fid: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      defaultValue: '0'
    },
    posttableid: {
      type: DataTypes.INTEGER(6),
      allowNull: false,
      defaultValue: '0'
    },
    typeid: {
      type: DataTypes.INTEGER(6),
      allowNull: false,
      defaultValue: '0'
    },
    sortid: {
      type: DataTypes.INTEGER(6),
      allowNull: false,
      defaultValue: '0'
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
    author: {
      type: 'CHAR(50)',
      allowNull: false,
    },
    authorid: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      defaultValue: '0'
    },
    subject: {
      type: 'CHAR(80)',
      allowNull: false,
      defaultValue: ''
    },
    dateline: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '0'
    },
    lastpost: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '0'
    },
    lastposter: {
      type: 'CHAR(50)',
      allowNull: false,
    },
    views: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '0'
    },
    replies: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      defaultValue: '0'
    },
    displayorder: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    highlight: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    digest: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    rate: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    special: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    attachment: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    moderated: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    closed: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      defaultValue: '0'
    },
    stickreply: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    },
    recommends: {
      type: DataTypes.INTEGER(6),
      allowNull: false,
      defaultValue: '0'
    },
    recommend_add: {
      type: DataTypes.INTEGER(6),
      allowNull: false,
      defaultValue: '0'
    },
    recommend_sub: {
      type: DataTypes.INTEGER(6),
      allowNull: false,
      defaultValue: '0'
    },
    heats: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '0'
    },
    status: {
      type: DataTypes.INTEGER(6),
      allowNull: false,
      defaultValue: '0'
    },
    isgroup: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    favtimes: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      defaultValue: '0'
    },
    sharetimes: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      defaultValue: '0'
    },
    stamp: {
      type: DataTypes.INTEGER(3),
      allowNull: false,
      defaultValue: '-1'
    },
    icon: {
      type: DataTypes.INTEGER(3),
      allowNull: false,
      defaultValue: '-1'
    },
    pushedaid: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      defaultValue: '0'
    },
    cover: {
      type: DataTypes.INTEGER(6),
      allowNull: false,
      defaultValue: '0'
    },
    replycredit: {
      type: DataTypes.INTEGER(6),
      allowNull: false,
      defaultValue: '0'
    },
    relatebytag: {
      type: 'CHAR(255)',
      allowNull: false,
      defaultValue: '0'
    },
    maxposition: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      defaultValue: '0'
    },
    titleid: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    lastposterid: {
      type: DataTypes.INTEGER(8),
      allowNull: true,
    },
    adminreply: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    guid: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    qua: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    ext1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    ext2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    ext3: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    ext4: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    ext5: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    ext6: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    ext7: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    ext8: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    }
  },{tableName:'pre_forum_thread',timestamps:false});

seq.removeAttribute('id');
 return seq;
};