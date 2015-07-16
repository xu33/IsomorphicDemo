/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  var seq = sequelize.define('pre_common_replace', { 
    word: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    link: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    edittime: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '0'
    },
    editby: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: ''
    }
  },{tableName:'pre_common_replace',timestamps:false});

seq.removeAttribute('id');
 return seq;
};