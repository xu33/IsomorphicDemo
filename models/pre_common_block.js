/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  var seq = sequelize.define('pre_common_block', { 
    bid: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
    },
    blockclass: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    title: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    classname: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    summary: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    uid: {
      type: DataTypes.INTEGER(8),
      allowNull: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    styleid: {
      type: DataTypes.INTEGER(6),
      allowNull: true,
    },
    blockstyle: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    picwidth: {
      type: DataTypes.INTEGER(6),
      allowNull: true,
      defaultValue: '0'
    },
    picheight: {
      type: DataTypes.INTEGER(6),
      allowNull: true,
      defaultValue: '0'
    },
    target: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    dateformat: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    dateuformat: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: '0'
    },
    script: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    param: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    shownum: {
      type: DataTypes.INTEGER(6),
      allowNull: true,
      defaultValue: '0'
    },
    cachetime: {
      type: DataTypes.INTEGER(10),
      allowNull: true,
      defaultValue: '0'
    },
    cachetimerange: {
      type: 'CHAR(5)',
      allowNull: true,
    },
    punctualupdate: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: '0'
    },
    hidedisplay: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: '0'
    },
    dateline: {
      type: DataTypes.INTEGER(10),
      allowNull: true,
      defaultValue: '0'
    },
    notinherited: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: '0'
    },
    isblank: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: '0'
    },
    blocktype: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: '0'
    }
  },{tableName:'pre_common_block',timestamps:false});

seq.removeAttribute('id');
 return seq;
};