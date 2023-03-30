import {Container, Application, Sprite, Assets} from 'pixijs';

export class MainGame extends Container {
    constructor(private app: Application) {
        super();
    }

    public async start() {
        const texture = await Assets.load('../../assets/bunny.jpg');
        const bunny = Sprite.from(texture);
        
        bunny.scale.set(0.3, 0.3);
        this.app.stage.addChild(bunny);
    }    
}
