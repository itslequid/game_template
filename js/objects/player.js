import * as PIXI from "pixi.js";

// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Classes
export class Player {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.r = 15;
    }

    draw() {
        // http://pixijs.download/dev/docs/PIXI.Graphics.html
        const graphics = new PIXI.Graphics();

        graphics.beginFill(0xFFFFFF);
        graphics.drawCircle(this.x, this.y, this.r);
        graphics.endFill();

        return graphics
    }

    go_left = () => {
        if (this.x < 30) {
            null
        }else {
            this.x -= 15
        }
    };

    go_right = () => {
        if(this.x > window.innerWidth - this.r - 15) {
            null
        } else {
            this.x += 15
        }
    };

    go_up = () => {
        if (this.y < 20) {
            null
        } else {
            this.y -= 15
        }
    };

    go_down = () => {
        if (this.y > window.innerHeight - this.r - 15) {
            null
        } else {
            this.y += 15
        }

    }
}