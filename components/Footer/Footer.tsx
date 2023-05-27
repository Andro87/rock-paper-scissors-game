import styles from "./Footer.module.scss";

interface Props {
    readonly onOpenRulesTable: () => void;
}

export const Footer: React.FunctionComponent<Props> = props => {
    const { onOpenRulesTable } = props;
    return (
        <footer className={styles.footer}>
            <button
                type="button"
                title="show rules"
                className={styles.btn_rules}
                onClick={() => onOpenRulesTable()}
            >
                rules
            </button>
        </footer>
    );
};
