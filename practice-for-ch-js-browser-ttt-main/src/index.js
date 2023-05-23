import Game from "./ttt_node/game.js";
import View from "./ttt-view";


document.addEventListener("DOMContentLoaded", () => {
  const ele = document.getElementsByClassName("ttt")[0];
  const game = new Game();
  const view = new View(game, ele);
  window.view = view;
});