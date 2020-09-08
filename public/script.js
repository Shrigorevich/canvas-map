// class Map {
//     // Visible area: CANVAS_SIZE / CELL_SIZE = 400 blocks with scale 1
//     constructor(canvas_size, cell_size, default_scale, scale_by, min_scale) {
//         this.CANVAS_SIZE = canvas_size; // pixels
//         this.CELL_SIZE = cell_size; // pixels
//         this.DEFAULT_SCALE = default_scale;
//         this.SCALE_BY = scale_by;
//         this.MIN_SCALE = min_scale; //CANVAS_SIZE / (CELL_SIZE * 500); // where 150 is width/height of visible area
//         this.MAX_SCALE = canvas_size / (cell_size * 25); // where 25 is width/height of visible area
//     }
// }
const CANVAS_SIZE = 700; // pixels
const CELL_SIZE = 2; // pixels

// Visible area: CANVAS_SIZE / CELL_SIZE = 400 blocks with scale 1

const DEFAULT_SCALE = 2.0;
const SCALE_BY = 0.95;
const MIN_SCALE = 0.7; //CANVAS_SIZE / (CELL_SIZE * 500); // where 150 is width/height of visible area
const MAX_SCALE = CANVAS_SIZE / (CELL_SIZE * 25); // where 10 is width/height of visible area
// length = CANVAS_SIZE / SCALE / CELL_SIZE

function scaleToBlocks(scale) {
    return Math.round(CANVAS_SIZE / (CELL_SIZE * scale));
}

function drawImage(stage, layerForImage, currentScale) {
    //const offsetX = -Math.round(stage.x() / (CELL_SIZE * currentScale));
    //const offsetY = -Math.round(stage.y() / (CELL_SIZE * currentScale));

    //console.log(offsetX, offsetY);

    var imageObj = new Image();
    imageObj.src = "./map.png";
    imageObj.onload = function () {
        var image = new Konva.Image({
            x: -1249 * CELL_SIZE,
            y: 251 * CELL_SIZE,
            image: imageObj,
            scaleX: 2,
            scaleY: 2,
        });

        layerForImage.add(image);
        layerForImage.batchDraw();
    };
}

function drawSites(stage, layerForSites, currentScale, data) {
    console.log("Draw sites: ", data.civilian_sites);
    const blocksToDraw = scaleToBlocks(currentScale);

    data.civilian_sites.forEach((item) => {
        var rect = new Konva.Rect({
            x: item.tl_coords.x * CELL_SIZE,
            y: item.tl_coords.y * CELL_SIZE,
            width: 10 * CELL_SIZE,
            height: 10 * CELL_SIZE,
            fill: item.for_sale ? "#ccc" : "#2196f3",
            details: item,
            opacity: 0.7,
            stroke: null,
            strokeWidth: 0.7,
            perfectDrawEnabled: false,
        });

        var text = new Konva.Text({
            x: (item.tl_coords.x + 2) * CELL_SIZE,
            y: (item.tl_coords.y + 4) * CELL_SIZE,
            text: item.number,
            fontSize: 8,
            fontFamily: "Segoe UI",
            fill: "#000",
            width: 35,
            listening: false,
        });

        rect.on("mouseover", (e) => {
            e.target.opacity(1);
            layerForSites.batchDraw();
            const attrs = e.target.attrs;
            document.getElementById("object-data").innerHTML = `<h4>Owner:</h4>
            <span>${attrs.details.owner}</span>
            <h4>Area size: </h4>
            <span>${attrs.width / 2}x${attrs.height / 2} (${
                (attrs.width * attrs.height) / 2
            } m2)</span>
            <h4>Coordinates (Top Left Angle): </h4>
            <span><b>X: </b>${attrs.details.tl_coords.x} <b>Y: </b>${
                attrs.details.tl_coords.y
            }</span>`;
        });

        rect.on("mouseout", (e) => {
            e.target.opacity(0.7);
            layerForSites.batchDraw();
        });

        layerForSites.add(rect, text);
    });

    data.admin_sites.forEach((item) => {
        var rect = new Konva.Rect({
            x: item.tla_coords.x * CELL_SIZE,
            y: item.tla_coords.y * CELL_SIZE,
            width: item.width * CELL_SIZE,
            height: item.height * CELL_SIZE,
            fill: item.color,
            details: item,
            opacity: 0.7,
            stroke: "black",
            strokeWidth: 0.4,
        });

        var text = new Konva.Text({
            x: (item.tla_coords.x + item.width / 2 - 6) * CELL_SIZE,
            y: (item.tla_coords.y + item.height / 2 - 6) * CELL_SIZE,
            text: item.name,
            fontSize: 8,
            fontFamily: "Segoe UI",
            fill: "#000",
            width: 30,
        });

        rect.on("mouseover", (e) => {
            e.target.opacity(1);
            layerForSites.draw();
        });

        rect.on("mouseout", (e) => {
            e.target.opacity(0.7);
            layerForSites.draw();
        });

        layerForSites.add(rect, text);
    });
}

