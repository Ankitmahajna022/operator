//Scenario: You are developing a game inventory system where a player can collect items and upgrade weapons.
//Task:
//Create a Player class with methods collectItem(item), upgradeWeapon(level), and showInventory().
//Implement method chaining so that player.collectItem("sword").upgradeWeapon(2).showInventory(); works.

class Player {
    collectItem(item) {
        this.item = item;
        return this;
    }
    upgradeWeapon(level) {
        this.level = level;
        return this;
    }
    showInventory() {
        document.writeln(`Item: ${this.item}, Level: ${this.level}`);
    }
}

const player = new Player();    
player.collectItem("sword").upgradeWeapon(5).showInventory();

