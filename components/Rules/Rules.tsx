import styles from "./Rules.module.scss";

import Close from "svgrs/icon-close.svg";

interface Props {
    readonly onCloseRulesTable: () => void;
}

export const Rules: React.FunctionComponent<Props> = props => {
    const { onCloseRulesTable } = props;

    return (
        <section aria-label="rules" className={styles.section_rules}>
            <h2>rules</h2>

            <img src="./images/image-rules.svg" alt="rules image" />

            <button
                type="button"
                title="close rules"
                className={styles.btn_close_rules}
                onClick={() => onCloseRulesTable()}
            >
                <Close />
            </button>
        </section>
    );
};
