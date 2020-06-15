const Service = require('egg').Service;
class UserService extends Service {
    async find(username) {
        // 假如 我们拿到用户 id 从数据库获取用户详细信息
        const user = await this.app.mysql.get('user', {
            username
        });
        return {
            user
        };
    }
    async register(username, password, pubKey, asymKeyId) {
        const result = await this.app.mysql.insert('user', {
            username,
            password,
            pubKey,
            asymKeyId
        })
        const insertSuccess = result.affectedRows === 1;
        return insertSuccess
    }
    async login(username, password) {
        const user = await this.app.mysql.get('user', {
            username
        });
        if (user && user.password === password) return {
            asymKeyId: user.asymKeyId,
            pubKey: user.pubKey
        }
        else return false
    }
}

module.exports = UserService