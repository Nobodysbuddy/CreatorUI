class CUIText extends HTMLElement {
    constructor() {
        super();

        createTextElement();
    }

    createTextElement() {
        var text = document.createElement('h4');
        text.innerHTML = this.childNodes;
        text.className = "CUIText";
        // var restingExp = text.getAttribute("rest");
        var resting = this.setAttribute('rest', this.getAttribute('resting'))
        if (this.getAttribute('rest').toUpperCase() === "true".toUpperCase) {
            text.classList.add("resting");
        } else {
            text.classList.remove(['resting']);
        }
    }
}

class CUIComponent extends HTMLElement {
    constructor() {
        super();

        this.descexp = createComponentUseElement();
    }

    createComponentUseElement() {
        var componentVal = this.childNodes;
        var expname = this.getAttribute('componentName');
        this.id = this.setAttribute('id', expname);
        var exp = {
            val: componentVal,
            name: expname
        }
        return exp;
    }

    getComponentValue() {
        return this.descexp;
    }

    getComponentId() {
        return this.id;
    }
}

class CUIUseComponent extends HTMLElement {
    constructor() {
        super();

        this.using = findAndSetUsingComponent();
    }

    findAndSetUsingComponent() {
        try {
            var usingcompname = this.getAttribute("usingComponent");
            this.comp = document.getElementById(usingcompname);
            this.childNodes = comp.childNodes;
        } catch (e) {
            console.log(e);
        }

        return this.comp;
    }

    getUsingComponent() {
        return this.using;
    }
}

class CUIContainer extends HTMLElement {
    constructor() {
        super();

        createDivElement();
    }

    createDivElement() {
        var divelem = document.createElement('div');
        divelem.childNodes = this.childNodes;
        divelem.classList = [
            "CUIContainer"
        ];
        var disabled = this.getAttribute('disabled');
        if (disabled.toUpperCase() === "true".toUpperCase()) {
            divelem.classList.add('disabled');
        } 
    }
}

class CUIHeading extends HTMLElement {
    constructor() {
        super();

        this.val = createHeadingElement();
    }

    createHeadingElement() {
        size = this.getAttribute('size');
        if (size.toUpperCase() === "6".toUpperCase()) {
            var helem = document.createElement('h6');
        } else if (size.toUpperCase() === "5".toUpperCase()) {
            var helem = document.createElement('h5');
        } else if (size.toUpperCase() === "4".toUpperCase()) {
            var helem = document.createElement('h4');
        } else if (size.toUpperCase() === "3".toUpperCase()) {
            var helem = document.createElement('h3');
        } else if (size.toUpperCase() === "2".toUpperCase()) {
            var helem = document.createElement('h2');
        } else {
            var helem = document.createElement('h1');
        }

        helem.innerHTML = this.childNodes;
        helem.classList = [
            'CUIHeading'
        ];
        var disabled = this.getAttribute('disabled');
        if (disabled.toUpperCase() === "true".toUpperCase()) {
            helem.classList.add('disabled');
        }
        return helem.innerHTML;
    }

    getHeaderVal() {
        return this.val;
    }
}

function init() {
    initAll()
}

function initAll() {
    var reg = customElements.define;
    reg("cui-text", CUIText, {extends: HTMLElement});
    reg("cui-component", CUIComponent, { extends: HTMLElement });
    reg("cui-using-component", CUIUseComponent, { extends: HTMLElement });
    reg("cui-container", CUIContainer, { extends: HTMLElement });
    reg("cui-header", CUIHeading, { extends: HTMLElement });
}

module.exports = init;