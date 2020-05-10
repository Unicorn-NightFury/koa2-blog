/**
 * @description 待办 services 层
 * @author Uni
 */

const { List } = require('../db/model/index')

async function createList({userId, content}) {
    const result = await List.create({
        userId,
        content
    })
    return result.dataValues
}

module.exports = {
    createList
}

