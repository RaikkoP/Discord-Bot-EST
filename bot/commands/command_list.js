class Command {
    constructor(_name, _description) {
        this.name = _name;
        this.description = _description;
    }
}

class Test extends Command {
    constructor() {
        super('test', 'Test discord API connection');
    }
}

const test = new Test();

const list = [
    test
]

export default list;