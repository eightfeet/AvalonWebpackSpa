define('ranking', ['avalon'], function (avalon) {
    var vm = avalon.define({
        $id: "ranking",
        name:"ranking"
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