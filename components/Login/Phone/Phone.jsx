import styles from './Phone.module.css'
import printila from '../../../public/printila_logo.png'
import Image from 'next/image'


const Phone = () => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <Image src={printila} width={130} height={50} />
                <h2>Log in</h2>
                <form className={styles.form}>
                    <div className={styles.phone}>
                        <label htmlFor="phone">Mobile number</label>
                        <input type="text" inputMode='numeric' name="phone" id="phone" maxLength={10} min={10} placeholder='Enter Your phone no.' />
                    </div>
                    <div className={styles.checkbox}>
                        <input type="checkbox" required name='terms&condition' id='terms&condition' />
                        <label htmlFor="terms&condition">
                            By clicking you are agreeing to our <span style={{ color: "var(--dark_red)" }}> Terms & Condition </span>
                            and Privacy Policy
                        </label>
                    </div>
                    <button>
                        Get Started
                    </button>
                </form>
            </div>
        </div>

    )
}

export default Phone