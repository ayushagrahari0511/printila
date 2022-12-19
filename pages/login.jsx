import { useState } from 'react'
import styles from '../styles/Login.module.css'
import Image from 'next/image'
import triangle from '../public/Group9470.svg'
import Phone from '../components/Login/Phone/Phone'

const login = () => {
    const [phone, setPhone] = useState()
    const [checked, setChecked] = useState(false)

    // Function to store the number in state
    const inputPhone = (e) => {
        setPhone(e.target.value)
    }

    const inputChecked = () => {
        setChecked(!checked)
    }

    return (
        <>
            <section className={styles.container}>
                {/* Phone component to enter phone number render here------------
                ------------------------ */}
                <Phone phone={phone} checked={checked} inputPhone={inputPhone} inputChecked={inputChecked} />
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