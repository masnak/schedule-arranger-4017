'use strict';
const loader = require('./sequelize-loader');
const Sequelize = loader.Sequelize;

const Availability = loader.database.define('availabilities', {
    candidateId: {
        primaryKey: true,
        allowNull: false
    },
    userId: {
        type: Sequelize.INTEGER,
        primaruKey: true,
        allowNull: false
    },
    availability: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    scheduleId: {
        type: Sequelize.UUID,
        allowNull: false
    }
}, {
    freeseTableName: true,
    timestamps: false,
    indexes: [
        {
            fields:['scheduleId']
        }
    ]
});

module.exports = Availability;