import Input from '@/components/ui/input/Input';
import styles from './header.module.css';
import Link from 'next/link';
import { SlidersHorizontal } from 'lucide-react';

export default function Header() {
    return(
        <div className={styles.container}>
            <div className={styles.left}>
                <Input type='text' placeholder='Enter city name...' />
            </div>
            <div className={styles.right}>
                <Link href='/settings'><SlidersHorizontal size={25} color='#fff' /></Link>
            </div> 
        </div>
    )
}