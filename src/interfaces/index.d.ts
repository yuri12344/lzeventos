// use this interface as a declaration for the module react-lightbox-pack

declare module 'react-lightbox-pack' {
  import * as React from 'react';

  export class LightBox extends React.Component<Partial<LightboxProps>, any> {
    constructor(props: LightboxProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    handleKeyboardInput: (event: any) => void;
    handleBackdropClick: (event: any) => void;
    handleClickPrev: (event: any) => void;
    handleClickNext: (event: any) => void;
    handleClickImage: (event: any) => void;
    handleClickZoomIn: (event: any) => void;
    handleClickZoomOut: (event: any) => void;
    handleClickRotateClockwise: (event: any) => void;
    handleClickRotateCounterClockwise: (event: any) => void;
    handleClickMoveUp: (event: any) => void;
    handleClickMoveDown: (event: any) => void;
    handleClickMoveLeft: (event: any) => void;
    handleClickMoveRight: (event: any) => void;
    handleClickClose: (event: any) => void;
    render(): JSX.Element;
  }

  export interface LightboxProps {
    state: boolean;
    images?: any;
    event: any;
    data: { id: any, image: string, description: string }[];
    isOpen?: boolean;
    slides?: any;
    open: boolean;
    onClose?: () => void;
    currentImage?: number;
    onClickPrev?: () => void;
    onClickNext?: () => void;
    imageWidth?: any;
    imageHeight?: any;
    thumbnailWidth?: any;
    thumbnailHeight?: any;
    setImageIndex?: any;
    imageIndex?: number;
    backdropClosesModal?: boolean;
    showImageCount: boolean;
    spinner: any;
    spinnerColor: string;
    spinnerSize: string;
    enableKeyboardInput: boolean;
    reactModalStyle: any;
    imageCountSeparator: string;
    animationDisabled: boolean;
    animationOnKeyInput: boolean;
    clickOutsideToClose: boolean;
    imageTitle: string;
    imageCaption: string;
    nextLabel: string;
    prevLabel: string;
    closeButtonTitle: string;
    zoomInLabel: string;
    zoomOutLabel: string;
    rotateClockwiseLabel: string;
    rotateCounterClockwiseLabel: string;
    moveUpLabel: string;
    moveDownLabel: string;
    moveLeftLabel: string;
    moveRightLabel: string;
    zoomInTitle: string;
    zoomOutTitle: string;
    rotateClockwiseTitle: string;
    rotateCounterClockwiseTitle: string;
    moveUpTitle: string;
    moveDownTitle: string;
    moveLeftTitle: string;
    moveRightTitle: string;
    animationDuration: number;
    reactModalProps: any;
    prevSrc: string;
    nextSrc: string;
    prevTitle: string;
    nextTitle: string;
    toolbarButtons: any;
    toolbarButtonsPosition: string;
    toolbarButtonsAlignment: string;
    toolbarButtonsBackgroundColor: string;
    toolbarButtonsTextColor: string;
    toolbarButtonsBorderRadius: string;
    toolbarButtonsFontSize: string;
    toolbarButtonsFontWeight: string;
    toolbarButtonsFontStyle: string;
    toolbarButtonsTextTransform: string;
    toolbarButtonsTextDecoration: string;
    toolbarButtonsLetterSpacing: string;
    toolbarButtonsLineHeight: string;
    toolbarButtonsPadding: string;
    toolbarButtonsMargin: string;
    toolbarButtonsBoxShadow: string;
    toolbarButtonsOpacity: string;
    toolbarButtonsTransition: string;
    toolbarButtonsHoverBackgroundColor: string;
    toolbarButtonsHoverTextColor: string;
    toolbarButtonsHoverBoxShadow: string;
    toolbarButtonsHoverOpacity: string;
    toolbarButtonsHoverTransition: string;
    toolbarButtonsActiveBackgroundColor: string;
    toolbarButtonsActiveTextColor: string;
    toolbarButtonsActiveBoxShadow: string;
    toolbarButtonsActiveOpacity: string;
    toolbarButtonsActiveTransition: string;
    toolbarButtonsFocusBackgroundColor: string;
    toolbarButtonsFocusTextColor: string;
    toolbarButtonsFocusBoxShadow: string;
    toolbarButtonsFocusOpacity: string;
    toolbarButtonsFocusTransition: string;
    toolbarButtonsDisabledBackgroundColor: string;
    toolbarButtonsDisabledTextColor: string;
    toolbarButtonsDisabledBoxShadow: string;
    toolbarButtonsDisabledOpacity: string;
    toolbarButtonsDisabledTransition: string;
    toolbarButtonsDisabledCursor: string;
    toolbarButtonsDisabledPointerEvents: string;
    toolbarButtonsDisabledUserSelect: string;
  }
}
// Path: src/components/Modal.tsx

