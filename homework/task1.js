const averageGrade = 99;

const result = (() => {
  if (averageGrade < 0 || averageGrade > 100) return 'Неправильна оцінка';
  else if (averageGrade < 60) return 'Незадовільно';
  else if (averageGrade <= 70) return 'Задовільно';
  else if (averageGrade <= 80) return 'Добре';
  else if (averageGrade <= 90) return 'Дуже добре';
  else if (averageGrade <= 100) return 'Відмінно';
})();

console.log(result);
