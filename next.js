const totalSteps = 5;

function nextStep(current) {
    // 1. Sembunyikan langkah saat ini
    document.getElementById('step' + current).classList.remove('active');
    
    // 2. Tentukan angka langkah berikutnya
    let next = current + 1;
    
    // 3. Tampilkan langkah berikutnya
    document.getElementById('step' + next).classList.add('active');
    
    // 4. Update indikator
    document.getElementById('progressText').innerText = 'Langkah ' + next + ' dari ' + totalSteps;
}

function prevStep(current) {
    // 1. Sembunyikan langkah saat ini
    document.getElementById('step' + current).classList.remove('active');
    
    // 2. Hitung langkah sebelumnya
    let prev = current - 1;
    
    // 3. Tampilkan langkah sebelumnya
    document.getElementById('step' + prev).classList.add('active');
    
    // 4. Update indikator 
    document.getElementById('progressText').innerText = 'Langkah ' + prev + ' dari ' + totalSteps;
}