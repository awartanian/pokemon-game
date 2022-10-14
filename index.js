let getMagicSoundConfirm = new Audio();
let getMagicSoundReject = new Audio();
let ignore = new Audio();

class Pokemon {
  constructor(name, health, totalMagic) {
    this.name = name;
    this.health = health;
    this.totalMagic = totalMagic;
    this.skills = [];
    this.healthElement;
    this.coinsElement;
    this.magicElement;
    this.totalCoins = 0;
  }

  initCharacter() {
    this.healthElement.textContent = this.health;
    this.coinsElement.textContent = this.totalCoins;
    this.magicElement.textContent = this.totalMagic;
  }

  learnAttackSkill(attackObj) {
    this.skills.push(attackObj);
  }

  setHealthElement(element) {
    this.healthElement = element;
  }

  setCoinsElement(element) {
    this.coinsElement = element;
  }

  setMagicElement(element) {
    this.magicElement = element;
  }

  earnCoin() {
    this.totalCoins = this.totalCoins + 20;
    return this.totalCoins;
  }

  attack(key, target, attackSound) {
    if (this.totalMagic > this.skills[key].spellMagic) {
      const first = `The attack from ${this.name} on ${target.name} with ${this.skills[key].skill} was succesful! ${this.skills[key].damage} health will be deducted from ${target.name}! `;

      displayMessageElement.textContent = first;

      this.totalMagic = this.totalMagic - this.skills[key].spellMagic;
      attackSound.play();
      if (target.health > 0) {
        target.health = target.health - this.skills[key].damage;
        if (target.health < 0) {
          target.health = 0;
          const third = `${target.name} is defeated!`;
          displayMessageElement.textContent = third;
        }
        this.earnCoin();
        this.coinsElement.innerHTML = this.totalCoins;
        target.healthElement.innerHTML = target.health;
        this.magicElement.innerHTML = this.totalMagic;
      }
    } else {
      const firstElse = `Not enough Stardust to execute this attack! Please check if you have enough coins to earn Stardust!`;
      displayMessageElement.textContent = firstElse;
      getMagicSoundReject.src = "./Audio//Bind.mp3";
      getMagicSoundReject.play();
    }
  }

  getMagic() {
    if (this.totalCoins > 10) {
      let extraMagic = 20;
      this.totalMagic = this.totalMagic + 20;
      this.totalCoins = this.totalCoins - 20;
      this.magicElement.innerHTML = this.totalMagic;
      this.coinsElement.innerHTML = this.totalCoins;
      const getMagic = ` You recieved ${extraMagic} Stardust! => ${this.totalMagic}`;
      displayMessageElement.textContent = getMagic;
      getMagicSoundConfirm.src =
        "./Audio/Bubble.mp3";
      getMagicSoundConfirm.play();
    } else {
      const getMagicElse = `Sorry you need to earn more coins!`;
      displayMessageElement.textContent = getMagicElse;
      getMagicSoundReject.src = "./Audio/Bind.mp3";
      getMagicSoundReject.play();
    }
  }

  showStatus() {
    console.log(
      `${this.name} has currently ===> Health: ${this.health} and Magic: ${this.totalMagic}`
    );
    if (this.health <= 0) {
      console.log(`${this.name} is Defeated!`);
    }
  }
}

class AttackSkill {
  constructor(skill, damage, spellMagic) {
    this.skill = skill;
    this.damage = damage;
    this.spellMagic = spellMagic;
  }
}

//============================ Create the Pokemons =========================>

const pikachu = new Pokemon("Pikachu", 100, 50);
const bulbasaur = new Pokemon("Bulbasaur", 100, 50);
const charmander = new Pokemon("Charmander", 100, 50);
const mewtwo = new Pokemon("Mewtwo", 100, 50);

//============================ List Of Skills =========================>

const fist = new AttackSkill("fist", 10, 7);
const thunderShock = new AttackSkill("thunderShock", 12, 15);
const thunderWave = new AttackSkill("thunderWave", 35, 25);
const leechSeed = new AttackSkill("leechSeed", 12, 15);
const razorLeaf = new AttackSkill("razorLeaf", 35, 25);
const dragonBreath = new AttackSkill("dragonBreath", 12, 15);
const inferno = new AttackSkill("inferno", 35, 25);
const shadowBall = new AttackSkill("shadowBall", 12, 15);
const psychic = new AttackSkill("psychic", 35, 25);

