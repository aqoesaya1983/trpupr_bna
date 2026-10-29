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
var format_PKKPR_2026_1 = new ol.format.GeoJSON();
var features_PKKPR_2026_1 = format_PKKPR_2026_1.readFeatures(json_PKKPR_2026_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PKKPR_2026_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PKKPR_2026_1.addFeatures(features_PKKPR_2026_1);
var lyr_PKKPR_2026_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PKKPR_2026_1, 
                style: style_PKKPR_2026_1,
                popuplayertitle: 'PKKPR_2026',
                interactive: true,
                title: '<img src="styles/legend/PKKPR_2026_1.png" /> PKKPR_2026'
            });
var format_PKKPR_2025_2 = new ol.format.GeoJSON();
var features_PKKPR_2025_2 = format_PKKPR_2025_2.readFeatures(json_PKKPR_2025_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PKKPR_2025_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PKKPR_2025_2.addFeatures(features_PKKPR_2025_2);
var lyr_PKKPR_2025_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PKKPR_2025_2, 
                style: style_PKKPR_2025_2,
                popuplayertitle: 'PKKPR_2025',
                interactive: true,
                title: '<img src="styles/legend/PKKPR_2025_2.png" /> PKKPR_2025'
            });
var format_PKKPR_2024_3 = new ol.format.GeoJSON();
var features_PKKPR_2024_3 = format_PKKPR_2024_3.readFeatures(json_PKKPR_2024_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PKKPR_2024_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PKKPR_2024_3.addFeatures(features_PKKPR_2024_3);
var lyr_PKKPR_2024_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PKKPR_2024_3, 
                style: style_PKKPR_2024_3,
                popuplayertitle: 'PKKPR_2024',
                interactive: true,
                title: '<img src="styles/legend/PKKPR_2024_3.png" /> PKKPR_2024'
            });
var format_PKKPR_2023_4 = new ol.format.GeoJSON();
var features_PKKPR_2023_4 = format_PKKPR_2023_4.readFeatures(json_PKKPR_2023_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PKKPR_2023_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PKKPR_2023_4.addFeatures(features_PKKPR_2023_4);
var lyr_PKKPR_2023_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PKKPR_2023_4, 
                style: style_PKKPR_2023_4,
                popuplayertitle: 'PKKPR_2023',
                interactive: true,
                title: '<img src="styles/legend/PKKPR_2023_4.png" /> PKKPR_2023'
            });
var format_PKKPR__5 = new ol.format.GeoJSON();
var features_PKKPR__5 = format_PKKPR__5.readFeatures(json_PKKPR__5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PKKPR__5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PKKPR__5.addFeatures(features_PKKPR__5);
var lyr_PKKPR__5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PKKPR__5, 
                style: style_PKKPR__5,
                popuplayertitle: 'PKKPR_',
                interactive: true,
                title: '<img src="styles/legend/PKKPR__5.png" /> PKKPR_'
            });
var format_PKKPR2020_2022_6 = new ol.format.GeoJSON();
var features_PKKPR2020_2022_6 = format_PKKPR2020_2022_6.readFeatures(json_PKKPR2020_2022_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PKKPR2020_2022_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PKKPR2020_2022_6.addFeatures(features_PKKPR2020_2022_6);
var lyr_PKKPR2020_2022_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PKKPR2020_2022_6, 
                style: style_PKKPR2020_2022_6,
                popuplayertitle: 'PKKPR 2020_2022',
                interactive: true,
                title: '<img src="styles/legend/PKKPR2020_2022_6.png" /> PKKPR 2020_2022'
            });
var format_TitikTeguran_7 = new ol.format.GeoJSON();
var features_TitikTeguran_7 = format_TitikTeguran_7.readFeatures(json_TitikTeguran_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TitikTeguran_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TitikTeguran_7.addFeatures(features_TitikTeguran_7);
var lyr_TitikTeguran_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TitikTeguran_7, 
                style: style_TitikTeguran_7,
                popuplayertitle: 'Titik Teguran',
                interactive: true,
                title: '<img src="styles/legend/TitikTeguran_7.png" /> Titik Teguran'
            });

