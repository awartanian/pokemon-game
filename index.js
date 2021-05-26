let getMagicSoundConfirm = new Audio();
let getMagicSoundReject = new Audio();
let ignore = new Audio();

// hello!
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
    this.magicElement.textContent = this.totalMagic
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

  // numTotalCoins(){
  //   return this.coinsElement
  // }

  attack(key, target, attackSound) {

    // target.healthElement.classList.add('grow');
    // target.healthElement.classList.remove('grow');
    // setTimeout(() => {target.healthElement.classList.remove('grow');}, 2000);

    if (this.totalMagic > this.skills[key].spellMagic) {
      const first = `The attack from ${this.name} on ${target.name} with ${this.skills[key].skill} was succesful! ${this.skills[key].damage} health will be deducted from ${target.name}! `;
      
      displayMessageElement.textContent = first;

      this.totalMagic = this.totalMagic - this.skills[key].spellMagic;
      attackSound.play();
      if (target.health > 0) {

        target.health = target.health - this.skills[key].damage
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

    }
    else {

      const firstElse = `Not enough Stardust to execute this attack! Please check if you have enough coins to earn Stardust!`;
      displayMessageElement.textContent = firstElse;
      getMagicSoundReject.src = "./Audio/Selection /Bind (mp3cut.net)-3.mp3"
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
      const getMagic = ` You recieved ${extraMagic} Stardust! => ${this.totalMagic}`
      displayMessageElement.textContent = getMagic;
      getMagicSoundConfirm.src = "./Audio/Selection /5-58 Bubble (mp3cut.net).mp3";
      getMagicSoundConfirm.play();
    } else {
      const getMagicElse = `Sorry you need to earn more coins!`
      displayMessageElement.textContent = getMagicElse;
      getMagicSoundReject.src = "./Audio/Selection /Bind (mp3cut.net)-3.mp3";
      getMagicSoundReject.play();
    }
  }

  showStatus() {
    console.log(
      `${this.name} has currently ===> Health: ${this.health} and Magic: ${this.totalMagic}`
    );
    if (this.health <= 0) {
      console.log(`${this.name} is Defeated!`)
    }
  }
};

class AttackSkill {
  constructor(skill, damage, spellMagic) {
    this.skill = skill;
    this.damage = damage;
    this.spellMagic = spellMagic;
  }
}
const pikachu = new Pokemon("Pikachu", 100, 50); //2000
const bulbasaur = new Pokemon("Bulbasaur", 100, 50); //2000
const charmander = new Pokemon("Charmander", 100, 50); //2000
const mewtwo = new Pokemon("Mewtwo", 100, 50); //2000

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


//==========================Test Function ============>



//============================ Link to Html=========================>


let displayMessageElement = document.getElementById('display-Message');
//let displayHealth = document.getElementById("healthUpdatePikachu")



//==========================Health Update  ============>
let displayPikachuHealth = document.getElementById("healthUpdatePikachu");
pikachu.setHealthElement(displayPikachuHealth);



let displayBulbasaurHealth = document.getElementById("healthUpdateBulbasaur");
bulbasaur.setHealthElement(displayBulbasaurHealth);


let displayCharmanderHealth = document.getElementById("healthUpdateCharmander");
charmander.setHealthElement(displayCharmanderHealth);


let displayMewtwoHealth = document.getElementById("healthUpdateMewtwo");
mewtwo.setHealthElement(displayMewtwoHealth);


//==========================Magic Update  ============>

let displayPikachuMagic = document.getElementById("magicUpdatePikachu")
pikachu.setMagicElement(displayPikachuMagic)
// displayPikachuHealth.classList.add('some-class');
// displayPikachuHealth.classList.add('some-class-2');
// displayPikachuHealth.classList.add('blabla');
// displayPikachuHealth.classList.remove('some-class');


let displayBulbasaurMagic = document.getElementById("magicUpdateBulbasaur")
bulbasaur.setMagicElement(displayBulbasaurMagic)


let displayCharmanderMagic = document.getElementById("magicUpdateCharmander")
charmander.setMagicElement(displayCharmanderMagic)


let displayMewtwoMagic = document.getElementById("magicUpdateMewtwo")
mewtwo.setMagicElement(displayMewtwoMagic)

//==========================Coins Update  ============>

let totalCoinsPikachu = document.getElementById("pikachuShowCoins")
pikachu.setCoinsElement(totalCoinsPikachu);
pikachu.initCharacter();


