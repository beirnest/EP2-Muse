async function load_aptitudes(){
    let response = await axios.get(`https://ep2-data-api.herokuapp.com/${window.location.pathname}`);
    let aptitude = response.data;
    const aptitude_list = document.getElementById("aptitude-list")
    
    for (let i = 0; i < Object.keys(aptitude).length; i++) {


        let tr = document.createElement("tr");
        tr.setAttribute("id", `row_${aptitude[i].name}`)
        aptitude_list.append(tr);
        let aptitudeTr = document.getElementById(`row_${aptitude[i].name}`);
        
        let td = document.createElement("td");
        td.setAttribute("id", `title_${aptitude[i].name}`)
        aptitudeTr.append(td)
        let aptitudeTd = document.getElementById(`title_${aptitude[i].name}`);

        let a = document.createElement("a");
        a.setAttribute("id", `link_${aptitude[i].name}`)
        a.setAttribute("href", `/aptitudes/${i}`)
        aptitudeTd.append(a)
        let aptitudeA = document.getElementById(`link_${aptitude[i].name}`);
        aptitudeA.innerText = aptitude[i].name;

        let newTd = document.createElement("td");
        newTd.setAttribute("id", `abreviation_${aptitude[i].name}`)
        aptitudeTr.append(newTd);
        let aptitudeShortName = document.getElementById(`abreviation_${aptitude[i].name}`);
        aptitudeShortName.innerHTML = aptitude[i].short_name;


        let newNewTd = document.createElement("td");
        newNewTd.setAttribute("id", `desc_${aptitude[i].name}`)
        aptitudeTr.append(newNewTd);
        let aptitudeDesc = document.getElementById(`desc_${aptitude[i].name}`);
        aptitudeDesc.innerHTML = aptitude[i].description;
    }
}

async function load_backgrounds(){
    let response = await axios.get(`https://ep2-data-api.herokuapp.com/${window.location.pathname}`);
    let background = response.data;
    const background_list = document.getElementById("background-list")
    
    for (let i = 0; i < Object.keys(background).length; i++) {


        let tr = document.createElement("tr");
        tr.setAttribute("id", `row_${background[i].name}`)
        background_list.append(tr);
        let backgroundTr = document.getElementById(`row_${background[i].name}`);
        
        let td = document.createElement("td");
        td.setAttribute("id", `title_${background[i].name}`)
        backgroundTr.append(td)
        let backgroundTd = document.getElementById(`title_${background[i].name}`);

        let a = document.createElement("a");
        a.setAttribute("id", `link_${background[i].name}`)
        a.setAttribute("href", `${window.location.pathname}/${i}`)
        backgroundTd.append(a)
        let backgroundA = document.getElementById(`link_${background[i].name}`);
        backgroundA.innerText = background[i].name;

        let newTd = document.createElement("td");
        newTd.setAttribute("id", `desc_${background[i].name}`)
        backgroundTr.append(newTd);
        let backgroundDesc = document.getElementById(`desc_${background[i].name}`);
        backgroundDesc.innerHTML = background[i].description;
    }
}

async function load_sleights(){
    let response = await axios.get(`https://ep2-data-api.herokuapp.com/${window.location.pathname}`);
    let sleights = response.data;
    const sleight_list = document.getElementById("sleight-list")
    
    for (let i = 0; i < Object.keys(sleights).length; i++) {


        let tr = document.createElement("tr");
        tr.setAttribute("id", `row_${sleights[i].name}`)
        sleight_list.append(tr);
        let sleightsTr = document.getElementById(`row_${sleights[i].name}`);
        
        let td = document.createElement("td");
        td.setAttribute("id", `title_${sleights[i].name}`)
        sleightsTr.append(td)
        let sleightsTd = document.getElementById(`title_${sleights[i].name}`);
        
        let a = document.createElement("a");
        a.setAttribute("id", `link_${sleights[i].name}`)
        a.setAttribute("href", `/sleights/${i}`)
        sleightsTd.append(a)
        let sleightsA = document.getElementById(`link_${sleights[i].name}`);
        sleightsA.innerText = sleights[i].name;

        let newTd = document.createElement("td");
        newTd.setAttribute("id", `lvl_${sleights[i].name}`)
        sleightsTr.append(newTd);
        let sleightsLvl = document.getElementById(`lvl_${sleights[i].name}`);
        sleightsLvl.innerHTML = sleights[i].level;

        let new1Td = document.createElement("td");
        new1Td.setAttribute("id", `action_${sleights[i].name}`)
        sleightsTr.append(new1Td);
        let sleightsAction = document.getElementById(`action_${sleights[i].name}`);
        sleightsAction.innerHTML = sleights[i].action;

        let new2Td = document.createElement("td");
        new2Td.setAttribute("id", `sum_${sleights[i].name}`)
        sleightsTr.append(new2Td);
        let sleightsSum = document.getElementById(`sum_${sleights[i].name}`);
        sleightsSum.innerHTML = sleights[i].summary;
    }
}

