import React from 'react';
import { HiMoon, HiSun } from 'react-icons/hi';
import { ThemeContext } from './themeContext'

const Toggle = () => {
    const { theme, setTheme } = React.useContext(ThemeContext);
    return (
        <div className="absolute right-0 top-0 mr-4 mt-4 md:mr-6 md:mt-6">
            <div className="transition duration-500 ease-in-out rounded-full p-2">
                {
                    theme === 'dark' ?
                        <HiSun
                            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                            className="icon"
                        />
                        :
                        <HiMoon
                            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                            className="icon"
                        />
                }
            </div>
        </div>
    )
}

export default Toggle;
