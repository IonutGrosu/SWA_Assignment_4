import { RandomGenerator } from "../utils/generator";
import { Board, Piece, Position } from "./gameBackend";

const SERVER_URL = "http://localhost:9090/";

export function initBoard(generator: RandomGenerator): Board<string> {
  const board = new Board(generator, 4, 4);
  return board;
}

export function canMove(
  board: Board<string>,
  firstPos: Position,
  secondPos: Position
): boolean {
  return board.canMove(firstPos, secondPos);
}

export function move(
  generator: RandomGenerator,
  board: Board<string>,
  firstPos: Position,
  secondPos: Position
): Piece<string>[] {
  const result = board.move(firstPos, secondPos);
  return result;
}

export async function updateGame(gameId: number, updates: any) {
  const authToken: string = localStorage.getItem("authToken");
  console.log(JSON.stringify(updates));
  return fetch(SERVER_URL + `games/${gameId}?token=${authToken}`, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    method: "patch",
    body: JSON.stringify(updates),
  });
}

export async function createGame() {
  const authToken: string = localStorage.getItem("authToken");

  return fetch(SERVER_URL + `games?token=${authToken}`, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    method: "post",
    body: "",
  })
    .then((response: any) => response.json())
    .then((response: any) => {
      if (response.id) {
        localStorage.setItem(`gameId`, response.id);
      }
      return response;
    });
}
