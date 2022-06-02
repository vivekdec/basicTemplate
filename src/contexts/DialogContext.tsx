import React, {createContext, Component} from "react";

export const DialogContext = createContext();
export const DialogConsumer = DialogContext.Consumer;

class DialogContextProvider extends Component {

    state = {
        show: false,
        title: "",
        message: "",
        twoButton: false,
        dialogType: "default",
        bpt: "",
        bnt: ""
    };

    showDialog = (type:any, title:any, message:any, bpt:any, bnt:any, twoButton:any, btnPositive:any, btnNegative:any) => {
        this.setState({
            show: true,
            title: title,
            message: message,
            twoButton: twoButton,
            dialogType: type,
            bpt: bpt,
            bnt: bnt,
            buttonPositive: btnPositive,
            buttonNegative: btnNegative
        })
    };

    hideDialog = () => {
        this.setState({
            show: false,
            title: "",
            message: "",
            twoButton: false,
            dialogType: "default",
            bpt: "",
            bnt: ""
        })
    };

    render() {

        return (

            <DialogContext.Provider
                value={{
                    ...this.state,
                    showDialog: this.showDialog,
                    hideDialog: this.hideDialog
                }}>

                {this.props.children}

            </DialogContext.Provider>

        )

    }

}

export default DialogContextProvider;
