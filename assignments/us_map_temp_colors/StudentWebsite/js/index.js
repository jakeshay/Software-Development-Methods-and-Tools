$(document).ready(function() {    
    var apiKey = "15eacd36ced1f6cb0aecea948c228ba8" // Enter your API Key here        


    // TODO
    // Iterate over the state_info array and call the api for each state_name to get the current temperature
    // Example to call the api using state_name
    // This should be done inside the for loop
    Object.keys(state_info).forEach(function(key) {
        var state_obj = state_info[key];
        var lat = state_obj['lat'];
        var long = state_obj['lng'];
        var state_code = '#' + key;

        var url =`https://api.darksky.net/forecast/` + apiKey + `/` + lat + `,` + long;

        var connect = $.ajax({url:url, dataType:"jsonp"}).then(function(data) {
                
            var temperature = data.currently.temperature;

                // TODO
                // Fill in the RHS of the below line and uncomment it. Remember how we accessed the temperature in Lab 9.

                //TODO 
                // Default color gray
                // Create a series of if else blocks to set the color for the state based on the temperature
                // Less than equal to 10 should be blue
                // Between 11 and 30 should be cyan
                // Between 31 and 50 should be green
                // Between 51 and 80 should be orange
                // Greater than 80 should be red

            if (temperature<10) {
                $(state_code).css('fill', "#6495ED");
            }
            else if (temperature<20) {
                $(state_code).css('fill', "#7FFFD4");
            }
            else if (temperature<30) {
                $(state_code).css('fill', "#0000FF");
            }
            else if (temperature<40) {
                $(state_code).css('fill', "#008B8B");
            }
            else if (temperature<50) {
                $(state_code).css('fill', "#00BFFF");
            }
            else if (temperature<60) {
                $(state_code).css('fill', "#F08080");
            }
            else if (temperature<70) {
                $(state_code).css('fill', "#CD5C5C");
            }
            else if (temperature<80) {
                $(state_code).css('fill', "#8B0000");
            }
            else if (temperature<90) {
                $(state_code).css('fill', "#B22222");
            }
            else {
                $(state_code).css('fill', "#FF0000");
            }

        });


        

    })
});