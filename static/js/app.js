const statsObj = {
    background: "None",
    career: "None",
    interests: "None",
    faction: "None",
    aptitude_template: "None",
    morph: "None"
};

let selectedBgOption;
let selectedIntOption;
let selectedCarOption;

let tempStr = "";

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

$("#aptitude_template").change(function(evt) {
    
    let str = evt.target.value;
      if (str != "--- Select One ---"){
         get_aptitude_template(str);
      }
      async function get_aptitude_template(str){
        let request = await axios.get('https://ep2-data-api.herokuapp.com/aptitudes/templates');
        let templates = request.data
        for (let i=0; i < templates.length; i++){
            if (templates[i].name == str){
                for (let aptitude in templates[i].aptitudes){
                    $(`#${aptitude}`).html(`<div class="row"><div class="col text-center"><strong>${aptitude.slice(0,3).toUpperCase()}</strong></div></div><div><h4>${templates[i].aptitudes[aptitude]}</h4> <div class="my-3 g-body-secondary rounded-end border border-info"></div> <h4>${templates[i].aptitudes[aptitude] * 3}</h4></div>`)
                }
                $(`#initiative`).html(`<div class="row"><div class="col text-center">Initiative</div></div><div><h4>${(templates[i].aptitudes.reflexes + templates[i].aptitudes.intuition)/5}</h4></div>`)
                $(`#lucidity`).html(`<div class="row"><div class="col text-center">Lucidity</div></div><div><h4>${templates[i].aptitudes.willpower * 2}</h4></div>`)
                $(`#trauma_threshold`).html(`<div class="row"><div class="col text-center">Trauma Threshold</div></div><div><h4>${(templates[i].aptitudes.willpower * 2)/5}</h4></div>`)
                $(`#insanity_rating`).html(`<div class="row"><div class="col text-center">Insanity Rating</div></div><div><h4>${(templates[i].aptitudes.willpower * 2)*2}</h4></div>`)
            }
        }
    }
  }).change();
  
$("#morph").change(function(evt) {

let str = evt.target.value;
    if (str != "--- Select One ---"){
        get_aptitude_template(str);
    }
    async function get_aptitude_template(str){
    let request = await axios.get('https://ep2-data-api.herokuapp.com/morphs');
    let morphs = request.data
    for (let i=0; i < morphs.length; i++){
        if (morphs[i].name == str){
            $(`#insight`).html(`<strong>Insight</strong><h4>${morphs[i].pools.insight}</h4>`);
            $(`#moxie`).html(`<strong>Moxie</strong><h4>${morphs[i].pools.moxie}</h4>`);
            $(`#vigor`).html(`<strong>Vigor</strong><h4>${morphs[i].pools.vigor}</h4>`);
            $(`#flex`).html(`<strong>Flex</strong><h4>${morphs[i].pools.flex + 1}</h4>`);
            
            $(`#wound-threshold`).html(`<strong>Would Threshold</strong><h4>${morphs[i].wound_threshold}</h4>`);
            $(`#durability`).html(`<strong>Durability</strong><h4>${morphs[i].durability}</h4>`);
            $(`#death-rating`).html(`<strong>Death Rating</strong><h4>${morphs[i].death_rating}</h4>`);
            $(`#morph-name`).html(`<strong>Morph Name:</strong> ${morphs[i].name}`);

            $(`#movement-rate`).html(`<strong>Movement Rate:</strong> ${morphs[i].movement_rate[0].base} / ${morphs[i].movement_rate[0].full}`);
            $(`#ware-list`).empty();
            $(`#ware`).html(`<strong>Ware:</strong>`)
            for (let w = 0; w < morphs[i].ware.length; w++){
                $(`#ware-list`).append(`<p>${morphs[i].ware[w]}</p>`);
            }
        }
    }
}
}).change();

