/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
    /**
     * built-in config
     * @type {Egg.EggAppConfig}
     **/
    const config = exports = {
        mysql: {
            // 单数据库信息配置
            client: {
                // host
                host: '47.100.192.19',
                // 端口号
                port: '3306',
                // 用户名
                user: 'root',
                // 密码
                password: '745213',
                // 数据库名
                database: 'chainchat',
            },
            // 是否加载到 app 上，默认开启
            app: true,
            // 是否加载到 agent 上，默认关闭
            agent: false,
        },
        security: {
            csrf: {
                enable: false
            }
        },
        cors: {
            origin: '*',
            allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
        }
    };

    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + '_1591925006438_7372';

    // add your middleware config here
    config.middleware = [];

    // add your user config here
    const userConfig = {
        // myAppName: 'egg',
    };

    return {
        ...config,
        ...userConfig,
    };
};