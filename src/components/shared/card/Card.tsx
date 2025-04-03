'use client'

import Image from 'next/image'
import styles from './card.module.css';
import clsx from 'clsx';
import React, { Dispatch, SetStateAction } from 'react';
import { ICity } from '@/types';

interface CardProps {
    city: ICity;
    index: number;
    active: number;
    setActive: Dispatch<SetStateAction<number>>
}

export default function Card({ city, index, active, setActive }: CardProps) {
  const isActive = active === index
  
  return (
    <button onClick={() => setActive(index)} className={clsx(styles.card, isActive && styles.active)}>
        <div className={styles.left}>
            { city.weatherIcon &&
                <Image
                    width={50}
                    height={50}
                    src={city.weatherIcon}
                    alt='Weather picture'
                    className={styles.weatherPicture}
                />
            }
            <span className={styles.cityName}>{city.cityName}</span>
        </div>
        <div className={styles.right}>
            {city.temp}°
        </div>
    </button>
  )
}