$("#background").change(function(evt) {
    
    let str = evt.target.value;
    let selectNum = 0;
      
      if (str != selectedBgOption) {
        if (str != "--- Select One ---" ){
           get_background_template_neg(selectedBgOption);
           get_background_template(str);
           selectedBgOption = str;
        }
        async function get_background_template_neg(str){
          let request = await axios.get('https://ep2-data-api.herokuapp.com/backgrounds');
          let backgrounds = request.data;
          for (let i=0; i < backgrounds.length; i++){
              if (backgrounds[i].name == str){
                for (let skill in backgrounds[i].skills){
                    if (backgrounds[i].skills[skill].name == "know"){
                        for (let option in backgrounds[i].skills[skill].options){
                            $(`#${backgrounds[i].skills[skill].options[option].toLowerCase().replace(/ /g,'')}`).remove();
                            $(`#bg-know-row`).empty();
                        } 
                    }
                    else {
                        let value = parseInt($(`#${backgrounds[i].skills[skill].name.toLowerCase()}_value`).text());
                        if (value != 0){value -= backgrounds[i].skills[skill].rating;}
                        $(`#${backgrounds[i].skills[skill].name.toLowerCase()}_value`).html(`${value}`);
                    }
                  }
              }
          }
      }
      }
      async function get_background_template(str){
        let request = await axios.get('https://ep2-data-api.herokuapp.com/backgrounds');
        let backgrounds = request.data;
        for (let i=0; i < backgrounds.length; i++){
            if (backgrounds[i].name == str){
                for (let skill in backgrounds[i].skills){
                    if (backgrounds[i].skills[skill].name == "know"){
                        if (backgrounds[i].skills[skill].options.length == 1){
                            newDiv = document.createElement("div");
                            newDiv.setAttribute("id", `${backgrounds[i].skills[skill].options[0].toLowerCase().replace(/ /g,'')}`);
                            newDiv.setAttribute("class", 'col-6 col-lg-3 py-1 me-1 border-bottom border-info');
                            $(`#${backgrounds[i].skills[skill].options[0].toLowerCase().replace(/ /g,'')}`).html(`${backgrounds[i].skills[skill].options[0]}`)
                            $("#bg-know-row").append(newDiv);
                            const h4 = document.createElement('h4')
                            h4.setAttribute("id", `${backgrounds[i].skills[skill].options[option].toLowerCase().replace(/ /g,'')}_value`)
                            h4.setAttribute("class", `h4 text-end align-bottom`)
                            $(`#${backgrounds[i].skills[skill].options[0].toLowerCase().replace(/ /g,'')}`).append(h4)
                            $(`#${backgrounds[i].skills[skill].options[0].toLowerCase().replace(/ /g,'')}_value`).html(`${backgrounds[i].skills[skill].rating}`)
                         }
                        else {
                            selectNum += 1;
                            let select = document.createElement("select")
                            select.setAttribute("id", `bg-know-select-${selectNum}`)
                            select.setAttribute("class", `select m-2`)
                            select.setAttribute("name", `bg-know-select-${selectNum}`)
                            $("#bg-know-row").append(select);
                            select.innerHTML = '<option value="--- Select One ---">--- Select One ---</option>'
                            let optionNum = 0;
                            for (let option in backgrounds[i].skills[skill].options){
                                optionNum += 1;
                                let newOption = document.createElement("option")
                                newOption.setAttribute("value", `${backgrounds[i].skills[skill].options[option]}`)
                                newOption.setAttribute("id", `${selectNum}-${optionNum}_option`)
                                $(`#bg-know-select-${selectNum}`).append(newOption);
                                $(`#${selectNum}-${optionNum}_option`).text(`${backgrounds[i].skills[skill].options[option]}`)
                        }
                    }}
                    else{
                        let value = parseInt($(`#${backgrounds[i].skills[skill].name.toLowerCase()}_value`).text());
                        value += backgrounds[i].skills[skill].rating;
                        $(`#${backgrounds[i].skills[skill].name.toLowerCase()}_value`).html(`${value}`);
                    }
                }
            }
        }
    }
  })

