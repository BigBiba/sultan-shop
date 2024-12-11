'use client'

import React, { useState } from 'react';
import styles from "./BasketCounter.module.scss"

export default function Counter() {
    const [count, setCount] = useState(1);

    const increment = () => setCount(count + 1);
    const decrement = () => {
        if (count > 1) setCount(count - 1);
    };

    return (
        <div className={styles.container}>
            <button onClick={decrement} className={styles.button}>
                -
            </button>
            <span className={styles.count}>{count}</span>
            <button onClick={increment} className={styles.button}>
                +
            </button>
        </div>
    );
}
