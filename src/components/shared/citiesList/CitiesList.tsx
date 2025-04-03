'use client'

import { useState } from 'react';
import Card from '../card/Card';
import { ICity } from '@/types';

interface ICitiesList {
    list: ICity[]
}

export default function CitiesList({list}: ICitiesList) {
    const [active, setActive] = useState(0);

    return (
        <ul>
            {
                list.map((item, i) => <Card key={i}  city={item} index={i} active={active} setActive={setActive}/>)
            }
        </ul>
    )
}