async function load_traits(){
    let response = await axios.get(`https://ep2-data-api.herokuapp.com/${window.location.pathname}`);
    let traits = response.data;
    const trait_list = document.getElementById("trait-list")
    
    for (let i = 0; i < Object.keys(traits).length; i++) {


        let tr = document.createElement("tr");
        tr.setAttribute("id", `row_${traits[i].name}`)
        trait_list.append(tr);
        let traitsTr = document.getElementById(`row_${traits[i].name}`);
        
        let td = document.createElement("td");
        td.setAttribute("id", `title_${traits[i].name}`)
        traitsTr.append(td)
        let traitsTd = document.getElementById(`title_${traits[i].name}`);

        let a = document.createElement("a");
        a.setAttribute("id", `link_${traits[i].name}`)
        a.setAttribute("href", `/traits/${i}`)
        traitsTd.append(a)
        let traitsA = document.getElementById(`link_${traits[i].name}`);
        traitsA.innerText = traits[i].name;

        let newTd = document.createElement("td");
        newTd.setAttribute("id", `cost_${traits[i].name}`)
        traitsTr.append(newTd);
        let traitsCost = document.getElementById(`cost_${traits[i].name}`);
        traitsCost.innerHTML = traits[i].cost;

        let new1Td = document.createElement("td");
        new1Td.setAttribute("id", `type_${traits[i].name}`)
        traitsTr.append(new1Td);
        let traitsAction = document.getElementById(`type_${traits[i].name}`);
        traitsAction.innerHTML = traits[i].type;

        let new2Td = document.createElement("td");
        new2Td.setAttribute("id", `sum_${traits[i].name}`)
        traitsTr.append(new2Td);
        let traitsSum = document.getElementById(`sum_${traits[i].name}`);
        traitsSum.innerHTML = traits[i].summary;

        let new3Td = document.createElement("td");
        new3Td.setAttribute("id", `ego_${traits[i].name}`)
        traitsTr.append(new3Td);
        let traitsEgo = document.getElementById(`ego_${traits[i].name}`);
        traitsEgo.innerHTML = traits[i].ego;

        let new4Td = document.createElement("td");
        new4Td.setAttribute("id", `morph_${traits[i].name}`)
        traitsTr.append(new4Td);
        let traitsMorph = document.getElementById(`morph_${traits[i].name}`);
        traitsMorph.innerHTML = traits[i].morph;
    }
}

async function load_pools(){
    let response = await axios.get(`https://ep2-data-api.herokuapp.com/${window.location.pathname}`);
    let pools = response.data;
    const pools_list = document.getElementById("pools-list")
    
    for (let i = 0; i < Object.keys(pools).length; i++) {


        let tr = document.createElement("tr");
        tr.setAttribute("id", `row_${pools[i].name}`)
        pools_list.append(tr);
        let poolsTr = document.getElementById(`row_${pools[i].name}`);
        
        let td = document.createElement("td");
        td.setAttribute("id", `title_${pools[i].name}`)
        poolsTr.append(td)
        let poolsTd = document.getElementById(`title_${pools[i].name}`);

        let a = document.createElement("a");
        a.setAttribute("id", `link_${pools[i].name}`)
        a.setAttribute("href", `/pools/${i}`)
        poolsTd.append(a)
        let poolsA = document.getElementById(`link_${pools[i].name}`);
        poolsA.innerText = pools[i].name;

        let newTd = document.createElement("td");
        newTd.setAttribute("id", `checks_${pools[i].name}`)
        poolsTr.append(newTd);
        let poolsShortName = document.getElementById(`checks_${pools[i].name}`);
        poolsShortName.innerHTML = pools[i].checks;
    }
}