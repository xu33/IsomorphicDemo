/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  var seq = sequelize.define('pre_forum_forumrecommend', { 
    cid: {
      type: DataTypes.INTEGER(8),
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
    typeid: {
      type: DataTypes.INTEGER(6),
      allowNull: false,
    },
    url: {
      type: 'CHAR(255)',
      allowNull: false,
    },
    author: {
      type: 'CHAR(15)',
      allowNull: false,
    },
    authorid: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
    },
    expiration: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '0'
    },
    position: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    dateline: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
    },
    subject: {
      type: 'CHAR(255)',
      allowNull: false,
    }
  },{tableName:'pre_forum_forumrecommend',timestamps:false});

seq.removeAttribute('id');
 return seq;
};