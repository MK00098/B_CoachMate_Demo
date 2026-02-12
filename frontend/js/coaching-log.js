// 오늘 날짜 기본값 설정
document.getElementById('date').valueAsDate = new Date();

// 운동 항목 추가
function addExercise() {
    const list = document.getElementById('exerciseList');
    const item = document.createElement('div');
    item.className = 'exercise-item';
    item.innerHTML = `
        <div class="exercise-row">
            <input type="text" placeholder="운동명" class="ex-name">
            <input type="number" placeholder="세트" class="ex-sets">
            <input type="number" placeholder="횟수" class="ex-reps">
            <input type="text" placeholder="무게(kg)" class="ex-weight">
        </div>
    `;
    list.appendChild(item);
}

// 운동일지 저장
function saveLog() {
    const exercises = [];
    document.querySelectorAll('.exercise-item').forEach(item => {
        const name = item.querySelector('.ex-name').value;
        if (name) {
            exercises.push({
                name: name,
                sets: item.querySelector('.ex-sets').value || '-',
                reps: item.querySelector('.ex-reps').value || '-',
                weight: item.querySelector('.ex-weight').value || '-'
            });
        }
    });

    const log = {
        date: document.getElementById('date').value,
        memberName: document.getElementById('memberName').value,
        sessionType: document.getElementById('sessionType').value,
        exercises: exercises,
        condition: document.getElementById('condition').value,
        feedback: document.getElementById('feedback').value,
        createdAt: new Date().toISOString()
    };

    // 결과 표시
    document.getElementById('result').style.display = 'block';
    document.getElementById('resultData').textContent = JSON.stringify(log, null, 2);

    // 콘솔에도 출력
    console.log('운동일지 저장:', log);
}
