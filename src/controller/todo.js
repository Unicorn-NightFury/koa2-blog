const { SuccessModel, ErrorModel } = require('../model/ResModel')
const xss = require('xss')
const { createList } = require('../services/todo')

async function create({ userId, content }) {
    try {
        const list = await createList({
            userId,
            content
        })
        return new SuccessModel(list)
    } catch (ex) {
        console.error(ex.message, ex.stack)
        return new ErrorModel()
    }
}

module.exports = {
    create
}