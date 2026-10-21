var wms_layers = [];

var format_Batas_Gampong_0 = new ol.format.GeoJSON();
var features_Batas_Gampong_0 = format_Batas_Gampong_0.readFeatures(json_Batas_Gampong_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Batas_Gampong_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Batas_Gampong_0.addFeatures(features_Batas_Gampong_0);
var lyr_Batas_Gampong_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Batas_Gampong_0, 
                style: style_Batas_Gampong_0,
                popuplayertitle: 'Batas_Gampong',
                interactive: true,
                title: '<img src="styles/legend/Batas_Gampong_0.png" /> Batas_Gampong'
            });
var format_TitikTeguran_1 = new ol.format.GeoJSON();
var features_TitikTeguran_1 = format_TitikTeguran_1.readFeatures(json_TitikTeguran_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TitikTeguran_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TitikTeguran_1.addFeatures(features_TitikTeguran_1);
var lyr_TitikTeguran_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TitikTeguran_1, 
                style: style_TitikTeguran_1,
                popuplayertitle: 'Titik Teguran',
                interactive: true,
                title: '<img src="styles/legend/TitikTeguran_1.png" /> Titik Teguran'
            });

lyr_Batas_Gampong_0.setVisible(true);lyr_TitikTeguran_1.setVisible(true);
var layersList = [lyr_Batas_Gampong_0,lyr_TitikTeguran_1];
lyr_Batas_Gampong_0.set('fieldAliases', {'PROVINSI': 'PROVINSI', 'KOTA': 'KOTA', 'KECAMATAN': 'KECAMATAN', 'GAMPONG': 'GAMPONG', 'SUMBER': 'SUMBER', 'Ha': 'Ha', });
lyr_TitikTeguran_1.set('fieldAliases', {'LOKASI': 'LOKASI', 'Nomor': 'Nomor', });
lyr_Batas_Gampong_0.set('fieldImages', {'PROVINSI': 'TextEdit', 'KOTA': 'TextEdit', 'KECAMATAN': 'TextEdit', 'GAMPONG': 'TextEdit', 'SUMBER': 'TextEdit', 'Ha': 'TextEdit', });
lyr_TitikTeguran_1.set('fieldImages', {'LOKASI': 'TextEdit', 'Nomor': 'Range', });
lyr_Batas_Gampong_0.set('fieldLabels', {'PROVINSI': 'hidden field', 'KOTA': 'hidden field', 'KECAMATAN': 'hidden field', 'GAMPONG': 'header label - always visible', 'SUMBER': 'hidden field', 'Ha': 'hidden field', });
lyr_TitikTeguran_1.set('fieldLabels', {'LOKASI': 'header label - always visible', 'Nomor': 'hidden field', });
lyr_TitikTeguran_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});