import React, { useState } from 'react';

const WheelOfFortune = () => {
    const [selectedItem, setSelectedItem] = useState(null);
    const items = ['Александра Федоренко', 'Дарья Недова', 'Рома Иванов ', 'Светлана Сергеевна Панадий', 'Ева Полупан'];

    const spinWheel = () => {
        const randomIndex = Math.floor(Math.random() * items.length);
        setSelectedItem(items[randomIndex]);
    };

    return (
        <div>
            <h1>Колесо фортуны</h1>
            {selectedItem ? (
                <div>
                    <h2>Вы выиграли: {selectedItem}</h2>
                </div>
            ) : (
                <button onClick={spinWheel}>Крутить колесо</button>
            )}
        </div>
    );
};

export default WheelOfFortune;