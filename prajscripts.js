function setStoredValues()
{

if( typeof("storage") != "undefined")
	{
		localStorage.setItem("pagecreator", "Prajwal Halasahally");
		
	}
else
	{
		alert("Local storage Not Allowed");
	
	}
}

function getStoredValues()
{
	if (typeof("storage") != "undefined")
		{
			document.getElementById("localStorage").innerHTML = "Page is Created By " + localStorage.getItem("pagecreator");
		}
	else{
			document.getElementById("localStorage").innerHTML = "Local Storage not Supported";
		}

}

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}

function showmap(position)
{
    var myLocation = position.coords.latitude + "," + position.coords.longitude;

    var img_url = "http://maps.googleapis.com/maps/api/staticmap?center="+myLocation+"&zoom=14&size=400x300&sensor=false";

    document.getElementById("display_map").innerHTML = "<img src='"+img_url+"'>";
}
function myGeoLocation()
{
if(navigator.geolocation)
{
navigator.geolocation.getCurrentPosition(showmap);
}
else{ 
alert("Geo Location is not Supported by this browser");
} 
}