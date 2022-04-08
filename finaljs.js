function home() {
    window.open("finalwebsite.html", "_self");
}

function search() { 
    if (document.getElementById("search")) {
        userInput = (document.getElementById("search").value).toLowerCase(); 
    }
    
    if (userInput == "kanye" ||   userInput == "Kanye" || userInput == "bipolar" || userInput == "Bipolar" || userInput == "goat" || userInput == "GOAT") { 
        window.open("KanyeModal.html", "_self"); 
    }
   
    else if (userInput == "drake" || userInput == "Drake" || userInput == "lightskin" || userInput == "Lightskin") { 
        window.open("DrakeModal.html", "_self"); 
    }

	else if (userInput == "learn more" || userInput == "Learn more" || userInput == "Learn More" || userInput == "intro" || userInput == "Intro" || userInput == "origin" || userInput == "Origin") { 
        window.open("https://www.masterclass.com/articles/hip-hop-guide", "_self"); 
    }

	else if (userInput == "slideshow" || userInput == "Slideshow" || userInput == "presnetation" || userInput == "Presentation" || userInput == "carousel" || userInput == "Carousel") { 
        window.open("slideshow.html", "_self"); 
    }

    else {
        alert("Please enter a real search request"); 
    }
}

function display_ct7() {
	var x = new Date()
	var ampm = x.getHours( ) >= 12 ? ' PM' : ' AM';
	hours = x.getHours( ) % 12;
	hours = hours ? hours : 12;
	hours=hours.toString().length==1? 0+hours.toString() : hours;
	
	var minutes=x.getMinutes().toString()
	minutes=minutes.length==1 ? 0+minutes : minutes;
	
	var seconds=x.getSeconds().toString()
	seconds=seconds.length==1 ? 0+seconds : seconds;
	
	var month=(x.getMonth() +1).toString();
	month=month.length==1 ? 0+month : month;
	
	var dt=x.getDate().toString();
	dt=dt.length==1 ? 0+dt : dt;
	
	var x1=month + "/" + dt + "/" + x.getFullYear(); 
	x1 = x1 + " - " +  hours + ":" +  minutes + ":" +  seconds + " " + ampm;
	document.getElementById('ct7').innerHTML = x1;
	display_c7();
	 }
	 function display_c7(){
	var refresh=1000; // Refresh rate in milli seconds
	mytime=setTimeout('display_ct7()',refresh)
	}
	display_c7()
 
	
	function myFunction() {
		document.getElementById("myDropdown").classList.toggle("show");
	  }
	  
	// Close the dropdown menu if the user clicks outside of it
	  window.onclick = function(event) {
		if (!event.target.matches('.dropbtn')) {
		  var dropdowns = document.getElementsByClassName("dropdown-content");
		  var i;
		  for (i = 0; i < dropdowns.length; i++) {
			var openDropdown = dropdowns[i];
			if (openDropdown.classList.contains('show')) {
			  openDropdown.classList.remove('show');
			}
		  }
		}
	  }
	
	  let circle = document.getElementById('circle');
	  const onMouseMove = (e) =>{
		circle.style.left = e.pageX + 'px';
		circle.style.top = e.pageY + 'px';
	  }
	  document.addEventListener('mousemove', onMouseMove);
