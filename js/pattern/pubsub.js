/**
 * Created by ddavid on 2015-08-04.
 */

var pubSub = {};
(function(q){

    var topics = [];
    q.publish = function(topic, data){
        if(!topics[topic]){
            console.log('no topic');
            return;
        };

        for( var index in topics[topic]){
            topics[topic][index].func(data);
        }
    };

    q.subscribe = function(topic, callback){
        if(!topics[topic]){
            topics[topic] = [];
        }

        topics[topic].push({
            func:callback
        })
    };

})(pubSub);

pubSub.subscribe('/news/location', function(){
    console.log('notify');
})

pubSub.subscribe('/news/location', function(){
    console.log('update');
})

pubSub.publish('/news/location', 'data');