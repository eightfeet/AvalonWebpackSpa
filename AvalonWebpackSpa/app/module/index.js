require('mmRouter');
require('appless');

require('domReady')(function() {

    avalon.config({
        debug: false
    });

    var vm = avalon.define({
        $id: 'eggs'
    });

    avalon.state("ranking", {
        controller: "eggs",
        url: "/ranking",
        views: {
            "": {
                //配置模块模板和控制器
                templateProvider: function() {
                    return new Promise(function(rs) {
                        require.ensure([], function(tt) {
                            rs(require("text!./ranking/ranking.html"))
                        })
                    })
                },
                controllerProvider: function() {
                    return new Promise(function(rs) {
                        require.ensure([], function() {
                            rs(require("./ranking/ranking.js"))
                        })
                    })
                }
            }
        }
    }).state("eggshit", {
        controller: "eggshit",
        url: "/eggshit",
        views: {
            "": {
                //配置模块模板和控制器
                templateProvider: function() {
                    return new Promise(function(rs) {
                        require.ensure([], function(tt) {
                            rs(require("text!./eggshit/eggshit.html"))
                        })
                    })
                },
                controllerProvider: function() {
                    return new Promise(function(rs) {
                        require.ensure([], function() {
                            rs(require("./eggshit/eggshit.js"))
                        })
                    })
                }
            }
        }
    }).state("rule", {
        controller: "eggs",
        url: "/rule",
        views: {
            "": {
                //配置模块模板和控制器
                templateProvider: function() {
                    return new Promise(function(rs) {
                        require.ensure([], function(tt) {
                            rs(require("text!./rule/rule.html"))
                        })
                    })
                },
                controllerProvider: function() {
                    return new Promise(function(rs) {
                        require.ensure([], function() {
                            rs(require("./rule/rule.js"))
                        })
                    })
                }
            }
        }
    }).state("record", {
        controller: "eggs",
        url: "/record",
        views: {
            "": {
                //配置模块模板和控制器
                templateProvider: function() {
                    return new Promise(function(rs) {
                        require.ensure([], function(tt) {
                            rs(require("text!./record/record.html"))
                        })
                    })
                },
                controllerProvider: function() {
                    return new Promise(function(rs) {
                        require.ensure([], function() {
                            rs(require("./record/record.js"))
                        })
                    })
                }
            }
        }
    }).state("exchange", {
        controller: "eggs",
        url: "/exchange",
        views: {
            "": {
                //配置模块模板和控制器
                templateProvider: function() {
                    return new Promise(function(rs) {
                        require.ensure([], function(tt) {
                            rs(require("text!./exchange/exchange.html"))
                        })
                    })
                },
                controllerProvider: function() {
                    return new Promise(function(rs) {
                        require.ensure([], function() {
                            rs(require("./exchange/exchange.js"))
                        })
                    })
                }
            }
        }
    });

    //avalon.state结束



    avalon.history.start();
    avalon.scan()
});
