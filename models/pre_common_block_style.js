/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  var seq = sequelize.define('pre_common_block_style', { 
    styleid: {
      type: DataTypes.INTEGER(6),
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
    template: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    hash: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    getpic: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: '0'
    },
    getsummary: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: '0'
    },
    makethumb: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: '0'
    },
    settarget: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: '0'
    },
    fields: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    moreurl: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: '0'
    }
  },{tableName:'pre_common_block_style',timestamps:false});

seq.removeAttribute('id');
 return seq;
};