function drawVisibleGrid(stage, layerForGrid, currentScale) {
    const blocksToDraw = scaleToBlocks(currentScale); //* 3;

    const offsetX = -Math.round(stage.x() / (CELL_SIZE * currentScale)); //- blocksToDraw / 3;
    const offsetY = -Math.round(stage.y() / (CELL_SIZE * currentScale)); //- blocksToDraw / 3;

    for (var block = 0; block < blocksToDraw; ++block) {
        var x1 = (offsetX + block) * CELL_SIZE;
        var y1 = (offsetY + 0) * CELL_SIZE;
        var x2 = (offsetX + 0) * CELL_SIZE;
        var y2 = (offsetY + block) * CELL_SIZE;

        var verticalLine = new Konva.Line({
            points: [x1, y1, x1, blocksToDraw * CELL_SIZE + y1],
            stroke: "black",
            strokeWidth: 0.1,
            opacity: 0.3,
            perfectDrawEnabled: false,
        });

        var horizontalLine = new Konva.Line({
            points: [x2, y2, blocksToDraw * CELL_SIZE + x2, y2],
            stroke: "black",
            strokeWidth: 0.1,
            opacity: 0.3,
            perfectDrawEnabled: false,
        });

        layerForGrid.add(verticalLine, horizontalLine);
    }
}

function moveToPoint(stage, x, y) {
    const offsetToCenterX = CANVAS_SIZE / stage.scaleX() / CELL_SIZE / 2;
    const offsetToCenterY = CANVAS_SIZE / stage.scaleY() / CELL_SIZE / 2;
    stage.to({
        x: (-x + offsetToCenterX) * stage.scaleX() * CELL_SIZE,
        y: (-y + offsetToCenterY) * stage.scaleY() * CELL_SIZE,
        duration: 0.2,
    });
}

