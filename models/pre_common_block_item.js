/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  var seq = sequelize.define('pre_common_block_item', { 
    itemid: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
    },
    bid: {
      type: DataTypes.INTEGER(8),
      allowNull: true,
      defaultValue: '0'
    },
    id: {
      type: DataTypes.INTEGER(10),
      allowNull: true,
      defaultValue: '0'
    },
    idtype: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    itemtype: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    url: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    pic: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    picflag: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: '0'
    },
    makethumb: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    thumbpath: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    summary: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    showstyle: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    related: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    fields: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    displayorder: {
      type: DataTypes.INTEGER(6),
      allowNull: true,
    },
    startdate: {
      type: DataTypes.INTEGER(10),
      allowNull: true,
      defaultValue: '0'
    },
    enddate: {
      type: DataTypes.INTEGER(10),
      allowNull: true,
      defaultValue: '0'
    }
  },{tableName:'pre_common_block_item',timestamps:false});

seq.removeAttribute('id');
 return seq;
};