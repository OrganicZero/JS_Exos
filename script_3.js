let stairs = prompt ("Salut, bienvenue dans ma super pyramide ! Combien d'étage veux-tu ?");
let space = (stairs - 1);
let brick = (stairs - space);
let line = ""
console.log("Voici ta pyramide :")
while (stairs > 0){
	line = `${" ".repeat(space)}${"#".repeat(brick)}`;
	stairs -= 1;
	space -= 1;
	brick += 1;
	console.log(line);
}



