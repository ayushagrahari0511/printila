import styles from '../styles/Login.module.css'
import Image from 'next/image'
import triangle from '../public/Group9470.svg'
import Phone from '../components/Login/Phone/Phone'

const login = () => {
    return (
        <>
            <section className={styles.container}>
                {/* Phone component to enter phone number render here------------
                ------------------------ */}
                <Phone />
                <div className={styles.triangleLeft}>
                    <Image src={triangle} />
                </div>
                <div className={styles.triangleRight}>
                    <Image src={triangle} />
                </div>
            </section>
        </>
    )
}

export default login