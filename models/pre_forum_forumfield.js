/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  var seq = sequelize.define('pre_forum_forumfield', { 
    fid: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      defaultValue: '0'
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    icon: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    redirect: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    attachextensions: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    creditspolicy: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    formulaperm: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    moderators: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    rules: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    threadtypes: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    threadsorts: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    viewperm: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    postperm: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    replyperm: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    getattachperm: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    postattachperm: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    postimageperm: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    spviewperm: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    seotitle: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    keywords: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    seodescription: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    supe_pushsetting: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    modrecommend: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    threadplugin: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    replybg: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    extra: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    jointype: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    gviewperm: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    },
    membernum: {
      type: DataTypes.INTEGER(6),
      allowNull: false,
      defaultValue: '0'
    },
    dateline: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '0'
    },
    lastupdate: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '0'
    },
    activity: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '0'
    },
    founderuid: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      defaultValue: '0'
    },
    foundername: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    banner: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    groupnum: {
      type: DataTypes.INTEGER(6),
      allowNull: false,
      defaultValue: '0'
    },
    commentitem: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    relatedgroup: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    picstyle: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    widthauto: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    noantitheft: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    noforumhidewater: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    noforumrecommend: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    livetid: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      defaultValue: '0'
    },
    price: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      defaultValue: '0'
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    isvisible: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: '1'
    }
  },{tableName:'pre_forum_forumfield',timestamps:false});

seq.removeAttribute('id');
 return seq;
};