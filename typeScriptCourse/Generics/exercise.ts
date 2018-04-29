class MyMap<T> {
    private items: {[key: string]: T}= {};

    setItem(key: string, item: T): void {
        this.items[key] = item;
    }// should create a new key-value pair

    getItem(key: string): T {
        return this.items[key];
    }// should retrieve the value of the provided key
    clear(): void {
        this.items = {};
    } // should remove all key-value pairs
    printMap(): void {
        for (let key in this.items) {
            console.log(key, this.items[key]);
        }
    } // should output key-value pairs
}

const numberMap = new MyMap<number>();
numberMap.setItem('apples', 5);
numberMap.setItem('bananas', 10);
numberMap.printMap();

const stringMap = new MyMap<string>();
stringMap.setItem('name', "Max");
stringMap.setItem('age', "27");
stringMap.printMap();