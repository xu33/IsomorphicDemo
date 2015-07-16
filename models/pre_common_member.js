/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  var seq = sequelize.define('pre_common_member', { 
    uid: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
    },
    email: {
      type: 'CHAR(40)',
      allowNull: false,
      defaultValue: ''
    },
    username: {
      type: 'CHAR(50)',
      allowNull: false,
    },
    password: {
      type: 'CHAR(32)',
      allowNull: false,
      defaultValue: ''
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    emailstatus: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    avatarstatus: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    videophotostatus: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    adminid: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    groupid: {
      type: DataTypes.INTEGER(6),
      allowNull: false,
      defaultValue: '0'
    },
    groupexpiry: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '0'
    },
    extgroupids: {
      type: 'CHAR(20)',
      allowNull: false,
      defaultValue: ''
    },
    regdate: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '0'
    },
    credits: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '0'
    },
    notifysound: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    timeoffset: {
      type: 'CHAR(4)',
      allowNull: false,
      defaultValue: ''
    },
    newpm: {
      type: DataTypes.INTEGER(6),
      allowNull: false,
      defaultValue: '0'
    },
    newprompt: {
      type: DataTypes.INTEGER(6),
      allowNull: false,
      defaultValue: '0'
    },
    accessmasks: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    allowadmincp: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    onlyacceptfriendpm: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    conisbind: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    },
    qqnum: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },
    realidtype: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: '0'
    },
    realid: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    lastdate: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '0'
    },
    private_data: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: '0'
    },
    private_post: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: '0'
    },
    other: {
      type: 'CHAR(40)',
      allowNull: false,
      defaultValue: ''
    }
  },{tableName:'pre_common_member',timestamps:false});

seq.removeAttribute('id');
 return seq;
};