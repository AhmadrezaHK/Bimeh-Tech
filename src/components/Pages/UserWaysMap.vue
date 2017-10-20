<template>
  <div class="google-map" :id="mapName"></div>
</template>

<script>
import axios from "axios"
export default {
    name: 'google-map',
    props: ['name'],
    data: function () {
        return {
        mapName: this.name + "-map",
        markerCoordinates: null,
        map: null,
        bounds: null,
        markers: []
        }
    },
    mounted: function () {
        const pathToGet = "http://localhost:8080/trips/latest";
        axios({
            method: "GET",
            url: pathToGet,
            headers: {'Content-Type': "application/json", "TOKEN": localStorage["token"]}
        }).then(data => {
            console.log(data)
        }).catch(err => {
            console.log(err)
        })
        // this.bounds = new google.maps.LatLngBounds();
        // const element = document.getElementById(this.mapName)
        // const mapCentre = this.markerCoordinates[0]
        // const options = {
        // center: new google.maps.LatLng(mapCentre.latitude, mapCentre.longitude)
        // }
        // this.map = new google.maps.Map(element, options);
        // this.markerCoordinates.forEach((coord) => {
        // const position = new google.maps.LatLng(coord.latitude, coord.longitude);
        // const marker = new google.maps.Marker({
        //     position,
        //     map: this.map
        // });
        // this.markers.push(marker)
        // this.map.fitBounds(this.bounds.extend(position))
        // });
    }
}
</script>

<style scoped>
.google-map {
  width: 100%;
  height: 100%;
  background: gray;
}
</style>



