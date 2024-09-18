import styles from './Styles/Pets.module.css'
import Data from '../Data/Data'
import Card from '../Layout/Card'



const Pets = () => {


    return(
        <div className={styles.pets}>
            <h1>Veja nossos pets queridos!</h1>

            <div className={styles.petContainer}>
                {Data.petData.map((pet, index) => {
                    return (
                        <Card id={pet.id} img={pet.img} name={pet.name} description={pet.description} key={index} />
                    )
                })}
            </div>
            
        </div>
    )
}

export default Pets;