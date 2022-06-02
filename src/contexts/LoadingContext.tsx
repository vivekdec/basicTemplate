import React, {createContext, Component} from "react";

export const LoadingContext = createContext();
export const LoadingConsumer = LoadingContext.Consumer;

class LoadingContextProvider extends Component {

    state = {
        isLoading: false,
        loadingText: ""
    };

    showLoading = (loadingText:any) => {
        this.setState({
            isLoading: true,
            loadingText: loadingText
        })
    };

    hideLoading = () => {
        this.setState({
            isLoading: false,
            loadingText: ""
        })
    };

    render() {

        return (

            <LoadingContext.Provider
                value={{
                    ...this.state,
                    showLoading: this.showLoading,
                    hideLoading: this.hideLoading
                }}>

                {this.props.children}

            </LoadingContext.Provider>

        )

    }

}

export default LoadingContextProvider;
