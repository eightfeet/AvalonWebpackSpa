define('rule', ['avalon'], function (avalon) {
    var vm = avalon.define({
        $id: "rule",
        name:"rule",
        backtap:function(){
            //vm.name="ssssss";
            console.log(vm.name);
            window.history.back();
        }
    });
    console.log();
    return avalon.controller(function($ctrl) {
        $ctrl.$vmodels = [vm];
        $ctrl.$onEnter = function() {
            console.log('进入页面！');
        };
        $ctrl.$onBeforeUnload = function() {
            console.log('页面卸载！');
        };
        $ctrl.$onRendered = function() {
            console.log('页面渲染完成！');
        };
    })
});


/*var avalon = require("avalon")
module.exports = {
    controller: avalon.controller(function($ctrl) {
        var vm = avalon.define({
            $id: "a",
            p: [],
            name: "111",
            atap: function() {
                //vm.name="ssssss";
                avalon.log(vm.name);
            }
        });

        $ctrl.$onEnter = function() {
            vm.name = "gggg"
        };
        $ctrl.$onBeforeUnload = function() {
            console.log('onBeforeUnload');
        };
        $ctrl.$onRendered = function() {
            console.log('onRendered');
        };

    })
};*/
