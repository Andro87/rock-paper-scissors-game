import styles from "./Header.module.scss";

interface Props {
    readonly totalScore: number;
}

export const Header: React.FunctionComponent<Props> = props => {
    const { totalScore } = props;

    return (
        <header className={styles.header}>
            <img src="./images/logo.svg" alt="logo" />

            <div className={styles.score_container}>
                <span>score</span>
                <p>{totalScore}</p>
            </div>
        </header>
    );
};
