/* global fetch */

console.log("yo"); //lol

document.getElementById("submitButton").addEventListener("click", function(event) {
    event.preventDefault();
    const value = document.getElementById("monsterInput").value;
    if (value === "") return;
    var modifiedValue = value.toLowerCase().split(" ").join("-");
    const url = "https://api.open5e.com/monsters/" + modifiedValue + "/?format=json";
    console.log(url);
    fetch(url).then(function(response) {
        return response.json();
    }).then(function(json) {
        console.log(json);
        let info = "";
        info += "<div>";
        
        //MONSTER HEADER -- name, size, type, alignment, challenge rating, ac, hp, walking/swimming/flying speed, STR/DEX/CON/INT/WIS
        info += "<h2 class=\"monsterHeader\">" + json.name + "</h2>";
      	info += "<p class=\"monsterHeader\"><text>" + json.size + " " + json.type + ", " + json.alignment + ", Challenge Rating - " + json.challenge_rating + "</text>";
      	info += "<br>"
      	info += "<text>Armor Class: " + json.armor_class + "</text><br>";
      	info += "<text>Hit Points: " + json.hit_points + "</text><br>";
      	info += "<text>Speed: " + json.speed.walk + "ft walking";
      	let swim = json.speed.swim;
      	if(swim)
      	    info += ", " + json.speed.swim + "ft swimming";
      	let fly = json.speed.fly;
      	if(fly)
      	    info += ", " + json.speed.fly + "ft flying";
      	info += "</text><br>"
      	info += "<text>| STR: " + json.strength + " | DEX: " + json.dexterity + " | CON: " + json.constitution + " | INT: " + json.intelligence + " | WIS: " + json.wisdom + " | CHA: " + json.charisma + " |</text><br>";
      	info += "</p>";
      	
      	//MONSTER INTRO INFO -- languages, senses, skills, vulnerabilities/resistances/immunities
      	info += "<p class=\"monsterIntro\">";
      	info += "<text>Languages: " + json.languages + "</text><br>";
      	info += "<text>Senses: " + json.senses + "</text><br>";
      	info += "<text>Skills: " + "</text><br>";
      	let skills = json.skills;
      	for(const skill in skills)
      	{
      	    info += "<text style=\"white-space:pre\">" + "&#9;" + skill + ": " + json.skills[skill] + "</text><br>";
      	}
      	info += "<text>Damage Vulnerabilities: " + json.damage_vulnerabilities + "</text><br>";
      	info += "<text>Damage Resistances: " + json.damage_resistances + "</text><br>";
      	info += "<text>Damage Immunities: " + json.damage_immunities + "</text><br>";
      	info += "<text>Condition Immunities: " + json.condition_immunities + "</text><br>";
      	info += "</p>"
      	
      	//MONSTER ACTION INFO -- actions, reactions, legendary_desc, legendary_actions, special_abilities, spell_list
      	info += "<br><br>"
      	info += "<p class=\"monsterActions\">";
      	
      	//LEGENDARY ACTIONS
      	if(json.legendary_actions.length != 0)
      	{
      	    info += "<p style=\"text-align:center; font-weight:bold\"><u>Legendary Actions:</u><br> " + json.legendary_desc + "</p><br>";
      	    info += "<p>"
      	    for(let i = 0; i < json.legendary_actions.length; i++)
      	    {
      	        info += "<text class=\"actionHeader\">" + json.legendary_actions[i].name + "</text><br>";
      	        info += "<text class=\"actionBody\">" + json.legendary_actions[i].desc + "</text><br><br>";
      	    }
      	    info += "</p>";
      	}
      	info += "<br><br>";
      	
      	//ACTIONS
      	if(json.actions.length != 0)
      	{
      	    info += "<p style=\"text-align:center; font-weight:bold\"><u>Actions:</u>" + "</p><br>";
      	    info += "<p>"
      	    for(let i = 0; i < json.actions.length; i++)
      	    {
      	        info += "<text class=\"actionHeader\">" + json.actions[i].name + "</text><br>";
      	        info += "<text class=\"actionBody\">" + json.actions[i].desc + "</text><br><br>";
      	    }
      	    info += "</p>";
      	}
      	info += "<br><br>";
      	
      	//SPELLS
      	if(json.spell_list.length != 0)
      	{
      	    info += "<p style=\"text-align:center; font-weight:bold\"><u>Spells:</u>" + "</p><br>";
      	    for(let i = 0; i < json.spell_list.length; i++)
      	    {
      	        //another fetch for spells
      	        const url = json.spell_list[i];
      	        let spellName = url.substring(30);
      	        let nextIndex = spellName.indexOf('/');
      	        spellName = spellName.substring(0, nextIndex);
                let link = "https://www.dndbeyond.com/spells/" + spellName;
                info += "<a href=\"" + link + "\">" + spellName + "</a><br>";
      	    }
      	}
      	info += "<br><br>";
      	
      	
      	info += "</p>"; //end of MONSTER ACTION INFO
      	
      	
      	
      	info += "</div>";
      	document.getElementById("monsterData").innerHTML = info;
    }).catch((error) => {
        document.getElementById("monsterData").innerHTML = "<h2 class=\"monsterHeader\">Monster Not Found :(</h2>";
    });
});