export const getGrade = (score) => {
    if (score >= 80) return 'A';
    else if (score >= 70 && score < 80) return 'B';
    else if (score >= 60 && score < 70) return 'C';
    else if (score >= 50 && score < 60) return 'D';
    else return 'E';
}

export function formatBytes(bytes, decimals = 2) {
    if (!+bytes) return '0 Bytes'

    const k = 1024
    const dm = decimals < 0 ? 0 : decimals
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']

    const i = Math.floor(Math.log(bytes) / Math.log(k))

    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`
}
