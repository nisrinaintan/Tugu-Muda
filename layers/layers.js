var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt0.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_building_1 = new ol.format.GeoJSON();
var features_building_1 = format_building_1.readFeatures(json_building_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building_1.addFeatures(features_building_1);
var lyr_building_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_building_1, 
                style: style_building_1,
                interactive: true,
                title: '<img src="styles/legend/building_1.png" /> building'
            });
var format_building_2 = new ol.format.GeoJSON();
var features_building_2 = format_building_2.readFeatures(json_building_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building_2.addFeatures(features_building_2);
var lyr_building_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_building_2, 
                style: style_building_2,
                interactive: true,
                title: '<img src="styles/legend/building_2.png" /> building'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_building_1.setVisible(true);lyr_building_2.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_building_1,lyr_building_2];
lyr_building_1.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'amenity': 'amenity', });
lyr_building_2.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'healthcare': 'healthcare', 'dispensing': 'dispensing', 'brand:wikidata': 'brand:wikidata', 'brand': 'brand', 'branch': 'branch', 'office': 'office', 'atm': 'atm', 'shop': 'shop', 'school:type_idn': 'school:type_idn', 'operator:type': 'operator:type', 'addr:housenumber': 'addr:housenumber', 'wikipedia': 'wikipedia', 'website': 'website', 'tourism': 'tourism', 'addr:street': 'addr:street', 'addr:housename': 'addr:housename', 'religion': 'religion', 'amenity': 'amenity', 'addr:city': 'addr:city', 'capacity:persons': 'capacity:persons', 'building:structure': 'building:structure', 'building:roof': 'building:roof', 'building:material': 'building:material', 'building:levels': 'building:levels', 'building:floor': 'building:floor', 'building:condition': 'building:condition', 'backup_generator': 'backup_generator', 'admin_level': 'admin_level', 'addr:postcode': 'addr:postcode', 'addr:full': 'addr:full', 'access:roof': 'access:roof', 'name': 'name', });
lyr_building_1.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'amenity': '', });
lyr_building_2.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'building': '', 'healthcare': '', 'dispensing': '', 'brand:wikidata': '', 'brand': '', 'branch': '', 'office': '', 'atm': '', 'shop': '', 'school:type_idn': '', 'operator:type': '', 'addr:housenumber': '', 'wikipedia': '', 'website': '', 'tourism': '', 'addr:street': '', 'addr:housename': '', 'religion': '', 'amenity': '', 'addr:city': '', 'capacity:persons': '', 'building:structure': '', 'building:roof': '', 'building:material': '', 'building:levels': '', 'building:floor': '', 'building:condition': '', 'backup_generator': '', 'admin_level': '', 'addr:postcode': '', 'addr:full': '', 'access:roof': '', 'name': '', });
lyr_building_1.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'amenity': 'no label', });
lyr_building_2.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'healthcare': 'no label', 'dispensing': 'no label', 'brand:wikidata': 'no label', 'brand': 'no label', 'branch': 'no label', 'office': 'no label', 'atm': 'no label', 'shop': 'no label', 'school:type_idn': 'no label', 'operator:type': 'no label', 'addr:housenumber': 'no label', 'wikipedia': 'no label', 'website': 'no label', 'tourism': 'no label', 'addr:street': 'no label', 'addr:housename': 'no label', 'religion': 'no label', 'amenity': 'no label', 'addr:city': 'no label', 'capacity:persons': 'no label', 'building:structure': 'no label', 'building:roof': 'no label', 'building:material': 'no label', 'building:levels': 'no label', 'building:floor': 'no label', 'building:condition': 'no label', 'backup_generator': 'no label', 'admin_level': 'no label', 'addr:postcode': 'no label', 'addr:full': 'no label', 'access:roof': 'no label', 'name': 'no label', });
lyr_building_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});