$("#interests").change(function(evt) {
    
    let str = evt.target.value;
      
      if (str != selectedIntOption) {
        if (str != "--- Select One ---" ){
           get_interests_template_neg(selectedIntOption);
           get_interests_template(str);
           selectedIntOption = str;
        }
        async function get_interests_template_neg(str){
          let request = await axios.get('https://ep2-data-api.herokuapp.com/interests');
          let interests = request.data;
          for (let i=0; i < interests.length; i++){
              if (interests[i].name == str){
                    for (let skill in interests[i].skills){
                        if (interests[i].skills[skill].name.toLowerCase() == "know"){
                            $(`#${interests[i].skills[skill].options[0].toLowerCase().replace(/ /g,'')}`).remove();
                            $(`#int-know-row`).empty();
                        }
                        else{
                            let value = parseInt($(`#${interests[i].skills[skill].name.toLowerCase()}_value`).text());
                        if (value != 0){value -= interests[i].skills[skill].rating;}
                        $(`#${interests[i].skills[skill].name.toLowerCase()}_value`).html(`${value}`);
                        }
                    }
              }
          }
      }
      }
      async function get_interests_template(str){
        let request = await axios.get('https://ep2-data-api.herokuapp.com/interests');
        let interests = request.data;
        for (let i=0; i < interests.length; i++){
            if (interests[i].name == str){
                for (let skill in interests[i].skills){
                    console.log(interests[i].skills[skill].name)
                    if (interests[i].skills[skill].name.toLowerCase() == "know"){
                        if ($(`#${interests[i].skills[skill].options[0].toLowerCase().replace(/ /g,'')}`).length == 0){
                            newDiv = document.createElement("div");
                            newDiv.setAttribute("id",`${interests[i].skills[skill].options[0].toLowerCase().replace(/ /g,'')}`);
                            newDiv.setAttribute("class", "col-3 col-lg-3 py-1 me-1 border-bottom border-info");
                            $('#int-know-row').append(newDiv);
                            $(`#${interests[i].skills[skill].options[0].toLowerCase().replace(/ /g,'')}`).text(`${interests[i].skills[skill].options[0]}`)
                            
                            newH4 = document.createElement("h4");
                            newH4.setAttribute("id",`${interests[i].skills[skill].options[0].toLowerCase().replace(/ /g,'')}_value`);
                            newH4.setAttribute("class",`h4 text-end`);
                            $(`#${interests[i].skills[skill].options[0].toLowerCase().replace(/ /g,'')}`).append(newH4);
                            $(`#${interests[i].skills[skill].options[0].toLowerCase().replace(/ /g,'')}_value`).text(`${interests[i].skills[skill].rating}`)
                        }
                        else if($(`#${interests[i].skills[skill].options[0].toLowerCase().replace(/ /g,'')}`).length > 0) {
                            let value = parseInt($(`#${interests[i].skills[skill].options[0].toLowerCase().replace(/ /g,'')}_value`).text());
                            value += interests[i].skills[skill].rating;
                            $(`#${interests[i].skills[skill].options[0].toLowerCase().replace(/ /g,'')}_value`).html(`${value}`);
                        }
                    }
                    else{
                        let value = parseInt($(`#${interests[i].skills[skill].name.toLowerCase()}_value`).text());
                        value += interests[i].skills[skill].rating;
                        $(`#${interests[i].skills[skill].name.toLowerCase()}_value`).html(`${value}`);
                    }
                }
            }
        }
    }
  })

$("#career").change(function(evt) {
    
    let str = evt.target.value;
    let selectNum = 0;
      
      if (str != selectedCarOption) {
        if (str != "--- Select One ---" ){
           get_career_template_neg(selectedCarOption);
           get_career_template(str);
           selectedCarOption = str;
        }
        async function get_career_template_neg(str){
          let request = await axios.get('https://ep2-data-api.herokuapp.com/careers');
          let careers = request.data;
          for (let i=0; i < careers.length; i++){
              if (careers[i].name == str){
                  for (let skill in careers[i].skills){
                    if (careers[i].skills[skill].name == "know"){
                        for (let option in careers[i].skills[skill].options){
                            $(`#${careers[i].skills[skill].options[option].toLowerCase().replace(/ /g,'')}`).remove();
                            $(`#car-know-row`).empty();
                        } 
                    }
                    else {
                        let value = parseInt($(`#${careers[i].skills[skill].name.toLowerCase()}_value`).text());
                        if (value != 0){value -= careers[i].skills[skill].rating;}
                        $(`#${careers[i].skills[skill].name.toLowerCase()}_value`).html(`${value}`);
                    }
                  }
              }
          }
      }
      }
    async function get_career_template(str){
        let request = await axios.get('https://ep2-data-api.herokuapp.com/careers');
        let careers = request.data;
        for (let i=0; i < careers.length; i++){
            if (careers[i].name == str){
                for (let skill in careers[i].skills){
                    if (careers[i].skills[skill].name == "know"){
                        if (careers[i].skills[skill].options.length == 1){
                            newDiv = document.createElement("div");
                            newDiv.setAttribute("id", `${careers[i].skills[skill].options[0].toLowerCase().replace(/ /g,'')}`);
                            newDiv.setAttribute("class", 'col-6 col-lg-3 py-1 me-1 border-bottom border-info');
                            $(`#${careers[i].skills[skill].options[0].toLowerCase().replace(/ /g,'')}`).html(`${careers[i].skills[skill].options[0]}`)
                            $("#car-know-row").append(newDiv);
                            const h4 = document.createElement('h4')
                            h4.setAttribute("id", `${careers[i].skills[skill].options[0].toLowerCase().replace(/ /g,'')}_value`)
                            h4.setAttribute("class", `h4 text-end align-bottom`)
                            $(`#${careers[i].skills[skill].options[0].toLowerCase().replace(/ /g,'')}`).append(h4)
                            $(`#${careers[i].skills[skill].options[0].toLowerCase().replace(/ /g,'')}_value`).html(`${careers[i].skills[skill].rating}`)
                         }
                        else {
                            selectNum += 1;
                            let select = document.createElement("select")
                            select.setAttribute("id", `car-know-select-${selectNum}`)
                            select.setAttribute("name", `car-know-select-${selectNum}`)
                            select.setAttribute("class", `select m-2`)
                            $("#car-know-row").append(select);
                            select.innerHTML = '<option value="--- Select One ---">--- Select One ---</option>'
                            let optionNum = 0;
                            for (let option in careers[i].skills[skill].options){
                                optionNum += 1;
                                let newOption = document.createElement("option")
                                newOption.setAttribute("value", `${careers[i].skills[skill].options[option]}`)
                                newOption.setAttribute("id", `car_${selectNum}-${optionNum}_option`)
                                $(`#car-know-select-${selectNum}`).append(newOption);
                                $(`#car_${selectNum}-${optionNum}_option`).text(`${careers[i].skills[skill].options[option]}`) 
                        }
                    }}
                    else{
                        let value = parseInt($(`#${careers[i].skills[skill].name.toLowerCase()}_value`).text());
                        value += careers[i].skills[skill].rating;
                        $(`#${careers[i].skills[skill].name.toLowerCase()}_value`).html(`${value}`);
                    }
                }
            }
        }
    }
  })

