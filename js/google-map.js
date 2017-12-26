	
	function initMap() {
		var map = new google.maps.Map(document.getElementById('map'), {
		  zoom: 17,
		  center: {lat: 49.842998, lng: 24.016010},
		  disableDefaultUI: true,
		  styles: [
				{
					"featureType": "administrative",
					"elementType": "geometry",
					"stylers": [
						{
							"color": "#a7a7a7"
						}
					]
				},
				{
					"featureType": "administrative",
					"elementType": "labels.text.fill",
					"stylers": [
						{
							"visibility": "on"
						},
						{
							"color": "#737373"
						}
					]
				},
				{
					"featureType": "landscape",
					"elementType": "geometry.fill",
					"stylers": [
						{
							"visibility": "on"
						},
						{
							"color": "#efefef"
						}
					]
				},
				{
					"featureType": "poi",
					"elementType": "geometry.fill",
					"stylers": [
						{
							"visibility": "on"
						},
						{
							"color": "#dadada"
						}
					]
				},
				{
					"featureType": "poi",
					"elementType": "labels",
					"stylers": [
						{
							"visibility": "off"
						}
					]
				},
				{
					"featureType": "poi",
					"elementType": "labels.icon",
					"stylers": [
						{
							"visibility": "off"
						}
					]
				},
				{
					"featureType": "road",
					"elementType": "labels.text.fill",
					"stylers": [
						{
							"color": "#696969"
						}
					]
				},
				{
					"featureType": "road",
					"elementType": "labels.icon",
					"stylers": [
						{
							"visibility": "off"
						}
					]
				},
				{
					"featureType": "road.highway",
					"elementType": "geometry.fill",
					"stylers": [
						{
							"color": "#ffffff"
						}
					]
				},
				{
					"featureType": "road.highway",
					"elementType": "geometry.stroke",
					"stylers": [
						{
							"visibility": "on"
						},
						{
							"color": "#b3b3b3"
						}
					]
				},
				{
					"featureType": "road.arterial",
					"elementType": "geometry.fill",
					"stylers": [
						{
							"color": "#ffffff"
						}
					]
				},
				{
					"featureType": "road.arterial",
					"elementType": "geometry.stroke",
					"stylers": [
						{
							"color": "#d6d6d6"
						}
					]
				},
				{
					"featureType": "road.local",
					"elementType": "geometry.fill",
					"stylers": [
						{
							"visibility": "on"
						},
						{
							"color": "#ffffff"
						},
						{
							"weight": 1.8
						}
					]
				},
				{
					"featureType": "road.local",
					"elementType": "geometry.stroke",
					"stylers": [
						{
							"color": "#d7d7d7"
						}
					]
				},
				{
					"featureType": "transit",
					"elementType": "all",
					"stylers": [
						{
							"color": "#808080"
						},
						{
							"visibility": "off"
						}
					]
				},
				{
					"featureType": "water",
					"elementType": "geometry.fill",
					"stylers": [
						{
							"color": "#d3d3d3"
						}
					]
				}
			],
			scrollwheel: false
		});
	var image = 'images/some-image.png';
		var beachMarker = new google.maps.Marker({
		position: {lat: 49.842998, lng: 24.016010},
		map: map,
		icon: image
		});
		var image = 'images/elips.png';
		var beachMarker = new google.maps.Marker({
		position: {lat: 49.843143, lng: 24.016048},
		map: map,
		icon: image
		});
	  } 