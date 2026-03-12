export const initDisplay = (): void => {
    process.stdout.write('\x1b[?25l');  // カーソル非表示
    process.stdout.write('\x1b[2J');    // 画面クリア
    process.stdout.write('\x1b[H');     // カーソルを左上に移動
}

export const cleanupDisplay = (): void => {
    process.stdout.write('\x1b[?25h');  // カーソル再表示
    process.stdout.write('\x1b[2J');    // 画面クリア
    process.stdout.write('\x1b[H');     // カーソルを左上に移動
}
