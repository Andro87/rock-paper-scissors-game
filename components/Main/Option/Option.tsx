import { ReactNode, useState } from "react";
import styles from "./Option.module.scss";

interface Props {
    readonly icon: string;
    readonly option_color: string;
    readonly position?: string;
    readonly onChoice?: () => void;
    readonly isWinner?: boolean;
    readonly isNotBtn?: boolean;
}

export const Option: React.FunctionComponent<Props> = props => {
    const { icon, option_color, position, onChoice, isWinner, isNotBtn } =
        props;

    return (
        <div
            className={`${styles.option_container} ${styles[option_color]} 
            ${position && styles[position]}  ${isWinner && styles.isWinner} ${
                isNotBtn && styles.option_isNotBtn
            }`}
            onClick={() => {
                onChoice && onChoice();
            }}
        >
            <div className={styles.icon_container}>
                <img src={icon} alt="" />
            </div>
        </div>
    );
};
