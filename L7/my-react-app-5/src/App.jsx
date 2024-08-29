import "bootstrap/dist/css/bootstrap.min.css";
import CounterDemo from "./CounterDemo";

const App = () => {

    const toggleStyle = (styleName, value1, value2) => {
        const textInput = document.getElementById("text-area");
        textInput.style[styleName] = textInput.style[styleName] === value1 ? value2 : value1;
    };

    const boldText = () => {
        toggleStyle('fontWeight', 'bold', 'normal');
    };

    const italicText = () => {
        toggleStyle('fontStyle', 'italic', 'normal');
    };

    const underlineText = () => {
        toggleStyle('textDecoration', 'underline', 'none');
    };

    const strikeThroughText = () => {
        toggleStyle('textDecoration', 'line-through', 'none');
    };

    const changeColor = () => {
        const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'brown'];
        toggleStyle('color', colors[Math.floor(Math.random() * colors.length)], 'black');
    };

    const changeCase = () => {
        const textInput = document.getElementById("text-area");
        const isUpperCase = textInput.style.textTransform === 'uppercase';
        textInput.style.textTransform = isUpperCase ? 'lowercase' : 'uppercase';
    };

    const increaseFontSize = () => {
        const textInput = document.getElementById("text-area");
        const currentSize = parseInt(window.getComputedStyle(textInput).fontSize);
        textInput.style.fontSize = `${currentSize + 2}px`;
    };

    const decreaseFontSize = () => {
        const textInput = document.getElementById("text-area");
        const currentSize = parseInt(window.getComputedStyle(textInput).fontSize);
        textInput.style.fontSize = `${currentSize - 2}px`;
    };


    const changeFontFamily = () => {
        const fonts = ['Arial', 'Courier New', 'Georgia', 'Times New Roman', 'Verdana'];
        toggleStyle('fontFamily', fonts[Math.floor(Math.random() * fonts.length)], 'initial');
    };

    const changeAlignment = (alignment) => {
        const textInput = document.getElementById("text-area");
        textInput.style.textAlign = alignment;
    };

    const updateCounts = () => {
        
        const textArea = document.getElementById("text-area");
        const text = textArea.value;
        const words = text.trim().split(/\s+/).filter(Boolean).length;
        const characters = text.length;

        document.getElementById("word-count").innerText = `Words : ${words}`;
        document.getElementById("char-count").innerText = `Characters : ${characters}`;

        const wordCountColor = words > 10 ? 'red' : 'black';
        const charCountColor = characters > 10 ? 'red' : 'black';

        document.getElementById("word-count").style.color = wordCountColor;
        document.getElementById("char-count").style.color = charCountColor;
    }

    return (
        <>
            <nav className="navbar navbar-dark bg-dark p-3">
                <span className="navbar-brand">Text Manipulator</span>
                <div className="btn-group" role="group">
                    <button type="button" className="btn btn-secondary" onClick={boldText}><b>B</b></button>
                    <button type="button" className="btn btn-secondary" onClick={italicText}><i>I</i></button>
                    <button type="button" className="btn btn-secondary" onClick={underlineText}><u>U</u></button>
                    <button type="button" className="btn btn-secondary" onClick={strikeThroughText}><s>S</s></button>
                    <button type="button" className="btn btn-secondary" onClick={changeColor}><span>C</span></button>
                    <button type="button" className="btn btn-secondary" onClick={changeCase}>Case</button>
                    <button type="button" className="btn btn-secondary" onClick={increaseFontSize}>A+</button>
                    <button type="button" className="btn btn-secondary" onClick={decreaseFontSize}>A-</button>
                    <button type="button" className="btn btn-secondary" onClick={changeFontFamily}>Font</button>
                    <button type="button" className="btn btn-secondary" onClick={() => changeAlignment('left')}>AL</button>
                    <button type="button" className="btn btn-secondary" onClick={() => changeAlignment('center')}>AC</button>
                    <button type="button" className="btn btn-secondary" onClick={() => changeAlignment('right')}>AR</button>
                </div>
            </nav>

            <textarea id="text-area"
                      class="p-3"
                      style={{ width: "50%", height: "200px", marginLeft: "auto", marginRight: "auto", marginTop: "50px", display: "block" }}
                      onChange={updateCounts}>
            </textarea>

            <div id="word-count" style={{ textAlign: "center", marginTop: "10px" }}>Word Count : 0</div>
            <div id="char-count" style={{ textAlign: "center" }}>Character Count: 0</div>
            <CounterDemo />
        </>
    );
};


export default App;