let totalCoinsBulbasaur = document.getElementById("bulbasaurShowCoins")
bulbasaur.setCoinsElement(totalCoinsBulbasaur);
bulbasaur.initCharacter();


let totalCoinsCharmander = document.getElementById("charmanderShowCoins")
charmander.setCoinsElement(totalCoinsCharmander);
charmander.initCharacter();


let totalCoinsMewtwo = document.getElementById("mewtwoShowCoins")
mewtwo.setCoinsElement(totalCoinsMewtwo);
mewtwo.initCharacter();

//============================ Sounds to Html=========================>

// let getMagicSoundConfirm = new Audio();
// let getMagicSoundReject = new Audio();

// getMagicSoundConfirm.src = "./Audio/Selection /5-58 Bubble (mp3cut.net).mp3";
// getMagicSoundReject.src = "./Audio/Selection /Bind (mp3cut.net)-3.mp3";


// if (numTotalCoins() >= 0) {
//   getMagicSoundConfirm.src = "./Audio/Selection /5-58 Bubble (mp3cut.net).mp3"
// } else {
// getMagicSoundReject.src = "./Audio/Selection /Bind (mp3cut.net)-3.mp3"
// }



let dragonBreathSound = new Audio();
dragonBreathSound.src = "./Audio/Selection /Dragon Breath (2).mp3";

let fireFangSound = new Audio();
fireFangSound.src = "./Audio/Selection /Fire Fang (3).mp3";

let fistSound = new Audio();
fistSound.src = "./Audio/Selection /Fist.mp3"

let infernoSound = new Audio();
infernoSound.src = "./Audio/Selection /Inferno.mp3"

let leechSeedSound = new Audio();
leechSeedSound.src = "./Audio/Selection /Leech Seed.mp3"

let psychicSound = new Audio();
psychicSound.src = "./Audio/Selection /Psychic.mp3"

let razorLeafSound = new Audio();
razorLeafSound.src = "./Audio/Selection /Razor Leaf.mp3"

let shadowBallSound = new Audio();
shadowBallSound.src = "./Audio/Selection /Shadow Ball.mp3"

let thunderShockSound = new Audio();
thunderShockSound.src = "./Audio/Selection /Thunder Shock.mp3"

let thunderWaveSound = new Audio();
thunderWaveSound.src = "./Audio/Selection /Thunder Wave part 1.mp3"
// =============================== Pikachu PLAYER =====================================>

pikachu.learnAttackSkill(fist);
pikachu.learnAttackSkill(thunderShock);
pikachu.learnAttackSkill(thunderWave);


function pikachuFirstSkill() {
  return pikachu.learnAttackSkill(fist);
}

function pikachuSecondSkill() {
  return pikachu.learnAttackSkill(thunderShock);
}

function pikachuThirdSkill() {
  return pikachu.learnAttackSkill(thunderWave);
}

function pikachu1stAttacktoBulbasaur() {
  return pikachu.attack(0, bulbasaur, fistSound);
}

function pikachu2ndAttacktoBulbasaur() {
  return pikachu.attack(1, bulbasaur, thunderShockSound );
}

function pikachu3rdAttacktoBulbasaur() {
  return pikachu.attack(2, bulbasaur, thunderWaveSound);
}

function pikachu4thAttacktoCharmander() {
  return pikachu.attack(0, charmander, fistSound);
}

function pikachu5thAttacktoCharmander() {
  return pikachu.attack(1, charmander, thunderShockSound);
}

function pikachu6thAttacktoCharmander() {
  return pikachu.attack(2, charmander, thunderWaveSound);
}

function pikachu7thAttacktoMewtwo() {
  return pikachu.attack(0, mewtwo, fistSound);
}

function pikachu8thAttacktoMewtwo() {
  return pikachu.attack(1, mewtwo, thunderShockSound);
}

function pikachu9thAttacktoMewtwo() {
  return pikachu.attack(2, mewtwo, thunderWaveSound);
}

function pikachuGetMagic() {
  return pikachu.getMagic()
};

// =============================== Bulbasaur PLAYER =====================================>

bulbasaur.learnAttackSkill(fist);
bulbasaur.learnAttackSkill(leechSeed);
bulbasaur.learnAttackSkill(razorLeaf);


function bulbasaurFirstSkill() {
  return bulbasaur.learnAttackSkill(fist);
}

function bulbasaurSecondSkill() {
  return bulbasaur.learnAttackSkill(leechSeed);
}

function bulbasaurThirdSkill() {
  return bulbasaur.learnAttackSkill(razorLeaf);
}

