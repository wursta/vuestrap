export class VsTabModel {
    private _id: string
    private _content: () => void

    constructor(content: () => void) {
        this._id = Math.random().toString()
        this._content = content
    }

    get id(): string {
        return this._id
    }

    get content(): () => void {
        return this._content
    }


}

export class VsTabsModel {
    private _tabs :VsTabModel[] = []
    private _activeId: string = ""

    get tabs(): VsTabModel[] {
        return this._tabs
    }

    set tabs(value: VsTabModel[]) {
        this._tabs = value
    }

    get activeId(): string {
        return this._activeId
    }

    set activeId(value: string) {
        this._activeId = value
    }
}