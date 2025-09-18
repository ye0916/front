document.getElementById('uploadArea').addEventListener('click', function() {
    document.getElementById('fileInput').click();
});
//通义灵码666
document.getElementById('fileInput').addEventListener('change', function(event) {
    const fileName = event.target.files[0].name;
    document.getElementById('uploadArea').innerHTML = `
        <i class="upload-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M15 9h-4V4H9v5H5l7 7 7-7h-4zm2 10v2h2v-2h-2zM9 19V5h6v14H9z"/></svg></i>
        <p>${fileName}</p>`;
});