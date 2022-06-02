import React, {createContext, Component} from "react";
import DeviceInformation from "../device/DeviceInformation";

export const StringContext = createContext();
export const StringConsumer = StringContext.Consumer;

class StringContextProvider extends Component {

    state = {
        nivenStrings: new DeviceInformation().getLocalStrings()
    };

    updateString = (alias:any) => {
        this.setState({
            nivenStrings: alias,
        })
    };

    render() {

        return (

            <StringContext.Provider
                value={{
                    ...this.state,
                    updateString: this.updateString
                }}>

                {this.props.children}

            </StringContext.Provider>

        )

    }

}

export default StringContextProvider;
