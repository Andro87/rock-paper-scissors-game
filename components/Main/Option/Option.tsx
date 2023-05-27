import { ReactNode, useState } from "react";
import styles from "./Option.module.scss";

interface Props {
    readonly icon: string;
    readonly option: string;
    readonly position?: string;
    readonly onChoice?: () => void;
    readonly isWinner?: boolean;
    readonly isNotBtn?: boolean;
}

export const Option: React.FunctionComponent<Props> = props => {
    const { icon, option, position, onChoice, isWinner, isNotBtn } = props;

    return (
        <div
            className={`${styles.option_container} ${styles[option]} 
            ${position && styles[position]}  ${isWinner && styles.isWinner} ${
                isNotBtn && styles.option_isNotBtn
            }`}
            onClick={() => {
                onChoice && onChoice();
            }}
        >
            <div className={styles.icon_container}>
                <img src={icon} alt={option} />
            </div>
        </div>
    );
};
