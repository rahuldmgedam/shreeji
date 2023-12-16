function openImage(element) {
    const images = document.querySelectorAll('.product1 img'); // Select all images in product3

    const newIndex = Array.from(images).indexOf(element); // Get the index of the clicked image
    const imageSrcArray = Array.from(images).map(img => img.src); // Create an array of image sources

    const newWindow = window.open('', '_blank'); // Open a new blank window
    newWindow.document.write(`
        <html>
            <head>
                <title>Image Viewer</title>
                <style>
                    /* Add your CSS styles for the image viewer window here */
                </style>
            </head>
            <body>
                <img id="imageDisplay" src="${element.src}" alt="" style="max-width: 100%; max-height: 100%;">
                <button onclick="prevImage()">Previous</button>
                <button onclick="nextImage()">Next</button>
                <script>
                    const imageSrcArray = ${JSON.stringify(imageSrcArray)};
                    let currentIndex = ${newIndex};

                    const imageDisplay = document.getElementById('imageDisplay');

                    function prevImage() {
                        currentIndex = (currentIndex - 1 + imageSrcArray.length) % imageSrcArray.length;
                        imageDisplay.src = imageSrcArray[currentIndex];
                    }

                    function nextImage() {
                        currentIndex = (currentIndex + 1) % imageSrcArray.length;
                        imageDisplay.src = imageSrcArray[currentIndex];
                    }
                </script>
            </body>
        </html>
    `);
}


function openImage(element) {
    const images = document.querySelectorAll('.product2 img'); // Select all images in product3

    const newIndex = Array.from(images).indexOf(element); // Get the index of the clicked image
    const imageSrcArray = Array.from(images).map(img => img.src); // Create an array of image sources

    const newWindow = window.open('', '_blank'); // Open a new blank window
    newWindow.document.write(`
        <html>
            <head>
                <title>Image Viewer</title>
                <style>
                    /* Add your CSS styles for the image viewer window here */
                </style>
            </head>
            <body>
                <img id="imageDisplay" src="${element.src}" alt="" style="max-width: 100%; max-height: 100%;">
                <button onclick="prevImage()">Previous</button>
                <button onclick="nextImage()">Next</button>
                <script>
                    const imageSrcArray = ${JSON.stringify(imageSrcArray)};
                    let currentIndex = ${newIndex};

                    const imageDisplay = document.getElementById('imageDisplay');

                    function prevImage() {
                        currentIndex = (currentIndex - 1 + imageSrcArray.length) % imageSrcArray.length;
                        imageDisplay.src = imageSrcArray[currentIndex];
                    }

                    function nextImage() {
                        currentIndex = (currentIndex + 1) % imageSrcArray.length;
                        imageDisplay.src = imageSrcArray[currentIndex];
                    }
                </script>
            </body>
        </html>
    `);
}




function openImage(element) {
    const images = document.querySelectorAll('.product3 img'); // Select all images in product3

    const newIndex = Array.from(images).indexOf(element); // Get the index of the clicked image
    const imageSrcArray = Array.from(images).map(img => img.src); // Create an array of image sources

    const newWindow = window.open('', '_blank'); // Open a new blank window
    newWindow.document.write(`
        <html>
            <head>
                <title>Image Viewer</title>
                <style>
                    /* Add your CSS styles for the image viewer window here */
                </style>
            </head>
            <body>
                <img id="imageDisplay" src="${element.src}" alt="" style="max-width: 100%; max-height: 100%;">
                <button onclick="prevImage()">Previous</button>
                <button onclick="nextImage()">Next</button>
                <script>
                    const imageSrcArray = ${JSON.stringify(imageSrcArray)};
                    let currentIndex = ${newIndex};

                    const imageDisplay = document.getElementById('imageDisplay');

                    function prevImage() {
                        currentIndex = (currentIndex - 1 + imageSrcArray.length) % imageSrcArray.length;
                        imageDisplay.src = imageSrcArray[currentIndex];
                    }

                    function nextImage() {
                        currentIndex = (currentIndex + 1) % imageSrcArray.length;
                        imageDisplay.src = imageSrcArray[currentIndex];
                    }
                </script>
            </body>
        </html>
    `);
}


function openImage(element) {
    const images = document.querySelectorAll('.product4 img'); // Select all images in product3

    const newIndex = Array.from(images).indexOf(element); // Get the index of the clicked image
    const imageSrcArray = Array.from(images).map(img => img.src); // Create an array of image sources

    const newWindow = window.open('', '_blank'); // Open a new blank window
    newWindow.document.write(`
        <html>
            <head>
                <title>Image Viewer</title>
                <style>
                    /* Add your CSS styles for the image viewer window here */
                </style>
            </head>
            <body>
                <img id="imageDisplay" src="${element.src}" alt="" style="max-width: 100%; max-height: 100%;">
                <button style="" onclick="prevImage()">Previous</button>
                <button onclick="nextImage()">Next</button>
                <script>
                    const imageSrcArray = ${JSON.stringify(imageSrcArray)};
                    let currentIndex = ${newIndex};

                    const imageDisplay = document.getElementById('imageDisplay');

                    function prevImage() {
                        currentIndex = (currentIndex - 1 + imageSrcArray.length) % imageSrcArray.length;
                        imageDisplay.src = imageSrcArray[currentIndex];
                    }

                    function nextImage() {
                        currentIndex = (currentIndex + 1) % imageSrcArray.length;
                        imageDisplay.src = imageSrcArray[currentIndex];
                    }
                </script>
            </body>
        </html>
    `);
}