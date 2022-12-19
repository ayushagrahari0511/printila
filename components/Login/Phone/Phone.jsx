import styles from './Phone.module.css'
import { useState } from 'react'
import printila from '../../../public/printila_logo.png'
import Image from 'next/image'

const Phone = () => {
    const [phone, setPhone] = useState()
    const [checked, setChecked] = useState(false)

    // Function to store the number in state
    const inputPhone = (e) => {
        setPhone(e.target.value)
    }

    const inputChecked = () => {
        setChecked(!checked)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <Image src={printila} width={130} height={50} />
                <h2>Log in</h2>
                <form className={styles.form}>
                    <div className={styles.phone}>
                        <label htmlFor="phone">Mobile number</label>
                        <input type="text" inputMode='numeric' onChange={inputPhone} value={phone} name="phone" id="phone" maxLength={10} min={10} max={10} placeholder='Enter Your phone no.' />
                    </div>
                    <div className={styles.checkbox}>
                        <input type="checkbox" name='terms&condition' id='terms&condition' onChange={inputChecked} />
                        <label htmlFor="terms&condition" onChange={inputChecked}>
                            By clicking you are agreeing to our <span style={{ color: "var(--dark_red)" }}> Terms & Condition </span>
                            and Privacy Policy
                        </label>
                    </div>
                    <button onClick={handleSubmit} disabled={!checked || !phone}>
                        Get Started
                    </button>
                </form>
            </div>
        </div>

    )
}

export default Phone