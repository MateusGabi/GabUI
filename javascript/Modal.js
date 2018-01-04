import $ from 'jquery'

const Modal = (($) => {

    /*****************************
    *
    *   Classes Const
    *
    *****************************/
    const className = {
        OPEN: 'modal-open'
    }

    const Selector = {
        MODAL: '.modal',
        BODY: 'body'
    }



    class Modal {

        constructor(element) {
            this._element = element
            this._dialog = $(element).find(Selector.MODAL)[0]
            this._isShown = true
        }


        // methods

        show(event) {
            if (this._isShown || showEvent.isDefaultPrevented()) {
                return
            }

            this._isShown = true

            $(Selector.BODY).addClass(ClassName.OPEN)
        }

    }

})($)

export default Modal;