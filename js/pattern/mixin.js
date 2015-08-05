/**
 * Created by ddavid on 2015-08-05.
 */

var Car = function(settings){
    this.model = settings.model || 'no model provided';
    this.color = settings.color ||'no model provided';
};

var Mixin = function(){};
Mixin.prototype = {
    driveForward : function() {
        console.log('drive forward');
    },
    driveBackward : function() {
        console.log('drive backward');
    }
}

function augment(recevingClass, givingClass){
    if(arguments[2]){ //  들어오는 변수가 3개이상인경우
        for(var i= 2, len=arguments.length; i<len; i++){
            recevingClass.prototype[arguments[i]] = givingClass.prototype[arguments[i]];

        }

    }else{
        for(var methodName in givingClass.prototype){
            if(!recevingClass.prototype[methodName]){
                recevingClass.prototype[methodName] = givingClass.prototype[methodName];
            }
        }
    }
}

//augment(Car, Mixin);
augment(Car, Mixin, 'driveForward', 'driveBackward');

var vehicle = new Car({model:'mm', color:'blude'});
vehicle.driveForward();
vehicle.driveBackward();

