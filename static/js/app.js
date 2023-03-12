$('btn').click(function() { window.location=`/gear/category/${self.id}`; });

$(async function() {
    let response = await axios.get('https://ep2-data-api.herokuapp.com/gear/categories');
    data = response.data
    let windowLoc = $(location).attr('pathname');
    load_gear_types_nav(data);
    if (windowLoc == "/gear/categories"){
        load_gear_types(data);
    }
    else if (windowLoc == "/aptitudes") {
        load_aptitudes();
    }
    else if (windowLoc == "/backgrounds" || windowLoc == "/careers" || windowLoc == "/factions" || windowLoc == "/interests" || windowLoc == "/skills" || windowLoc == "/reputations") {
        load_backgrounds();
    }
    else if (windowLoc == "/sleights") {
        load_sleights();
    }
    else if (windowLoc == "/traits") {
        load_traits();
    }
    else if (windowLoc == "/pools") {
        load_pools();
    }
    else if (windowLoc == "/morphs/types") {
        load_morph_types();
    }
    else {
        load_category_gear();
    }
    
})