import Header from '@/components/shared/header/Header';
// import Card from '@/components/shared/card/page';

import styles from './user.module.css';
import clsx from 'clsx';
import Image from 'next/image';
import List from '@/components/ui/list/List';
import CitiesList from '@/components/shared/citiesList/CitiesList';
import { ICity } from '@/types';
import Dropdown from '@/components/ui/dropdown/Dropdown';

export default async function UserPage() {

    const citiesList: ICity[] = [
        {
            id: 1,
            cityName: "Lviv",
            weatherIcon: 'https://cdn.iconscout.com/icon/free/png-512/free-ios-weather-icon-download-in-svg-png-gif-file-formats--11-pack-user-interface-icons-461610.png?f=webp&w=512',
            temp: 31
        },
        {
            id: 2,
            cityName: "Madrid",
            weatherIcon: 'https://cdn.iconscout.com/icon/free/png-512/free-ios-weather-icon-download-in-svg-png-gif-file-formats--11-pack-user-interface-icons-461610.png?f=webp&w=512',
            temp: 55
        },
    ]

    return (
        <main className={styles.container}>
            <Header />
            <div className={styles.weather}>
                <div className={clsx(styles.citiesList, styles.left)}>
                    <CitiesList list={citiesList}/>
                    <Dropdown />
                </div>
                <div className={clsx(styles.cityWeather, styles.right)}>
                    <div className={styles.nowForecast}>
                        <div className={styles.nowLeft}>
                            <span className={clsx(styles.bigFont, styles.span)}>Madrid</span>
                            <span className={clsx(styles.smallFont, styles.span)}>Chance of rain: 0%</span>
                            <span className={clsx(styles.bigFont, styles.span)}>31°</span>
                        </div>
                        <div className={styles.nowRight}>
                            <Image 
                                width={100}
                                height={100}
                                src={'https://cdn.iconscout.com/icon/free/png-512/free-ios-weather-icon-download-in-svg-png-gif-file-formats--11-pack-user-interface-icons-461610.png?f=webp&w=512'}
                                alt='Weather picture'
                            />
                        </div>
                    </div>
                    <div className={styles.todaysForecast}>
                        <h3>Todays Forecast</h3>

                        <List 
                            direction='horizontal' 
                            data={[
                                {
                                    startEl: {
                                        startText: "06:00"
                                    },
                                    middleEl: {
                                        image: {
                                            height: 50,
                                            width: 50,
                                            url: 'https://cdn.iconscout.com/icon/free/png-512/free-ios-weather-icon-download-in-svg-png-gif-file-formats--11-pack-user-interface-icons-461610.png?f=webp&w=512',
                                            alt: 'Weather Icon'
                                        }
                                    },
                                    endEl: {
                                        startText: '31°'
                                    }
                                },
                                {
                                    startEl: {
                                        startText: "12:00"
                                    },
                                    middleEl: {
                                        image: {
                                            height: 50,
                                            width: 50,
                                            url: 'https://cdn.iconscout.com/icon/free/png-512/free-ios-weather-icon-download-in-svg-png-gif-file-formats--11-pack-user-interface-icons-461610.png?f=webp&w=512',
                                            alt: 'Weather Icon'
                                        },
                                    },
                                    endEl: {
                                        startText: '33°'
                                    }
                                },
                            ]} />

                    </div>
                    <div className={styles.threeDayForecast}>
                        <h3>3-Days Forecast</h3>
                        <List 
                            direction='vertical'
                            data={[
                                {
                                    startEl: {
                                        startText: "Today"
                                    },
                                    middleEl: {
                                        image: {
                                            height: 50,
                                            width: 50,
                                            url: 'https://cdn.iconscout.com/icon/free/png-512/free-ios-weather-icon-download-in-svg-png-gif-file-formats--11-pack-user-interface-icons-461610.png?f=webp&w=512',
                                            alt: 'weather Icon'
                                        },
                                        endText: 'Sunny'
                                    },
                                    endEl: {
                                        startText: '36/15'
                                    }
                                },
                                {
                                    startEl: {
                                        startText: "Today"
                                    },
                                    middleEl: {
                                        image: {
                                            height: 50,
                                            width: 50,
                                            url: 'https://cdn.iconscout.com/icon/free/png-512/free-ios-weather-icon-download-in-svg-png-gif-file-formats--11-pack-user-interface-icons-461610.png?f=webp&w=512',
                                            alt: 'weather Icon'
                                        },
                                        endText: 'Sunny'
                                    },
                                    endEl: {
                                        startText: '36/15'
                                    }
                                },
                            ]}
                        />

                        {/* <ul className={styles.threedaysList}>
                            <li className={styles.threedaysCard}>
                                <span>Today</span>
                                <div style={{display: 'flex', alignItems: 'center', gap: '5px'}}>
                                    <Image 
                                        width={40}
                                        height={40}
                                        src={'https://cdn.iconscout.com/icon/free/png-512/free-ios-weather-icon-download-in-svg-png-gif-file-formats--11-pack-user-interface-icons-461610.png?f=webp&w=512'}
                                        alt='Weather picture'
                                    />
                                    <span>Sunny</span>
                                </div>
                                <div>
                                    <span>36</span>/<span>25</span>
                                </div>
                            </li>
                            <li className={styles.threedaysCard}>
                                <span>Today</span>
                                <div style={{display: 'flex', alignItems: 'center', gap: '5px'}}>
                                    <Image 
                                        width={40}
                                        height={40}
                                        src={'https://cdn.iconscout.com/icon/free/png-512/free-ios-weather-icon-download-in-svg-png-gif-file-formats--11-pack-user-interface-icons-461610.png?f=webp&w=512'}
                                        alt='Weather picture'
                                    />
                                    <span>Sunny</span>
                                </div>
                                <div>
                                    <span>36</span>/<span>25</span>
                                </div>
                            </li>
                            <li className={styles.threedaysCard}>
                                <span>Today</span>
                                <div style={{display: 'flex', alignItems: 'center', gap: '5px'}}>
                                    <Image 
                                        width={40}
                                        height={40}
                                        src={'https://cdn.iconscout.com/icon/free/png-512/free-ios-weather-icon-download-in-svg-png-gif-file-formats--11-pack-user-interface-icons-461610.png?f=webp&w=512'}
                                        alt='Weather picture'
                                    />
                                    <span>Sunny</span>
                                </div>
                                <div>
                                    <span>36</span>/<span>25</span>
                                </div>
                            </li>
                        </ul> */}
                    </div>
                </div>
            </div>
        </main>
    )
}