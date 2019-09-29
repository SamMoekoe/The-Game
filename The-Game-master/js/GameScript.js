alert("Welcome to the Area 51 raid scenario game!")

alert("You read on the internet that there is gonna be a raid on area 51, you look for the petition people put up for the raid. After you find it you decide to join")

name = prompt("What is the name of this epic Gamer legend?")
answer = alert("Welcome " +name+ "! press OK if your ready to start your journey!")
question1 = prompt("You arrive at Area 51 and you see your friends, there aren't alot of people. In total i would say there are 15 people. \n\nWhat do you decide? \n1) You and your friends are determined and storm area 51 with this small group\n2) You are gonna stay here and wait for more people\n3) You tell your friends that this isnt worth it and you leave\n\nType here 1,2 or 3")
if (question1 == 1) {
    question2 = prompt("You decide to storm area 51 with your friends. you go in and you see multiple guards. What do you decide to do? \n1)Wait for a opportunity \n2)You run at them to overpower them")
    if (question2 == 1) {
        question21 = prompt("You decide that you wait and try to get a good opportunity, you wait more for then a hour. Then the guards left and you can sneak in and you get inside the building. You see two doors. What do you do? \n1)Choose the left door \n2)Choose the right door")
        if (question21 == 1) {
            alert("You chose the left door. You find more guards on a break, you get arrested and put in jail. \nJAIL ENDING")
        }// 1 van meerdere endings
        else if(question21 == 2) {
           question21A = prompt("You chose the right door. You find more doors which one do you choose? \n1)The left door \n2)The door in the middle \n3)The right door ")
        if (question21A == 1) {
            alert("You chose the left door. To your suprise you see the same room, you try to go back but you just end up in the same room again. You get trapped in the spacial anomaly forever. \nTRAPPED ENDING")
        } // 1 van meerdere endings
        else if (question21A == 2) {
            question21A1 = prompt("You chose the door in the middle. You walk through and you see alot of aliens. What do you decide to do? \n1)Open the cells \n2)Dont open the cells")
            if (question21A1 == 1) {
                question21A11 = prompt("You decide to open the cells. The aliens come out of their cells and they thank you for freeing them, they ask for your help to escape this place. What do you do? \n1)You help the aliens \n2)You dont help them")
            if (question21A11 == 1) {
                question21A11A = prompt("You decide to help the aliens escape this place. The aliens tell you where the guards hid their weapons so you can go and grab them before you escape. What do you do? \n1)Escape with the weapons \n2)Skip the weapons and leave now ")
                if (question21A11A == 1){
                question21A11A11 = prompt("You go with the aliens to grab their weapons. On your way to grab the weapons you find some guards that are fighting the aliens. What do you do? \n1)Tell the aliens to stop attacking the guards \n2)Ignore the guards and grab the weapons")
                    if (question21A11A11 == 1){
                    question21A11A11 = prompt("You tell the aliens to stop attacking the guards. You go over to the guards to check if they are okay, they tell you that they are fine and thank you for saving them. You went on to grab the weapons and leave the building, on your way out some guards are shooting you and the aliens, but the guards that you helped saved you from the other guards and you all made it out. The aliens thank you for saving them and they ask you to join them on their way back to their planet. What do you do? \n1)Accept \n2)Decline")
                         if (question21A11A11 == 1){
                            alert("You chose to go with the aliens. They are happy that you chose to go with them. \nGALACTIC HERO ENDING")
            }//1 van de meerder endings
            else if (question21A11A11 == 2) {
                alert("You declined the offer the aliens gave you. The aliens give their thanks to you and they leave in their space ship. \nRAID COMPLETED ENDING")
            }// 1 van de meerdere endings
            }//level10
            else if (question21A11A11 == 2) {
                alert("You say to the aliens that you can leave without the weapons. On your way out the guards are shooting you, but with noone to stop the guards you all get shot and you die. \nGAME OVER")
            }
            }//level 9
            else if (question21A11 == 2) {
                alert("You decide to not help the aliens. You went on to escape on your own. You got out but you failed to do what you were meant to do. \nFAILED RAID ENDING")
            }
            }// level 8
            } // level 7
            else if (question21A1 == 2) {
                alert("You decide not to open the cell. The aliens make alot of noise drawing the nearby guards into the room, they shoot you. \nGAME OVER")
            }// 1 van meerdere fail endings
        }// Closing bracket van question21A en level 5
        else if (question21A == 3) {
            question21A2 = prompt("You chose the right room. As you enter the room you see guards watching tv. What do you do? \n1)Attack them \n2)Leave and try another door")
        if (question21A2 == 1){
            alert("You chose to attack the guards. The guards were watching the camera's of the facility, they saw you come in the room before you even noticed it. You got shot. \nGAME OVER")
        }// level 6
        else if(question21A2 == 2) {
            alert("You chose to leave te room and try another door. Unfortunately for you the guards already noticed you on the camera's and you get arrested. \nARRESTED ENDING")
        }
        }//Closing bracket van question21A2
        }//Closing bracket van question21 en level 4
        else {
            alert("Wrong answer")
        }
    }//Closing bracket van question 2 == 1 en level 3
    else if (question2 == 2) {
        question2 = alert("You decide to run at the guards and overpower them. The guards turn to you and they shoot you. \nGAME OVER")
    } // 1 van meerdere fail endings
    else {
        alert("Wrong answer")
    }
}// Closing bracket van question 1 == 1 en level 2
else if (question1 == 2) {
    question3 = prompt("You decided to stay and wait for more people. Fortunately there were a handful of people who did showup late, after this you all go in to storm area 51. What do you decide to do? \n1)You do this stealthily \n2)You rush in there")
    if (question3 == 1) {
        question31 = alert("You decided to go in stealthily. Unfortunately your group was too big to be sneaky and you all got shot/arrested. \nGAME OVER ")
    }
    else if (question3 == 2) {
        question32 = alert("You decide to rush in there. The guards see you and you get shot. \nGAME OVER")
    }
    else {
        alert("Wrong answer")
    }
}
else if (question1 == 3) {
    question4 = alert("You said to your friends that you were gonna leave cause it whasnt worth it. \nTHE HYPEBEAST ENDING")
}
else {
    alert("Wrong answer")
}// level 1
