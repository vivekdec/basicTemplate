import React, {createContext, Component} from "react";
import DeviceInformation from "../device/DeviceInformation";

export const ThemeContext = createContext(null);
export const ThemeConsumer = ThemeContext.Consumer;

class ThemeContextProvider extends Component {

    state = {
        nivenColors: new DeviceInformation().getSelectedTheme()
    };

    updateTheme = (alias:any) => {
        this.setState({
            nivenColors: alias,
        })
    };

    render() {

        return (

            <ThemeContext.Provider
                value={{
                    ...this.state,
                    updateTheme: this.updateTheme
                }}>

                {this.props.children}

            </ThemeContext.Provider>

        )

    }

}

export default ThemeContextProvider;
