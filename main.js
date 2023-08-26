function highlightBox(boxNumber) {
    // Remove highlight from all boxes
    for (let i = 1; i <= 3; i++) {
        document.getElementById('box' + i).classList.remove('highlight');
    }

    // Add highlight to the selected box
    document.getElementById('box' + boxNumber).classList.add('highlight');
}