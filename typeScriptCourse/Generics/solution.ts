class MyMap1<T> {
    private map: {[key: string]: T} = {};

    setItem(key: string, item: T) {
        this.map[key] = item;
    }

    getItem(key: string) {
        return this.map[key];
    }

    clear() {
        this.map = {};
    }

    printMap() {
        for (let key in this.map) {
            console.log(key, this.map[key]);
        }
    }
}

const numberMap1 = new MyMap1<number>();
numberMap1.setItem("apples", 10);
numberMap1.setItem("bananas", 2);
console.log(numberMap1.getItem("apples"));
numberMap1.printMap();
numberMap1.clear();
numberMap1.printMap();

const stringMap1 = new MyMap1<string>();
stringMap1.setItem("apples", "10");
stringMap1.setItem("bananas", "2");
console.log(stringMap1.getItem("apples"));
stringMap1.printMap();
stringMap1.clear();
stringMap1.printMap();