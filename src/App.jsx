import QRCode from "react-qr-code";
import QRCodeLink from "qrcode";
import { useState } from "react";
import "./App.css";

import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";

function App() {
    const [text, setText] = useState("");
    const [qrCode, setQrCode] = useState("");
    const [darkMode, setDarkMode] = useState(false);

    const handleChange = (e) => {
        setText(e.target.value);
        handleGenerate(e.target.value);
    };

    const handleGenerate = (link_url) => {
        QRCodeLink.toDataURL(
            link_url,
            {
                width: 600,
                margin: 3,
            },
            (err, url) => {
                setQrCode(url);
            }
        );
    };

    const toggleTheme = () => {
        setDarkMode(!darkMode);
    };

    return (
        <div className={`container ${darkMode ? "dark-mode" : ""}`}>
            <h1>QR Code Generator</h1>
            <input
                type="text"
                className="input"
                placeholder="Digite aqui seu link ou texto..."
                onChange={handleChange}
            />
            <div className="qrcode">
                <QRCode value={text} />
            </div>
            <a href={qrCode} download={"qrcode.png"} className="botao_salvar">
                Download
            </a>
            <button onClick={toggleTheme} className="dark-mode-toggle">
                {darkMode ? <MdOutlineLightMode /> : <MdOutlineDarkMode />}
            </button>
        </div>
    );
}

export default App;