//============================ Teach the Pokemons skills =========================>

pikachu.learnAttackSkill(fist);
pikachu.learnAttackSkill(thunderShock);
pikachu.learnAttackSkill(thunderWave);

bulbasaur.learnAttackSkill(fist);
bulbasaur.learnAttackSkill(leechSeed);
bulbasaur.learnAttackSkill(razorLeaf);

charmander.learnAttackSkill(fist);
charmander.learnAttackSkill(dragonBreath);
charmander.learnAttackSkill(inferno);

mewtwo.learnAttackSkill(fist);
mewtwo.learnAttackSkill(shadowBall);
mewtwo.learnAttackSkill(psychic);

//============================ Display message =========================>

let displayMessageElement = document.getElementById("display-Message");

//============================ Health update =========================>

let displayPikachuHealth = document.getElementById("healthUpdatePikachu");
pikachu.setHealthElement(displayPikachuHealth);

let displayBulbasaurHealth = document.getElementById("healthUpdateBulbasaur");
bulbasaur.setHealthElement(displayBulbasaurHealth);

let displayCharmanderHealth = document.getElementById("healthUpdateCharmander");
charmander.setHealthElement(displayCharmanderHealth);

let displayMewtwoHealth = document.getElementById("healthUpdateMewtwo");
mewtwo.setHealthElement(displayMewtwoHealth);

//============================ Magic update =========================>

let displayPikachuMagic = document.getElementById("magicUpdatePikachu");
pikachu.setMagicElement(displayPikachuMagic);

let displayBulbasaurMagic = document.getElementById("magicUpdateBulbasaur");
bulbasaur.setMagicElement(displayBulbasaurMagic);

let displayCharmanderMagic = document.getElementById("magicUpdateCharmander");
charmander.setMagicElement(displayCharmanderMagic);

let displayMewtwoMagic = document.getElementById("magicUpdateMewtwo");
mewtwo.setMagicElement(displayMewtwoMagic);

//============================ Coin update =========================>

let totalCoinsPikachu = document.getElementById("pikachuShowCoins");
pikachu.setCoinsElement(totalCoinsPikachu);
pikachu.initCharacter();

let totalCoinsBulbasaur = document.getElementById("bulbasaurShowCoins");
bulbasaur.setCoinsElement(totalCoinsBulbasaur);
bulbasaur.initCharacter();

let totalCoinsCharmander = document.getElementById("charmanderShowCoins");
charmander.setCoinsElement(totalCoinsCharmander);
charmander.initCharacter();

let totalCoinsMewtwo = document.getElementById("mewtwoShowCoins");
mewtwo.setCoinsElement(totalCoinsMewtwo);
mewtwo.initCharacter();

//============================ Skill audio sounds =========================>

let dragonBreathSound = new Audio();
dragonBreathSound.src = "./Audio/Dragon-breath.mp3";

let fireFangSound = new Audio();
fireFangSound.src = "./Audio/Fire-fang.mp3";

let fistSound = new Audio();
fistSound.src = "./Audio/Fist.mp3";

let infernoSound = new Audio();
infernoSound.src = "./Audio/Inferno.mp3";

let leechSeedSound = new Audio();
leechSeedSound.src = "./Audio/Leech-seed.mp3";

let psychicSound = new Audio();
psychicSound.src = "./Audio/Psychic.mp3";

let razorLeafSound = new Audio();
razorLeafSound.src = "./Audio/Razor-leaf.mp3";

let shadowBallSound = new Audio();
shadowBallSound.src = "./Audio/Shadow-ball.mp3";

let thunderShockSound = new Audio();
thunderShockSound.src = "./Audio/Thunder-shock.mp3";

let thunderWaveSound = new Audio();
thunderWaveSound.src = "./Audio/Thunder-wave.mp3";

//============================ General functions =========================>

function getMagic(pokemon) {
  return pokemon.getMagic();
}

function attackFunction(attacker, attackSkill, target, attackSound) {
  return attacker.attack(attackSkill, target, attackSound);
}

