'use client'

import { useEffect, useState } from 'react';
import clsx from 'clsx';
import styles from './input.module.css';

interface IInput {
    type: "text" | "email" | "password" | "search",
    placeholder?: string,
}

export default function Input({ type, placeholder }: IInput) {
    const [value, setValue] = useState('');
    const [showList, setShowList] = useState(false);

    useEffect(() => {
        if (type === 'search' && value.length > 2) {
            setShowList(true)
        } else {
            setShowList(false)
        }
    }, [type, value])

    return(
        <div className={styles.container}>
            <input 
                type={type === "search" ? 'text' : type} 
                value={value}
                onChange={e => setValue(e.target.value)}   
                className={styles.input} 
                placeholder={placeholder}
            />
            <ul className={clsx(styles.list, showList && styles.listShow)}>
                 <li className={styles.listItem}>Item 1</li>
                 <li className={styles.listItem}>Item 2</li>
                 <li className={styles.listItem}>Item 3</li>
            </ul>           
        </div>
    )
}