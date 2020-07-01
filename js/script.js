                    var start = new Date().getTime();
                                            
                    function getRandomColor() {

                         var letters = '0123456789ABCDEF'.split(''); 
                        
                        //make var letters and .split puts them in an array seperately so 012345 etc is split up individually in array so it is 0  , 1  , 2,  3 etc
  
                         var color = '#';
 
                        // set var color to hold a hash
                        
                         for (var i = 0; i < 6; i++) {
   
                        // for starts at 0  and carries on until i is less than 6 and adds onto var i each time   
                              color += letters[Math.floor(Math.random() * 16)];
  
                             // have variable color and add to it the variable letters  with Math.floor and random meaning to have random whole number up to 16 from the letters array .
                            }
  
                            return color;

                    }
                    
                    
                    function makeShape(){
                        
                        var top = Math.random () * 400;
                        
                        var left = Math.random () * 400;
                        
                        var width = (Math.random () * 100) + 50;
                        
                        //set a variable with random up to 400 to add to top position and left position in style to have rng position number 
                        
                        //width has random from size 50 to 100 
                        
                        document.getElementById("shape").style.backgroundColor = getRandomColor();
                        
                        // set backgroundcolor to the rng color function made.
                        
                        document.getElementById("shape").style.width = width + "px";
                        
                        // have width random number added with px to have random with pixel
                        
                        document.getElementById("shape").style.height = width + "px";
                        
                        // have the height set to the same random width so they can be the same.
                        
                        document.getElementById("shape").style.top = top + "px";
                        
                        //getElement style top , have variable with random number added with px to have random pixel for top position
                        
                        document.getElementById("shape").style.left = left + "px";
                        
                        //getElement style top , have variable with random number added with px to have random pixel for left position
                        
                        document.getElementById("shape").style.display = "block";
                     
                        //displays the element because it was set to display:none  
                        
                        start = new Date().getTime();   
                    }
                    
                    function appearAgain(){
                        
                        setTimeout(makeShape , Math.random() * 2000);   
                    }
                    // set timer for makeShape to appear
                    
                    appearAgain();     
                    
                    //set timer for function to start, Math.random is to generate random time * 2000 means 2 secs , so up to 2 sec
                    
                    document.getElementById("shape").onclick = function () {
                        
                        document.getElementById("shape").style.display = "none";
                        
                        var end = new Date().getTime() - start;
                        
                        var finalTime = end /1000;
                        
                        document.getElementById("time").innerHTML = finalTime + " s";
                        
                        appearAgain();
                    }
                    
                  