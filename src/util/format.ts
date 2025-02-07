export function formatDuration(seconds: number): string {
    seconds /= 1000
    const units: [number, string][] = [
        [31536000, '年'],
        [2592000, '月'],
        [86400, '日'],
        [3600, '时'],
        [60, '分'],
        [1, '秒']
    ];

    if (seconds === 0) return '0秒';

    const parts: string[] = [];

    for (const [unitSeconds, unitName] of units) {
        if (seconds >= unitSeconds) {
            const count = Math.floor(seconds / unitSeconds);
            parts.push(`${count}${unitName}`);
            seconds %= unitSeconds;
        }
    }

    return parts.join('');
}

export function formatTime(date: Date): string {
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours}时${minutes}分`;
}

