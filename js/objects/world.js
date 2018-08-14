import {Player} from "./player";
import {Info} from "./info"
import {Laser} from "./laser";


export class World {
    constructor() {
        // Создадим игрока
        this.player = new Player(window.innerWidth / 2, window.innerHeight / 2);

        // ToDo: Создать массив лазеров
        this.las = []
    }



    // ToDo: Метод click, которая принимает x, y
    click = (x,y) => {
        this.las.push(new Laser(this.player.x,this.player.y, x, y))
    };
    // В зависисмости от нажатых клавиш изменяем среду
    move = (keys) => {
        // Для каждого ключа в объекте
        Object.keys(keys).map((key) => {
            // Если нажата кнопка
            if (keys[key]) {
                // Взависимости от того какая кнопка
                switch (key) {
                    case "a":
                        this.player.go_left();
                        break;
                    case "d":
                        this.player.go_right();
                        break;
                    case "s":
                        this.player.go_down();
                        break;
                    case "w":
                        this.player.go_up();
                        break;
                }
            }
        });

    };

    get_items() {
        // ToDo: Возвращать массив лазеров
        return [this.player, new Info(this.player.x, this.player.y),...this.las]
        }}

