      require([
        "esri/Map", "esri/views/SceneView", "esri/layers/VectorTileLayer"], function(Map, SceneView, VectorTileLayer) {
        // Create a Map
        var map = new Map();

        // Make map view and bind it to the map
        var view = new SceneView({
          container: "viewDiv",
          map: map,
          center: [-95.381764, 29.757776],
          zoom: 12
        });

        var tileLayer = new VectorTileLayer({
          url:
            "https://tiles.arcgis.com/tiles/KTcxiTD9dsQw4r7Z/arcgis/rest/services/TxDOT_Vector_Tile_Basemap/VectorTileServer"
		});
        map.add(tileLayer)
      });