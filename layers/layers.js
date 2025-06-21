var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_ProvinciasdeLima_1 = new ol.format.GeoJSON();
var features_ProvinciasdeLima_1 = format_ProvinciasdeLima_1.readFeatures(json_ProvinciasdeLima_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ProvinciasdeLima_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ProvinciasdeLima_1.addFeatures(features_ProvinciasdeLima_1);
var lyr_ProvinciasdeLima_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ProvinciasdeLima_1, 
                style: style_ProvinciasdeLima_1,
                popuplayertitle: ' Provincias de Lima',
                interactive: true,
    title: ' Provincias de Lima<br />\
    <img src="styles/legend/ProvinciasdeLima_1_0.png" /> BARRANCA<br />\
    <img src="styles/legend/ProvinciasdeLima_1_1.png" /> CAJATAMBO<br />\
    <img src="styles/legend/ProvinciasdeLima_1_2.png" /> CANTA<br />\
    <img src="styles/legend/ProvinciasdeLima_1_3.png" /> CAÑETE<br />\
    <img src="styles/legend/ProvinciasdeLima_1_4.png" /> HUARAL<br />\
    <img src="styles/legend/ProvinciasdeLima_1_5.png" /> HUAROCHIRI<br />\
    <img src="styles/legend/ProvinciasdeLima_1_6.png" /> HUAURA<br />\
    <img src="styles/legend/ProvinciasdeLima_1_7.png" /> LIMA<br />\
    <img src="styles/legend/ProvinciasdeLima_1_8.png" /> OYON<br />\
    <img src="styles/legend/ProvinciasdeLima_1_9.png" /> YAUYOS<br />\
    <img src="styles/legend/ProvinciasdeLima_1_10.png" /> <br />' });
var format_Rios_Quebradas_2 = new ol.format.GeoJSON();
var features_Rios_Quebradas_2 = format_Rios_Quebradas_2.readFeatures(json_Rios_Quebradas_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rios_Quebradas_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rios_Quebradas_2.addFeatures(features_Rios_Quebradas_2);
var lyr_Rios_Quebradas_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rios_Quebradas_2, 
                style: style_Rios_Quebradas_2,
                popuplayertitle: 'Rios_Quebradas',
                interactive: true,
                title: '<img src="styles/legend/Rios_Quebradas_2.png" /> Rios_Quebradas'
            });
var format_InstitucionesEducativas_3 = new ol.format.GeoJSON();
var features_InstitucionesEducativas_3 = format_InstitucionesEducativas_3.readFeatures(json_InstitucionesEducativas_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_InstitucionesEducativas_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_InstitucionesEducativas_3.addFeatures(features_InstitucionesEducativas_3);
var lyr_InstitucionesEducativas_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_InstitucionesEducativas_3, 
                style: style_InstitucionesEducativas_3,
                popuplayertitle: 'Instituciones Educativas',
                interactive: true,
    title: 'Instituciones Educativas<br />\
    <img src="styles/legend/InstitucionesEducativas_3_0.png" /> Básica Alternativa - Avanzado<br />\
    <img src="styles/legend/InstitucionesEducativas_3_1.png" /> Básica Alternativa - Inicial e Intermedio<br />\
    <img src="styles/legend/InstitucionesEducativas_3_2.png" /> Básica Especial - Inicial<br />\
    <img src="styles/legend/InstitucionesEducativas_3_3.png" /> Básica Especial - Primaria<br />\
    <img src="styles/legend/InstitucionesEducativas_3_4.png" /> Inicial - Cuna Jardín<br />\
    <img src="styles/legend/InstitucionesEducativas_3_5.png" /> Inicial - Jardín<br />\
    <img src="styles/legend/InstitucionesEducativas_3_6.png" /> Inicial No Escolarizado<br />\
    <img src="styles/legend/InstitucionesEducativas_3_7.png" /> Instancia de Apoyo<br />\
    <img src="styles/legend/InstitucionesEducativas_3_8.png" /> Primaria<br />\
    <img src="styles/legend/InstitucionesEducativas_3_9.png" /> Secundaria<br />\
    <img src="styles/legend/InstitucionesEducativas_3_10.png" /> Superior Pedagógica<br />\
    <img src="styles/legend/InstitucionesEducativas_3_11.png" /> Superior Tecnológica<br />\
    <img src="styles/legend/InstitucionesEducativas_3_12.png" /> Técnico Productiva - CETPRO<br />\
    <img src="styles/legend/InstitucionesEducativas_3_13.png" /> <br />' });
