'use strict';
module.exports = (sequelize, DataTypes) => {
  const Activity = sequelize.define('Activity', {
    activityName: DataTypes.STRING,
    date: DataTypes.DATEONLY,
    startTime: DataTypes.DATE,
    endTime: DataTypes.DATE,
    userId: DataTypes.INTEGER
  }, {});
  Activity.associate = function(models) {
    // associations can be defined here
    Activity.belongsTo(models.User,{foreignKey: 'userId'});
    models.User.hasOne(Activity,{foreignKey: 'userId'});


  };
  return Activity;
};