function bulbasaur1stAttacktoPikachu() {
  return bulbasaur.attack(0, pikachu, fistSound);
}

function bulbasaur2ndAttacktoPikachu() {
  return bulbasaur.attack(1, pikachu, leechSeedSound);
}

function bulbasaur3rdAttacktoPikachu() {
  return bulbasaur.attack(2, pikachu, razorLeafSound);
}

function bulbasaur4thAttacktoCharmander() {
  return bulbasaur.attack(0, charmander, fistSound);
}

function bulbasaur5thAttacktoCharmander() {
  return bulbasaur.attack(1, charmander, leechSeedSound);
}

function bulbasaur6thAttacktoCharmander() {
  return bulbasaur.attack(2, charmander, razorLeafSound);
}

function bulbasaur7thAttacktoMewtwo() {
  return bulbasaur.attack(0, mewtwo, fistSound);
}

function bulbasaur8thAttacktoMewtwo() {
  return bulbasaur.attack(1, mewtwo, leechSeedSound);
}

function bulbasaur9thAttacktoMewtwo() {
  return bulbasaur.attack(2, mewtwo, razorLeafSound);
}

function bulbasaurGetMagic() {
  return bulbasaur.getMagic()
};

// =============================== Charmander PLAYER =====================================>


charmander.learnAttackSkill(fist);
charmander.learnAttackSkill(dragonBreath);
charmander.learnAttackSkill(inferno);


function charmanderFirstSkill() {
  return charmander.learnAttackSkill(fist);
}

function charmanderSecondSkill() {
  return charmander.learnAttackSkill(dragonBreath);
}

function charmanderThirdSkill() {
  return charmander.learnAttackSkill(inferno);
}

function charmander1stAttacktoPikachu() {
  return charmander.attack(0, pikachu, fistSound);
}

function charmander2ndAttacktoPikachu() {
  return charmander.attack(1, pikachu, dragonBreathSound);
}

function charmander3rdAttacktoPikachu() {
  return charmander.attack(2, pikachu, infernoSound);
}

function charmander4thAttacktoBulbasaur() {
  return charmander.attack(0, bulbasaur, fistSound);
}

function charmander5thAttacktoBulbasaur() {
  return charmander.attack(1, bulbasaur, dragonBreathSound);
}

function charmander6thAttacktoBulbasaur() {
  return charmander.attack(2, bulbasaur, infernoSound);
}

function charmander7thAttacktoMewtwo() {
  return charmander.attack(0, mewtwo, fistSound);
}

function charmander8thAttacktoMewtwo() {
  return charmander.attack(1, mewtwo, dragonBreathSound);
}

function charmander9thAttacktoMewtwo() {
  return charmander.attack(2, mewtwo, infernoSound);
}

function charmanderGetMagic() {
  return charmander.getMagic()
};

// =============================== Mewtwo PLAYER =====================================>

mewtwo.learnAttackSkill(fist);
mewtwo.learnAttackSkill(shadowBall);
mewtwo.learnAttackSkill(psychic);


function mewtwoFirstSkill() {
  return mewtwo.learnAttackSkill(fist);
}

function mewtwoSecondSkill() {
  return mewtwo.learnAttackSkill(shadowBall);
}

function mewtwoThirdSkill() {
  return mewtwo.learnAttackSkill(psychic);
}

function mewtwo1stAttacktoPikachu() {
  return mewtwo.attack(0, pikachu, fistSound);
}

function mewtwo2ndAttacktoPikachu() {
  return mewtwo.attack(1, pikachu, shadowBallSound);
}

function mewtwo3rdAttacktoPikachu() {
  return mewtwo.attack(2, pikachu, psychicSound);
}

function mewtwo4thAttacktoBulbasaur() {
  return mewtwo.attack(0, bulbasaur, fistSound);
}

function mewtwo5thAttacktoBulbasaur() {
  return mewtwo.attack(1, bulbasaur, shadowBallSound);
}

function mewtwo6thAttacktoBulbasaur() {
  return mewtwo.attack(2, bulbasaur, psychicSound);
}

function mewtwo7thAttacktoCharmander() {
  return mewtwo.attack(0, charmander, fistSound);
}

function mewtwo8thAttacktoCharmander() {
  return mewtwo.attack(1, charmander, shadowBallSound);
}

function mewtwo9thAttacktoCharmander() {
  return mewtwo.attack(2, charmander, psychicSound);
}

function mewtwoGetMagic() {
  return mewtwo.getMagic()
};
