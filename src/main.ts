import './style.css'
import { Application } from 'pixijs';
import { MainGame } from './scenes/maingame';

function main() {
  //Start PixiJs App
  const app = new Application<HTMLCanvasElement>({height: 512, width: 1024, antialias: true, resolution: 1});
  document.body.appendChild(app.view);

  //Set first scene
  const game = new MainGame(app);
  app.stage.addChild(game); 
  game.start(); 
}

main();