'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
    async index() {
        const {
            ctx
        } = this;
        ctx.body = 'hi, egg';
    }
    async test() {
        this.ctx.body = this.ctx.request.body;
    }
    async register() {
        const {
            ctx
        } = this
        const body = ctx.request.body
        const {
            username,
            password,
            pubKey,
            asymKeyId
        } = body
        const res1 = await ctx.service.user.find(username)
        if (res1.user) {
            ctx.status = 200
            ctx.body = {
                success: false,
                message: '这个用户名已经被注册了'
            }
        } else {
            if(!pubKey) ctx.body = {
                success: false,
                message: '缺少pubKey'
            }
            const res2 = await ctx.service.user.register(username, password, pubKey, asymKeyId)
            if (res2) {
                ctx.body = {
                    success: true,
                    message: '注册成功'
                }
            } else {
                ctx.body = {
                    success: false,
                    message: '注册失败'
                }
            }
        }
    }
    async login() {
        const {
            ctx
        } = this
        const body = ctx.request.body
        const {
            username,
            password
        } = body
        const res = await ctx.service.user.login(username, password)
        if (!res) {
            ctx.body = {
                success: false,
                message: '用户名或密码不正确'
            }
        } else {
            ctx.body = {
                success: true,
                message: res
            }
        }
    }
}

module.exports = HomeController;