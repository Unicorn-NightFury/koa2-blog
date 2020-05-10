/**
 * @description 待办模块的数据模型
 * @author Uni
 */

const seq = require('../seq')
const { INTEGER, TEXT } = require('../types')

const List = seq.define('list', {
    userId: {
        type: INTEGER,
        allowNull: false,
        comment: '用户 ID'
    },
    content: {
        type: TEXT,
        allowNull: false,
        comment: '待办内容'
    }
})

module.exports = List
