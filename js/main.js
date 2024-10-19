function calculate() {
    const stickerWidth = parseFloat(document.getElementById('stickerWidth').value);  // in inches
    const stickerHeight = parseFloat(document.getElementById('stickerHeight').value); // in inches
    const stickerCount = parseInt(document.getElementById('stickerCount').value);
    var materialWidthInches ='48'
    var stickersPerRow = Math.floor(materialWidthInches / stickerWidth);
    var rowsNeeded = Math.ceil(stickerCount / stickersPerRow);
    var totalHeightInches = rowsNeeded * stickerHeight;
    var totalHeightFeet = totalHeightInches / 12;
    var totalPrice = totalHeightFeet * 4 * 260;
    console.log (Math.floor(totalPrice))

    document.getElementById('heightResult').innerText = `Total Copies Typed In: ${stickerCount} `;
    document.getElementById('priceResult').innerText = `Total Price: #${totalPrice.toFixed(2)}`;

    document.getElementById('result').style.display = 'block';
}

function calculatePrice() {
    const width = document.getElementById('bannerWidth').value;
    const height = document.getElementById('bannerHeight').value; 
    const squareFeet = width * height;
    const totalPrice = squareFeet * 260;

    document.getElementById('bannerresult').innerHTML = `Total Price: #${totalPrice.toFixed(2)}`;
}