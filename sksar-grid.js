/*
	SKSAR GRID Javscipt library by Soumya Kanti Sar | sksar.in
    
	A simple css responsive grid system created by me.
    Website: https://sksar.github.io/sksar-grid/
    
    Note: Make sure the stylesheet sksar-grid.css is imported first
    
    License:        CC Attribution-NoDerivatives 4.0 International 
    License URL:    https://creativecommons.org/licenses/by-nd/4.0/
*/


(function(){

    function define(){
        //define library

        var sksarGrid = {};
        //create empty object

        sksarGrid.gridify = function(){
            //define function into object

            var grids = document.querySelectorAll("div.col");
            //get all div elemnts which have the class .col

            var e = document.querySelector("style .sksarGridStyle");
            if (e === null) { 
                //check if the style html elements exists, and create and append if not
                e = document.createElement('style');
                e.className = "sksarGridStyle";
                document.body.appendChild(e);
            }
            e.innerHTML = "";
            //reset previously set or any existing style rules

            for(var i = 0 ; i < grids.length ; i++){    
                //loop to scan document for col-*-* matching class name

                var cl = grids[i].classList;    
                //get classlist of element

                for(var j = 0 ; j < cl.length ; j++){   
                    //loop to iterate thorugh classlist

                    if(/^col-[0-9]+-[0-9]+$/i.test(cl[j])){   
                        //if matched the format col-*-* then create appropriate media queries

                        var style = "";
                        var px = cl[j].split("-");
                        //split col-*-* format into an array
                        //px[1]; is the min value & px[2] is the min value

                        if(px[1]!=0){
                            //skip if value is zero
                            style += "\n@media only screen and (max-width: "+px[1]+"px) { ."+cl[j]+" [class*='col-']{ width: 100% !important; } }";
                        }
                        if(px[2]!=0){
                            //skip if value is zero
                            style += "\n@media only screen and (min-width: "+px[2]+"px) { ."+cl[j]+" [class*='col-']{ width: 100% !important; } }";
                        }

                        e.innerHTML += style;
                        //add style rules

                        j = cl.length;  //exit from loop
                    }
                    //if end

                }
                //j loop end

            }
            //i loop end

        }
        //gridify function end
        
        return sksarGrid;   //return library object
        
    }
    //end library defintion



    if(typeof(sksarGrid) === 'undefined'){
        //define library object if undefined
        window.sksarGrid = define();
        window.sksarGrid.gridify();
        //run the gridify function on page load
    }

})();


