'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
    const {
        router,
        controller
    } = app;
    router.get('/', controller.home.index);
    router.post('/register', controller.home.register)
    router.post('/test', controller.home.test)
    router.post('/login', controller.home.login)
};