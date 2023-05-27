import styles from "./Main.module.scss";

import { useState } from "react";

import { Option } from "./Option/Option";

import { options } from "@/data/options_data";

import Choice from "@/model/Choice";

interface Props {
    readonly userChoice: Choice;
    readonly houseChoice: Choice;
    readonly message: string;
    readonly onNewGame: () => void;
    readonly onGameResult: (score: string) => void;
    readonly userResult: boolean;
    readonly houseResult: boolean;
}

export const Main: React.FunctionComponent<Props> = props => {
    const {
        userChoice,
        houseChoice,
        message,
        onGameResult,
        onNewGame,
        userResult,
        houseResult
    } = props;

    const [isTableGameOpen, setIsTableGameOpen] = useState(false);
    const [isNotBtn, setIsNotBtn] = useState(false);

    const allOptions = options.map(option => {
        return (
            <Option
                key={option.id}
                icon={option.icon}
                option_color={option.choice}
                position={option.position}
                onChoice={() => {
                    onGameResult(option.choice);
                    setIsTableGameOpen(true);
                    setIsNotBtn(true);
                }}
            />
        );
    });

    return (
        <main className={styles.main_container}>
            {!isTableGameOpen && (
                <div className={styles.main_options_container}>
                    {allOptions}
                </div>
            )}

            {isTableGameOpen && (
                <div className={styles.main_tablegame_container}>
                    <div className={styles.player_container}>
                        <div className={styles.user_choice}>
                            {userChoice && (
                                <Option
                                    icon={userChoice.icon}
                                    option_color={userChoice.choice}
                                    isWinner={userResult}
                                    isNotBtn={isNotBtn}
                                />
                            )}
                        </div>
                        <p> you Picked</p>
                    </div>
                    <div
                        className={`${styles.player_container} ${styles.player_house}`}
                    >
                        <div className={styles.house_initial_display}></div>
                        <div className={styles.house_choice}>
                            {houseChoice && (
                                <Option
                                    icon={houseChoice.icon}
                                    option_color={houseChoice.choice}
                                    isWinner={houseResult}
                                    isNotBtn={isNotBtn}
                                />
                            )}
                        </div>
                        <p> the house picked</p>
                    </div>

                    <div className={styles.game_result}>
                        <h1>{message}</h1>
                        <button
                            type="button"
                            title="play again"
                            className={styles.btn_play_again}
                            onClick={() => {
                                onNewGame();
                                setIsTableGameOpen(false);
                                console.log(message);
                            }}
                        >
                            play again
                        </button>
                    </div>
                </div>
            )}
        </main>
    );
};
