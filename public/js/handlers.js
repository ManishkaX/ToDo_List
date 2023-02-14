const listenerAction = {
    click: 'click',
    mouseover: 'mouseover'
};

const handlersAction = {
    add: 'add',
    remove: 'remove',
    sortByDate: 'sortByDate',
    sortByComplete: 'sortByComplete'
}

const routes = {
    add: 'add',
    remove: 'remove',
    sortByDate: 'sortByDate',
    sortByComplete: 'sortByComp'

}

export class Handlers {
    lastAction;
    grid;

    addButton;
    removeButton;
    sortByDateButton;
    sortByCompleteButton;


    constructor() {
        this.lastAction = '';
        this.grid = document.querySelector('.grid');
        this.addButton = document.querySelector('.addButton');
        this.removeButton = document.querySelector('.removeButton');
        this.sortByDateButton = document.querySelector('.sortByDateButton');
        this.sortByCompleteButton = document.querySelector('.sortByCompleteButton');
    }

    sub() {
        this.addButton
            .addEventListener(handlersAction.click, this.#addHandler);
        this.removeButton
            .addEventListener(handlersAction.click, this.#removeHandler);
        this.sortByDateButton
            .addEventListener(handlersAction.click, this.#sortByDateHandler);
        this.sortByCompleteButton
            .addEventListener(handlersAction.click, this.#sortByCompleteHandler);

        this.grid
            .addEventListener(handlersAction.click, { handleEvent: this.#selectIdNote });
    }

    unsub() {
        this.addButton
            .removeEventListener(handlersAction.click, this.#addHandler);
        this.removeButton
            .removeEventListener(handlersAction.click, this.#removeHandler);
        this.sortByDateButton
            .removeEventListener(handlersAction.click, this.#sortByDateHandler);
        this.sortByCompleteButton
            .removeEventListener(handlersAction.click, this.#sortByCompleteHandler);

        this.grid.addEventListener(handlersAction.click, this.#selectIdNote);
    }

    chooseAction(id) {
        switch (this.lastAction) {
            case handlersAction.add:

                break;

            case handlersAction.remove:
                console.log(`Removing ${id}`);

                window.location.href += routes.remove;
                break;

            default:
                console.log('Other');
                break
        }


    }

    #addHandler() {
        console.log('Add Handler');

        // window.location.href += routes.add;
        this.lastAction = handlersAction.add;
    }

    #removeHandler() {
        console.log('Remove Handler');

        this.lastAction = handlersAction.remove;
    }

    #sortByDateHandler() {
        console.log('Sort by date Handler');

        window.location.href += routes.sortByDate;
        this.lastAction = handlersAction.sortByDate;
    }

    #sortByCompleteHandler() {
        console.log('Sort by complete Handler');

        window.location.href += routes.sortByComplete;
        this.lastAction = handlersAction.sortByComplete;
    }

    #selectIdNote(event) {
        if (event.target.className.includes('note')) {
            const id = event.target
                .innerHTML.split('</p>')
                .filter(p => p.includes('id'))
                .at(0).split('>').at(1);
        }

        this.chooseAction(id);
    }

}