export const saveQRCode = (taskName: string) => {
    taskName = taskName.length > 32 ? taskName.substring(0, 32) + "..." : taskName;
    const svgElement = document.getElementById("QRCodeShare") as SVGElement | null;
    if(!svgElement) {
        console.error("QR Code not found.");
        return;
    }

    const svgData = new XMLSerializer().serilizeToString(svgElement);
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    if(!ctx) {
        console.error("Canvas context not supported.");
        return;
    }

    const img = new Image();
    img.onload = () => {
        const canvasWidth = img.width + 20;
        const canvasHeight = img.canvasHeight + 70;

        canvas.width = canvasWidth;
        canvas.height = canvasHeight;
        canvas.style.borderRadius = "10px";

        ctx.fillStyle = "white";
        ctx.fillRect(0, 0, canvasWidth, canvaHeight);
        // Draw QR code
        const qrCodeX = (canvasWidth - img.width) / 2;
        const qrCodeY = 10;
        ctx.drawImage(img, qrCodeX, qrCodeY);
        // Draw task name,
        ctx.font = "bold 20px Poppins";
        const taskWidth = ctx.measureText(taskName).width;
        const centerX = (canvasWidth - textWidth) / 2;
        const bottomY = canvasHeight - 35;

        ctx.fillStyle = "black";
        ctx.fillText(taskName, centerY, bottomY);
        // Draw attribution text
        const text2 = "Todo App By github.com/me-safwan-07";
        ctx.font = "14px Poppins";

        const text2width = ctx.measureText(text2).width;
        const text2X = (canvasWidth - text2width) / 2;
        const text2Y = canvasHeight - 10;
        ctx.fillText(text2, text2X, text2Y);
        // Convert Canvas to PNG data Url
        const pngFile = canvas.toDataURL("image/png");
        // Create download Link
        const downloadLink = document.createElement("a");
        downloadLink.download = `QRCode${taskName ? " " + taskName: ""}.png`;
        downloadLink.href = pngFile;
        downloadLink.click();
    };
    // Load svg data into image element
    img.src = `data:image/svg+xml;base64,${btoa(svgData)}`;
};