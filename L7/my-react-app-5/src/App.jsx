import "bootstrap/dist/css/bootstrap.min.css";
import CounterDemo from "./CounterDemo";
import { useState } from "react";

import copyLogo from "./assets/copy-logo.png";
import alignLeftLogo from "./assets/align-left.png";
import alignCenterLogo from "./assets/align-center.png";
import alignRightLogo from "./assets/align-right.png";
// import lightThemeLogo from "./assets/themeLightLogo.png";
import darkThemeLogo from "./assets/themeDarkLogo.png";

const App = () => {

    const [styles, setStyles] = useState({
        fontWeight: 'normal',
        fontStyle: 'normal',
        textDecoration: 'none',
        color: 'black',
        textTransform: 'none',
        fontSize: '16px',
        fontFamily: 'initial',
        textAlign: 'left',
    });

    const [theme, setTheme] = useState('light');

    const toggleStyle = (styleName, value1, value2) => {
        setStyles(prevStyles => ({
            ...prevStyles,
            [styleName]: prevStyles[styleName] === value1 ? value2 : value1
        }));
    };

    const boldText = () => toggleStyle('fontWeight', 'bold', 'normal');
    const italicText = () => toggleStyle('fontStyle', 'italic', 'normal');
    const underlineText = () => toggleStyle('textDecoration', 'underline', 'none');
    const strikeThroughText = () => toggleStyle('textDecoration', 'line-through', 'none');

    const changeColor = () => {
        const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'brown'];
        toggleStyle('color', colors[Math.floor(Math.random() * colors.length)], 'black');
    };

    const changeCase = () => {
        setStyles(prevStyles => ({
            prevStyles,
            textTransform: prevStyles.textTransform === 'uppercase' ? 'lowercase' : 'uppercase'
        }));
    };

    const adjustFontSize = (changeWithValue) => {
        setStyles(prevStyles => ({
            prevStyles,
            fontSize: `${parseInt(prevStyles.fontSize) + changeWithValue}px`
        }));
    };

    const increaseFontSize = () => adjustFontSize(2);
    const decreaseFontSize = () => adjustFontSize(-2);

    const changeFontFamily = () => {
        const fonts = ['Arial', 'Courier New', 'Georgia', 'Times New Roman', 'Verdana'];
        toggleStyle('fontFamily', fonts[Math.floor(Math.random() * fonts.length)], 'initial');
    };

    const changeAlignment = (alignment) => {
        setStyles(prevStyles => ({
            prevStyles,
            textAlign: alignment
        }));
    };

    const updateCounts = () => {
        const textArea = document.getElementById("text-area");
        const text = textArea.value;
        const words = text.trim().split(/\s+/).length;
        const characters = text.length;

        document.getElementById("word-count").innerText = `Words : ${words}`;
        document.getElementById("char-count").innerText = `Characters : ${characters}`;

        const wordCountColor = words > 10 ? 'red' : 'black';
        const charCountColor = characters > 10 ? 'red' : 'black';

        document.getElementById("word-count").style.color = wordCountColor;
        document.getElementById("char-count").style.color = charCountColor;
        const totalSeconds = Math.ceil(words / 3);
        const minutes = String(Math.floor(totalSeconds / 60)).padStart(2, '0');
        const seconds = String(totalSeconds % 60).padStart(2, '0');

        document.getElementById("reading-time").innerText = `${minutes}:${seconds}`;
    }

    const copyToClipboard = () => {
        const textArea = document.getElementById("text-area");
        navigator.clipboard.writeText(textArea.value);
    }

    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
    }

    return (
        <>
            <nav className={`navbar navbar-${theme === 'light' ? 'light' : 'dark'} bg-${theme === 'light' ? 'light' : 'dark'} p-3`}>
                <span className="navbar-brand">Text Manipulator</span>

                <div className="btn-group" role="group">
                    <button type="button" className="btn btn-secondary" onClick={boldText}><b>B</b></button>
                    <button type="button" className="btn btn-secondary" onClick={italicText}><i>I</i></button>
                    <button type="button" className="btn btn-secondary" onClick={underlineText}><u>U</u></button>
                    <button type="button" className="btn btn-secondary" onClick={strikeThroughText}><s>S</s></button>
                    <button type="button" className="btn btn-secondary" onClick={changeColor}><span>C</span></button>
                    <button type="button" className="btn btn-secondary" onClick={changeCase}>Aa</button>
                    <button type="button" className="btn btn-secondary" onClick={increaseFontSize}>A+</button>
                    <button type="button" className="btn btn-secondary" onClick={decreaseFontSize}>A-</button>
                    <button type="button" className="btn btn-secondary" onClick={changeFontFamily}>Font</button>
                    <button type="button" className="btn btn-secondary" onClick={() => changeAlignment('left')}>
                        <img src={alignLeftLogo} alt="Align Left" style={{ width: "20px", height: "20px" }} />
                    </button>
                    <button type="button" className="btn btn-secondary" onClick={() => changeAlignment('center')}>
                        <img src={alignCenterLogo} alt="Align Center" style={{ width: "20px", height: "20px" }} />
                    </button>
                    <button type="button" className="btn btn-secondary" onClick={() => changeAlignment('right')}>
                        <img src={alignRightLogo} alt="Align Right" style={{ width: "20px", height: "20px" }} />
                    </button>
                    <button type="button" className="btn btn-secondary" onClick={copyToClipboard}>
                        <img src={copyLogo} alt="Copy" style={{ width: "20px", height: "20px" }} />
                    </button>
                    <button type="button" className="btn btn-secondary" onClick={toggleTheme}>
                        <img src={theme === 'light' ? darkThemeLogo : darkThemeLogo} alt="Toggle Theme" style={{ width: "20px", height: "20px" }} />
                    </button>
                </div>
            </nav>

            <textarea id="text-area"
                      className="p-3"
                      style={{ ...styles, width: "50%", height: "200px", marginLeft: "auto", marginRight: "auto", marginTop: "50px", display: "block" }}
                      onChange={updateCounts}>
            </textarea>

            <div id="word-count" style={{ textAlign: "center", marginTop: "10px" }}>Word Count : 0</div>
            <div id="char-count" style={{ textAlign: "center" }}>Character Count: 0</div>
            <div id="reading-time" style={{ textAlign: "center" }}>Read Time : 00:00</div>
            <CounterDemo />
        </>
    );
};


