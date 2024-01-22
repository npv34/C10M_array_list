import IList from "./IList";

class List implements IList{
    private container: any[];
    private size: number;
    private limit: number;

    constructor(limit: number) {
        this.container = [];
        this.size = 0;
        this.limit = limit;
    }

    clear(): void {
        this.container = [];
    }

    getElement(index: number): any {
        return this.container[index];
    }

    insert(element: any): void {
        this.size++;
        this.container.push(element);
    }

    listSize(): number {
        return this.size;
    }

    remove(index: number): void {
        this.container.splice(index, 1)
        this.size--;
    }

    showList(): void {
        console.table(this.container)
    }
}

export default List;