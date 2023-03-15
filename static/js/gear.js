async function load_category_gear(){
    let windowLoc = $(location).attr('pathname');
    let response;
    if (windowLoc == "/gear/categories/ranged%20weapons"){
        response = await axios.get(`https://ep2-data-api.herokuapp.com/gear/categories/ranged_weapons`)
    }
    else if (windowLoc == "/gear/categories/melee%20weapons"){
        response = await axios.get(`https://ep2-data-api.herokuapp.com/gear/categories/melee_weapons`)
    }
    else {
        response = await axios.get(`https://ep2-data-api.herokuapp.com/${window.location.pathname}`)
    }
    
    let gear = response.data;
    const gear_list = document.getElementById("gear-list")
    
    for (let i = 0; i < Object.keys(gear).length; i++) {
        
        let tr = document.createElement("tr");
        tr.setAttribute("id", `row_${gear[i].name}`)
        gear_list.append(tr);
        let gearTr = document.getElementById(`row_${gear[i].name}`);
        
        let td = document.createElement("td");
        td.setAttribute("id", `title_${gear[i].name}`)
        gearTr.append(td)
        let gearTd = document.getElementById(`title_${gear[i].name}`);
        

        let a = document.createElement("a");
        a.setAttribute("id", `link_${gear[i].name}`)
        a.setAttribute("href", `/gear/categories/${gear[i].category.toLowerCase()}/${i}`)
        gearTd.append(a)
        let gearA = document.getElementById(`link_${gear[i].name}`);
        gearA.innerText = gear[i].name;

        let newTd = document.createElement("td");
        newTd.setAttribute("id", `complex_${gear[i].name}`)
        gearTr.append(newTd);
        let gearDesc = document.getElementById(`complex_${gear[i].name}`);
        gearDesc.innerHTML = gear[i]['complexity/gp'];
    }
}

async function load_gear_types(response){
    let gear = response
    const gear_list = document.getElementById("gear-list")
    
    for (let i = 0; i < Object.keys(gear).length; i++) {


        let tr = document.createElement("tr");
        tr.setAttribute("id", `row_${gear[i].name}`)
        gear_list.append(tr);
        let gearTr = document.getElementById(`row_${gear[i].name}`);
        
        let td = document.createElement("td");
        td.setAttribute("id", `title_${gear[i].name}`)
        gearTr.append(td)
        let gearTd = document.getElementById(`title_${gear[i].name}`);
        gearTd.innerText = gear[i].name;

        let newTd = document.createElement("td");
        newTd.setAttribute("id", `text_${gear[i].name}`)
        gearTr.append(newTd);
        let gearDesc = document.getElementById(`text_${gear[i].name}`);
        gearDesc.innerHTML = gear[i].text;
    }
}

async function load_gear_types_nav(response){
    gear_types = response;
    let leftNav = document.getElementById("left-nav");
    for (let i = 0; i < Object.keys(gear_types).length; i++){
        let name = gear_types[i].name
        let btn = document.createElement("a");
        leftNav.append(btn);
        btn.setAttribute("class", "btn my-1 px-3 btn-outline-info");
        btn.setAttribute("id", name);
        btn.setAttribute("href", `/gear/categories/${name.toLowerCase()}`);
        let gearTypeBtn = document.getElementById(name);
        gearTypeBtn.innerText = name;
    }
}

async function load_stats_nav(){
    let response = await axios.get(`https://ep2-data-api.herokuapp.com/${window.location.pathname}`)
    stats = response.data;
    console.log(stats)
    let leftNav = document.getElementById("left-nav");
    for (let i = 0; i < Object.keys(stats).length; i++){
        let name = stats[i].name
        let btn = document.createElement("a");
        leftNav.append(btn);
        btn.setAttribute("class", "btn my-1 px-3 btn-outline-info");
        btn.setAttribute("id", name);
        btn.setAttribute("href", `${window.location.pathname}/${i}`);
        let gearTypeBtn = document.getElementById(name);
        gearTypeBtn.innerText = name;
    }
}