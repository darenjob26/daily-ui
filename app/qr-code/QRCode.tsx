import styles from "./QRCode.module.css";
import Image from "next/image";

function QRCode() {
	return (
		<div className={styles.body}>
			<div className={styles.component}>
				<Image
					className={styles.image}
					src="/image-qr-code.png"
					alt="qr"
					width="350"
					height="350"
				/>
				<div className={styles.textBox}>
					<h6 className={styles.title}>
						Improve your front-end skills by building projects
					</h6>
					<p className={styles.description}>
						Scan the QR code to visit Frontend Mentor and take your
						coding skills to the next level
					</p>
				</div>
			</div>
		</div>
	);
}

export default QRCode;
