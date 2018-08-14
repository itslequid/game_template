import {Player} from "./player";
import {Info} from "./info"
import * as PIXI from 'pixi.js';

export class World {
    constructor() {
        // Создадим игрока
        this.player = new Player(window.innerWidth / 2, window.innerHeight / 2)
        
    }

    // В зависисмости от нажатых клавиш изменяем среду
    move = (keys) => {
        // Для каждого ключа в объекте
        Object.keys(keys).map((key) => {
            // Если нажата кнопка
            if (keys[key]) {

                // Взависимости от того какая кнопка
                switch (key) {
                    case "a":

                        window.onload;
                        this.player.go_left();
                        break;
                    case "d":
                        window.onload;
                        this.player.go_right();
                        break;
                    case "s":
                        window.onload;
                        this.player.go_down();
                        break;
                    case "w":
                        window.onload;
                        this.player.go_up();
                        break;
                    case "r":
                        window.onload;
                        this.player.go_up();
                        break;
                }
            }
        });

    };

    get_items() {
        return [this.player, new Info(this.player.x, this.player.y)]
    }

}

