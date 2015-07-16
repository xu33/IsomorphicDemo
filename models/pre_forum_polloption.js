/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  var seq = sequelize.define('pre_forum_polloption', { 
    polloptionid: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
    },
    tid: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      defaultValue: '0'
    },
    votes: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      defaultValue: '0'
    },
    displayorder: {
      type: DataTypes.INTEGER(3),
      allowNull: false,
      defaultValue: '0'
    },
    polloption: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    voterids: {
      type: DataTypes.TEXT,
      allowNull: false,
    }
  },{tableName:'pre_forum_polloption',timestamps:false});

seq.removeAttribute('id');
 return seq;
};