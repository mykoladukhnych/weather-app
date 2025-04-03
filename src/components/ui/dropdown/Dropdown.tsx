'use client'

import clsx from 'clsx';
import styles from './dropdown.module.css';
import { useState } from 'react';

export default function Dropdown() {

    const list = [
        {
            name: 'Item1'
        },
        {
            name: 'Item2'
        },
        {
            name: 'Item3'
        },
    ]
    const [active, setActive] = useState(false);
    const [activeCity, setActiveCity] = useState(list[0])    

    return (
        <div className={clsx(styles.container, active && styles.active)}>
            <div className={styles.dropdownHeader} onClick={() => setActive(prev => !prev)}>
                {activeCity.name}
            </div>
            <ul className={styles.dropdownList}>
                {
                    list.map((item, i) => <li onClick={() => {setActiveCity(item); setActive(false)}} key={i} className={styles.dropdownItem}>{item.name}</li>)
                }
            </ul>
        </div>
    )
}
