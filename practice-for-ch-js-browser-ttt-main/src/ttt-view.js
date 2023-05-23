class View {
  constructor(game, el) {
    this.game = game;
    this.el = el;

    this.setupBoard();

    this.el.addEventListener("click", handleClick)
  }

  setupBoard() {

    let row1 = document.createElement('ul');
    let row2 = document.createElement('ul');
    let row3 = document.createElement('ul');
    
    row1.classList.add = ("row");
    row2.classList.add = ("row");
    row3.classList.add = ("row");

    let child1 = document.createElement('li');
    let child2 = document.createElement('li');
    let child3 = document.createElement('li');
    let child4 = document.createElement('li');
    let child5 = document.createElement('li');
    let child6 = document.createElement('li');
    let child7 = document.createElement('li');
    let child8 = document.createElement('li');
    let child9 = document.createElement('li');

    child1.setAttribute("data-position", "[0, 0]");
    child2.setAttribute("data-position", "[0, 1]");
    child3.setAttribute("data-position", "[0, 2]");
    child4.setAttribute("data-position", "[1, 0]");
    child5.setAttribute("data-position", "[1, 1]");
    child6.setAttribute("data-position", "[1, 2]");
    child7.setAttribute("data-position", "[2, 0]");
    child8.setAttribute("data-position", "[2, 1]");
    child9.setAttribute("data-position", "[2, 2]");

    row1.appendChild(child1);
    row1.appendChild(child2);
    row1.appendChild(child3);
        
    row2.appendChild(child4);
    row2.appendChild(child5);
    row2.appendChild(child6);

    row3.appendChild(child7);
    row3.appendChild(child8);
    row3.appendChild(child9);

    this.el.appendChild(row1);
    this.el.appendChild(row2);
    this.el.appendChild(row3);
    }
  
  handleClick(e) {
    let box = e.target;
    box.append("x");
    // box.append(this.game.currentPlayer);
    box.classList.add("token");
    this.game.swapTurn();
  }

  makeMove(square) {
  }
  
  handleGameOver() {
  }
}

export default View;