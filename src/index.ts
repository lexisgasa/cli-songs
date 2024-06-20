import askUser from "./askUser.js";

const songsList = [
  "",
  "Bat country",
  "Bring me to life",
  "In the end",
  "Emerald Sword",
  "Venom of Venus",
];

const songPosition = parseInt(
  askUser("Inserta una posición para ver la canción asociada a ella: ")
);

if (!songsList[songPosition]) {
  console.log(`No hay ninguna canción en la posición ${songPosition}`);
} else {
  console.log(
    `La canción en la posición ${songPosition} es: ${songsList[songPosition]}`
  );
}
