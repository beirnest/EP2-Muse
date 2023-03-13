$('btn').click(function() { window.location=`/gear/category/${self.id}`; });

async function load_bg_list() {
    let request = await axios.get('https://ep2-data-api.herokuapp.com/backgrounds');
    var option_list = request.data;
    $("#background").append(
        $("<option></option>").attr(
            "value", "--- Select One ---").text("--- Select One ---")
    );

    for (var i = 0; i < option_list.length; i++) {
        $("#background").append(
            $("<option></option>").attr(
                "value", option_list[i].name).text(option_list[i].name)
        );
    }
};

async function load_career_list() {
    let request = await axios.get('https://ep2-data-api.herokuapp.com/careers');
    var option_list = request.data;
    $("#career").append(
        $("<option></option>").attr(
            "value", "--- Select One ---").text("--- Select One ---")
    );

    for (var i = 0; i < option_list.length; i++) {
        $("#career").append(
            $("<option></option>").attr(
                "value", option_list[i].name).text(option_list[i].name)
        );
    }
};

async function load_faction_list() {
    let request = await axios.get('https://ep2-data-api.herokuapp.com/factions');
    var option_list = request.data;
    $("#faction").append(
        $("<option></option>").attr(
            "value", "--- Select One ---").text("--- Select One ---")
    );

    for (var i = 0; i < option_list.length; i++) {
        $("#faction").append(
            $("<option></option>").attr(
                "value", option_list[i].name).text(option_list[i].name)
        );
    }
};

async function load_aptitude_template_list() {
    let request = await axios.get('https://ep2-data-api.herokuapp.com/aptitudes/templates');
    var option_list = request.data;
    $("#aptitude_template").append(
        $("<option></option>").attr(
            "value", "--- Select One ---").text("--- Select One ---")
    );

    for (var i = 0; i < option_list.length; i++) {
        $("#aptitude_template").append(
            $("<option></option>").attr(
                "value", option_list[i].name).text(option_list[i].name)
        );
    }
};

async function load_interest_list() {
    let request = await axios.get('https://ep2-data-api.herokuapp.com/interests');
    var option_list = request.data;
    $("#interests").append(
        $("<option></option>").attr(
            "value", "--- Select One ---").text("--- Select One ---")
    );

    for (var i = 0; i < option_list.length; i++) {
        $("#interests").append(
            $("<option></option>").attr(
                "value", option_list[i].name).text(option_list[i].name)
        );
    }
};

async function load_morph_list() {
    let request = await axios.get('https://ep2-data-api.herokuapp.com/morphs');
    var option_list = request.data;
    $("#morph").append(
        $("<option></option>").attr(
            "value", "--- Select One ---").text("--- Select One ---")
    );

    for (var i = 0; i < option_list.length; i++) {
        $("#morph").append(
            $("<option></option>").attr(
                "value", option_list[i].name).text(option_list[i].name)
        );
    }
};

$(async function() {
    let response = await axios.get('https://ep2-data-api.herokuapp.com/gear/categories');
    data = response.data
    let windowLoc = $(location).attr('pathname');
    if (windowLoc == "/gear/categories"){
        load_gear_types_nav(data);
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
    else if (windowLoc == "/characters/add") {
        load_bg_list();
        load_career_list();
        load_faction_list();
        load_aptitude_template_list();
        load_interest_list();
        load_morph_list();
    }
    else {
        load_category_gear();
        load_gear_types_nav(data);
    }
    
})