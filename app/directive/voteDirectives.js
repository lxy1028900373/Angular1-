/**
 * Created by lxy on 2017/11/28.
 */
angular.module('voteApp').directive('valPlayerNum',function(){
  return {
    require: 'ngModel',
    link:function(scope,element,attr,mCtrl){
      function valPLayerNum(value) {
        if(/^([1-9]\d)$/.test(value)){
          // 通过$setValidity()函数设置表单的合法性
          mCtrl.$setValidity('playerNum',true);
        }else{
          mCtrl.$setValidity('playerNum',false);
        }
        return value;
      }
      // $parsers数组中的函数会以流水线的形式被逐个调用。第一个$parse被调用后，执行结果会传递给第二个$parse，以此类推
      mCtrl.$parsers.push(valPLayerNum);
    }
  }
});