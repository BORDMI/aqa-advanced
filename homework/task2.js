const averageGrade = 85;

const result = (() => {
  switch (true) {
    case averageGrade < 0 || averageGrade > 100: return 'Неправильна оцінка';
    case averageGrade < 60: return 'Незадовільно';
    case averageGrade <= 70: return 'Задовільно';
    case averageGrade <= 80: return 'Добре';
    case averageGrade <= 90: return 'Дуже добре';
    default: return 'Відмінно';
  }
})();

console.log(result);
