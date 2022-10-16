////////Simple example of a battle function using the stuff I learned recently. To test you will probably need to CD into the entire file. so cd into game-front then CD into src then components \game-front\src\components  Once there runt node  battlefunctions




// let hp = 100;
////////////////Pick Hp if 0 OR below it will log out defeated enemy, otherwise it will log remaining health.
// let hp = 0;

///////////////This is assuming a drop down is selected or a roll is made, it is just a way of showing different degrees of damage can be calculated out at once without big if statements.
// let pick = 'punch';
// let pick = 'kick';
// let pick = 'stab';
// let pick = null;

function attackSwithCaseFunct(hp, attack){  
////////////////While loop allows this to run only while enemy has hp to give.
    while (hp > 0){
    switch(attack){
        case 'punch':
            // return hp - 10;
////////////////A calculation that returns a random damage amount within a range, in this case between 5-15 dmg
               damage = Math.ceil(Math.random() * (15 - 5) + 5);
               console.log(damage, 'damage')
              return hp - damage
            break;
        case 'kick':
            // return hp - 20;
            damage = Math.ceil(Math.random() * (30 - 15) + 15);
           return hp - damage
///////////////not exactly sure why 'break' isn't highlighted, may need to update vscode. From what I understand break makes sure the code stops running when it finds the right selection instead of checking against every variable.
            break;
        case 'stab':
            return hp - 50
            break;
//////////////It can post lots of things but I didn't feel like writing out too many different actions.
        case 'gouge': 
        return 'Blinded!'
        break;

//////////////Default is basically if nothing else is chosen or selected i.e. a type of spell that this enemy is immune to.
        default: 
        return 'Miss!'

    }}
 if (hp <= 0) 
 {
    ////not TOO sure if this if statement is needed. I have a strong feeling it can be condensed into the switch statement but I thought about making this last minute and its pretty late.
    return 'Enemy Defeated'
} else 
{
    //////return the output
    return hp
}
}

///////read the output 
console.log(attackSwithCaseFunct(100, 'punch'))

/////////you can hoose 'punch', 'kick', or 'stab', anything else is a miss. if hp = 0 then it will read a message saying enemy is dead.