function main(data) {
    var currentScale = DEFAULT_SCALE;

    const stage = new Konva.Stage({
        container: "container",
        width: CANVAS_SIZE,
        height: CANVAS_SIZE,
        draggable: true,
        dragBoundFunc: function (pos) {
            const blocksToDraw = scaleToBlocks(currentScale);
            var x = -Math.floor(pos.x / (CELL_SIZE * currentScale));
            var y = -Math.floor(pos.y / (CELL_SIZE * currentScale));
            //console.log(y, x);
            let newX = pos.x;
            let newY = pos.y;
            if (x < -1249) {
                console.log("left");
                newX = 1249 * stage.scaleX() * CELL_SIZE;
            }
            if (x + blocksToDraw > -750) {
                console.log("right");
                newX = -(-750 - blocksToDraw) * currentScale * CELL_SIZE;
                console.log(newX, -750 - blocksToDraw);
            }
            if (y < 251) {
                console.log("top");
                newY = -251 * stage.scaleY() * CELL_SIZE;
            }
            if (y + blocksToDraw > 750) {
                console.log("bot");
                newY = -(750 - blocksToDraw) * currentScale * CELL_SIZE;
            }

            return {
                x: newX,
                y: newY,
            };
        },
        scaleX: DEFAULT_SCALE,
        scaleY: DEFAULT_SCALE,
    });

    let layerForGrid = new Konva.Layer({
        listening: false,
    });
    let layerForSites = new Konva.Layer();
    let layerForImage = new Konva.Layer({
        listening: false,
    });

    stage.add(layerForSites, layerForGrid, layerForImage);

    layerForImage.setZIndex(0);
    layerForGrid.setZIndex(1);
    layerForSites.setZIndex(2);

    stage.position({
        x: 1054 * stage.scaleX() * CELL_SIZE + CANVAS_SIZE / 2,
        y: -509 * stage.scaleY() * CELL_SIZE + CANVAS_SIZE / 2,
    });

    drawImage(stage, layerForImage, stage.scaleX());
    drawVisibleGrid(stage, layerForGrid, stage.scaleX());
    drawSites(stage, layerForSites, currentScale, data);
    layerForGrid.draw();
    layerForSites.draw();

    stage.on("wheel", (e) => {
        console.log("ScaleX: ", stage.scaleX());
        e.evt.preventDefault();

        var oldScale = stage.scaleX();
        var pointer = stage.getPointerPosition();

        var newScale =
            e.evt.deltaY > 0 ? oldScale * SCALE_BY : oldScale / SCALE_BY;

        var mousePointTo = {
            x: (pointer.x - stage.x()) / oldScale,
            y: (pointer.y - stage.y()) / oldScale,
        };

        if (newScale > MAX_SCALE || newScale < MIN_SCALE) return;

        currentScale = newScale;

        stage.scale({ x: currentScale, y: currentScale });

        var newPos = {
            x: pointer.x - mousePointTo.x * newScale,
            y: pointer.y - mousePointTo.y * newScale,
        };
        stage.position(newPos);

        layerForGrid.destroyChildren();
        if (currentScale >= 2.2) {
            drawVisibleGrid(stage, layerForGrid, currentScale);
            layerForGrid.batchDraw();
        }

        // layerForSites.destroyChildren();
        // drawSites(stage, layerForSites, currentScale, data);
        // layerForSites.batchDraw();

        // layerForImage.destroyChildren();
        // drawImage(stage, layerForImage, currentScale);

        stage.batchDraw();
    });

    stage.on("dragend", (e) => {
        console.log("dragend");
        layerForGrid.destroyChildren();
        if (currentScale >= 2.2) {
            drawVisibleGrid(stage, layerForGrid, currentScale);
            layerForGrid.batchDraw();
        }
    });

    stage.on("click", (e) => {
        console.log(stage.x(), stage.y());
    });

    stage.on("mousemove", (e) => {
        var coord = stage.getPointerPosition();

        const offsetX = -stage.x() / (CELL_SIZE * currentScale);
        const offsetY = -stage.y() / (CELL_SIZE * currentScale);

        var x = Math.floor(coord.x / (CELL_SIZE * currentScale) + offsetX);
        var y = Math.floor(coord.y / (CELL_SIZE * currentScale) + offsetY);

        document.getElementById(
            "pointer-position"
        ).innerHTML = `X: ${x}; Y: ${y}`;
    });
}

async function getDataToStart() {
    try {
        const respons = await fetch("/regions/get-regions", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        const data = await respons.json();
        console.log(data);
        main(data);
    } catch (error) {
        console.log(error);
    }
}

getDataToStart();

// Konva.Image.fromURL("./map.png", function (darthNode) {
//     darthNode.setAttrs({
//         x: offsetX * CELL_SIZE,
//         y: offsetY * CELL_SIZE,
//         scaleX: 2,
//         scaleY: 2,
//     });

//     layerForImage.add(darthNode);
//     layerForImage.batchDraw();
// });
