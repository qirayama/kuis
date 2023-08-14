export const getGrade = (score) => {
    if (score >= 80) return 'A';
    else if (score >= 70 && score < 80) return 'B';
    else if (score >= 60 && score < 70) return 'C';
    else if (score >= 50 && score < 60) return 'D';
    else return 'E';
}