var format_RVD_Eje_4 = new ol.format.GeoJSON();
var features_RVD_Eje_4 = format_RVD_Eje_4.readFeatures(json_RVD_Eje_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RVD_Eje_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RVD_Eje_4.addFeatures(features_RVD_Eje_4);
var lyr_RVD_Eje_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RVD_Eje_4, 
                style: style_RVD_Eje_4,
                popuplayertitle: 'RVD_Eje',
                interactive: true,
                title: '<img src="styles/legend/RVD_Eje_4.png" /> RVD_Eje'
            });
var format_RVV_Eje_5 = new ol.format.GeoJSON();
var features_RVV_Eje_5 = format_RVV_Eje_5.readFeatures(json_RVV_Eje_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RVV_Eje_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RVV_Eje_5.addFeatures(features_RVV_Eje_5);
var lyr_RVV_Eje_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RVV_Eje_5, 
                style: style_RVV_Eje_5,
                popuplayertitle: 'RVV_Eje',
                interactive: true,
                title: '<img src="styles/legend/RVV_Eje_5.png" /> RVV_Eje'
            });

lyr_OSMStandard_0.setVisible(true);lyr_ProvinciasdeLima_1.setVisible(true);lyr_Rios_Quebradas_2.setVisible(true);lyr_InstitucionesEducativas_3.setVisible(true);lyr_RVD_Eje_4.setVisible(true);lyr_RVV_Eje_5.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_ProvinciasdeLima_1,lyr_Rios_Quebradas_2,lyr_InstitucionesEducativas_3,lyr_RVD_Eje_4,lyr_RVV_Eje_5];
lyr_ProvinciasdeLima_1.set('fieldAliases', {'fid': 'fid', 'COUNT': 'Número de distritos de provinivia de Lima:', 'FIRST_IDPR': 'Código:', 'NOMBPROV': 'Nombre de la Provinvia de Lima:', 'FIRST_NOMB': 'Nombre del Departamento:', 'ha': 'Superficie de \'\'Ha\'\':', 'Enlaces': 'Enlace:', });
lyr_Rios_Quebradas_2.set('fieldAliases', {'fid': 'fid', 'Rasgo_Prin': 'Rasgo_Prin', 'Rasgo_Secu': 'Rasgo_Secu', 'Nombre': 'Nombres de Rios:', 'Longitud': 'Longitud', });
lyr_InstitucionesEducativas_3.set('fieldAliases', {'Nombre de SS.EE.': 'Nombre de la Institución Educativa:', 'Ubigeo': 'Ubigeo', 'Departamento': 'Departamento', 'Provincia': 'Provincia', 'Distrito': 'Distrito', 'Código DRE/UGEL': 'Código DRE/UGEL', 'Nivel / Modalidad': 'Nivel / Modalidad', 'Gestion / Dependencia': 'Gestion / Dependencia', 'Altitud': 'Altitud', 'Fuente de coordenadas': 'Fuente de coordenadas', });
lyr_RVD_Eje_4.set('fieldAliases', {'fid': 'fid', 'RODADURA': 'RODADURA', 'COD_DS11': 'COD_DS11', 'COD_DS12': 'COD_DS12', 'TRAY_DS12': 'TRAY_DS12', 'TRAY_DS11': 'TRAY_DS11', 'UBIGEO': 'UBIGEO', 'DEP': 'DEP', 'PROV': 'PROV', 'COD_DEP': 'COD_DEP', 'COD_PROV': 'COD_PROV', 'LONG_KM': 'LONG_KM', 'OBS': 'OBS', 'SENTIDO': 'SENTIDO', 'BASE': 'BASE', 'DATA': 'DATA', 'FECHA_ACTU': 'FECHA_ACTU', 'FUENTE': 'FUENTE', 'COD_RODADU': 'COD_RODADU', 'NOMBDIST': 'NOMBDIST', 'CAPITAL': 'CAPITAL', });
lyr_RVV_Eje_5.set('fieldAliases', {'fid': 'fid', 'COD_DS11': 'COD_DS11', 'COD_DS12': 'COD_DS12', 'TRAY_DS12': 'TRAY_DS12', 'TRAY_DS11': 'TRAY_DS11', 'UBIGEO': 'UBIGEO', 'DEP': 'DEP', 'PROV': 'PROV', 'COD_DEP': 'COD_DEP', 'COD_PROV': 'COD_PROV', 'LONG_KM': 'LONG_KM', });
lyr_ProvinciasdeLima_1.set('fieldImages', {'fid': 'TextEdit', 'COUNT': 'TextEdit', 'FIRST_IDPR': 'TextEdit', 'NOMBPROV': 'TextEdit', 'FIRST_NOMB': 'TextEdit', 'ha': 'TextEdit', 'Enlaces': 'TextEdit', });
lyr_Rios_Quebradas_2.set('fieldImages', {'fid': 'TextEdit', 'Rasgo_Prin': 'TextEdit', 'Rasgo_Secu': 'TextEdit', 'Nombre': 'TextEdit', 'Longitud': 'TextEdit', });
lyr_InstitucionesEducativas_3.set('fieldImages', {'Nombre de SS.EE.': 'TextEdit', 'Ubigeo': 'TextEdit', 'Departamento': 'TextEdit', 'Provincia': 'TextEdit', 'Distrito': 'TextEdit', 'Código DRE/UGEL': 'TextEdit', 'Nivel / Modalidad': 'TextEdit', 'Gestion / Dependencia': 'TextEdit', 'Altitud': 'TextEdit', 'Fuente de coordenadas': 'TextEdit', });
lyr_RVD_Eje_4.set('fieldImages', {'fid': 'TextEdit', 'RODADURA': 'TextEdit', 'COD_DS11': 'TextEdit', 'COD_DS12': 'TextEdit', 'TRAY_DS12': 'TextEdit', 'TRAY_DS11': 'TextEdit', 'UBIGEO': 'TextEdit', 'DEP': 'TextEdit', 'PROV': 'TextEdit', 'COD_DEP': 'TextEdit', 'COD_PROV': 'TextEdit', 'LONG_KM': 'TextEdit', 'OBS': 'TextEdit', 'SENTIDO': 'TextEdit', 'BASE': 'TextEdit', 'DATA': 'TextEdit', 'FECHA_ACTU': 'TextEdit', 'FUENTE': 'TextEdit', 'COD_RODADU': 'TextEdit', 'NOMBDIST': 'TextEdit', 'CAPITAL': 'TextEdit', });
lyr_RVV_Eje_5.set('fieldImages', {'fid': 'TextEdit', 'COD_DS11': 'TextEdit', 'COD_DS12': 'TextEdit', 'TRAY_DS12': 'TextEdit', 'TRAY_DS11': 'TextEdit', 'UBIGEO': 'TextEdit', 'DEP': 'TextEdit', 'PROV': 'TextEdit', 'COD_DEP': 'TextEdit', 'COD_PROV': 'TextEdit', 'LONG_KM': 'TextEdit', });
lyr_ProvinciasdeLima_1.set('fieldLabels', {'fid': 'no label', 'COUNT': 'header label - always visible', 'FIRST_IDPR': 'header label - always visible', 'NOMBPROV': 'header label - always visible', 'FIRST_NOMB': 'header label - always visible', 'ha': 'header label - always visible', 'Enlaces': 'header label - always visible', });
lyr_Rios_Quebradas_2.set('fieldLabels', {'fid': 'no label', 'Rasgo_Prin': 'header label - always visible', 'Rasgo_Secu': 'no label', 'Nombre': 'header label - always visible', 'Longitud': 'header label - always visible', });
lyr_InstitucionesEducativas_3.set('fieldLabels', {'Nombre de SS.EE.': 'header label - always visible', 'Ubigeo': 'header label - always visible', 'Departamento': 'no label', 'Provincia': 'no label', 'Distrito': 'header label - always visible', 'Código DRE/UGEL': 'header label - always visible', 'Nivel / Modalidad': 'header label - always visible', 'Gestion / Dependencia': 'no label', 'Altitud': 'header label - always visible', 'Fuente de coordenadas': 'header label - always visible', });
lyr_RVD_Eje_4.set('fieldLabels', {'fid': 'no label', 'RODADURA': 'no label', 'COD_DS11': 'no label', 'COD_DS12': 'no label', 'TRAY_DS12': 'header label - always visible', 'TRAY_DS11': 'header label - always visible', 'UBIGEO': 'no label', 'DEP': 'no label', 'PROV': 'no label', 'COD_DEP': 'no label', 'COD_PROV': 'no label', 'LONG_KM': 'header label - always visible', 'OBS': 'no label', 'SENTIDO': 'no label', 'BASE': 'no label', 'DATA': 'no label', 'FECHA_ACTU': 'no label', 'FUENTE': 'no label', 'COD_RODADU': 'no label', 'NOMBDIST': 'no label', 'CAPITAL': 'no label', });
lyr_RVV_Eje_5.set('fieldLabels', {'fid': 'no label', 'COD_DS11': 'no label', 'COD_DS12': 'no label', 'TRAY_DS12': 'header label - always visible', 'TRAY_DS11': 'header label - always visible', 'UBIGEO': 'no label', 'DEP': 'no label', 'PROV': 'no label', 'COD_DEP': 'no label', 'COD_PROV': 'no label', 'LONG_KM': 'header label - always visible', });
lyr_RVV_Eje_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});