import React, { useState } from 'react'
import './App.css'

function App() {
    const [input, setInput] = useState('')
    const [showEngineeringPanel, setShowEngineeringPanel] = useState(false)

    const handleButtonClick = (value) => {
        setInput(input + value)
    }

    const handleClear = () => {
        setInput('')
    }

    const handleCalculate = () => {
        try {
            setInput(eval(input).toString())
        } catch (error) {
            setInput('Ошибка')
            setTimeout(() => setInput(''), 1500)
        }
    }

    const handleToggleEngineeringPanel = () => {
        setShowEngineeringPanel(!showEngineeringPanel)
    }

    const handleEngineeringFunction = (func) => {
        const result = eval(func + '(' + input + ')')
        setInput(result.toString())
    }

    return (
        <div className="calculator-container">
            <div className="calculator">
                <input type="text" value={input} readOnly />
                <div className="buttons">
                    <button onClick={() => handleButtonClick('1')}>1</button>
                    <button onClick={() => handleButtonClick('2')}>2</button>
                    <button onClick={() => handleButtonClick('3')}>3</button>
                    <button onClick={() => handleButtonClick('+')}>+</button>

                    <button onClick={() => handleButtonClick('4')}>4</button>
                    <button onClick={() => handleButtonClick('5')}>5</button>
                    <button onClick={() => handleButtonClick('6')}>6</button>
                    <button onClick={() => handleButtonClick('-')}>-</button>

                    <button onClick={() => handleButtonClick('7')}>7</button>
                    <button onClick={() => handleButtonClick('8')}>8</button>
                    <button onClick={() => handleButtonClick('9')}>9</button>
                    <button onClick={() => handleButtonClick('*')}>*</button>

                    <button onClick={handleClear}>C</button>
                    <button onClick={() => handleButtonClick('0')}>0</button>
                    <button onClick={handleCalculate}>=</button>
                    <button onClick={() => handleButtonClick('/')}>/</button>
                </div>
                <button
                    className="engineering-toggle"
                    onClick={handleToggleEngineeringPanel}
                >
                    {showEngineeringPanel ? 'Скрыть' : 'Показать'} инженерные
                    функции
                </button>
            </div>

            {showEngineeringPanel && (
                <div className="engineering-panel">
                    <button
                        onClick={() => handleEngineeringFunction('Math.sqrt')}
                    >
                        √x
                    </button>
                    <button
                        onClick={() => handleEngineeringFunction('Math.pow')}
                    >
                        x²
                    </button>
                    <button
                        onClick={() => handleEngineeringFunction('Math.sin')}
                    >
                        sin
                    </button>
                    <button
                        onClick={() => handleEngineeringFunction('Math.cos')}
                    >
                        cos
                    </button>
                </div>
            )}
        </div>
    )
}

export default App
