import From from "@/components/shared/form/From";
import Image from "next/image";

import styles from './page.module.css';

export default function Home() {
	return (
		<main className={styles.container}>
			<div className={styles.left}>
				<div className={styles.imageContainer}>
					<Image
						width={100}
						height={100}
						src={'/umbrela.png'}
						alt="Umbrela"
						className={styles.img}
					/>
				</div>
			</div>
			<div className={styles.right}>
				<From />
			</div>
		</main>
	);
}
