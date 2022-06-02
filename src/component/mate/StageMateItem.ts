import { DomNode, el } from "skydapp-browser";


export default class StageMateItem extends DomNode {

    private checkbox: DomNode<HTMLInputElement>;
    private dancingDisplay: DomNode;

    constructor(public id: number, public mix: number, public name: string, public isDancing: boolean) {
        super(".stage-mate-item");
        this.append(
            this.dancingDisplay = el(".dancing-container"),
            el("img", { src: `https://storage.googleapis.com/dsc-mate/336/dscMate-${id}.png`, alt: "mate-mock" }),
            el(".checkbox-container",
                this.checkbox = el("input", { type: "checkbox", id: `mate${id}` }, {
                    change: () => {
                        this.fireEvent(this.checkbox.domElement.checked === true ? "selected" : "deselected");
                    },
                }),
                el("label", { for: `mate${id}` }),
                el("p", `#${id} ${name}`),
            ),
        );
        this.setDanding();
    }

    public setDanding() {
        if (this.isDancing) {
            this.dancingDisplay.append(
                el("img", { src: "/images/shared/img/stage-background.gif", alt: "daning" }),
                el("p.mix", `${this.mix}`),
            )
        }
    }

    public deselect() {
        this.checkbox.domElement.checked = false;
    }
}