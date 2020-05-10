/**
 * @description 待办清单的开发
 * @author Uni
 */

const router = require('koa-router')()
router.prefix('/api/todo')

const { create } = require('../../controller/todo')

// 创造待办的路由
router.post('/create', loginCheck, async (ctx, next) => {
    const { content } = ctx.request.body
    const { id: userId } = ctx.session.userInfo
    ctx.body = await create({ userId, content })
})