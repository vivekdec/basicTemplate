import React, {createContext, Component} from "react";

export const ToastContext = createContext();
export const ToastConsumer = ToastContext.Consumer;

class ToastContextProvider extends Component {

    state = {
        message: "",
        duration: 1500,
        bgColor: "",
        show: false
    };

    showToast = (bgColor:any, message:any, duration:any) => {
        this.setState({
            bgColor: bgColor,
            message: message,
            duration: duration,
            show: true
        })
    };

    hideToast = () => {
        this.setState({
            message: "",
            show: false
        })
    };

    render() {
        return (
            <ToastContext.Provider
                value={{
                    ...this.state,
                    showToast: this.showToast,
                    hideToast: this.hideToast
                }}>

                {this.props.children}

            </ToastContext.Provider>

        )

    }

}

export default ToastContextProvider;
