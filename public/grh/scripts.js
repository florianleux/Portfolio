// Using leaflet.js to pan and zoom a big image.
// See also: http://kempe.net/blog/2014/06/14/leaflet-pan-zoom-image.html


// Ink layer

var map = L.map('image-map').setView([0, 0], 1);
var ink_layer = L.tileLayer('ink_layer/{z}/{x}/{y}.png', {
    id: "ink",
    minZoom: 0,
    maxZoom: 5,
    attribution: 'Dessin et couleur&nbsp;: <a href="https://twitter.com/toysovore">Toysovore</a> - &#169; mauvaiscoupos 2017',
    tms: true,
    // This map option disables world wrapping. by default, it is false.
    continuousWorld: false,
    // This option disables loading tiles outside of the world bounds.
    noWrap: true
});
ink_layer.addTo(map);

// Color layer

var color_layer = L.tileLayer('color_layer/{z}/{x}/{y}.png', {
    id: "color",
    minZoom: 0,
    maxZoom: 5,
    attribution: 'Dessin et couleur&nbsp;: <a href="https://twitter.com/toysovore">Toysovore</a> - &#169; mauvaiscoupos 2017',
    tms: true,
    // This map option disables world wrapping. by default, it is false.
    continuousWorld: false,
    // This option disables loading tiles outside of the world bounds.
    noWrap: true
});
color_layer.addTo(map);

// Refs layer

var geojsonMarkerOptions = {
    className: "ref",
    radius: 7,
    fillColor: "#ff1c87",
    color: "#fff",
    weight: 2,
    opacity: 1,
    fillOpacity: 0.6
};

var refs_layer = L.geoJSON(refs, {
    pointToLayer: function (feature, latlng) {
        var marker = L.circleMarker(latlng, geojsonMarkerOptions);
        var prop = feature.properties;
        var titre = prop.url_dico === null ? "<span class='titre'>" + prop.nom + "</span><br />" : "<span class='titre'><a target='_blank' href='" + prop.url_dico + "'>" + prop.nom + "</a></span><br />";
        var def = prop.def === null ? "" : prop.def + "<br />";
        var source = prop.source === null ? "" : "<span class='source'><em>Source</em> : " + prop.source + "</span>"; 
        //var marker = L.marker(latlng);
        marker.bindPopup(titre + def + source);
        marker.bindTooltip(prop.nom, {direction: "top", className: "reftooltip"});
        marker.on('click', function() { this.closeTooltip(); });
        return marker;
    }
});


// Audio layer

var sounds = {};
sounds["agamemnon1"] = new Audio("mp3/AGAMEMNON_CADUM.mp3");
sounds["agamemnon2"] = new Audio("mp3/AGAMEMNON_PP.mp3");
sounds["agamemnon3"] = new Audio("mp3/AGAMEMNON_HM.mp3");
var mp3s = ["Antilles_de_mon_enfance.mp3",  "Enfance_Parisienne.mp3", "Patcholaise.mp3", "Sylvain_le_comptable.mp3",
 "Tout_va_bien_quand_tu_te_marres.mp3", "Cannes_Cocktail.mp3", "Le_grand_coureur.mp3", "patchole.mp3",
  "Tonton_Lenone.mp3", "Un_homme_Heureux.mp3", "Elton_John.mp3", "Le_printemps.mp3", "Prince-Scandalous_2_soundcut.info.mp3",
  "Patchole_unplugged_chinito.mp3", "Tonton_Lenone_une_note.mp3",  "yesterday.mp3", "micoulin.mp3"]

mp3s.forEach(function(mp3) {
    sounds[mp3] = new Audio("mp3/" + mp3);
})

var circle_options = {    
    className: 'audioref',
    color: '#ffffff',
    fillColor: 'cyan',
    weight: 2,
    fillOpacity: 0,
    opacity: 0,
    radius: 10
};

var audio_layer = L.layerGroup();

function add_audio_circle(id, coords) {
   var circle = L.circleMarker(coords, circle_options).addTo(audio_layer);
   circle.bindTooltip("Écouter", {direction: "top", className: "audiotooltip"});
   circle.on('click', function() {
           for (key in sounds) {
             if (key == id) continue;
             if (!sounds[key].paused) sounds[key].pause();
           };
           audio = sounds[id];
           if (audio.paused) audio.play();
           else audio.pause();
   });
}

add_audio_circle("Tout_va_bien_quand_tu_te_marres.mp3", [-44.150681159780916,-54.4921875]);
add_audio_circle("Tout_va_bien_quand_tu_te_marres.mp3", [-44.46515101351963,0.703125]);
add_audio_circle("Enfance_Parisienne.mp3", [29.458731185355344,-28.564453125000004]);
add_audio_circle("Antilles_de_mon_enfance.mp3", [71.41317683396566,92.373046875]);
add_audio_circle("Patchole_unplugged_chinito.mp3", [-20.797201434306984,-21.26953125]);
add_audio_circle("Sylvain_le_comptable.mp3", [-73.35305494105975,-45.263671875]);
add_audio_circle("Sylvain_le_comptable.mp3", [-73.42842364106816,-34.54101562500001]);
add_audio_circle("Tonton_Lenone.mp3", [44.24519901522129,-41.35253906250001]);
add_audio_circle("Le_printemps.mp3", [-67.7760253890732,18.544921875000004]);
add_audio_circle("Le_printemps.mp3", [-67.7094454829218,59.67773437500001]);
add_audio_circle("Cannes_Cocktail.mp3", [-44.84029065139799,59.41406250000001]);
add_audio_circle("Un_homme_Heureux.mp3", [43.929549935614595,37.13378906250001]);
add_audio_circle("Patcholaise.mp3", [-3.688855143147035,29.619140625000004]);
add_audio_circle("Patcholaise.mp3", [-7.100892668623642,46.845703125]);
add_audio_circle("Elton_John.mp3", [8.754794702435618,9.667968750000002]);
add_audio_circle("Elton_John.mp3", [9.275622176792112,53.78906250000001]);
add_audio_circle("micoulin.mp3", [49.89463439573421,-49.306640625]);
add_audio_circle("yesterday.mp3", [-83.82049175443144,25.751953125000004]);
add_audio_circle("Prince-Scandalous_2_soundcut.info.mp3", [-73.71427576088443,30.190429687500004]);

audio_layer.addTo(map);

// Layers control

var baseMaps = {
    "Encrage": ink_layer,
    "Couleur": color_layer
};

var layerMaps = {
    "Références": refs_layer
};

L.control.layers(baseMaps, layerMaps).addTo(map);

map.on('click', function(ev) {
    console.log("---"); 	
    console.log(ev.latlng.lat + "," + ev.latlng.lng); 
});

var agam = new Konami(function() { 
    document.getElementById('agamemnon').setAttribute("style", "display: block;");
    setTimeout(function() {
       document.getElementById('agamemnon').setAttribute("style", "display: none;");
    }, 8000); // <-- time in milliseconds
});

// OVERLAY

setTimeout(function() {
    document.getElementById('overlay').setAttribute("style", "opacity: 0;");
}, 5000); // <-- time in milliseconds


// Easter egg Agamemnon

var agam_id = 1
var seq = 'agamemnon';
var input = '';
window.addEventListener('keypress', function(e) {
    input += e.key;
    // If the queue is longer than the target sequence remove the first character
    if(input.length > seq.length) {
        input = input.substr(1);
    }
    // Check for a match
    if(input == seq) {
        var id = "agamemnon" + (agam_id++ % 3 + 1);
        sounds[id].play();
        alert("AGAMEMNON !")
    }
})



