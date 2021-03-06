import { SidebarBase, SidebarConfig, SidebarPosition } from './sidebar.core';
export declare class SidebarElement implements SidebarBase {
    position?: SidebarPosition;
    readonly component: HTMLElement;
    readonly container: HTMLElement;
    readonly backdrop: HTMLElement;
    readonly documentMinSwipeX: number;
    readonly documentSwipeRange: number;
    readonly nativeSwipe: boolean;
    readonly nativeSwipeOpen: boolean;
    readonly responsive: boolean;
    private initialTouch?;
    private touchMoveSidebar?;
    private openMovement?;
    private _wasVisible?;
    private readonly isStyleMapSupported;
    private readonly backdropOpacity;
    private readonly backdropOpacityRatio;
    private readonly mainContent;
    private readonly _emitOnOpen?;
    private readonly _emitOnClose?;
    private readonly _emitOnChangeVisibility?;
    constructor(options?: SidebarConfig);
    toggle: () => void;
    open: () => void;
    close: () => void;
    isVisible(): boolean;
    destroy(): void;
    setPosition(position: SidebarPosition): void;
    addAttrsEventsListeners(sidebarName: string): void;
    removeAttrsEventsListeners(sidebarName: string): void;
    setSwipeGestures(value: boolean): void;
    private _onTouchStart;
    private _onTouchMove;
    private _onTouchEnd;
    private _onSwipeOpenStart;
    private _onSwipeOpenMove;
    private _onSwipeOpenEnd;
    private _onTransitionStart;
    private _onTransitionEnd;
    private getTransitionType;
    private toggleTransitionClass;
    private addTransitionListener;
    private removeComponentClassPosition;
    private hasLeftPosition;
    private hasRightPosition;
    private transcludeContent;
    private nativeGestures;
    private nativeOpenGestures;
    private addNativeGestures;
    private removeNativeGestures;
    private addNativeOpenGestures;
    private removeNativeOpenGestures;
    private moveSidebar;
    private updateBackdropOpacity;
    private setBackdropOpacity;
    private setResponsive;
    private applyStyle;
    private clearStyle;
    private addComponentClass;
    private removeComponentClass;
    private toggleComponentClass;
}
