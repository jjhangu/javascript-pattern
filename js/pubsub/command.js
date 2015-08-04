/**
 * Created by ddavid on 2015-08-04.
 */

(function(){
    CarManager ={
        buyCar : function(model){
            console.log('buyCar' + model);
        },

        introduceCar : function(model){
            console.log('introduce' + model);
        },

        execute : function(name, model){
            return CarManager[name] && CarManager[name].apply(CarManager, [].slice.call(arguments, 1));
        }
    }
})();

CarManager.execute('buyCar' , 'hyundai');
CarManager.execute('introduceCar' , 'kia');

