
var health = 100
var hits = 0
var name = "Bronco Player"

function Player(name, health, hits) {
    this.name = name
    this.health = health
    this.hits = hits
    this.items = []
}

var footballPlayer = new Player('Bronco Player', 100, 0)
var Jaime = new Player('Jaime', 10, 10)

function Item(name, modifier, description) {
    this.name = name
    this.modifier = modifier
    this.description = description
}

var items = {
    soft: new Item("Soft", .5, "Just a little softer than normal"),
    poison: new Item("Poison", 2, "Hurts the player from the inside"),
    powerUp: new Item("Super", 5, "this makes you hit harder")
}

// function giveItem() {
//     footballPlayer.items.push(items.shield, items.potion, items.powerUp)
// }
// giveItem()

function addMods(player) {
    var totalMods = 1
    for (var i = 0; i < player.items.length; i++) {
        var increaseMod = player.items[i].modifier
        if (increaseMod > 0) {
            totalMods = increaseMod
        }else{
            totalMods
        }
    }
    return totalMods
}
// addMods(footballPlayer)

function slap(playerChoice) {                 //function slap(playerChoice, target) - to target certain player
    if (footballPlayer.health > 0) {
        if (playerChoice === 'Slap') {
            footballPlayer.health -= 1 * addMods(footballPlayer)
        } else if (playerChoice === 'Punch') {
            footballPlayer.health -= 10 * addMods(footballPlayer)
        } else if (playerChoice === 'Kick') {
            footballPlayer.health -= 10 * addMods(footballPlayer)
        } else {
            footballPlayer.health -= 50 * addMods(footballPlayer)
        }
        footballPlayer.hits++
        update()
    }
}

update()

function equipItem(playerChoice) {
    var output = ""
    if (playerChoice === 'Soft') {
        output = footballPlayer.items.push(items.soft)
    } else if (playerChoice === 'Super') {
        output = footballPlayer.items.push(items.powerUp)
    } else {
        output = footballPlayer.items.push(items.poison)
    }
    return output
}



function update() {
    document.getElementById("name").innerHTML = footballPlayer.name
    document.getElementById("health").innerHTML = footballPlayer.health
    document.getElementById("hits").innerHTML = footballPlayer.hits
}
