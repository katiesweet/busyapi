module.exports = function(app){
    app.post('/api/usages', function(req, res){

        app.redis_client.incr('usageId', function(err, usageId){ // atomic
            // Store the supplied usage data
            app.redis_client.set(usageId, JSON.stringify(req.body));
            // console.log('Stored usage count: ' + usageId);
            
            // Respond
            res.status(201).json({'id':usageId});

        });
        
    });
}


// Original code:
    // Store the supplied usage data
    // app.usages.push(req.body);

    // var usageId = app.usages.length;
    // console.log('Stored usage count: ' + usageId);

    // res.status(201).json({'id':usageId});
