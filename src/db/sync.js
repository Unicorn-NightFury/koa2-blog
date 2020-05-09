/**
 * @description sequelize 同步数据库
 * @author Uni
 */

const seq = require('./seq')

require('./model/index')

// 测试连接
seq.authenticate().then(() => {
    console.log('auth ok')
}).catch(() => {
    console.log('auth err')
})

// 执行同步
seq.sync({ force: true }).then(() => {
    console.log('sync ok')
    process.exit()
})
