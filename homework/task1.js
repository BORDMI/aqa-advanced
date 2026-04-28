const averageGrade = 85;

const result = (() => {
  if (averageGrade < 60) return 'Незадовільно';
  else if (averageGrade <= 70) return 'Задовільно';
  else if (averageGrade <= 80) return 'Добре';
  else if (averageGrade <= 90) return 'Дуже добре';
  else return 'Відмінно';
})();

console.log(result);
