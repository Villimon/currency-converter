import React from 'react';

const Block = ({ value, currency, onChangeCurrency, onChangeValue }) => {

    const defaultCurrency = ['RUB', 'USD', 'EUR', 'KZT']

    return (
        <div className="block">
            <ul className="block__list">
                {defaultCurrency.map((cur) => <li
                    onClick={() => onChangeCurrency(cur)}
                    className={currency === cur ? "block__item active" : "block__item"}
                    key={cur}
                >
                    {cur}</li>)}
            </ul>
            <input
                type="number"
                className="block__input"
                value={value}
                onChange={(e) => onChangeValue(e.target.value)}
                placeholder={0}
            />
        </div>
    );
}

export default Block;
