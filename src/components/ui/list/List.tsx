import styles from './list.module.css';
import clsx from 'clsx';
import Image from 'next/image';

interface IElementData {
    startText?: string;
    endText?: string;
    image?: {
        url: string;
        alt: string;
        width: number;
        height: number;
    }
}

interface IListData {
    startEl: IElementData;
    middleEl?: IElementData;
    endEl?: IElementData;
}

interface IListOptions {
    direction: "horizontal" | "vertical";
    data: IListData[]
}

export default function List({direction, data}: IListOptions) {

  return (
    <ul className={clsx(styles.list, styles[direction])}>
        {
            data.map((item, i) => {
                return (
                    <li className={clsx(styles.listItem, direction === 'horizontal' ? styles.listItemColumn : styles.listItemRow)} key={i}> 
                        <div className={styles.startElement}>
                            { item.startEl.startText && item.startEl.startText }
                            { 
                                item.startEl.image && 
                                    <Image 
                                        height={item.startEl.image.height} 
                                        width={item.startEl.image.width} 
                                        src={item.startEl.image.url}
                                        alt={item.startEl.image.alt}
                                    /> 
                            }
                            { item.startEl.endText && item.startEl.endText }
                        </div>
                        {
                            item.middleEl &&
                                <div className={styles.middleElement}>
                                    { item.middleEl.startText && item.middleEl.startText }
                                    { 
                                        item.middleEl.image && 
                                            <Image 
                                                height={item.middleEl.image.height} 
                                                width={item.middleEl.image.width} 
                                                src={item.middleEl.image.url}
                                                alt={item.middleEl.image.alt}
                                            /> 
                                    }
                                    { item.middleEl.endText && item.middleEl.endText }
                                </div>
                        }
                        {
                            item.endEl &&
                                <div className={styles.endElement}>
                                    { item.endEl.startText && item.endEl.startText }
                                    { 
                                        item.endEl.image && 
                                            <Image 
                                                height={item.endEl.image.height} 
                                                width={item.endEl.image.width} 
                                                src={item.endEl.image.url}
                                                alt={item.endEl.image.alt}
                                            /> 
                                    }
                                    { item.endEl.endText && item.endEl.endText }
                                </div>
                        }
                    </li>
                )
            })
        }
    </ul>
  )
}