$("#bg-know-row").change(function(evt) {
    
    let str = evt.target.value;
    if (str != tempStr) {
    if (str != "--- Select One ---" ){
        get_bg_know_neg();
        get_bg_know(str);
    }

    function get_bg_know_neg(){
        if ($(`#${evt.target.id}_skill`).length > 0){
            $(`#${evt.target.id}_skill`).remove();
        }
        tempStr = str;
      }
    }

    function get_bg_know(str){
        if ($(`#${evt.target.id}_skill`).length == 0) {
            const newDiv = document.createElement("div");
            newDiv.setAttribute("id", `${evt.target.id}_skill`);
            newDiv.setAttribute("class", `col-6 col-lg-3 py-1 me-1 border-bottom border-info`)
            $('#bg-know-row').append(newDiv)
            $(`#${evt.target.id}_skill`).html(`${str}`)
            const h4 = document.createElement('h4')
            h4.setAttribute("id", `bg_skill_${str.toLowerCase().replace(/ /g,'')}_value`)
            h4.setAttribute("class", `h4 text-end align-bottom`)
            $(`#${evt.target.id}_skill`).append(h4)
            if( evt.target.id == "bg-know-select-1"){
                $(`#bg_skill_${str.toLowerCase().replace(/ /g,'')}_value`).html(`60`)
            }
            else {
                $(`#bg_skill_${str.toLowerCase().replace(/ /g,'')}_value`).html(`30`)
            }
            
        }
    }
})

$("#car-know-row").change(function(evt) {
    
    let str = evt.target.value;
    if (str != tempStr) {
    if (str != "--- Select One ---" ){
        get_car_know_neg();
        get_car_know(str);
    }

    function get_car_know_neg(){
        if ($(`#${evt.target.id}_skill`).length > 0){
            $(`#${evt.target.id}_skill`).remove();
        }
        tempStr = str;
      }
    }

    function get_car_know(str){
        if ($(`#${evt.target.id}_skill`).length == 0) {
            const newDiv = document.createElement("div");
            newDiv.setAttribute("id", `${evt.target.id}_skill`);
            newDiv.setAttribute("class", `col-6 col-lg-3 py-1 me-1 border-bottom border-info`)
            $('#car-know-row').append(newDiv)
            $(`#${evt.target.id}_skill`).html(`${str}`)
            const h4 = document.createElement('h4')
            h4.setAttribute("id", `car_skill_${str.toLowerCase().replace(/ /g,'')}_value`)
            h4.setAttribute("class", `h4 text-end align-bottom`)
            $(`#${evt.target.id}_skill`).append(h4)
            if( evt.target.id == "car-know-select-1"){
                $(`#car_skill_${str.toLowerCase().replace(/ /g,'')}_value`).html(`60`)
            }
            else {
                $(`#car_skill_${str.toLowerCase().replace(/ /g,'')}_value`).html(`30`)
            }
        }
    }
})

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
        load_stats_nav();
    }
    else if (windowLoc == "/backgrounds" || windowLoc == "/careers" || windowLoc == "/factions" || windowLoc == "/interests" || windowLoc == "/skills" || windowLoc == "/reputations") {
        load_backgrounds();
        load_stats_nav();
    }
    else if (windowLoc == "/sleights") {
        load_sleights();
        load_stats_nav();
    }
    else if (windowLoc == "/traits") {
        load_traits();
        load_stats_nav();
    }
    else if (windowLoc == "/pools") {
        load_pools();
        load_stats_nav();
    }
    else if (windowLoc.indexOf("morphs/") > -1) {
        load_morph_types();
        load_morphs_nav();
    }
    else if (windowLoc == "/characters/add") {
        load_bg_list();
        load_career_list();
        load_faction_list();
        load_aptitude_template_list();
        load_interest_list();
        load_morph_list();
    }
    else if (windowLoc.indexOf("gear") > -1) {
        load_category_gear();
        load_gear_types_nav(data);
    }
    else {
        load_stats_nav();
    }
    
})