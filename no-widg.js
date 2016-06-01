$(document).ready(function(){
   var web= "https://staging-thesavyapp.herokuapp.com";
    var url= window.location.href;

    var viewData= {
        url: url,
        sessionId: socket.io.engine.id
    }
    
    socket.emit('ab-pg-view', viewData);
    
    
        $("input[type='submit']").click(function(){
            var clickData= {
                ogUrl: url,
                sessionId: socket.io.engine.id,
                element: this
            };
            
            console.log(JSON.stringify(clickData));

            socket.emit('ab-click', clickData);
        });

        $("input[type='button']").click(function(){
            var clickData= {
                ogUrl: url,
                sessionId: socket.io.engine.id,
                element: this
            };
            console.log(JSON.stringify(clickData);

            socket.emit('ab-click', clickData);
        });

        $("button").click(function(){
            var clickData= {
                ogUrl: url,
                sessionId: socket.io.engine.id,
                element: this
            };
            console.log(JSON.stringify(clickData));

            socket.emit('ab-click', clickData);
        });

         $("a").click(function(){
            var clickData= {
                ogUrl: url,
                sessionId: socket.io.engine.id,
                element: this
            };

             console.log(JSON.stringify(clickData));
            socket.emit('ab-click', clickData);
        });
    
    
});