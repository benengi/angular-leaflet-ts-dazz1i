import { Component, OnInit, Input } from '@angular/core';

import * as L from 'leaflet';
import 'leaflet.markercluster';


@Component({
	selector: 'map',
	templateUrl: './map.component.html'
})
export class MapComponent implements OnInit {


 
  @Input() coords:number[][];
	options = {
		zoom: 5,
    maxZoom : 18,
		center: L.latLng([ 41.5, 12.5 ]),
    
   layers: [L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {})],
    
    
	};

	// Marker cluster stuff

  markerClusterGroup: L.MarkerClusterGroup;
	markerClusterData: L.Marker[] = [];
	markerClusterOptions: L.MarkerClusterGroupOptions;
  

	ngOnInit() {

		this.markerClusterData = this.generateMarker(this.coords);
	}

	markerClusterReady(group: L.MarkerClusterGroup) {
		this.markerClusterGroup = group;
	}

	generateMarker(coords: number[][]): L.Marker[] {
		const data: L.Marker[] = [];
    const icon = L.icon({
				 iconSize: [25, 41],
        iconAnchor: [10, 41],
        popupAnchor: [2, -40],
        // specify the path here
        iconUrl: "https://unpkg.com/leaflet@1.5.1/dist/images/marker-icon.png",
        shadowUrl:
          "https://unpkg.com/leaflet@1.5.1/dist/images/marker-shadow.png"
			});

		for (let i = 0; i < coords.length; i++) {
			data.push(L.marker( [coords[i][0],coords[i][1]], { icon }));
		}
		return data;
	}
}
