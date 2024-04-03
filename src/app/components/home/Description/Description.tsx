import styles from "./Description.module.sass";
import Image from "next/image";

export const Description = () => {
    return (
        <section className={styles.Description}>
            <div className={styles.Description__imageContainer}>
                <Image
                    src="/images/description.jpg"
                    alt="description imagen"
                    quality={40}
                    fill
                />
            </div>
            <div className={styles.description__text}>
                <h2>description</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Numquam animi similique necessitatibus dolores placeat
                    architecto hic perferendis asperiores culpa eos et nemo quo
                    vero exercitationem doloremque, laborum nihil nam. Cumque.
                </p>
            </div>
        </section>
    );
};
