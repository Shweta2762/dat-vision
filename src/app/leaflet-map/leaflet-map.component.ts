import { Component, OnInit } from '@angular/core';
import { AuthenticationService} from "../authentication/authentication.service";

// We are using Open Layer Maps (Free and Open Source)
declare let ol: any;

@Component({
  selector: 'app-leaflet-map',
  templateUrl: './leaflet-map.component.html',
  styleUrls: ['./leaflet-map.component.scss']
})
export class LeafletMapComponent implements OnInit {

  constructor(
    private auth : AuthenticationService
  ) { }

  latitude: number = 12.9940;
  longitude: number = 80.1800;

  defaultZoom: number = 11;

  readonly TVH_COORDS:number[] = [ 12.970164646174766, 80.25028995402091 ];
  readonly PACIFICA_COORDS: number[] = [ 13.0435, 80.2128];
  readonly ORAGARAM_COORDS : number[] = [12.849850965722563, 79.9257633392459];

  map: any;

  ngOnInit() {
      let container  : any = document.getElementById('popup');
      let content  : any = document.getElementById('popup-content');
      let closer  : any = document.getElementById('popup-closer');

      /**
       * Create an overlay to anchor the popup to the map.
       */
      let overlay  : any  = new ol.Overlay({
        element: container,
        autoPan: true,
        autoPanAnimation: {
          duration: 250,
        },
      });

      closer.onclick = function () {
        overlay.setPosition(undefined);
        closer.blur();
        return false;
      };

      let mousePositionControl = new ol.control.MousePosition({
      coordinateFormat: ol.coordinate.createStringXY(4),
      projection: 'EPSG:4326',
      // comment the following two lines to have the mouse position
      // be placed within the map.
      className: 'custom-mouse-position',
      target: document.getElementById('mouse-position'),
      undefinedHTML: '&nbsp;'
    });


    this.map = new ol.Map({
      target: 'map',
      overlays: [overlay],
      controls: ol.control.defaults({ attribution: false }),
      layers: [
        new ol.layer.Tile({
          source: new ol.source.OSM(),
          crossOrigin: 'anonymous',
        })
      ],
      view: new ol.View({
        center: ol.proj.fromLonLat([this.longitude, this.latitude]),
        zoom: this.defaultZoom,
      })
    });

    this.map.on('click', (args  : any )=> {
      // console.log(args.coordinate);
      // let lonlat = ol.proj.transform(args.coordinate, 'EPSG:3857', 'EPSG:4326');
      // console.log(lonlat);

      // let lon = lonlat[0];
      // let lat = lonlat[1];
      //this.addPoint(lat, lon);
      //alert(`lat: ${lat} long: ${lon}`);
      let feature = this.map.forEachFeatureAtPixel(args.pixel,
        function(feature  : any , layer  : any ) {
          return feature;
        });
      let coordinate = args.coordinate;
      if(feature && feature.get('building') === "TVH"){
        content.innerHTML = this.popupContent('TVH Agnito Park','/tvh-agnitio/assets');
        overlay.setPosition(coordinate);
        //this.router.navigateByUrl("home");
      }
      else if(feature && feature.get('building') === "PACIFICA"){
        content.innerHTML = this.popupContent('Pacifica Tech Park');
        overlay.setPosition(coordinate);
      }
      else if(feature && feature.get('building') === "Oragadam"){
        content.innerHTML = this.popupContent('Oragadam');
        overlay.setPosition(coordinate);
      }
    });

    if(this.auth.getBuildingFromStorage() === 1 || this.auth.getRoleFromStorage() === 3) this.addPoint(this.TVH_COORDS[0], this.TVH_COORDS[1], "TVH");
    if(this.auth.getBuildingFromStorage() === 2 || this.auth.getRoleFromStorage() === 3) this.addPoint(this.ORAGARAM_COORDS[0], this.ORAGARAM_COORDS[1], "Oragadam");
    if(this.auth.getBuildingFromStorage() === 3 || this.auth.getRoleFromStorage() === 3) this.addPoint(this.PACIFICA_COORDS[0], this.PACIFICA_COORDS[1], "PACIFICA");
  }

  popupContent(heading:string, redirectUrl:string = 'landingPage'){
    return `
      <div style="text-align:center;">
        <a href="` + redirectUrl + `" style="text-decoration: underline;" >` + heading + `</a>
      <div>
    `;
  }


  addPoint(lat: number, lng: number, building_name: string) {
    let feature = new ol.Feature({
      building: building_name,
      geometry: new ol.geom.Point(ol.proj.transform([lng, lat], 'EPSG:4326', 'EPSG:3857')),
    });
    let vectorLayer = new ol.layer.Vector({
      source: new ol.source.Vector({
        features: [feature]
      }),
      style: new ol.style.Style({
        image: new ol.style.Icon({
          anchor: [20, 29],
          anchorXUnits: "10",
          anchorYUnits: "29",
          src: "https://www.mapquestapi.com/staticmap/geticon?uri=poi-red_2.png"
        })
      })
    });
    this.map.addLayer(vectorLayer);
    }
}