lyr_Batas_Gampong_0.setVisible(true);lyr_PKKPR_2026_1.setVisible(true);lyr_PKKPR_2025_2.setVisible(true);lyr_PKKPR_2024_3.setVisible(true);lyr_PKKPR_2023_4.setVisible(true);lyr_PKKPR__5.setVisible(true);lyr_PKKPR2020_2022_6.setVisible(true);lyr_TitikTeguran_7.setVisible(true);
var layersList = [lyr_Batas_Gampong_0,lyr_PKKPR_2026_1,lyr_PKKPR_2025_2,lyr_PKKPR_2024_3,lyr_PKKPR_2023_4,lyr_PKKPR__5,lyr_PKKPR2020_2022_6,lyr_TitikTeguran_7];
lyr_Batas_Gampong_0.set('fieldAliases', {'PROVINSI': 'PROVINSI', 'KOTA': 'KOTA', 'KECAMATAN': 'KECAMATAN', 'GAMPONG': 'GAMPONG', 'SUMBER': 'SUMBER', 'Ha': 'Ha', });
lyr_PKKPR_2026_1.set('fieldAliases', {'TglMasuk': 'TglMasuk', 'Nm': 'Nm', });
lyr_PKKPR_2025_2.set('fieldAliases', {'TglMasuk': 'TglMasuk', 'Nm': 'Nm', });
lyr_PKKPR_2024_3.set('fieldAliases', {'TglMasuk': 'TglMasuk', 'Id': 'Id', 'Nm': 'Nm', 'HakTanah': 'HakTanah', 'Sertip1': 'Sertip1', 'Sertip2': 'Sertip2', 'Sertip3': 'Sertip3', 'THN1': 'THN1', 'THN2': 'THN2', 'THN3': 'THN3', 'Bgn': 'Bgn', 'Lok': 'Lok', 'Zona': 'Zona', 'ITBX': 'ITBX', 'KRB': 'KRB', 'Koefisien': 'Koefisien', 'FJalan': 'FJalan', 'InProgram': 'InProgram', 'Kepadatan': 'Kepadatan', 'Gp': 'Gp', 'Kec': 'Kec', 'X': 'X', 'Y': 'Y', 'PAD': 'PAD', 'BgnEksis': 'BgnEksis', 'PBG': 'PBG', 'NoPBG': 'NoPBG', 'PKKPR': 'PKKPR', });
lyr_PKKPR_2023_4.set('fieldAliases', {'Id': 'Id', 'Nm': 'Nm', 'Sertip1': 'Sertip1', 'Sertip2': 'Sertip2', 'Sertip3': 'Sertip3', 'THN1': 'THN1', 'THN2': 'THN2', 'THN3': 'THN3', 'TglMasuk': 'TglMasuk', 'Bgn': 'Bgn', 'Lok': 'Lok', 'HakTanah': 'HakTanah', 'Zona': 'Zona', 'ITBX': 'ITBX', 'KRB': 'KRB', 'Koefisien': 'Koefisien', 'InProgram': 'InProgram', 'FJalan': 'FJalan', 'Kepadatan': 'Kepadatan', 'Gp': 'Gp', 'Kec': 'Kec', 'X': 'X', 'Y': 'Y', 'PKKPR': 'PKKPR', });
lyr_PKKPR__5.set('fieldAliases', {'TglMasuk': 'TglMasuk', 'Id': 'Id', 'Nm': 'Nm', 'HakTanah': 'HakTanah', 'Sertip1': 'Sertip1', 'Sertip2': 'Sertip2', 'Sertip3': 'Sertip3', 'THN1': 'THN1', 'THN2': 'THN2', 'THN3': 'THN3', 'Bgn': 'Bgn', 'Lok': 'Lok', 'Zona': 'Zona', 'ITBX': 'ITBX', 'KRB': 'KRB', 'Koefisien': 'Koefisien', 'FJalan': 'FJalan', 'InProgram': 'InProgram', 'Kepadatan': 'Kepadatan', 'Gp': 'Gp', 'Kec': 'Kec', 'X': 'X', 'Y': 'Y', 'PAD': 'PAD', 'BgnEksis': 'BgnEksis', });
lyr_PKKPR2020_2022_6.set('fieldAliases', {'Id': 'Id', 'Nama': 'Nama', 'Sertipikat': 'Sertipikat', 'Tahun': 'Tahun', 'Srtipikat2': 'Srtipikat2', 'Srtipikat3': 'Srtipikat3', 'Tahun2': 'Tahun2', 'Long': 'Long', 'Gp': 'Gp', 'Luas': 'Luas', 'Longitude': 'Longitude', 'Latitude': 'Latitude', 'TMasuk': 'TMasuk', 'Zona': 'Zona', 'PKKPR': 'PKKPR', });
lyr_TitikTeguran_7.set('fieldAliases', {'LOKASI': 'LOKASI', 'Nomor': 'Nomor', });
lyr_Batas_Gampong_0.set('fieldImages', {'PROVINSI': 'TextEdit', 'KOTA': 'TextEdit', 'KECAMATAN': 'TextEdit', 'GAMPONG': 'TextEdit', 'SUMBER': 'TextEdit', 'Ha': 'TextEdit', });
lyr_PKKPR_2026_1.set('fieldImages', {'TglMasuk': 'DateTime', 'Nm': 'TextEdit', });
lyr_PKKPR_2025_2.set('fieldImages', {'TglMasuk': 'DateTime', 'Nm': 'TextEdit', });
lyr_PKKPR_2024_3.set('fieldImages', {'TglMasuk': 'DateTime', 'Id': 'Range', 'Nm': 'TextEdit', 'HakTanah': 'TextEdit', 'Sertip1': 'TextEdit', 'Sertip2': 'TextEdit', 'Sertip3': 'TextEdit', 'THN1': 'TextEdit', 'THN2': 'TextEdit', 'THN3': 'TextEdit', 'Bgn': 'TextEdit', 'Lok': 'TextEdit', 'Zona': 'TextEdit', 'ITBX': 'TextEdit', 'KRB': 'TextEdit', 'Koefisien': 'TextEdit', 'FJalan': 'TextEdit', 'InProgram': 'TextEdit', 'Kepadatan': 'TextEdit', 'Gp': 'TextEdit', 'Kec': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'PAD': 'TextEdit', 'BgnEksis': 'TextEdit', 'PBG': 'TextEdit', 'NoPBG': 'TextEdit', 'PKKPR': 'TextEdit', });
lyr_PKKPR_2023_4.set('fieldImages', {'Id': 'Range', 'Nm': 'TextEdit', 'Sertip1': 'TextEdit', 'Sertip2': 'TextEdit', 'Sertip3': 'TextEdit', 'THN1': 'TextEdit', 'THN2': 'TextEdit', 'THN3': 'TextEdit', 'TglMasuk': 'DateTime', 'Bgn': 'TextEdit', 'Lok': 'TextEdit', 'HakTanah': 'TextEdit', 'Zona': 'TextEdit', 'ITBX': 'TextEdit', 'KRB': 'TextEdit', 'Koefisien': 'TextEdit', 'InProgram': 'TextEdit', 'FJalan': 'TextEdit', 'Kepadatan': 'TextEdit', 'Gp': 'TextEdit', 'Kec': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'PKKPR': 'TextEdit', });
lyr_PKKPR__5.set('fieldImages', {'TglMasuk': 'DateTime', 'Id': 'Range', 'Nm': 'TextEdit', 'HakTanah': 'TextEdit', 'Sertip1': 'TextEdit', 'Sertip2': 'TextEdit', 'Sertip3': 'TextEdit', 'THN1': 'TextEdit', 'THN2': 'TextEdit', 'THN3': 'TextEdit', 'Bgn': 'TextEdit', 'Lok': 'TextEdit', 'Zona': 'TextEdit', 'ITBX': 'TextEdit', 'KRB': 'TextEdit', 'Koefisien': 'TextEdit', 'FJalan': 'TextEdit', 'InProgram': 'TextEdit', 'Kepadatan': 'TextEdit', 'Gp': 'TextEdit', 'Kec': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'PAD': 'TextEdit', 'BgnEksis': 'TextEdit', });
lyr_PKKPR2020_2022_6.set('fieldImages', {'Id': 'Range', 'Nama': 'TextEdit', 'Sertipikat': 'TextEdit', 'Tahun': 'TextEdit', 'Srtipikat2': 'TextEdit', 'Srtipikat3': 'TextEdit', 'Tahun2': 'TextEdit', 'Long': 'TextEdit', 'Gp': 'TextEdit', 'Luas': 'TextEdit', 'Longitude': 'TextEdit', 'Latitude': 'TextEdit', 'TMasuk': 'DateTime', 'Zona': 'TextEdit', 'PKKPR': 'TextEdit', });
lyr_TitikTeguran_7.set('fieldImages', {'LOKASI': 'TextEdit', 'Nomor': 'Range', });
lyr_Batas_Gampong_0.set('fieldLabels', {'PROVINSI': 'hidden field', 'KOTA': 'hidden field', 'KECAMATAN': 'hidden field', 'GAMPONG': 'header label - always visible', 'SUMBER': 'hidden field', 'Ha': 'hidden field', });
lyr_PKKPR_2026_1.set('fieldLabels', {'TglMasuk': 'hidden field', 'Nm': 'inline label - always visible', });
lyr_PKKPR_2025_2.set('fieldLabels', {'TglMasuk': 'hidden field', 'Nm': 'inline label - always visible', });
lyr_PKKPR_2024_3.set('fieldLabels', {'TglMasuk': 'hidden field', 'Id': 'hidden field', 'Nm': 'inline label - always visible', 'HakTanah': 'hidden field', 'Sertip1': 'hidden field', 'Sertip2': 'hidden field', 'Sertip3': 'hidden field', 'THN1': 'hidden field', 'THN2': 'hidden field', 'THN3': 'hidden field', 'Bgn': 'hidden field', 'Lok': 'hidden field', 'Zona': 'hidden field', 'ITBX': 'hidden field', 'KRB': 'hidden field', 'Koefisien': 'hidden field', 'FJalan': 'hidden field', 'InProgram': 'hidden field', 'Kepadatan': 'hidden field', 'Gp': 'hidden field', 'Kec': 'hidden field', 'X': 'hidden field', 'Y': 'hidden field', 'PAD': 'hidden field', 'BgnEksis': 'hidden field', 'PBG': 'hidden field', 'NoPBG': 'hidden field', 'PKKPR': 'hidden field', });
lyr_PKKPR_2023_4.set('fieldLabels', {'Id': 'hidden field', 'Nm': 'inline label - always visible', 'Sertip1': 'hidden field', 'Sertip2': 'hidden field', 'Sertip3': 'hidden field', 'THN1': 'hidden field', 'THN2': 'hidden field', 'THN3': 'hidden field', 'TglMasuk': 'hidden field', 'Bgn': 'hidden field', 'Lok': 'hidden field', 'HakTanah': 'hidden field', 'Zona': 'hidden field', 'ITBX': 'hidden field', 'KRB': 'hidden field', 'Koefisien': 'hidden field', 'InProgram': 'hidden field', 'FJalan': 'hidden field', 'Kepadatan': 'hidden field', 'Gp': 'hidden field', 'Kec': 'hidden field', 'X': 'hidden field', 'Y': 'hidden field', 'PKKPR': 'hidden field', });
lyr_PKKPR__5.set('fieldLabels', {'TglMasuk': 'hidden field', 'Id': 'hidden field', 'Nm': 'inline label - always visible', 'HakTanah': 'hidden field', 'Sertip1': 'hidden field', 'Sertip2': 'hidden field', 'Sertip3': 'hidden field', 'THN1': 'hidden field', 'THN2': 'hidden field', 'THN3': 'hidden field', 'Bgn': 'hidden field', 'Lok': 'hidden field', 'Zona': 'hidden field', 'ITBX': 'hidden field', 'KRB': 'hidden field', 'Koefisien': 'hidden field', 'FJalan': 'hidden field', 'InProgram': 'hidden field', 'Kepadatan': 'hidden field', 'Gp': 'hidden field', 'Kec': 'hidden field', 'X': 'hidden field', 'Y': 'hidden field', 'PAD': 'hidden field', 'BgnEksis': 'hidden field', });
lyr_PKKPR2020_2022_6.set('fieldLabels', {'Id': 'hidden field', 'Nama': 'inline label - always visible', 'Sertipikat': 'hidden field', 'Tahun': 'hidden field', 'Srtipikat2': 'hidden field', 'Srtipikat3': 'hidden field', 'Tahun2': 'hidden field', 'Long': 'hidden field', 'Gp': 'hidden field', 'Luas': 'hidden field', 'Longitude': 'hidden field', 'Latitude': 'hidden field', 'TMasuk': 'hidden field', 'Zona': 'hidden field', 'PKKPR': 'hidden field', });
lyr_TitikTeguran_7.set('fieldLabels', {'LOKASI': 'header label - always visible', 'Nomor': 'hidden field', });
lyr_TitikTeguran_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});