export class VsTabModel {
    private _id: string
    private _content: () => void

    private _isDisabled: boolean = false
    private _contentClass: string = ""

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

    get isDisabled(): boolean {
        return this._isDisabled
    }

    set isDisabled(value: boolean) {
        this._isDisabled = value
    }

    get contentClass(): string {
        return this._contentClass
    }

    set contentClass(value: string) {
        this._contentClass = value
    }
}

export class VsTabsModel {
    private readonly _tabs: VsTabModel[] = []
    private _activeId: string = ""

    get tabs(): VsTabModel[] {
        return this._tabs
    }

    get activeId(): string {
        return this._activeId
    }

    set activeId(value: string) {
        this._activeId = value
    }
}