export default App;

// import "bootstrap/dist/css/bootstrap.min.css";
// import CounterDemo from "./CounterDemo";

// const App = () => {

//     const toggleStyle = (styleName, value1, value2) => {
//         const textInput = document.getElementById("text-area");
//         textInput.style[styleName] = textInput.style[styleName] === value1 ? value2 : value1;
//     };

//     const boldText = () => toggleStyle('fontWeight', 'bold', 'normal');
//     const italicText = () => toggleStyle('fontStyle', 'italic', 'normal');
//     const underlineText = () => toggleStyle('textDecoration', 'underline', 'none');
//     const strikeThroughText = () => toggleStyle('textDecoration', 'line-through', 'none');

//     const changeColor = () => {
//         const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'brown'];
//         toggleStyle('color', colors[Math.floor(Math.random() * colors.length)], 'black');
//     };

//     const changeCase = () => {
//         const textInput = document.getElementById("text-area");
//         const isUpperCase = textInput.style.textTransform === 'uppercase';
//         textInput.style.textTransform = isUpperCase ? 'lowercase' : 'uppercase';
//     };

//     const increaseFontSize = () => {
//         const textInput = document.getElementById("text-area");
//         const currentSize = parseInt(window.getComputedStyle(textInput).fontSize);
//         textInput.style.fontSize = `${currentSize + 2}px`;
//     };

//     const decreaseFontSize = () => {
//         const textInput = document.getElementById("text-area");
//         const currentSize = parseInt(window.getComputedStyle(textInput).fontSize);
//         textInput.style.fontSize = `${currentSize - 2}px`;
//     };


//     const changeFontFamily = () => {
//         const fonts = ['Arial', 'Courier New', 'Georgia', 'Times New Roman', 'Verdana'];
//         toggleStyle('fontFamily', fonts[Math.floor(Math.random() * fonts.length)], 'initial');
//     };

//     const changeAlignment = (alignment) => {
//         const textInput = document.getElementById("text-area");
//         textInput.style.textAlign = alignment;
//     };

//     const updateCounts = () => {

//         const textArea = document.getElementById("text-area");
//         const text = textArea.value;
//         const words = text.trim().split(/\s+/).filter(Boolean).length;
//         const characters = text.length;

//         document.getElementById("word-count").innerText = `Words : ${words}`;
//         document.getElementById("char-count").innerText = `Characters : ${characters}`;

//         const wordCountColor = words > 10 ? 'red' : 'black';
//         const charCountColor = characters > 10 ? 'red' : 'black';

//         document.getElementById("word-count").style.color = wordCountColor;
//         document.getElementById("char-count").style.color = charCountColor;
//     }

//     return (
//         <>
//             <nav className="navbar navbar-dark bg-dark p-3">
//                 <span className="navbar-brand">Text Manipulator</span>
//                 <div className="btn-group" role="group">
//                     <button type="button" className="btn btn-secondary" onClick={boldText}><b>B</b></button>
//                     <button type="button" className="btn btn-secondary" onClick={italicText}><i>I</i></button>
//                     <button type="button" className="btn btn-secondary" onClick={underlineText}><u>U</u></button>
//                     <button type="button" className="btn btn-secondary" onClick={strikeThroughText}><s>S</s></button>
//                     <button type="button" className="btn btn-secondary" onClick={changeColor}><span>C</span></button>
//                     <button type="button" className="btn btn-secondary" onClick={changeCase}>Aa</button>
//                     <button type="button" className="btn btn-secondary" onClick={increaseFontSize}>A+</button>
//                     <button type="button" className="btn btn-secondary" onClick={decreaseFontSize}>A-</button>
//                     <button type="button" className="btn btn-secondary" onClick={changeFontFamily}>Font</button>
//                     <button type="button" className="btn btn-secondary" onClick={() => changeAlignment('left')}>AL</button>
//                     <button type="button" className="btn btn-secondary" onClick={() => changeAlignment('center')}>AC</button>
//                     <button type="button" className="btn btn-secondary" onClick={() => changeAlignment('right')}>AR</button>
//                 </div>
//             </nav>

//             <textarea id="text-area"
//                       class="p-3"
//                       style={{ width: "50%", height: "200px", marginLeft: "auto", marginRight: "auto", marginTop: "50px", display: "block" }}
//                       onChange={updateCounts}>
//             </textarea>

//             <div id="word-count" style={{ textAlign: "center", marginTop: "10px" }}>Word Count : 0</div>
//             <div id="char-count" style={{ textAlign: "center" }}>Character Count: 0</div>
//             <CounterDemo />
//         </>
//     );
// };


// export default App;