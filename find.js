// marker wherever click
// custom pointer

function initMap () {
    let options = {
        // center: {lat: 35.9121, lng: -79.0512},
        center: {lat: 35.8992, lng: -78.8636},
        zoom: 10
    }

    let map = new google.maps.Map(document.getElementById("map"), options);

    function addMarker(prop) {
        const marker = new google.maps.Marker({
            position: prop.location, 
            map:map
        });
        if (prop.imageIcon) {
            marker.setIcon(prop.imageIcon)
        }
        if (prop.content) {
        const detailWindow = new google.maps.InfoWindow({
            content:prop.content
        });
        marker.addListener("mouseover", () => {
            detailWindow.open(map, marker);
        })
        }
    }

    // unc
    addMarker({location:{lat: 35.9049, lng: -79.0469}, 
        content: `The sacred land`});
    //duke
    addMarker({location:{lat: 36.0014, lng: -78.9382}, 
        content: `Entitlement University`});
    //nc state
    addMarker({location:{lat: 35.7847, lng: -78.6821}, 
        content: `Little brother no one cares about`});
}